# NPM scripts - build script

In this exercise we are going to build our application so that we could move it to a server and deliver it.
To do so, the exercise setup now contains an additional `tsconfig.prod.json` file. 
The "prod" extends the `tsconfig.json` and contains some additional configurations. 

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

The only difference is that we want to build to the `dist/` folder instead of the same folder we are currently in. 
As seen in the slides, the `dist/` folder is short for distribution and is a common naming pattern 
for the output directory that contains code after it was processed by the build process.

> In a more sophisticated project the `tsconfig.prod.json` might contain additional configurations.

## Install the current dependencies

This exercise already contains a couple of dependencies 
(see content of the `package.json` file to figure out which ones). 
To install them run `npm ci`. 

> Do you remember why we should use `npm ci` instead of `npm i` ? 



## Build SCSS - compile to CSS

Let's first start by building our `SCSS`.

1. Let's add a `build:scss` script to the npm scripts. 
   The added script will run use `sass` (already installed) using 
   `sass ./styles.scss ./dist/styles.css` instead of just compiling it in current location 
   it will compile it into the `dist/` folder.

2. Open up a terminal and run `npm run build:scss`.

3. Check out the created `dist/` folder and its content.

   

## Build TypeScript - compile to JavaScript

1. Let's add a `build:ts` script to the npm scripts. In this script we are going to use the `tsc` command 
   which is brought to us by `TypeScript`. `TypeScript` is already installed, therefore we don't have to 
   install everything. In this case we want `tsc` to pick up the `tsconfig.prod.json` configuration file 
   instead of the default `tsconfig.json` file. To do that we have to use the `--project` flag and specify 
   the path to the `tsconfig.prod.json` file.

   ```
   "tsc --project tsconfig.prod.json"
   ```

2. Open up a terminal and run `npm run build:ts`.

3. Check out the  `dist/` folder and its content.



## Copy assets and HTML

Currently, we build our `SCSS` and TypeScript files into the `dist/` folder,
but what about our `HTML` file (`index.html`) and the images in the `assets/` folder ? 
They are not processed in any way, yet... 

Luckily, we don't have to process them in any special manner, we just have to copy them over to the `dist/` folder.

1. To copy the previously mentioned files we are going to use a tool called `cpx`. 
   Again, we install it as a dev dependency using...

   ```
   npm i -D cpx
   ```

2. Let's  add new `copy:html` script to npm scripts. This script uses `cpx` to copy the `index.html` file 
   into the `dist/` folder using `cpx index.html ./dist`.

3. Next we are going to copy all the images from `assets/` folder.
   Let's add the following script `"copy:assets": "cpx ./assets/**/* ./dist/assets"` to the npm scripts.

4. As in the previous exercise, it would be very nice to group those commands together in one command. 
   What we can do is to add new `copy` command that will run both previously created copy commands. 
   > Note: Since both tasks finish there's no need to run them in parallel. 

   ```
   "copy": "npm-run-all copy:*"
   ```

5. Open up a terminal and type `npm run copy`.

6. Check out the `dist/` folder and its content.



## Put everything together - create the build task

Until now, we have created couple of npm scripts to perform various tasks: 

1. compile `SCSS` to `CSS`
2. compile `TypeScript` to `JavaScript`
3. copy `index.html` to the `dist/` folder
4. copy all files in the  `assets/` folder to the `dist/assets/` folder

In this final step of our exercise we are going to put everything together in one `build` script!

1. Let's create new `build` script in the npm scripts and use `npm-run-all` to run all the previously defined build 
   scripts and the copy task (`npm-run-all build:* copy`)
2. Open up a terminal of your choice and run `npm run build`.
3. Open the `index.html` from the `dist/` folder and see it running in the browser.

#### Great, we have created a `build` script that builds our application into a `dist/` folder. 

> This `dist` folder can now be uploaded to a server and served to our users!

In real world projects using popular frontend frameworks and libraries like Angular, React or Vue the builds 
are much more sophisticated, but the employed concept are exactly the same as show in this exercise!
