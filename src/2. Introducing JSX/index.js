import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 1. You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
// In the example below, we embed the result of calling a JavaScript function, formatName(user), into an <h1> element.
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

// 2. JSX is an Expression Too
// After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// 3. Specifying Attributes with JSX
// You may use quotes to specify string literals as attributes:
const element = <div tabIndex="0"></div>;
// You may also use curly braces to embed a JavaScript expression in an attribute, If a tag is empty, you may close it immediately with />, like XML:
const element2 = <img src={user.avatarUrl} />;
// Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
// Warning: Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. For example, class becomes className in JSX, and tabindex becomes tabIndex.

// 4. Specifying Children with JSX
const element3 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// 5. JSX Prevents Injection Attacks
// By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
// It is safe to embed user input in JSX: const title = response.potentiallyMaliciousInput; This is safe:const element5 = <h1>{title}</h1>;

// 6. JSX Represents Objects
// Babel compiles JSX down to React.createElement() calls. These two examples are identical:
const element4 = <h1 className="greeting">Hello, world!</h1>;

const element5 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

// 7. React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
// These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.
// Note: this structure is simplified
const element6 = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

ReactDOM.render(getGreeting(user), document.getElementById("root"));
