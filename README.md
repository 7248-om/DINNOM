# DINNOM

# 🖤 Noiré — India's First Monochrome Fashion Brand

Welcome to the official repository of **Noiré**, a minimalist fashion e-commerce web application built by Team **DINNOM** for **Web Wonders 2025**, under the theme **"Fashion"**.

---

## 🧠 Idea in Brief

Noiré delivers an immersive all black-on-black web experience combining **high-end aesthetics** with **inclusive technology**.

Unlike most flashy, color-saturated fashion sites, Noiré strips down the visual noise to highlight **form, contrast, and simplicity** — creating a **minimal yet bold identity**. It isn’t just good design; it's **design for everyone**.

The site features a **voice-enabled chatbot** to assist visually impaired users in real-time, going beyond traditional screen readers by enabling **direct voice interaction** and **audio feedback** for seamless engagement.

> Noiré is more than a website — it’s a movement challenging how premium brands design, feel, and communicate in India.

---

## 🛠 Tech Stack Used

**Frontend:**
- React.js
- Tailwind CSS
- Framer Motion (for animations)
- React Router DOM

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB + Mongoose

**Authentication:**
- Firebase Authentication (Google Sign-In)

**Storage:**
- Firebase Storage (organized by gender/category for product images)

**Tools & Libraries:**
- React Hot Toast (notifications)
- Lucide React (icons)
- Context API for state
- JWT for secure backend routes

---
## 🧩 Key Features

- 🛍️ **Category Pages** for Men & Women (Footwear, Dresses, Accessories)
- 🎥 **Watch & Shop Sliders** for interactive product previews
- 🔍 **Zoomable Product Pages** with size and quantity selection
- 🔐 **Stepper-Based Google Login** with stunning UI/UX
- 🧠 **Voice-Enabled Chatbot** with audio feedback for accessibility
- 📏 **Dynamic Size Guides** (Men & Women)
- ♿ **Accessibility Mode**: High Contrast, Font Scaling, Voice Input
- 📦 **Shipping & Order Tracking** Pages
- 🛠️ **Admin Dashboard**: Add/Edit/Delete Products, Image Uploads
- 📋 **Orders Panel** with Pagination, Sorting, Bulk Delete

---

## 📌 Real-Life Problems Tackled

- **Lack of Inclusive Design in Premium Digital Spaces**  
  Noiré directly assists visually impaired users through voice interaction and auditory feedback, integrating accessibility into the core design.

- **Over-Saturation of Colorful Interfaces**  
  While most fashion brands lean toward vibrant visuals, Noiré reclaims calm minimalism, using black-on-black to create a premium, clean aesthetic.

- **Underrepresentation of Indian Accessibility Innovation**  
  By merging advanced UI/UX with assistive tech, Noiré proves Indian developers can build inclusive, high-end platforms without compromising on design.

---

## 🧭 User Flow

This section outlines the typical journey a user takes through the Noiré experience — from browsing to checkout.

### 🏠 1. Landing Page

- Bold, visual-first cover with high-resolution **image or video**
- Scroll-based content reveal:
  - ✨ **Moodboard Grid Section** (4x visual grid with hover effects)
  - 🎥 **Stories Section** (short-form, swipeable video reels)
  - 🧍 **Shop by Category** — Men / Women / Kids
  - 🌙 **Theme Toggle** — Light / Dark modes

### 👤 2. User Authentication

- Click **Login / Signup**
- Clean form UI with:
  - 🎇 Animated particles background
  - 🎴 Card tilt effect on hover
- Choose from:
  - 📧 Email & Password
  - 🔐 Google Sign-In (via Firebase)
- Redirect to homepage with **personalized feed**

### 🛒 3. Product Browsing & Discovery

- Sidebar Navigation with Tabs:
  - Men / Women / Kids
  - Subcategories (Shirts, Bottoms, Footwear, Accessories)
- 🖼️ Product Grid View with bounce-card hover animation
- 📝 Product Details Page:
  - Multiple images
  - Price, Description, Tags
  - Size selection, Quantity control
  - ➕ Add to Cart / ❤️ Wishlist


### 🎯 4. Outfit Generator (Smart Feature)

- Select a **Mood**: Minimal / Bold / Chill / Party
- Apply **Budget Filter**
- Click **"Generate Look"**
- 🔮 AI suggests a curated outfit based on preferences
- 🛍️ Option to add full look directly to cart

### ❤️ 5. Wishlist & Cart

- Add/remove items to wishlist
- Preview cart in header + full-page cart view
- Dynamic cart updates
- 🧾 Checkout button activates when items are present

### 💳 6. Checkout Process

- Input **Shipping Details**
- Select **Payment Method**
- Review & Confirm order
- 📧 Get order confirmation with transaction ID

### 📦 7. Order Tracking

- Access via **Profile > My Orders**
- Real-time order status updates:
  - ⏳ Processing
  - 📦 Packed
  - 🚚 Out for Delivery
  - ✅ Delivered

---
## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/7248-om/DINNOM.git
cd DINNOM
```
### 2. Frontend Setup
```bash
cd DINNOM
npm run dev
```
### 3. Backend Setup
```bash
cd backend
npm run dev
```
## 🔐 4. Environment Setup

Create a `.env` file inside the `server/` directory and add the following:

```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
🔧 Note: Firebase configuration is handled separately in src/firebase.js. Ensure you've added your Firebase project credentials there.
---
## 🤝 Team DINNOM

| Name               | GitHub Profile Name     |
|--------------------|-------------------------|
| Diya Satish Kumar  | DiyaMenon               |
| Nihar Mehta        | nkmehta216              |
| Om Joshi           | 7248-om                 |
| Nidhi Arora        | NidhiArora21            |

> The Noiré user journey is crafted to feel premium, intuitive, and inclusive at every stage.
