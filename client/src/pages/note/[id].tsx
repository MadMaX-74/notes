import React from 'react';
import { useRouter } from 'next/router';

const Note: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl mb-4">Note {id}</h1>
    </div>
  );
};

export default Note;
