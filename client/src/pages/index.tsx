import React, { useEffect } from 'react';
import Link from 'next/link';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';
import { withLayout } from '@/layouts/Layout';

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-4">
      <h1 className="text-4xl mb-4">Welcome to Notes App</h1>
    </div>
    </>
    
  );
};

export default withLayout(Home)