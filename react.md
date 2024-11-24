# [React](https://react.dev/) &middot; [![Github license](https://camo.githubusercontent.com/6581c31c16c1b13ddc2efb92e2ad69a93ddc4a92fd871ff15d401c4c6c9155a4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)](https://github.com/facebook/react/blob/main/LICENSE)
React is a JavaScript library for building user interfaces.
* **Declarative:** React makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated componnets that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [React Native](https://reactnative.dev/).

[Learn how to use React in your project.](https://react.dev/learn)

## Installation

React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need**:
* Use [Quick Start](https://react.dev/learn) to get a taste of React.
* [Add React to an Exising Project](https://react.dev/learn/add-react-to-an-existing-project) to use as little or as much React as you need.
* [Create a New React App](https://react.dev/learn/start-a-new-react-project) if you're looking for a powerfulk Java Script toolchain.

## Documentation 
you can find the React documentation [on the website.](https://react.dev/)

Check out the [Getting Started](https://react.dev/learn) page for a quick overview.

The documentation is divided into several sections:
* [Quick Start](https://react.dev/learn)
* [Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
* [Thinking in React](https://react.dev/learn/thinking-in-react)
* [Installaiton](https://react.dev/learn/installation)
* [Describing the UI](https://react.dev/learn/describing-the-ui)
* [Adding Interactivity](https://react.dev/learn/adding-interactivity)
* [Managing State](https://react.dev/learn/managing-state)
* [Advanced Guides](https://react.dev/learn/escape-hatches)
* [API Reference](https://react.dev/reference/react)
* [Where to Get Support](https://react.dev/community)
* [Countributing Guide](https://legacy.reactjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/reactjs/react.dev)

## Examples

We have several examples [on the website](https://react.dev/). Here is the first one to get you started:
```JavaScript
import { createRoot } from 'react-dom/client';

function HelloMessage({ name }) {
    return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```
This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://react.dev/learn#writing-markup-with-jsx). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving React core, making if faster and easier to use. Development of React happens in the open on Github, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [**Contributing Guide**](https://legacy.reactjs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.reactjs.org/docs/how-to-contribute.html) to learn about out development process, how to propose bugfixes and improvements, and how to build and test your changes to React.

### [**Good First Issues**](https://github.com/facebook/react/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/react/labels/good%20first%20issue) that contain bugs that have 
a relatively limited scope. This is a great place to get started.

### **License**

React is [MIT licensed](https://github.com/facebook/react/blob/main/LICENSE)