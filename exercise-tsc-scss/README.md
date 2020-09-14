# TypeScript and Saas

## Saas

Let's start by converting our CSS to SCSS.

1. Rename the `styles.css` to `styles.scss`

2. Follow the `TODO` items in the `styles.scss`.

3. Maybe you noticed that we broke the application. That's because SCSS doesn't run in the browser. To fix it we need to compile it to CSS. To do so we are going to use a preprocessor. Open up a terminal of your choice and navigate to the current directory and type the following.

   ```
   npx sass styles.scss styles.css
   ```

   >Don't worry if this command is new to you - we will explore this in the next section

4. Executing the previous command adds a `styles.css` files. Note: Some editors don't display this file indvidually, someties an arrow appears next to the `styles.scss` that allows you to expand and see the `styles.css`. Check out the generated `styles.css` file.
5. Check out the showcase which now works again because he references the generated `styles.css` file. 



## TypeScript

Let's take advantage and Tpyes. Let's convert our project to TypeScript.

1. Rename our `main.js` file to `main.ts`.

2. Follow the `TODO ` items in the `main.ts`.

3. Again, we broke our application. Remember, TypeScript doesn't run in the browser but JavaScript does. Similar to SCSS we need to Compile our TypeScript to JavaScript. To do so, we again open up a terminal of ourr choice and change to the current directory.

4. First we need to make sure that you have the latest version of TypeScript installed

   ```
   npm i -g typescript
   ```

5. Once we installed TypeScript we can run `tsc` to compile our TypeScript file to JavaScript. 

   ```
   npx tsc main.ts
   ```

6. This command generates a `main.js`. Note: Some editors don't display this file indvidually, someties an arrow appears next to the `main.ts` that allows you to expand and see the `main.js`. Check out the content of the `main.js`. How does it look like? What happened to our `const` statements?

7. Check out the showcase which now works again because he references the generated `main.js` file. 

