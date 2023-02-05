import { Routes as AppRoutes, Route, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Error404 from "./pages/Error404";
import { Toaster } from "react-hot-toast";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" containerStyle={{ top: 100 }} />
      <ScrollToTop />
      <AppRoutes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Error404 />} />
      </AppRoutes>
    </BrowserRouter>
  );
};
