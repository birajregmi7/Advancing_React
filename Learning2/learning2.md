### What is Dist?
Dist is the folder created when we build our app for the production purpose 
Dist contains files like App.js, index.html and other assets which inclued size optimization, minification, tree shaking-> where unused import and all will be removed

### What is .parcel-cache?
It is kind of memory storage for parcel(bundlers)

### Package.json 
React uses for congfiguration to manage dependencies 

### Devdependencies and Normal Dependencies 
Devdependencies=> only for development part

### Normal Dependencies
For our project

### Browserlist
If we write "last 2 Chrome version" it doesn't mean it will only work for Chrome BUT actually it means it will definately work on Chrome's last 2 version. It's just that somefeature might be not working for other browsers. 
Eg: Some browser doesnt' support ES6 so we need to convert our code to olderversion to do that we use polifil.
Eg: We don't have map function, we can create our own MAP function that exactly works as Map function this is known as polifil

### What convert's new code to older code??
=> Bable 
 