import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NoteDocument } from '@/types/Note';
import { getNoteById } from '@/services/api';

const Note: React.FC = () => {
  const [note, setNote] = useState<NoteDocument | null>(null)
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      const noteId = Array.isArray(id) ? id[0] : id;
      getNote(noteId)
    }
  }, [id])
  const getNote = async (id: string) => {
    try {
      const res = await getNoteById(id)
    setNote(res!)
    } catch (e){
      console.error(e)
    }
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl mb-4">Note {id}</h1>
    </div>
  );
};

export default Note;
