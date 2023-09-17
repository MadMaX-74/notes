import express from 'express';
import { NotesController } from '../controllers/notesController';

const router = express.Router();
const notesController = new NotesController();

//CRUD
router.get('/list', notesController.getAllNotes);
router.post('/create', notesController.createNote);
router.get('/get/:id', notesController.getNoteById);
router.delete('/delete/:id', notesController.deleteNoteById);

export default router;