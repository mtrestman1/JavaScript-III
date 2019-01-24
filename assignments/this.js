/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// const stuck = {
//     name: 'max',
//     concept: 'JS',
//     code: function() {
        // console.log(`${name} is having a tough time grasping ${concept}`)
//     }
// }

// stuck.code();

// Principle 2

// code example for Implicit Binding

// const stuckButTrying = {
//     name: 'max',
//     concept: 'JS',
//     code: function() {
        // console.log(`${this.name} is having a tough time grasping ${this.concept} but is slowly getting it.`)
//     }
// }

// stuckButTrying.code();

// Principle 3

// code example for New Binding

function NotSure(greeter) {
    this.greeting = 'Is This ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const max = new NotSure('Correct');

  
  max.speak();
  

// Principle 4

// code example for Explicit Binding

const confused = {
    name: 'max'
}

const skills = ['JS', 'this'];

function understand(skills) {
    console.log(`At first ${this.name} was confused about ${skills}, but ${this.name} now sort of gets it`)
}

understand.call(confused, skills);