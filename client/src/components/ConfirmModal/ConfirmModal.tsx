import React, { useState } from 'react'
import style from '@/styles/ConfirmModal.module.css'
import { deleteNoteById } from '@/services/api';
import { ConfirmModalProps } from './ConfirmModal.props';

function ConfirmModal({closeModal, updateNoteList, id}: ConfirmModalProps) {
  const deleteNote = async () => {
    await deleteNoteById(id);
    updateNoteList(id);
  }


  return (
    <div className={style.confirm_modal}>
       <p>Вы уверены что хотите удалить заметку?</p>
       <div className={style.confirm_actions}>
          <button className='btn delete-btn' onClick={deleteNote}>Да</button>
          <button className='btn outline-btn' onClick={closeModal}>Нет</button>
       </div>
    </div>
  )
}

export default ConfirmModal