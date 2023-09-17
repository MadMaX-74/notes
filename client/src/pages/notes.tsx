import React from 'react';
import Link from 'next/link';
import { withLayout } from '@/layouts/Layout';

const Notes: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl mb-4">Notes</h1>
      <Link className="text-blue-500" href="/note/1">
          View Note
      </Link>
    </div>
  );
};

export default withLayout(Notes);