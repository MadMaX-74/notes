import mongoose, { Schema, Document } from 'mongoose';

export interface NoteDocument extends Document {
  id?: string;
  title: string;
  content: string;
}

const NoteSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Note = mongoose.model<NoteDocument>('Note', NoteSchema);

export default Note;
