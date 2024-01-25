import express from 'express';
import mainController from './controllers/mainController.js';
import bookController from './controllers/bookController.js';
import searchController from './controllers/searchController.js';
import quotes from './data/quotes.js';
import quizController from './controllers/quizController.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/book', bookController.list);
router.get('/book/add', bookController.add);

router.get('/search', searchController.search);

router.get('/saison', mainController.handleSeasonChoice);

router.get('/quiz/win', quizController.getWinPage);

router.get('/quiz/loose', quizController.getLoosePage);

router.post('/', quizController.handleCodeQuiz);

router.post('/quiz/marron', quizController.handleMarronQuiz);

export default router;

