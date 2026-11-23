import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../pages/Layout";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import HomePage from "../pages/HomePage";
import PlaceholderPage from "../pages/PlaceholderPage";
import ScrollToTop from "../components/ScrollToTop";

const StoreRoute = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default StoreRoute;
