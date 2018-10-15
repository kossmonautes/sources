# I want to Vue the code

## prerequisites

- created a simple html, css and js file 
- added script vue.js in index.html
- index.js contains the start content you can find in vue.js's doc
- installed http-server with npm
- created a debug config for vs code
- put a breakpoint in the first line of src/index.js

## start debugging

> npm start
> launch debug in Vs code

## Follow up

### Seconde round

stared by reading (with an eagle eye) the code read the code (10947 lines, this will take a while)

339: available assets:
- components
- directives
- filter

345: list of lifecycle hooks
361: declare a config var
526: seems to support server side rendering

xxx: Watcher seem to be a global variable
4710: the Vue function
5010 : built in components : KeepAlive => what is that?
9833: optimize
10139: generate element

in fact Vue is a constructor, we pass it options and it does the job to render in the dom.
line 4627: the component starts it's handling to be mounted in the dom



### First round

line 4710 : we call the Vue function with an option object:
function Vue (options) { //line 4710

changing config properties is done by settings it's fields : console.log('config', Vue.config)

we pass through the initMixin function where there seem to be these concepts involved:

initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm, 'beforeCreate');
initInjections(vm); // resolve injections before data/props
initState(vm);
initProvide(vm); // resolve provide after data/props
callHook(vm, 'created');

then the $mount function is called 
    - looks for the element (queryselector)
    - not possible to mount vue on html or body => ?why?
    - check if there is a 'template' on the options => if not getOuteHtml of our element (the one with #app)
    - call a compileToFunctions function (what does that do ?)
    
so:
- I have an index file with a div that has id set to app (this is the outerHtml)
- I created this code in the js

```
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
```

how did it all bottstrapped .... 
I could leave out the var app
```
new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
```
.... need to read the doc



