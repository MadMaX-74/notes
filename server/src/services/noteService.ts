import Note, { NoteDocument }  from '../models/Note';

export class NotesService {
    //генерация id
    generateUniqueId(): string {
        return new Date().getTime().toString(36);
      }
  // Метод для получения всех заметок
  getAllNotes = async (): Promise<NoteDocument[]> => {
    const notes = await Note.find({});
    return notes;
  }

  // Метод для создания новой заметки
  createNote = async (title: string, content: string): Promise<NoteDocument> => {
    const id = this.generateUniqueId();
    const newNote = new Note({
        id,
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
  // метод удаления заметки по ID
  async deleteNoteById(id: string): Promise<NoteDocument | null> {
    const deletedNote = await Note.findByIdAndDelete(id);
      return deletedNote;
  }
}
