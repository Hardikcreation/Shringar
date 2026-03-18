import React from 'react';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdminLayout from './components/layout/AdminLayout';
import HomePage from './pages/client/HomePage';
import ProductListingPage from './pages/client/ProductListingPage';
import ProductDetailPage from './pages/client/ProductDetailPage';
import CartPage from './pages/client/CartPage';
import CheckoutPage from './pages/client/CheckoutPage';
import OrderConfirmationPage from './pages/client/OrderConfirmationPage';
import OrderHistoryPage from './pages/client/OrderHistoryPage';
import OrderTrackingPage from './pages/client/OrderTrackingPage';
import WishlistPage from './pages/client/WishlistPage';
import ProfilePage from './pages/client/ProfilePage';
import LoginPage from './pages/client/LoginPage';
import RegisterPage from './pages/client/RegisterPage';
import ForgotPasswordPage from './pages/client/ForgotPasswordPage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';
import HelpPage from './pages/client/HelpPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProductsPage from './pages/admin/ProductsPage';
import AddProductPage from './pages/admin/AddProductPage';
import EditProductPage from './pages/admin/EditProductPage';
import OrdersPage from './pages/admin/OrdersPage';
import OrderDetailPage from './pages/admin/OrderDetailPage';
import UsersPage from './pages/admin/UsersPage';
import CouponsPage from './pages/admin/CouponsPage';
import ReviewsPage from './pages/admin/ReviewsPage';
import InventoryPage from './pages/admin/InventoryPage';

const ClientLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-jewel-cream">
      <div className="w-full bg-jewel-dark text-gold-light text-xs md:text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-2">
          <span className="whitespace-nowrap">🚚 Free shipping above ₹599</span>
          <span className="hidden sm:inline-block">|</span>
          <span className="whitespace-nowrap">
            Use code <span className="font-semibold">JEWEL10</span> for 10% off
          </span>
        </div>
      </div>
      <Navbar />
      <main className="flex-1 page-transition">
        <Outlet key={location.pathname} />
      </main>
      <Footer />
    </div>
  );
};

const ProtectedAdminRoute = () => {
  const { isAdmin } = useAuth();
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  return <AdminLayout />;
};

const App = () => {
  return (
    <Routes>
      {/* Client routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jewellery/:category" element={<ProductListingPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route
          path="order-confirmation/:id"
          element={<OrderConfirmationPage />}
        />
        <Route path="orders" element={<OrderHistoryPage />} />
        <Route path="orders/:id" element={<OrderTrackingPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="help" element={<HelpPage />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<ProtectedAdminRoute />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/add" element={<AddProductPage />} />
        <Route path="products/edit/:id" element={<EditProductPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orders/:id" element={<OrderDetailPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="coupons" element={<CouponsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="inventory" element={<InventoryPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

