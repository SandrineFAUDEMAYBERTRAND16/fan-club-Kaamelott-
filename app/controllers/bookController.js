import messages from '../data/messages.js';
import message1 from '../models/Message.js'



const bookController = {

  list: function(req, res) {
    res.render('book', { messages });
  },

  add: function(req, res) {
    const message = req.query.message?.trim();

    try {
      if(!message) {
        throw new Error('Le message ne peut être vide')
      }
      else if (message.length < 3) {
        throw new Error('Le message doit faire au moins 3 caractères')
        
      }
      else if (message.length > 500) {
        throw new Error('Le message ne peut faire plus de 500 caractères')
        
      }
      else {
        messages.push(message)
        res.redirect('/book');
      }
    } catch (error) {
      res.render('book', { 
        messages, 
        alert: error.message 
      });
    }
    
  },
  create: function(req, res) {
    try {
      const Message = newMessage(req.body.message1,);
      res.render('ok', {message1: user.message1 });
    } catch (error) {
      res.render('error', { error });
    }
  },
};
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
