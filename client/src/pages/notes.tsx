import React, { useContext } from 'react';
import { withLayout } from '@/layouts/Layout';
import { AppContext } from '@/context/app.context';
import { NoteDocument } from '@/types/Note';
import NoteCard from '@/components/NoteCard/NoteCard';

const Notes: React.FC = () => {
  const { notes, loading, error } = useContext(AppContext);
  return (
    <div className="block container mx-auto mt-4">
      {loading && <div><span>Загрузка...</span></div>}
      <h1 className="text-3xl text-center mb-4">Заметки</h1>
      {notes && notes.map((note: NoteDocument) => (
        <NoteCard key={note._id} id={note._id!} title={note.title} text={note.content} />
      ))}
      {error && <div className="text-lg text-red-800"><span>{error}</span></div>}
    </div>
  );
};

export default withLayout(Notes);