import express from 'express';
import mainController from './controllers/mainController.js';
import bookController from './controllers/bookController.js';
import searchController from './controllers/searchController.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/book', bookController.list);
router.get('/book/add', bookController.add);

router.get('/search', searchController.search);

export default router;
