import React from 'react'
import style from '@/styles/NoteCard.module.css'
import { NoteCardProps } from './NoteCardProps.props';
import Link from 'next/link';

function NoteCard({id, title, deletingId, text}: NoteCardProps): JSX.Element {
  const handleDeleteNote = () => {
    try {
      deletingId(id)
    } catch (e) {
      console.error('Cant delete note ' + title, e)
    }
  }
  return (
    <div className={style.note_card}>
      <div className={style.note_card__content}>
        <h3><b>Название:</b>{title}</h3>
        <p className={style.note_card__text}><b>Заметка:</b>{text}</p></div>
      <div className={style.note_card__actions}>
        <Link href="/note/[id]" as={`/note/${id}`} passHref className="btn edit-btn">Изменить</Link>
        <button className="btn delete-btn ml-2" onClick={handleDeleteNote}>Удалить</button>
      </div>
    </div>
  )
}

export default NoteCard