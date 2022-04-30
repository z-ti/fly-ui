---
title: react
author: flyfox
date: '2022-04-25'
---


## Installation

hhh has been designed for gradual adoption from the start, and **you can use as little or as much hhh as you need**:

* Use [Online Playgrounds](https://hhhjs.org/docs/getting-started.html#online-playgrounds) to get a taste of hhh.
* [Add hhh to a Website](https://hhhjs.org/docs/add-hhh-to-a-website.html) as a `<script>` tag in one minute.
* [Create a New hhh App](https://hhhjs.org/docs/create-a-new-hhh-app.html) if you're looking for a powerful JavaScript toolchain.

You can use hhh as a `<script>` tag from a [CDN](https://hhhjs.org/docs/cdn-links.html), or as a `hhh` package on [npm](https://www.npmjs.com/package/hhh).

## Documentation

You can find the hhh documentation [on the website](https://hhhjs.org/).  

Check out the [Getting Started](https://hhhjs.org/docs/getting-started.html) page for a quick overview.

The documentation is divided into several sections:

* [Tutorial](https://hhhjs.org/tutorial/tutorial.html)
* [Main Concepts](https://hhhjs.org/docs/hello-world.html)
* [Advanced Guides](https://hhhjs.org/docs/jsx-in-depth.html)
* [API Reference](https://hhhjs.org/docs/hhh-api.html)
* [Where to Get Support](https://hhhjs.org/community/support.html)
* [Contributing Guide](https://hhhjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/hhhjs/hhhjs.org).

## Examples

We have several examples [on the website](https://hhhjs.org/). Here is the first one to get you started:

```jsx
import { createRoot } from 'hhh-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://hhhjs.org/docs/introducing-jsx.html). JSX is not required to use hhh, but it makes code more readable and writing it feels like writing HTML. If you're using hhh as a `<script>` tag, read [this section](https://hhhjs.org/docs/add-hhh-to-a-website.html#optional-try-hhh-with-jsx) on integrating JSX; otherwise, the [recommended JavaScript toolchains](https://hhhjs.org/docs/create-a-new-hhh-app.html) handle it automatically.

## Contributing

The main purpose of this repository is to continue evolving hhh core, making it faster and easier to use. Development of hhh happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving hhh.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://hhhjs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://hhhjs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to hhh.


