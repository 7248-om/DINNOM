import React from 'react';

const SizeGuide = () => {
  return (
    <div className="p-6 md:p-12 font-sans text-gray-800 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Size Guide</h1>

      {/* Women Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Women - Tops</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Size</th>
                <th className="border px-4 py-2 text-left">Bust (cm)</th>
                <th className="border px-4 py-2 text-left">Waist (cm)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['XS', '76–80', '60–64'],
                ['S', '81–85', '65–69'],
                ['M', '86–90', '70–74'],
                ['L', '91–96', '75–80'],
                ['XL', '97–102', '81–86'],
              ].map(([size, bust, waist]) => (
                <tr key={size}>
                  <td className="border px-4 py-2">{size}</td>
                  <td className="border px-4 py-2">{bust}</td>
                  <td className="border px-4 py-2">{waist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Men Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Men - Bottoms</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Size</th>
                <th className="border px-4 py-2 text-left">Waist (cm)</th>
                <th className="border px-4 py-2 text-left">Inseam (cm)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['28', '71–73', '76'],
                ['30', '74–76', '78'],
                ['32', '77–81', '80'],
                ['34', '82–86', '82'],
                ['36', '87–91', '84'],
              ].map(([size, waist, inseam]) => (
                <tr key={size}>
                  <td className="border px-4 py-2">{size}</td>
                  <td className="border px-4 py-2">{waist}</td>
                  <td className="border px-4 py-2">{inseam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footwear Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Footwear (Unisex)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">EU Size</th>
                <th className="border px-4 py-2 text-left">UK</th>
                <th className="border px-4 py-2 text-left">US</th>
                <th className="border px-4 py-2 text-left">Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['36', '3', '5', '22.5'],
                ['38', '5', '7', '24.5'],
                ['40', '7', '9', '26.0'],
                ['42', '8', '10', '27.0'],
                ['44', '9', '11', '28.0'],
              ].map(([eu, uk, us, length]) => (
                <tr key={eu}>
                  <td className="border px-4 py-2">{eu}</td>
                  <td className="border px-4 py-2">{uk}</td>
                  <td className="border px-4 py-2">{us}</td>
                  <td className="border px-4 py-2">{length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-xs text-gray-600">
        <p className="mb-2"><strong>Tips:</strong> Measure your body using a tape measure while wearing fitted clothing or underwear.</p>
        <p>Still not sure? Feel free to <a href="/contact" className="underline text-blue-600">contact our support</a>.</p>
      </section>
    </div>
  );
};

export default SizeGuide;
