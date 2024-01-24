import express from 'express';
import mainController from './controllers/mainController.js';
import bookController from './controllers/bookController.js';
import searchController from './controllers/searchController.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/book', bookController.list);
router.get('/book/add', bookController.add);

router.get('/search', searchController.search);

router.get('/search', (req, res) =>{
const formValue = req.query.formulaireGet;
if(formValue ==="season"{
    res.redirect('/category/fruits');
})
if()
})

router.get(`/loginPage`, (req, res)==>{
    res.render(`postForm`)
})

router.post(`/login`,(req, res)==>{
    console.log(req.body)
})

export default router;
