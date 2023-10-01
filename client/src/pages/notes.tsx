import React, { useContext, useEffect, useState } from 'react';
import { withLayout } from '@/layouts/Layout';
import { AppContext } from '@/context/app.context';
import { NoteDocument } from '@/types/Note';
import NoteCard from '@/components/NoteCard/NoteCard';
import ConfirmModal from '@/components/ConfirmModal/ConfirmModal';

const Notes: React.FC = () => {
  const { notes, loading, error } = useContext(AppContext);
  const [notesList, setNotesList] = useState<NoteDocument[]>(notes);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const [delId, setDelId] = useState<string>('');
  useEffect(() => {
    setNotesList(notes)
  }, [notes])
  
  const getDelId = (id: string) => {
    setDelId(s => id)
    setConfirmModal(true)
  }
  const updateNotesList = (id: string) => {
    const newNotesList = notes.filter((note :NoteDocument) => note._id !== id)
    setNotesList( prev => newNotesList)
    setConfirmModal(false)
  }
  return (
    <div className="block container mx-auto mt-4 relative">
      {loading && <div><span>Загрузка...</span></div>}
      <h1 className="text-3xl text-center mb-4">Заметки</h1>
      {notesList && notesList.map((note: NoteDocument) => (
        <NoteCard key={note._id} id={note._id!} title={note.title} text={note.content} deletingId={getDelId} />
      ))}
      {error && <div className="text-lg text-red-800"><span>{error}</span></div>}
      {confirmModal && delId && <ConfirmModal closeModal={() => setConfirmModal(false)} id={delId} updateNoteList={updateNotesList}/>}
    </div>
  );
};

export default withLayout(Notes);