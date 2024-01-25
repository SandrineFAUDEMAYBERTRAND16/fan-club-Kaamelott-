import messages from '../data/messages.js';
import Message from '../models/Message.js';

const bookController = {

  list: function(req, res) {
    res.render('book', { messages });
  },

  add: function(req, res) {
    const message = req.query.message?.trim();

    try {
    
      const validatedMessage = new Message(message);
     
        messages.push(validatedMessage.value)
        res.redirect('/book');
  
    } catch (error) {
      res.render('book', { 
        messages, 
        alert: error.message 
      });
    }
    
  },
  
};

export default bookController;

export default bookController;
//   add: function(req, res) {..........}
    //pareil que
    /* if (!message) {
      res.render('book', { 
        messages, 
        alert: 'Le message ne peut être vide', 
      });
    }
    else if (message.length < 3) {
      res.render('book', { 
        messages, 
        alert: 'Le message doit faire au moins 3 caractères', 
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
  
};*/
