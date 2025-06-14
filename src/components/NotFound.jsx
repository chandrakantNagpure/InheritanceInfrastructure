const NotFound = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        The page you’re looking for doesn’t exist.
      </p>
      <a href="/" className="mt-6 text-[#ed8161] hover:text-[#c75c45] font-semibold">
        Go to Home
      </a>
    </div>
  );
  export default NotFound;