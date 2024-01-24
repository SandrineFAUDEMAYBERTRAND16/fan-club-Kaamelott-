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

},
  
};

export default mainController;
