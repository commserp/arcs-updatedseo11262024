import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 border-r-emerald-500 border-b-blue-600 border-l-emerald-500 animate-spin" />
      <div className="absolute inset-2 rounded-full border-4 border-t-emerald-500 border-r-blue-600 border-b-emerald-500 border-l-blue-600 animate-spin-reverse" />
    </div>
  );
}