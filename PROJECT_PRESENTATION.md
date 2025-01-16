Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

## Deployment

To deploy this project run????

````bash
  npm run deploy
```??????

Initialise a node project
npm init -y

Download Vitest
Vitest is a third party package to help write tests. Since it's only needed during development/testing, install it as a dev dependency (rather than a regular dependency).
If you're stuck on how to install it, search online for their documentation and try to find a "getting started" guide.


cd into the project

Why: If you don't cd into the subfolder first, then by default you'll install NPM packages to your current working directory, which probably isn't the right place.
Install Vitest as a dev dependency


After installing Vitest, check if you can run it.

Why: Running Vitest, even without tests written yet, verifies that it is installed correctly and ready for you to start writing actual tests. Since you don't currently have any tests, you'd expect at this stage for the terminal to display something like "no tests found" or anything else that lets you know that Vitest ran.
If you're stuck on how to run/execute Vitest, search online for their documentation.
npm install -D vitest

"devDependencies": {
"vitest": "^latest_version"
}

"node" : "module"?
You can now use Vitest in your project via npx vitest
````
