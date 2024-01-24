import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';
import mainController from './app/controllers/mainController.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(router);

app.use(mainController.notFound);

app.listen(port, () => {
  console.log(`Serveur sur http://localhost:${port}/`);
});
