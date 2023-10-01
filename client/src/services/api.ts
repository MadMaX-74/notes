import fetcher from '../utils/fetcher';
import {NoteDocument} from '@/types/Note'

const URL = 'http://localhost:3001'

export const fetchNotes = async () => {
  try {
    const data: NoteDocument[] = await fetcher(`${URL}/api/notes/list`);
    if (!data) {
        return [];
    }
    console.log('Notes from server:', data);
    return data;
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
};


export const createNote = async (note: NoteDocument) => {
  try {
    const newData = { title: note.title, content: note.content };
    const data: NoteDocument = await fetcher(`${URL}/api/notes/create`, 'POST', newData);
    console.log('Note created:', data);
    return data;
  } catch (error) {
    console.error('Error creating note:', error);
  }
};
export const getNoteById = async (id: string) => {
  try {
    const data: NoteDocument = await fetcher(`${URL}/api/notes/get/${id}`, 'GET');
    console.log('Note deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};
export const deleteNote = async (id: string) => {
  try {
    const data: NoteDocument = await fetcher(`${URL}/api/notes/delete/${id}`, 'DELETE');
    console.log('Note deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

