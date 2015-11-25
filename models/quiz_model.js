var AbstractQuiz = require('../models/abstract_quiz_model');
var Answer = require('../models/answer_model');
var S = require('../models/question_model');
var L = require('../models/question_model');
function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta:  new S.ShortQuestion('¿Capital de Italia?'),
      respuesta: new Answer(/^\s*roma\s*$/i)
    },
    {
      pregunta:  new L.LongQuestion('Cada país me distingue,porque yo lo represento,suelo estar en las alturas cara al sol y cara al viento.¿Soy una....?'),
      respuesta: new Answer(/^\s*bandera\s*$/i),
    },
    {
      pregunta: new  S.ShortQuestion('¿Cuál es la salida de typeof null?(in lower case, testing strin input)'),
      respuesta: new Answer("object")
    },
    {
      pregunta: new S.ShortQuestion('Si hago kuak,nado,vuela,tiene plumas,¿ soy un ...?'),
      respuesta: new Answer(/^\s*pato\s*$/i)
    },
    {
      pregunta:  new S.ShortQuestion('When I see a bird that walks like a duck and swims like a duck and quacks like a duck, ¿May i say it is a duck?(true or false, in lower case, testing strin input)'),
      respuesta: new Answer("true")
    }
  );
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<5;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      //debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      //debug("n2 = "+n2);
      self.q.push(
        { pregunta:  new S.ShortQuestion('¿ '+n1+'*'+n2+"= ?"),
          respuesta:new Answer( function(x) {
            // debug("n1 = "+n1);
            // debug("n2 = "+n2);
            return (x == n1*n2);
        })
      });
    })();
  }
  // debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
