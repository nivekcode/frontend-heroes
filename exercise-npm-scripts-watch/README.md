# NPM Scripts - watch script

So far we have created a `HTML` page, learned how to use the dev tools 
and how to ,manually use `TypeScript` and `Saas`. In this exercise we are going to 
automate these things with the help of `npm` scripts.

The exercise setup has now two additional files - `tsconfig.json` and `tsconfig.prod.json` files.  
Previously we ran the `tsc` command with the help of `npx` which downloads and executes package on demand. 
Because we ran the `tsc` command without any parameters, a default rule set was applied behind the scenes. 
The `tsconfig.json` file gives us the opportunity to customize Typescript compiler options to better suit our needs.

1. Let's use `npm` in our project. Open up a terminal of your choice, change the location 
   to the current exercise project folder `exercise-npm-scripts-watch/` and run the following command...

   ```
   npm init
   ```

   Answer the question in the setup wizard. In case you don't know an answer to a question 
   just press enter to proceed to the next question.

2. Great the `npm init` process created us a new `package.json` file in our project folder. 
   Open up the `package.json` and inspect its content.


## Creating a watch task for development

Currently, developing our page with `Saas` and `TypeScript` is pretty cumbersome. 
Everytime we change something in `Saas` or `TypeScript` we need to recompile. 
Wouldn't it be better if this happened automatically? 

> It would and we will make it happen!

## Creating a watch task for Saas

1. In order to be able to compile Saas we need to install `sass` first. 
   The `sass` is only used during development and not during production therefore 
   we are going to install it with the `-D` flag will add it to `devDependencies` (instead of `dependencies`).

   ```
   npm i -D sass
   ```

2. Next, let's create a new `npm` script called `watch:compile-sass`. 
   In this script we will call `sass` and compile our `SCSS` to `CSS` initially 
   and also after every change to the source `SCSS` file...
   Our newly created `watch:compile-sass` then should run `sass --watch ./styles.scss ./styles.css`.

3. Open up a terminal and type

   ```
   npm run watch:compile-saas
   ```

   We are running the previously generated npm script which will compile our `SCSS` file into a `CSS` file. 

4. Open our webpage (`index.html`) file in the browser. The styles should work properly!

5. Change a color in the `SCSS` file and save it in your editor. 

6. Refresh the webpage in the browser - what happened?

## Creating a watch task for TypeScript

1. In order to be able to compile `TypeScript` to `JavaScript` we need to install `TypeScript` first.

   ```
   npm i -D typescript
   ```

    > Remember, `Typescript` code can NOT be executed by the browser, but it is important for developer productivity and experience.
                
    Because of that, we have to compile it back to `JavaScript` which is used by the browser runtime. 
    This means TypeScript is also a dev dependency.

2. Let's create a new npm script called `watch:compile-ts`.  
   Then we fill it with the following content `tsc -w`. 
   The `-w` flag is short for `--watch` and tells `tsc` to run in watch mode.

3. Open up a new terminal window and type `npm run watch:compile-tsc`. 
   (You might need to open second terminal to run `Saas` and `TypeScript` compilations simultaneously)

4. This new process compiles our `main.ts` into a `main.js`. Note - by default `tsc` picks up configuration from the `tsconfig.json` file. 
   Open our webpage (`index.html`) file in the browser. The functionality should work properly!

5. Go back to the `main.ts` and use string concatenation to prefix the title of the hero with "I am"  
   and save it in your editor. 

6. Refresh the webpage in the browser - what happened?

## Combining the watch tasks

As we have realized, currently we have to open two terminals to run both compilations 
which is inconvenient as we usually edit both TypeScript code and the Saas styles at the same time
when developing a web application...
 
1. Saas compilation: `npm run watch:compile-saas` 
2. Typescript compilation `npm run watch:compile-tsc`.  
  
> Wouldn't it be nice to combine those two command in one command and run them in parallel ?

1. To run multiple npm scripts in parallel or sequentially we can use a nice helper tool called `npm-run-all`. 
   Let's install it!

   ```
   npm i -D npm-run-all
   ```

2. Let's create a new script called `watch`. We can now use `npm-run-all` with the `-p` (parallel) flag. 
   We need to run the scripts in parallel since both do not finish and just listen for change until stopped by the developer. 
   If we would run them sequential the second script would never be executed. 
   Since we used a consistent naming for our watch scripts we can use the `*` to run all `watch` scripts. 
   The final content of our watch script will look like: `npm-run-all -p watch:*`.

3. Stop previously running processes and run the new watch script from the terminal. `npm run watch`.

4. Open our webpage (`index.html`) file in the browser. The website should work properly!

5. Revert the previous changes in the `SCSS` and the TypeScript file and save them both using your editor. 

6. Refresh the webpage in the browser - what happened?

#### Awesome, we have created a new `watch` task that allows us to use both TypeScript and SCSS during development.
