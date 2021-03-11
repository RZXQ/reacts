# What is a Callback?

**Simply put**: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
**More complexly put**: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
^ That’s a lot of words. Lets look at some examples to break this down a little more.
Why do we need Callbacks?
For one very important reason — JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events. Lets look at a basic example:

```javascript
function first(){
    console.log(1);
}
function second(){
    console.log(2);
}
first();
second();
```

As you would expect, the function first is executed first, and the function second is executed second — logging the following to the console:

```javascript
// 1
// 2
```

All good so far.
But what if function first contains some sort of code that can’t be executed immediately? For example, an API request where we have to send the request then wait for a response? To simulate this action, were going to use setTimeout which is a JavaScript function that calls a function after a set amount of time. We’ll delay our function for 500 milliseconds to simulate an API request. Our new code will look like this:

```javascript
function first(){
    // Simulate a code delay
    setTimeout( function(){
    console.log(1);
    }, 500 );
}
function second(){
    console.log(2);
}
first();
second();
```

It’s not important that you understand how setTimeout() works right now. All that matters is that you see we’ve moved our console.log(1); inside of our 500 millisecond delay. So what happens now when we invoke our functions?

```javascript
first();
second();
// 2
// 1
```

Even though we invoked the first() function first, we logged out the result of that function after the second() function.
It’s not that JavaScript didn’t execute our functions in the order we wanted it to, it’s instead that JavaScript didn’t wait for a response from first() before moving on to execute second().
So why show you this? Because you can’t just call one function after another and hope they execute in the right order. Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

# Create a Callback

Alright, enough talk, lets create a callback!
First, open up your Chrome Developer Console (Windows: Ctrl + Shift + J)(Mac: Cmd + Option + J) and type the following function declaration into your console:

```javascript
function doHomework(subject) {
    alert(`Starting my ${subject} homework.`);
}
```

Above, we’ve created the function doHomework . Our function takes one variable, the subject that we are working on. Call your function by typing the following into your console:

```javascript
doHomework('math');

// Alerts: Starting my math homework.
```

Now lets add in our callback — as our last parameter in the doHomework() function we can pass in callback. The callback function is then defined in the second argument of our call to doHomework().

```javascript
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
callback();
}

doHomework('math', function() {
    alert('Finished my homework');
});
```

As you’ll see, if you type the above code into your console you will get two alerts back to back: Your ‘starting homework’ alert, followed by your ‘finished homework’ alert.
But callback functions don’t always have to be defined in our function call. They can be defined elsewhere in our code like this:

```javascript
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished(){
    alert('Finished my homework');
}
doHomework('math', alertFinished);
```

This result of this example is exactly the same as the previous example, but the setup is a little different. As you can see, we’ve passed the alertFinished function definition as an argument during our doHomework() function call!