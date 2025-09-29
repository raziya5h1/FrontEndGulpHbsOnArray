import express from 'express';
import bodyparser from "body-parser";

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

// import { StartFunc as middlewarespostFilterDataFromBodyFunc } from "../Middlewares/entryFile.js";

router.use(bodyparser.json());

router.post('/:inPk', postFilterDataFromBodyFunc);

export { router };