// components/Error/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}