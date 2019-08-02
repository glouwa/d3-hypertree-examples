# d3-hypertree-examples

Before you start coding, a brief overview of [Hyperbolic Browsing](https://glouwa.github.io/d3-hypertree-examples/hyperbolictree-slides/) and the [Features of d3-hypertree](https://glouwa.github.io/d3-hypertree-examples/feature-slides/rslidy.html)
might be useful.

## Plain HTML Examples

This most simple technique shows how to create a hypertree component 
by adding the prebuilt JavaScript bundle and css to your HTML file.

The prebuilt JavaScript bundle can be downloaded [here](https://cdn.jsdelivr.net/npm/d3-hypertree@1.1.0/dist/), but it is suggested to get it by using `npm i d3-hypertree`. 

`node_modules/d3-hypertree/dist` will contain all necessary files.
The prebuilt bundle declares the global variable `hyt`, the TypeScript examples will import d3-hypertree as `hyt`, this way the Webpack example snippets work if the JavaScript bundle is used. 

Add the following lines to your page: 
```
<link  href="index-browser-light.css" rel="stylesheet">
<script src="d3-hypertree.js"></script>
```

`examples-html/` contains some demo folders using this technique:

| Example       | Code          | Demo  |
| ------------- |:-------------:| -----:|
| Minimal example, using a generated full binary tree.      | [.html](https://github.com/glouwa/d3-hypertree-examples/blob/master/examples-html/minimal-generated/index.html)    | [View](https://glouwa.github.io/d3-hypertree-examples/examples-html/minimal-generated/) |
| Inline Data example, hierarchy is defined within HTML file.   | [.html](https://github.com/glouwa/d3-hypertree-examples/blob/master/examples-html/minimal-inlinedata/index.html)   | [View](https://glouwa.github.io/d3-hypertree-examples/examples-html/minimal-inlinedata/) |
| AJAX example, loads and displays a d3-hierarchy object.          | [.html](https://github.com/glouwa/d3-hypertree-examples/blob/master/examples-html/minimal-ajax/index.html)    | [View](https://glouwa.github.io/d3-hypertree-examples/examples-html/minimal-ajax/) |
| Event examples. Shows a more complex configuration and mouse/touch event handling.        | [.html](https://github.com/glouwa/d3-hypertree-examples/blob/master/examples-html/mouse-events/index.html)    | [View](https://glouwa.github.io/d3-hypertree-examples/examples-html/mouse-events/) |


## Webpack Examples
Comming soon

## Jupyter Notebook Examples
Comming later

