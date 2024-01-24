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
      message: 'Page non trouvée',
    });
  
  showSeasonForm: (req, res)==>{
    res.render(`getForm`)
  }

  search: function (req, res) {
    console.log(req.query);
    if (req.query.season) {
      const filteredQuote = Quote.filter(element => element.includes(req.query.season));
      res.render('form', { items: filtereredQuote });
    }
    else {
      res.render('form', { items: quotes });
    }
  },
};

},
  


export default mainController;
