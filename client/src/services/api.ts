import fetcher from '../utils/fetcher';
import {NoteDocument} from '@/types/Note'

const URL = 'http://77.232.135.159:8080'

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
export const deleteNoteById = async (id: string) => {
  try {
    const data: NoteDocument = await fetcher(`${URL}/api/notes/delete/${id}`, 'DELETE');
    console.log('Note deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};
export const updateNote = async (note: NoteDocument) => {
  try {
    const updData = { id:note._id, title: note.title, content: note.content };
    const data: NoteDocument = await fetcher(`${URL}/api/notes/update`, 'PATCH', updData);
    console.log('Note updated:', data);
    return data;
  } catch (error) {
    console.error('Error update note:', error);
  }
};

