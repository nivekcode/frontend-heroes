# NPM scripts - build script

In this exercise we are going to build our application so that we could move it to a server and deliver it. To do so the exercise setup now contains an additonal `tsconfig.prod.json`.  This tsconfig extends the `tsconfig.json` and contains some additional configurations. 

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

The only difference is that we want to build to the `dist` folder instead of the same folder we are currently in. As seen in the slides, the `dist` folder is short for distribution and is a common naming pattern for the output directory that contains code after we builded it.



## Install the current dependencies

This exercise already contains a couple of dependencies. To install them run `npm ci`. Do you remember why we should use `npm ci` instead of `npm i` ? 



## Build SCSS

Let's first start by building our `SCSS`.

1. Let's add a `build:scss` script. Inside here we are going to use `saas` (already installed). `sass ./styles.scss ./dist/styles.css` instead of just compiling it we compile it into the `dist` folder.

2. Open up a terminal and run `npm run build:scss`.

3. Check out the created `dist` folder.

   

## Build TypeScript - compile to JavaScript

1. Let's add a `build:ts` script. In this script we are going to use the `tsc` command which is brought to us by `TypeScript`. `TypeScript` is already installed, therefore we don't need to install everything. In this case we want to `tsc` to pick up the `tsconfig.prod.json` configuration. To do so we use the `--project` flag.

   ```
   "tsc --project tsconfig.prod.json"
   ```

   

2. Open up a terminal and run `npm run build:ts`.

3. Check out the  `dist` folder.



# Copy assets and HTML

Currently we build our `SCSS` and TypeScript files into the `dist` folder. But what about our `HTML` file and the `assets`? They are not processed yet. Luckily we don't have to process them in any special manner, we just have to copy them over.

1. To copy things we are going to use a tool called `cpx`. Again, we install it as a dev depdency

   ```
   npm i -D cpx
   ```

2. We are going to add a `copy:html` script. This script uses `cpx` to copy the `HTML` into the `dist` folder: `cpx index.html ./dist`.

3. Next we are going to copy all `assets`. Lets add the following script: `"copy:assets": "cpx './assets/*.*' ./dist/assets"`.

4. As in the previous exercise, it would be very nice to group those commands together in one command. Therefore we are going to add a `copy` command that runs them both. Note: Since both tasks finish there's no need to run them in parallel. 

   ```
   "copy": "npm-run-all copy:*"
   ```

8. Open up a terminal an type `npm run copy`.
9. Check out the dist folder.



## Put everything together - create the build task

We created one task that builds `SCSS` to `CSS`. One that compiles `TypeScript` to `JavaScript` and another task that copies the `HTML` and all assets into the `dist` folder.

In this final exercise we are going to put everything together in one `build` script.

1. Let's create a `build` script and use `npm-run-all` to run all build scripts and the copy task (`npm-run-all build:* copy`)
2. Open up a terminal of your choice an type `npm run build`.
3. Open the `index.html` from the `dist` folder in a browser.

Great, we created a `build` script that builds our application into a `dist` folder. This `dist` folder could now be uploaded to a server. In real world projects builds are of course more sophisticated but the concept is the same.
