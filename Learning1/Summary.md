### What is Emmet?
Emmet is a toolkit for web developers that helps in writing HTML and CSS code faster. It allows developers to write shorthand syntax and expand it into complete HTML/CSS code snippets. It's often integrated into code editors and IDEs to streamline the development process.

### Difference between a Library and Framework?
- **Library**: A library is a collection of reusable code modules or functions that you can call within your own code to perform specific tasks. It doesn't impose a strict structure or architecture on your application. Examples include jQuery, Lodash, and Axios.
- **Framework**: A framework is a more comprehensive set of tools, libraries, and conventions that provide a structure for building applications. It often dictates the architecture of your application and imposes more constraints on how your code is organized. Examples include React, Angular, and Vue.js.

### What is CDN? Why do we use it?
CDN stands for Content Delivery Network. It is a network of servers distributed across various locations worldwide that delivers web content to users based on their geographical location. CDNs are used to improve the performance and reliability of web applications by reducing latency and increasing availability through caching and distributing content closer to end-users.

### Why is React known as React?
React is named "React" because it revolves around the concept of "reactive" user interfaces. It efficiently updates and renders components in response to changes in application state, providing a reactive and interactive user experience.

### What is crossorigin in script tag?
The `crossorigin` attribute in a `<script>` tag specifies how the browser should handle loading of the script when it's loaded from a different origin (domain, protocol, or port) than the current document. It is commonly used when loading scripts from a CDN to indicate whether the script should be fetched with CORS (Cross-Origin Resource Sharing) restrictions.

### What is the difference between React and ReactDOM?
- **React**: React is a JavaScript library for building user interfaces. It provides the core functionality for defining and rendering components, managing component state, and handling events.
- **ReactDOM**: ReactDOM is a package that provides DOM-specific methods that React uses to interact with the DOM. It includes methods for rendering React components into the DOM, updating the DOM to reflect component state changes, and handling events.

### What is the difference between react.development.js and react.production.js files via CDN?
- **react.development.js**: This file contains the development version of the React library. It includes additional debugging information and warnings aimed at developers. It is larger in size compared to the production version.
- **react.production.js**: This file contains the production version of the React library. It is optimized for performance and doesn't include debugging information or development-specific features. It is smaller in size compared to the development version.

### What is async and defer?
- **async**: When the `async` attribute is included in a `<script>` tag, the browser will asynchronously load the script while continuing to parse the HTML document. The script will execute as soon as it's downloaded, potentially before the document has finished parsing.
- **defer**: When the `defer` attribute is included in a `<script>` tag, the browser will defer execution of the script until after the HTML document has been fully parsed. Multiple scripts with the defer attribute will execute in the order they appear in the document. This can help improve page loading performance.