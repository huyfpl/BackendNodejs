import express from "express";
import bodyParser from "body-parser";
import ProductRouter from "./src/routes/UserRouter/Products.js";
import logger from "./src/middleware/Logger.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import myConnection from "express-myconnection";
import mysql from "mysql2";
import RoutersUser from "./src/routes/UserRouter/RoutersUser.js";
import RouterAdmin from "./src/routes/AdminRouter/RouterAdmin.js";
import path from "path";
import expressLayout from "express-ejs-layouts";
import session from "express-session";
import { fileURLToPath } from 'url';
import associateModel from './src/models/index.js'


dotenv.config();
associateModel();

const app = express();

// View engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'src', 'views'));
console.log(path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src', 'public')));
// Database connection
app.use(myConnection(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
}, 'single'));

// Routes
// app.use('/api/v1/products', ProductRouter);

app.use('/api/v1', RoutersUser);
app.use('/', RouterAdmin);

app.listen(process.env.SERVER_PORT, process.env.HOST_NAME, () => console.log(`Server started on port ${process.env.SERVER_PORT}`));
