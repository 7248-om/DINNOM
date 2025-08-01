import React, { useEffect, useState, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseStorage'; // adjust path as needed

// A simple, comprehensive list of categories for each gender for the form
const staticCategories = {
  Male: ['Shirts', 'Pants', 'Hoodies', 'Footwear', 'Caps & Accessories'],
  Female: ['Dresses', 'Footwear', 'Caps & Accessories', 'Shirts and Tees', 'Pants and Skirts', 'Sweatshirts'],
};

const PRODUCTS_PER_PAGE = 10;

const AdminProducts = () => {
  const [product, setProduct] = useState({
    productId: '', name: '', price: '', description: '', gender: '', category: '',
    stock: '', mainImage: '', hoverImage: '', sizes: '', tags: ''
  });

  const [mainImageFile, setMainImageFile] = useState(null);
  const [hoverImageFile, setHoverImageFile] = useState(null);

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5050/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      toast.error('Failed to fetch products');
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'gender') {
      setProduct(prev => ({ ...prev, gender: value, category: '' }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMainImageChange = (e) => {
    if (e.target.files[0]) setMainImageFile(e.target.files[0]);
  };
  const handleHoverImageChange = (e) => {
    if (e.target.files[0]) setHoverImageFile(e.target.files[0]);
  };

  const uploadImage = (file, folder) => {
    return new Promise((resolve, reject) => {
      if (!file) resolve('');

      const timestamp = Date.now();
      const storageRef = ref(storage, `${folder}/${timestamp}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Optional: Handle progress
        },
        (error) => {
          toast.error('Image upload failed');
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uploading) return;

    setUploading(true);

    try {
      const mainImageUrl = mainImageFile ? await uploadImage(mainImageFile, 'products/mainImages') : product.mainImage;
      const hoverImageUrl = hoverImageFile ? await uploadImage(hoverImageFile, 'products/hoverImages') : product.hoverImage;

      const formattedProduct = {
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
        sizes: product.sizes.split(',').map(s => s.trim()),
        tags: product.tags.split(',').map(t => t.trim()),
        mainImage: mainImageUrl,
        hoverImage: hoverImageUrl,
      };

      const url = editingId
        ? `http://localhost:5050/api/products/${editingId}`
        : 'http://localhost:5050/api/products';

      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formattedProduct),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(editingId ? 'Product updated' : 'Product added');
        setProduct({ productId: '', name: '', price: '', description: '', gender: '', category: '', stock: '', mainImage: '', hoverImage: '', sizes: '', tags: '' });
        setMainImageFile(null);
        setHoverImageFile(null);
        setEditingId(null);
        setShowModal(false);
        fetchProducts();
      } else {
        toast.error(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }

    setUploading(false);
  };

  const handleEdit = (prod) => {
    setProduct({
      ...prod,
      price: prod.price.toString(),
      stock: prod.stock.toString(),
      sizes: Array.isArray(prod.sizes) ? prod.sizes.join(', ') : '',
      tags: Array.isArray(prod.tags) ? prod.tags.join(', ') : '',
    });
    setMainImageFile(null);
    setHoverImageFile(null);
    setEditingId(prod._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5050/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        toast.success('Product deleted');
        fetchProducts();
      } else {
        toast.error('Delete failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error deleting');
    }
    setLoading(false);
  };

  const filteredProducts = products.filter(p => {
    const categoryMatch = filterCategory ? p.category === filterCategory : true;
    const genderMatch = filterGender ? p.gender === filterGender : true;
    return categoryMatch && genderMatch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
  
  // Get categories for the filter dropdown based on the selected gender
  const availableCategoriesForFilter = filterGender
    ? [...new Set(products.filter(p => p.gender === filterGender).map(p => p.category))].sort()
    : [...new Set(products.map(p => p.category))].sort();

  // Initial loading state spinner
  if (loading && !products.length) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <svg
          className="animate-spin h-10 w-10 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="ml-4 text-xl font-medium">Loading products...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-6 space-y-6">
      <Toaster position="top-right" />

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Admin Dashboard - Fashion Store</h1>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

  {/* Gender Toggle Buttons */}
  <div className="flex items-center gap-3 flex-wrap">
    <span className="font-semibold text-gray-800 text-sm">Gender:</span>

    {['Male', 'Female'].map((genderOption) => (
      <button
        key={genderOption}
        onClick={() => {
          setFilterGender(genderOption);
          setFilterCategory('');
          setCurrentPage(1);
        }}
        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
          ${
            filterGender === genderOption
              ? 'bg-blue-800 text-white border-black shadow-md shadow-black/30'
              : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
          }`}
      >
        {genderOption}
      </button>
    ))}

    <button
      onClick={() => {
        setFilterGender('');
        setFilterCategory('');
        setCurrentPage(1);
      }}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
        ${
          filterGender === ''
            ? 'bg-gray-100 text-black border-gray-400 shadow-inner'
            : 'bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black'
        }`}
    >
      Show All
    </button>
  </div>

  {/* Category Dropdown (only visible when gender is selected) */}
  {filterGender && (
    <div className="flex items-center gap-2 w-full sm:w-auto">
      <label className="font-semibold text-gray-800 text-sm">Category:</label>
      <select
        value={filterCategory}
        onChange={(e) => {
          setFilterCategory(e.target.value);
          setCurrentPage(1);
        }}
        className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
      >
        <option value="">All</option>
        {staticCategories[filterGender].map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )}

  {/* Add Product Button */}
  <div className="w-full sm:w-auto">
    <button
      onClick={() => {
        setShowModal(true);
        setProduct({
          productId: '', name: '', price: '', description: '',
          gender: '', category: '', stock: '',
          mainImage: '', hoverImage: '', sizes: '', tags: '',
        });
        setMainImageFile(null);
        setHoverImageFile(null);
        setEditingId(null);
      }}
      className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-900 transition-all w-full sm:w-auto mt-2 sm:mt-0"
    >
      + Add Product
    </button>
  </div>
</div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl relative max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => { setShowModal(false); setEditingId(null); }}
              className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
            >✕</button>
            <h2 className="text-2xl font-semibold mb-6">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="font-medium mb-1">Name</span>
                <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className="border p-2 rounded-lg" required />
              </label>

              <label className="flex flex-col">
                <span className="font-medium mb-1">Price (₹)</span>
                <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded-lg" required />
              </label>
              
              <label className="flex flex-col">
                <span className="font-medium mb-1">Stock</span>
                <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" className="border p-2 rounded-lg" required />
              </label>
              
              <label className="flex flex-col">
                <span className="font-medium mb-1">Sizes (comma-separated)</span>
                <input name="sizes" value={product.sizes} onChange={handleChange} placeholder="S, M, L, XL" className="border p-2 rounded-lg" required />
              </label>

              <label className="flex flex-col">
                <span className="font-medium mb-1">Tags (comma-separated)</span>
                <input name="tags" value={product.tags} onChange={handleChange} placeholder="e.g., trending, new-arrival" className="border p-2 rounded-lg" required />
              </label>

              <label className="flex flex-col">
                <span className="font-medium mb-1">Gender</span>
                <select name="gender" value={product.gender} onChange={handleChange} className="border p-2 rounded-lg" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>

              <label className="flex flex-col">
                <span className="font-medium mb-1">Category</span>
                <select 
                  name="category" 
                  value={product.category} 
                  onChange={handleChange} 
                  className="border p-2 rounded-lg" 
                  required 
                  disabled={!product.gender}
                >
                  <option value="">{product.gender ? 'Select Category' : 'Select Gender First'}</option>
                  {product.gender && staticCategories[product.gender]?.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
              </label>

              <div className="flex flex-col border p-4 rounded-lg">
                <label className="font-medium mb-2">Main Image</label>
                <input type="file" accept="image/*" onChange={handleMainImageChange} />
                <div className="h-24 w-24 mt-2 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
                  {(mainImageFile || product.mainImage) ? (
                    <img
                      src={mainImageFile ? URL.createObjectURL(mainImageFile) : product.mainImage}
                      alt="Main Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs text-center p-1">No image selected</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col border p-4 rounded-lg">
                <label className="font-medium mb-2">Hover Image (Optional)</label>
                <input type="file" accept="image/*" onChange={handleHoverImageChange} />
                <div className="h-24 w-24 mt-2 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
                  {(hoverImageFile || product.hoverImage) ? (
                    <img
                      src={hoverImageFile ? URL.createObjectURL(hoverImageFile) : product.hoverImage}
                      alt="Hover Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs text-center p-1">No image selected</span>
                  )}
                </div>
              </div>

              <label className="flex flex-col md:col-span-2">
                <span className="font-medium mb-1">Description</span>
                <textarea name="description" value={product.description} onChange={handleChange} placeholder="Product Description" className="border p-2 rounded-lg" rows={3} required />
              </label>

              <button
                type="submit"
                disabled={uploading}
                className="bg-black hover:bg-gray-900 transition text-white py-2 px-4 rounded-lg col-span-full disabled:bg-gray-400"
              >
                {uploading ? 'Uploading Images...' : editingId ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Product List</h2>
        {loading ? (
          <p className="text-gray-600 text-center py-10">Loading...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-gray-600 text-center py-10">No products found matching your filters.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((prod, idx) => (
                  <tr key={prod._id} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}>
                    <td className="px-4 py-2">
                      <img src={prod.mainImage} alt={prod.name} className="h-16 w-16 object-cover rounded-md" />
                    </td>
                    <td className="px-4 py-2 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap" title={prod.name}>
                      {prod.name}
                    </td>
                    <td className="px-4 py-2">{prod.category}</td>
                    <td className="px-4 py-2 font-medium">₹{prod.price}</td>
                    <td className="px-4 py-2 flex gap-3 items-center justify-center">
                      <button onClick={() => handleEdit(prod)} className="text-blue-600 hover:scale-110 text-xl transition-transform" title="Edit Product">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(prod._id)} className="text-red-600 hover:scale-110 text-xl transition-transform" title="Delete Product">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded text-sm ${currentPage === 1 ? 'border border-gray-300 text-gray-400 cursor-not-allowed' : 'border border-black hover:bg-black hover:text-white transition'}`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded text-sm ${currentPage === idx + 1 ? 'bg-black text-white' : 'border border-black hover:bg-black hover:text-white transition'}`}
              aria-current={currentPage === idx + 1 ? 'page' : undefined}
              aria-label={`Go to page ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded text-sm ${currentPage === totalPages ? 'border border-gray-300 text-gray-400 cursor-not-allowed' : 'border border-black hover:bg-black hover:text-white transition'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;