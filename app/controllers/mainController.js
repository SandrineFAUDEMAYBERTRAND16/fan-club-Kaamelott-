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

  search: function (req, res) {
    console.log(req.query);
    if (req.query.season) {
      const filteredQuote = Quote.filter(element => element.season==(req.query.season));
      res.render('home', { quotes: filteredQuote });
    }
    else {
      res.render('home', { quotes: quotes });
    }
  },
}

  


export default mainController;
