# Sea-bell: Code formatter

Sea-bell is a code formatter built with vanilla JavaScript and plain HTML5.

  - Type some unformatted code on the left
  - Click format button
  - Magic!

# Configuration

In order to use the formatter, you must configure it first. This can be done by placing a config.js file in the project root directory.
This file must contain an object called "searched_functions" formatted with key-value pairs.

For example:

const searched_functions = {
  function1: "function1(expr1, expr2)",
  function2: "function2(testExpr, expr1, expr2)",
  function3: "function3()",
};

### Development

Want to contribute? Great!

License
----

MIT
