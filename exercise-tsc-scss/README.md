# TypeScript and Saas

In this exercise we are converting our `CSS` to `SCSS` and our `JavaScript` to  `TypeScript`. 
We are going to learn what is needed to convert them and what are the benefits. 
Remember that both technologies only exist during development time to improve developer 
experience and productivity, but they are *never** used directly in runtime. 

> Because of this we need to compile them back to `CSS` and `JavaScript` to be able to run them in browsers.

## Saas

Let's start by converting our `SCSS` to `CSS`.

1. Rename the `styles.css` to `styles.scss`.

2. Follow the `TODO` items in the `styles.scss`.

3. Maybe you noticed that we broke the application. If you run the `index.html` at this point it will not work. That's because `SCSS` doesn't run in the browser. To fix it we need to compile it to `CSS`. To do so we are going to use a preprocessor. Open up a terminal of your choice and navigate to the current directory and type the following.

   ```
   npx sass styles.scss styles.css
   ```

   >Don't worry if this command is new to you - we will explore this in the next section

4. Executing the previous command adds a `styles.css` files. Note: Some editors don't display this file indvidually, someties an arrow appears next to the `styles.scss` that allows you to expand and see the `styles.css`. Check out the generated `styles.css` file.

5. Refresh the `HTML` page and check out the showcase which now works again because he references the generated `styles.css` file. 

   

   Great - we successfully converted our `SCSS` to `CSS` and compiled it back to `CSS`.



## TypeScript

## Compile TypeScript to JavaScript

Let's take advantage and Tpyes. Let's convert our project to `TypeScript`.

1. Rename our `main.js` file to `main.ts`.

2. Follow the `TODO ` items in the `main.ts`.

3. Again, we broke our application. Remember, `TypeScript` doesn't run in the browser but `JavaScript` does. Similar to `SCSS` we need to Compile our `TypeScript` to `JavaScript`. To do so, we open up a terminal of our choice and change to the current directory.

4. Here we use `npx` to run `tsc` to compile our `TypeScript` file to `JavaScript`. 

   ```
   npx tsc main.ts
   ```

5. This command generates a `main.js`. Note: Some editors don't display this file indvidually, someties an arrow appears next to the `main.ts` that allows you to expand and see the `main.js`. Check out the content of the `main.js`. How does it look like? What happened to our `const` statements?

6. Check out the showcase which now works again because he references the generated `main.js` file. 

   

   Great - we successfully converted our `JavaScript ` to `TypeScript` and compiled it back to `JavaScript`.





#### Footnotes

  * there is a pure Typescript runtime called [deno](https://deno.land/) but for most purposes and in foreseeable 
    future we're always going to compile Typescript into JavaScript to run it in the browser (or node.js)
