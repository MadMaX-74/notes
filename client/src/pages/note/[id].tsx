import React, { useEffect, useId, useState } from 'react';
import { useRouter } from 'next/router';
import { NoteDocument } from '@/types/Note';
import { getNoteById } from '@/services/api';
import styles from '@/styles/Note.module.css'

const Note: React.FC = ({...props}): JSX.Element => {
  const [note, setNote] = useState<NoteDocument>({
    title: '',
    content: ''
  })
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
      const res: any = await getNoteById(id)
      res ? setNote(res?.note) : null
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={styles.note} {...props}>
      {note && <div className={styles.note_content}>
        <span>Заголовок:</span>
        <input className={styles.input}
          type='text' value={note?.title || ''}
          onChange={(e) => setNote({ ...note, title: e.target.value })} />
        <span>Текст:</span>
        <textarea className={styles.textarea}
          name="content"
          id='content'
          maxLength={250}
          value={note?.content || ''}
          onChange={(e) => setNote(prevValue => ({ ...prevValue, content: e.target.value }))}></textarea>
        <button className='btn common-btn' onClick={() => console.log(note)}>Сохранить</button>
      </div>}
      {!note && <div>No Data</div>}
    </div>
  );
};

export default Note;
