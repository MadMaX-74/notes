import mongoose, { Schema, Document } from 'mongoose';

export interface NoteDocument extends Document {
  _id?: string;
  title: string;
  content: string;
}

const NoteSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Note = mongoose.model<NoteDocument>('Note', NoteSchema);

export default Note;
