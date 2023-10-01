import React, { useState } from 'react'
import style from '@/styles/NoteCard.module.css'
import { NoteCardProps } from './NoteCardProps.props';
import { deleteNote, getNoteById } from '@/services/api';

function NoteCard({id, title, text}: NoteCardProps): JSX.Element {
  const handleDeleteNote = async () => {
    try {
      await deleteNote(id)
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
        <button className="btn edit-btn" onClick={async () => await getNoteById(id) }>Изменить</button>
        <button className="btn delete-btn ml-2" onClick={handleDeleteNote}>Удалить</button>
      </div>
    </div>
  )
}

export default NoteCard