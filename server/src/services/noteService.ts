import Note, { NoteDocument }  from '../models/Note';

export class NotesService {
  // Метод для получения всех заметок
  getAllNotes = async (): Promise<NoteDocument[]> => {
    const notes = await Note.find({});
    return notes;
  }

  // Метод для создания новой заметки
  createNote = async (title: string, content: string): Promise<NoteDocument> => {
    const newNote = new Note({
        title,
        content,
      });
    await newNote.save();
    return newNote;
  }

  // Метод для получения заметки по ID
  getNoteById = async (id: string): Promise<NoteDocument | null> => {
    const note = await Note.findById(id);
    return note;
  }
  deletedNote = async (id: string) => {
    const delNote = await Note.findByIdAndDelete(id);
    return delNote;
  }
  // метод изменения заметки по ID
  updateNoteById = async (upd: NoteDocument): Promise<NoteDocument | null> => {
    const updateNote = await Note.findByIdAndUpdate(upd._id, upd)
    return updateNote;
  }
}
