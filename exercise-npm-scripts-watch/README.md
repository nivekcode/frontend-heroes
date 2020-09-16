# NPM Scripts

So far we have created a HTML page, learned how to use the dev tools and how to use TypeScript and Saas. In this exercise we are going to automate this things with the help of npm scripts.

The exercise setup has now two additional files. A `tsconfig.json` and a `tsconfig.prod.json`.  Previously we ran the `tsc` command. When running the `tsc` command a default rule set is applied. A `tsconfig` gives us the opportunity to apply some custom rules. We created a `tsconfig.json` that contains a set of base rules and will be used during development and a `tscongif.json` that will be used during a production build.

1. Let's use npm in our repository. Open up a terminal of your choice, change to the current directory and run the following command.

   ```
   npm init
   ```

   Answer the question in the setup wizard. In case you don't know a answer to a question just press enter to hop to the next question.

2. Great we created ourselves a `package.json`. Open up the `package.json` and inspect the content.



## Creating a watch task for development

Currently developing our page with Saas and TypeScript is pretty cumbersome. Everytime we change something in Saas or TypeScript we need to recompile. Wouldn't it be nice if this happens automatically. It would and we will do so.

## Creating a watch task for Saas

1. In order to be able to compile Saas we need to install `sass` first. `sass` is only used during development and not during production therefore we are going to install it with the `-D` flag.

   ```
   npm i -D sass
   ```

2. Next we are going to create a new `npm` script called `watch:compile-sass`. In this script we will call `sass` and compile our `SCSS` to `CSS`. To do so we use the following command `sass --watch ./styles.scss ./styles.css`.

3. Open up a terminal and type

   ```
   npm run watch:compile-saas
   ```

   This task now generates compiles our `SCSS` file into a `CSS` file. 

4. Open our webpage. The styles should work.

5. Change a color in the `SCSS` file and hit save. 

6. Refresh our webpage - what happened?

## Creating a watch task for TypeScript

1. In order to be able to compile TypeScript to JavaScript we need to install TypeScript first.

   ```
   npm i -D typescript
   ```

   Remember, Typescript doesn't exist during runtime only during build and edit time. Therefore its just a dev dependency and not a normal dependency.

2. Let's now create a new npm script called `watch:compile-ts`.  And add the following content `tsc -w`. The `-w` flag is short for `watch` and tells `tsc` to run in watch mode.

3. Open up a new terminal window and type `npm run watch:compile-tsc`.

4. This now compiles our `main.ts` into a `main.js`. Note - by default `tsc` picks up the `tsconfig.json` configuration. Open up our HTML page in a browser.

5. Go back to the `main.ts` and use string concatination to prefix the title of the hero with "I am". And hit save.

6. Refresh the page.

## Combining the watch tasks

Currently we always need to open up one terminal and run `npm run watch:compile-saas` and another one to run `npm run watch:compile-tsc`.  Wouldn't it be nice to combine those two command in one command and run them in parallel.

1. To run multiple npm scripts in parallel or sequential we use a nice helper tool called `npm-run-all`. Let's first install it.

   ```
   npm i -D npm-run-all
   ```

2. Let's create a new script called `watch`. We can now use `npm-run-all` with the `-p` (parallel) flag. We need to run the scripts in parallel since both do not finish and just listen for change. If we would run them sequential the second script would never be executed. Since we nicely named our watch scripts we can use the start to run all `watch` scripts. So the content of our watch script will look like this: `npm-run-all -p watch:*`.

3. Run the watch script from the terminal. `npm run watch`.

4. Open up a browser and check the page.

5. Revert the previous changes in the `SCSS` and the TypeScript file and hit save in both files.

6. Refresh the page.

Awesome, we created a `watch` task that allows us to use TypeScript and SCSS during development time.