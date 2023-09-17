import { NextFunction, Request, Response } from 'express';
import { NotesService } from '../services/noteService';


export class NotesController {
  private notesService: NotesService;

  constructor() {
    this.notesService = new NotesService();
  }

  // Обработка запроса для получения всех заметок
  getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notes = await this.notesService.getAllNotes();
      res.status(200).json({ notes });
    } catch (error) {
      next(error);
    }
  }

  // Обработка запроса для создания новой заметки
  createNote = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, content } = req.body;
      const newNote = await this.notesService.createNote(title, content);
      res.status(201).json({ newNote });
    } catch (error) {
      next(error);
    }
  }

  // Обработка запроса для получения заметки по ID
  getNoteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const note = await this.notesService.getNoteById(id);
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.status(200).json({ note });
    } catch (error) {
      next(error);
    }
  }
  
  //Обработка запроса для удаления заметки по ID 
  async deleteNoteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const deletedNote = await this.notesService.deleteNoteById(id);

      if (!deletedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }

      res.status(204).json(deletedNote);
    } catch (error) {
      next(error);
    }
  }
}

export default NotesController