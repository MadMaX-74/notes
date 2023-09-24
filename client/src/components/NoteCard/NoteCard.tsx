import React, { useState } from 'react'
import style from '@/styles/NoteCard.module.css'
import { NoteCardProps } from './NoteCardProps.props';

function CreateModal({title, text}: NoteCardProps): JSX.Element {
    
  return (
    <div className={style.note_card}>
      <div className={style.note_card__content}>
        <h3><b>Название:</b>{title}</h3>
        <p className={style.note_card__text}><b>Заметка:</b>{text}</p></div>
      <div className={style.note_card__actions}>
        <button className="btn edit-btn">Изменить</button>
        <button className="btn delete-btn ml-2">Удалить</button>
      </div>
    </div>
  )
}

export default CreateModal