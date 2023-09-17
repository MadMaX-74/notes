import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchNotes } from '@/services/api';
import { NoteDocument } from '@/types/Note';
import { withLayout } from '@/layouts/Layout';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<NoteDocument[] | [] | undefined>([])
  const [loadingNotes, setLoading] = useState<boolean>(true)
  const [errorNotes, setNotesError] = useState<string>('')
  const getNotes = async () => {
    try {
      const data: NoteDocument[] | undefined = await fetchNotes()
      if (!data) {
        setNotesError('Notes not found')
      }
      setNotes(data)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setNotesError('Find Notes Error')
    }
  }
  useEffect(() => {
    getNotes()
  }, [])
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl mb-4">Notes</h1>
      {loadingNotes && <div>Loading....</div>}
      {notes &&  <Link className="text-blue-500" href="/note/1">
          View Note
      </Link>}
      {errorNotes && <div>{errorNotes}</div>}
    </div>
  );
};

export default withLayout(Notes);