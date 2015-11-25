/* Monkey patching Math */
Math.randomInt = function(x) {
  return Math.floor(Math.random()*x);
};

function AbstractQuiz(q) {
   this.q = q || [];
}

AbstractQuiz.prototype.randomQuestion = function() {
    var index = Math.randomInt(this.q.length);
    return this.q[index];
};

AbstractQuiz.prototype.totalQuestions = function () {
  // body...
  return this.q.length;
};

AbstractQuiz.prototype.popQuestion = function (index) {
  // body...
  return this.q[index];
};

module.exports = AbstractQuiz;
