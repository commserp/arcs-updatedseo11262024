import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ParticleBackground } from '../components/animations';
import { Link } from 'react-router-dom';

const ErrorPageNotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>404 Page Not Found | ARCS Scientific</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to ARCS Scientific's homepage."
        />
        <meta
          name="keywords"
          content="404, page not found, error, ARCS Scientific"
        />
        <meta
          property="og:title"
          content="404 Page Not Found | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Oops! The page you're looking for doesn't exist. Return to ARCS Scientific's homepage."
        />
        <link rel="canonical" href="https://www.arcsscientific.com/404" />
        <meta name="author" content="James Scott DC Institute" />
      </Helmet>

      <ParticleBackground />

      <div className="pt-20 flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-8 text-center max-w-md">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPageNotFound;
