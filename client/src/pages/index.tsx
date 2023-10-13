import React, { useContext, useEffect, useState } from 'react';
import { withLayout } from '@/layouts/Layout';
import { AppContext } from '@/context/app.context';
import Image from "next/image";
import NoteImg from '../assets/images/note.png'
import CreateModal from '@/components/CreateModal/CreateModal';
import { fetchNotes } from '@/services/api';
import { NoteDocument } from '@/types/Note';

const Home = (): JSX.Element => {
  const { notes, loading, error } = useContext(AppContext);
  const [notesCounter, setNotesCounter] = useState<number>(notes ? notes.length : 0)
  useEffect(() => {
    if (notes) {
      setNotesCounter(notes.length)
    }
  }, [notes])
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const closeCreateModal = () => {
    setShowCreateModal(false)
  }
  const updateCounter = async () => {
    const res: any = await fetchNotes()
    setNotesCounter(res.length)
  }
  return (
    <>
      {loading && <div><span>Загрузка...</span></div>}
      {(!loading || !error)&& <div className="container mx-auto flex flex-col mt-4 relative">
        <h1 className="text-4xl mb-4 flex justify-center">Добро пожаловать в Заметки</h1>
        <div className="flex justify-center mb-3 relative">
          <Image 
          src={NoteImg}
          width={600}
          height={400}
          alt="Home image" />
          <span className="block absolute inset-1/3 text-center">Колличество заметок: <b>{notesCounter} </b></span>
        </div>
        <div className="flex justify-center mb-3">
          <button className="btn common-btn" onClick={() => setShowCreateModal(true)}>Создать заметку</button>
        </div>
        {showCreateModal && <CreateModal closeModal={closeCreateModal} updateCounter={updateCounter} />}
      </div>}
    </>
  );
};

export default withLayout(Home)