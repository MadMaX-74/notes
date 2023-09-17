import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import notesRoute from './routes/notesRoute';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://127.0.0.1:27017/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
const corsOptions = {
  origin: 'http://localhost:3000', // Укажите адрес клиентского приложения
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Origin, X-Requested-With, Content-Type, Accept',
  credentials: true,
  optionsSuccessStatus: 204,
};
//CORS
app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/api/notes', notesRoute);

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
