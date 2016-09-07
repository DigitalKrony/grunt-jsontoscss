# grunt-jsonToSass

> Convert JSON formatted files into SASS variable Maps

## Getting Started
This plugin Requires Grunt '~0.4.5'

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

``` bash
$ npm install grunt-jsonToSass --save-dev
```

After installing the plugin, enable it by adding the NPM load tast to your 'gruntfile.js'

```  bash
grunt.loadNpmTast('grunt-jsonToSass);
```

## Setting up the jsonToSass task
Also in your 'gruntfile.js', you'll need to set up a basic task to convert the JSON to readable SASS variable maps. To do so:
``` js
grunt.initConfig({
	jsonToSass: {
		task_name: {
			files: {
				src: ["example_a.json", "example_b.json"],
				dest: "_example.scss"
			}
		}
	}
});
```

When this task is added to a grunt task, it will convert a single file, or multiple, properly formatted JSON files into a single SASS file with propery formatted variable maps.
