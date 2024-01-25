import quotes from '../data/quotes.js';

const mainController = {

  home: function(req, res) {
    const data = {
      quotes: quotes,
    };
    res.render('home', data);
  },

  notFound: function(req, res) {
    res.status(404).render('error', {
      message: 'Page non trouvée'
    })
  },
  
  showSeasonForm: function(req, res){
    res.render('getForm')
  },

  handleSeasonChoice: (req, res, next) => {
    const choixSaison = Number(req.query.choixSaison);
    const quotesList = quotes.filter(quote => quote.season === choixSaison);
    if (quotesList.length >= 1) {
      res.render('home', { quotes: quotesList })
    } else {
      next();
    }
  },

  
};
export default mainController;
