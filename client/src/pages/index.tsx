import React, { useEffect } from 'react';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl mb-4">Welcome to Notes App</h1>
      <Link href="/notes" className="text-blue-500 underline">
            Go to Notes
      </Link>
    </div>
  );
};

export default IndexPage;