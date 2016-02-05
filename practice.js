//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //a shortcut, a referent: refers to an object (The subject) in context

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //whatever is left of the dot
      //explicit binding (bind, call, apply)
      //the "new" keyword
      //the window as scope

  // 3) What is the difference between call and apply?

      //both can be called on functions
      //call: the arguments are passed in to the function as they are
      //apply: expects the second argument to be an array that it unpacks for the called function

  // 4) What does .bind do?

      //this method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called
      //sets the "this" context for that function, and then returns it


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current 
  //object's username property. *Don't use 'user' instead use the 
  //'this' keyword*

var user = {
  username: "Alex",
  email: "alex@website.com",
  getUsername: function() {
    return this.username;
  }
};


//Now, invoke the getUsername method and verify you got the 
//username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function 
//invocations function properly.

var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);



//Hint, you'll need to write a moveCar function which is added to every 
//object that is being returned from the Car function. You'll also need 
//to use the 'this' keyword properly in order to make sure you're 
//invoking moveCar on the right object (prius vs mustang).

var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
  };
};

prius.moveCar(); 
//increments prius' move property by 10. Returns the 
//new move property.
mustang.moveCar(); 
//increments mustang' move property by 10. Returns 
//the new move property.


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang 
//objects from above, use the proper syntax that will allow for you to 
//call the getYear function with the prius then the mustang objects 
//being the focal objects. *Don't add getYear as a property on both 
//objects*.

//Note(no tests)



Car.prototype.getYear = function() {
  return this.year;
};
// had to add it to the prototype for the Cars class


prius.getYear();
mustang.getYear();




//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. 
//After 5 seconds, what will the getUsername function return?


//Note(no tests)
  // undefined... "this" is tied to window (global scope)

//In the example above, what is the 'this keyword' bound to when 
//getUsername runs?

  //the window

//Fix the setTimeout invocation so that the user object will be the 
//focal object when getUsername is ran.

var boundGetUser = getMyUsername.bind(myUser);

setTimeout(boundGetUser, 5000);




