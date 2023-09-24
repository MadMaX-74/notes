import React, { useState } from 'react'
import style from '@/styles/Modal.module.css'
import Image from "next/image";
import CloseIcon from '@/assets/images/close.svg'
import { CreateModalProps } from './CreateModalProps.props';
import { createNote } from '@/services/api';

function CreateModal({closeModal, updateCounter}: CreateModalProps) {
const [title, setTitle] = useState<string>('')
const [text, setText] = useState<string>('')

const closeCreateModal = () => {
  setTitle('');
  setText('');
  closeModal();
}
const createNewNote = async () => {
  const newNote = {
    title,
    content: text
  }
  const resp: any = await createNote(newNote);
  if (resp) {
    updateCounter()
  }
  closeCreateModal()
}
    
  return (
    <div className={style.modal}>
       <div className={style.modal_content}>
        <div className="flex p-3 justify-end">
              <Image src={CloseIcon} alt="close icon" className={style.close_button} width={25} height={25} onClick={closeCreateModal} />
          </div>
          <div className="flex flex-col">
          <label className={style.inputs} htmlFor="title">
            <span>Заголовок</span>
            <input id='title' name='title' type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
          </label>
          <label className={style.inputs} htmlFor="text">
            <span>Текст</span>
            <textarea id='text' name="text" required value={text} onChange={(e) => setText(e.target.value)}/>
          </label>
          </div>
          <div className="flex justify-end p-2">
              <button className='btn common-btn' onClick={createNewNote}>Создать</button>
              <button className='btn outline-btn ml-2' onClick={closeCreateModal}>Отмена</button>
          </div>
       </div>
    </div>
  )
}

export default CreateModal