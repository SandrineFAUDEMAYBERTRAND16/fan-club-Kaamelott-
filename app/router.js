import express from 'express';
import mainController from './controllers/mainController.js';
import bookController from './controllers/bookController.js';
import searchController from './controllers/searchController.js';
import quotes from './data/quotes.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/book', bookController.list);
router.get('/book/add', bookController.add);

router.get('/search', searchController.search);

router.get('/saison', (req, res, next) => {
    const choixSaison = Number(req.query.choixSaison);
    const quotesList = quotes.filter(quote => quote.season === choixSaison);
    if(quotesList.length >= 1) {
        res.render('home', { quotes: quotesList })
    } else {
        next();
    }
});

router.get('/quiz/win', (req, res) => {
    res.render('win');
});

router.get('/quiz/loose', (req, res) => {
    res.render('loose');
});

router.post('/', (req, res) => {
    const answer = req.body.answer;
    if(answer.toLowerCase() === "le code") {
        res.redirect('/quiz/win'); //mieux protégé avec res.render
    } else {
        res.redirect('/quiz/loose'); //mieux protégé avec res.render
    }
});

export default router;









export default router;
