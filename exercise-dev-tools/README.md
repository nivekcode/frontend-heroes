# Chrome dev tools

In this exercise we added 2 bugs to the application. Try to solve them with the dev tools only. Don't take a look at the source code.

**First bug: Hero image is to small**

- Open the developer tools and inspect the image. To inspect you can either right click on the image and select inspect or you can use the icon in the top left corner to select an element on the page. 

- After you inspected the elment check out the styles tab on the right. Which styles are applied? Why do they win?

- Try to use the checkboxes next to the `width` and `height` property of the `#hero-image` selector.
- Fix the bug.



**Second bug: Hero title not displaying**

- Open the developer tools and go to the `Sources` tab. Select the `main.js` on the left.
- Set a breakpoint in the `selectPreviousHero` and `selectNextHero` function.

- Click on the next or previous button and step through the code using the dev tools. Try to find the bug.

- Fix the bug.