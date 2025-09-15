import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';
import aiRoutes from './routes/ai.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
connect();


const app = express();

pp.use(cors({
  origin: [
    "http://localhost:5173",          // local testing
    "https://codemate.vercel.app"     // deployed frontend ka URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options("*", cors()); // preflight handle karega

app.use(express.json());app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use("/ai", aiRoutes)



app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app; 
