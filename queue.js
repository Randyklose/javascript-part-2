/*# Challenge!
As we saw in class, Object-Oriented Programming is supposed to give us a systematic way to **encapsulate** 
functionality. The two previous exercises don't explore this concept fully.
For this challenge, we will be building a **queue**. A queue is a data structure where items 
can be pushed to the end, and only taken from the beginning. It's commonly referred to as FIFO or First In,
First Out. It mimicks the real-life queues that you would have at a concert or airport.

In class, we saw that a queue can be easily created in JavaScript using an array. 
By forcing ourselves to use only the `push` and `shift` methods of arrays, we can easily create a queue. 
However, if we limit ourselves to using an array, then we can "cheat" the system and 
start calling other methods like `pop`, `unshift` or `splice` to cheat our way out of the queue system.

For this exercise, we want to build a queue using OOP principles, 
and encapsulate the array inside the queue so that it cannot be accessed directly.
Then, we will provide each queue with its own `push` and `shift` methods that will delegate to the array.

Here's one naïve way to create our queue system:

```javascript*/


//.....


/*This is great, except there's one flaw in our system. Each queue has a property called `arr` which lets us
access the queue directly. With the previous example, we can still cheat by doing
`benAndJerrysQueue.arr.unshift("person3")` and therefore adding a person at the beginning of the queue!

Ideally, what we would want is for the array driving our queue to be hidden,
**encapsulated** inside the data structure and not accessible from the outside.

Your challenge is to find a way to do this. **Refactor** the code above to make it impossible for someone 
to access the array that is backing the queue. By refactor, we mean that the Queue should behave exactly
the same way, and any code written to use the Queue appropriately should still work.

Hint: You will probably not be able to keep the methods inside the prototype.
Hint 2: Your constructor for `Queue` will have to be reworked. Everything will happen in there.
Hint 3: The array will NOT be inside the object, and will not be in its prototype.

Good luck :)*/
function Queue() {
  var array = this.arr = [];// this array should never be touched directly!!
  this.Queue.push = function(item) { this.arr.push(item); };
  this.Queue.shift = function() {return this.arr.shift(); };

}


var benAndJerrysQueue = new Queue();

// two people come in the store!
benAndJerrysQueue.push("person1");
benAndJerrysQueue.push("person2");

var nextPerson = benAndJerrysQueue.shift(); 

console.log(array);