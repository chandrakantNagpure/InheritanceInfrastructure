import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/2025/Header";
import WhatsAppButton from "./components/2025/WhatsAppButton.jsx";
import ScrollToTop from "./components/Helper/ScrollToTop";
import LoadingSpinner from "./components/Helper/LoadingSpinner"; // New loading spinner component
import NotFound from "./components/NotFound"; // New 404 page component

// Lazy-loaded route components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const ProjectDetails = lazy(() => import("./components/Project_details"));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl font-bold text-red-600">Something Went Wrong</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            An unexpected error occurred. Please try refreshing the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Header visible on all pages */}
      <Header />

      {/* Main content with semantic HTML */}
      <main>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project_details/:id" element={<ProjectDetails />} />
              {/* Fallback route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* WhatsApp button visible on all pages */}
      <WhatsAppButton />
    </Router>
  );
};

export default App;