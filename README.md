# Sea-bell: Code formatter

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[![Project Screen Shot][project-screenshot]]

Sea-bell is a code formatter built with vanilla JavaScript and plain HTML5.

  - Type some unformatted code on the left
  - Click format button
  - Magic!

# Configuration

In order to use the formatter, you must configure it first. This can be done by placing a config.js file in the project root directory.
This file must contain an object called "searched_functions" formatted with key-value pairs.

For example:
```javascript
const searched_functions = {
  function1: "function1(expr1, expr2)",
  function2: "function2(testExpr, expr1, expr2)",
  function3: "function3()",
};
```
## Contributing

Want to contribute? Great! Any contributions you make are greatly appreciated. To do so, follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourGreatFeature`)
3. Commit your Changes (`git commit -m 'Add some GreatFeature'`)
4. Push to the Branch (`git push origin feature/YourGreatFeature`)
5. Open a Pull Request

License
----
Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alvesmog/seabell-code-formatter.svg?style=flat-square
[contributors-url]: https://github.com/alvesmog/seabell-code-formatter/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/alvesmog/seabell-code-formatter.svg?style=flat-square
[issues-url]: https://github.com/alvesmog/seabell-code-formatter/issues
[license-shield]: https://img.shields.io/github/license/alvesmog/seabell-code-formatter.svg?style=flat-square
[license-url]: https://github.com/alvesmog/seabell-code-formatter/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/guilherme-augusto-alves-1057b5b1/
[project-screenshot]: images/seabell-screenshot-header.png
