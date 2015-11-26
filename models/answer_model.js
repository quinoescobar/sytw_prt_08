" use strict";
function Answer(args) {
  this.args=args;
  if (typeof this.args === "string")
  {
    return function(x) { return x === args; };
  } else if(typeof this.args=== "number")
          {
            return function(x) { return x === args; };
          }else if (this.args instanceof RegExp)
                  {
                    // var t = /^foo(bar)?$/i;
                    // alert(t instanceof RegExp);//returns true
                    // es lo mismo esto
                    // var t = /^foo(bar)?$/i;
                    // alert(t.constructor == RegExp);//returns true

                    return function(x) { return x.match(args); };
                    //Tratando de hacer duck-typing
                  }else if(this.args && this.args.constructor && this.args.call && this.args.apply)
                          {
                            return args;

                          }else if(this.args instanceof Array)
                                  {
                                    console.log("Answer:-Array "+ this.args.constructor.name);
                                    return function(x)
                                            {
                                              //si el array tiene valor falso, lo retorna
                                              if(!x)
                                                return false;
                                              //ahorrar tiempo comparando el tamaño
                                              if(this.length != x.length)
                                                return false;

                                              var aux;
                                              for(var i=0; x.length;i++)
                                              {
                                                //Dos instancias de objeto difetentes nunca seran iguales eg: {x:20} != {x:20}
                                                if(args[i] != x[i]){
                                                  return false;
                                                }
                                              }
                                              return true;

                                            };
                                    }else
                                      {
                                        return typeof this.args != 'undefined';
                                      }


}

module.exports = Answer;
