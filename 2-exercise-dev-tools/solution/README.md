# Chrome dev tools

In this exercise we added 2 bugs to the application. 
Try to find the bugs with the help of the Chrome dev tools 
without taking a look at the source code in your editor. 

1. Open up the `index.html` in Google Chrome.
2. Use the menu or the shortcuts (`F12` on Windows, `⌥⌘I` on Mac) to open the dev tools

**First bug: Hero image is to small**

- Inspect the image. To inspect you can either right click on the image and select 
  `inspect`. You can also use the icon in the top left corner of the dev tools itself 
  which will toggle dev tools into element selection mode and will highlight 
  and select any element on which you click. 

- After you inspected the element check out the styles tab on the right. Which styles are applied? Why?

- Try to use the checkboxes next to the `width` and `height` property of the `#hero-image` selector.

- Hop back to your editor. Try to fix the bug in the `styles.css`.



**Second bug: Hero title not displaying**

- Open the dev tools and go to the `sources` tab. Select the `main.js` file in the "Page"
  file browser on the left.

- Set a breakpoint in the `selectPreviousHero` and `selectNextHero` function 
  by clicking on a particular line number.

- Click on the next or previous button and step through the code using the dev tools. 
  Use the dev tools to find the bug.

- Hop back to the editor and fix the bug in the `main.js` file.

