import messages from '../data/messages.js';

const bookController = {

  list: function(req, res) {
    res.render('book', { messages });
  },

  add: function(req, res) {
    const message = req.query.message?.trim();
    if (!message) {
      res.render('book', { 
        messages, 
        alert: 'Le message ne peut être vide', 
      });
    }
    else if (message.length < 3) {
      res.render('book', { 
        messages, 
        atert: 'Le message doit faire au moins 3 caractères', 
      });
    }
    else if (message.length > 500) {
      res.render('book', { 
        messages, 
        alert: 'Le message ne doit pas faire plus de 500 caractères', 
      });
    } 
    else {
      messages.push(message);
      res.redirect('/book');
    }
  },
  
};

export default bookController;