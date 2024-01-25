import quotes from "../data/quotes.js";


const searchController = {

  search: function(req, res) {
    try {
      if (typeof req.query.keywords !== 'undefined') {
        const cleanSearch = req.query.keywords.trim();
        if (req.query.keywords === '') {
          throw new Error('Veuillez saisir une recherche');
        }
        else if (cleanSearch === '') {
          throw new Error('La recherche ne peut pas contenir uniquement des espaces');
        }
        const filteredQuotes = quotes.filter(quote => quote.content.includes(cleanSearch));
        res.render('search', {
          quotes: filteredQuotes,
          search: cleanSearch,
        });
      }
      else {
        res.render('search');
      }
    }
    catch (error) {
      res.render('search', {
        alert: error.message,
      });
    }
  },
  
};

export default searchController;
