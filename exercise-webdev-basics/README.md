# Exercise web development basics

In this exercise we are going to create a website which displays heroes. In the end the website should look like this:

![](assets/exercise-images/goal.png)



To create this web application we are going to use the technologies we previously learned about:

- HTML
- CSS
- JavaScript



## HTML

Let's start by creating an HTML page. 

1. Create a new file called `index.html`
2. Open the HTML file in an editor of your choice
3. Create a brand new HTML page by adding the base structure. Hint: the following tags should be used `<!DOCTYPE>`, `<html>`, `<head>`,  `<body>`.
4. Make sure to add a `<title>` tag in the `<head>`
5. Add a `<main>` tag in the body. As the name indicates, the `<main>` tag is main container of our page. It will also have the background image.
6. Inside the `<main>` we are going to add a `<div>` with the `class` `hero`. This is the container that will contain the title with the name of our hero, the image of our hero and the next and previous buttons.
7. Lets next add a `<h1>` tag and add "Batman" as content. Our webpage should now display a nice title. Let's now open up our HTML page in a browser by double clicking on the `index.html` file and check out the results. We should see a title in the browser.
8. Next, we will add another container in form of a `<div>`. We will give this container a `hero-image-container` `class`. Inside this container we are going to add the two buttons and the image. So let's first add the previous button.
9. Add a `<button>` and use the following sign as text content `"<"`. We later need to style and access this button. To access it we give it a unique `id` with the value `previous-hero-btn`. Since it will receive the same style as the next button we will use a class to query both. So let's add the `change-hero-btn`class.
10. Next we are going to add an `<img>`tag (Note that the `<img>` tag can be immediately closed since it usually doesn't accept any text or other elements between the opening and closing tag). The `<img>`tag itself doesn't display anything yet. We need to add a `src` attribute. As value we let it point to  `assets/batman.jpeg` .
11. Finally we are going to add the next button. The next button is a `<button>` tag with the `id` set to `next-hero-btn`. Furthermore we use `">"` as text content and `change-hero-btn` as class.
12. Great! We created our HTML page. By now, your HTML should look like this:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Heroes page</title>
</head>
<body>
<main>
    <div class="hero">
        <h1 id="hero-title">Batman</h1>
        <div class="hero-image-container">
            <button id="previous-hero-btn" class="change-hero-btn"><</button>
            <img src="assets/batman.jpeg"/>
            <button id="next-hero-btn" class="change-hero-btn">></button>
        </div>
    </div>
</main>
</body>
</html>
```

## CSS

So far, our page has a base structure. But let's be honest, it doesn't really look that great. Let's change that by adding some Styles to it.

