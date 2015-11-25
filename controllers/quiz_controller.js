// var Quiz = require('../models/quiz_model');
var Quiz = require('../models/quiz_model');
//var debug = require();
var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.index = function(req, res, next) {
  // debug("Yendo a  index.js:  '/'");
  res.render('index', { title: 'Quiz' });
};

/* GET quizes/question page. */
exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  // debug(req.query);
  // debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.questions = function(req, res){
  var totalPreguntas = quiz.totalQuestions();
  var preguntas = new Array(totalPreguntas);
  for(var i = 0; i < totalPreguntas; i++){
     preguntas[i] = quiz.popQuestion(i);
  }
  res.render('quizes/questions', {lista: preguntas});
};

exports.popNQuestion = function(req,res){
  var indice = req.params.ind;
  console.log("indice pasado "+ indice);
  //var pregunta = quiz.q[indice-1];
  current= quiz.popQuestion(indice - 1);
  console.log("pregunta "+ current.pregunta+"respuesta "+ current.respuesta);
  try {
    res.render('quizes/question', {pregunta: current.pregunta});
  } catch (e) {
    res.render('error', {message: "No existe esa pregunta, para el index ingresado ERRoR:  " + e});
  } finally {

  }

};
