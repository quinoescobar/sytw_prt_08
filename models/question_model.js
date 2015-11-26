" use strict";

var Question =function Question(frage) {
  // body...
  this.frage=frage;
};

var ShortQuestion=function ShortQuestion(frage) {
  // body...
  Question.call(this,frage);
  //input
  console.log("ShortQuestion"+ this.frage);
    this.vista="<input type='text' name='respuesta' placeholder='Ponga la respuesta' autofocus=''>";
  console.log("ShortQuestion"+ this.vista);
};

var LongQuestion=function LongQuestion(frage) {
  // body...
  Question.call(this,frage);
  //textarea
  console.log("LongQuestion"+ this.frage);
  this.vista="<textarea name='respuesta' rows='4' cols='50' placeholder='Ponga la respuesta' autofocus=''></textarea>";
  console.log("LongQuestion"+ this.vista);

};


Question.prototype.inputArea = function ()
{
  if (this instanceof LongQuestion)
  {
    this.vista="<input type='text' name='respuesta' placeholder='Ponga la respuesta' autofocus=''>";
  }else  if (this instanceof ShortQuestion)
  {
    this.vista="<textarea name='respuesta' rows='4' cols='50' placeholder='Ponga la respuesta' autofocus=''></textarea>";
  }
};

var SimpleChoice = function SimpleChoice(frage,optionen) {
  // body...
  Question.call(this,frage,antwort);
  this.frage=frage;
  this.optionen=optionen;

  this.vista="";
  for(var i=0;i<=antwor.size()-1;i++){
    this.opciones="";
  }

};
var MultiChoice = function MultiChoice(frage,optionen) {
  // body...
  Question.call(this,frage,antwort);
  this.frage=frage;
  this.optionen=optionen;

  this.vista="";
  for(var i=0;i<=antwor.size()-1;i++){
    this.opciones="";
  }

};

// Sólo se esta enviando el último
// module.exports = Question;
// module.exports = ShortQuestion;
// module.exports = LongQuestion;

exports.Question = Question;
exports.ShortQuestion = ShortQuestion;
exports.LongQuestion = LongQuestion;
exports.MultiChoice = MultiChoice;
exports.SimpleChoice = SimpleChoice;
// module.exports = function() {
//     console.log('Exportando ');
//
// };
