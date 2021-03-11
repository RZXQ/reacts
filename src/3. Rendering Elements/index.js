import ReactDOM from "react-dom";
// 1. Rendering an Element into the DOM
// An element describes what you want to see on the screen. Elements are what components are “made of”
// Let’s say there is a <div> somewhere in your HTML file: <div id="root"></div>, We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
// To render a React element into a root DOM node, pass both to ReactDOM.render():
//      const element = <h1>Hello, world</h1>;
//      ReactDOM.render(element, document.getElementById("root"));

// 2. Updating the Rendered Element
// React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

// It calls ReactDOM.render() every second from a setInterval() callback. Why call it callback? Because it needs to call the tick function after 1000ms
// In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets encapsulated into stateful components.
setInterval(tick, 1000);

// 3. React Only Updates What’s Necessary
// React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
// Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.