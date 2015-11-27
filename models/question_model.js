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
  //console.log("ShortQuestion"+ this.vista);
};

var LongQuestion=function LongQuestion(frage) {
  // body...
  Question.call(this,frage);
  //textarea
  console.log("LongQuestion"+ this.frage);
  this.vista="<textarea name='respuesta' rows='4' cols='50' placeholder='Ponga la respuesta' autofocus=''></textarea>";
  //console.log("LongQuestion"+ this.vista);

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
  Question.call(this,frage);
  console.log("SimpleChoice  "+ this.frage);
  this.frage=frage;
  this.optionen=optionen;
  // var fs = require('fs');
  // var templateString = fs.readFileSync('template.ejs', 'utf-8');
  var self=this;

  var ejs=require('ejs');
  ejs.renderFile('views/quizes/simpleQuestion.ejs',{optionen: this.optionen},
  function(err,result){
    if(!err)
    {
      self.vista=result;
      console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ-Deberia renderizar");
    }else {

      console.log('ERROR: Ha ocurrido algo, UPS!'+err);
    }
  });
    console.log("EJS CONTIENE ALGO   "+self.vista);
};
var MultiChoice = function MultiChoice(frage,optionen) {
  // body...
  Question.call(this,frage);
  console.log("MultiChoice  "+ this.frage);
  this.frage=frage;
  this.optionen=optionen;
  var self=this;

  var ejs=require('ejs');
  ejs.renderFile('views/quizes/multiQuestion.ejs',{optionen: this.optionen},
  function(err,result){
    if(!err)
    {
      self.vista=result;
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-Deberia renderizar");
    }else {
      // response.end('ERROR: Ha ocurrido algo, UPS!');
      console.log('ERROR: Ha ocurrido algo, UPS!  '+err);
    }
  });
  console.log("EJS CONTIENE ALGO   "+self.vista);

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
