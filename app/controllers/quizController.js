const quizController = {
    getWinPage: (req, res) => {
        res.render('win');
    },

    getLoosePage: (req, res) => {
        res.render('loose');
    },

    handleCodeQuiz: (req, res) => {
        const answer = req.body.answer;
        if(answer.toLowerCase() === "le code") {
            res.redirect('/quiz/win');
        } else {
            res.redirect('/quiz/loose');
        }
    },

    handleMarronQuiz: (req, res) => {
        if (req.body.answer.toLowerCase() === 'un marron') {
            res.redirect('/quiz/win');
          }
          else {
            res.redirect('/quiz/loose');
          }
    }
}

export default quizController;