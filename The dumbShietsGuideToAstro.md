# The Dumbshiets Guide

Here we talk about Astro.

We start on an empty project with:
npm create astro@latest emporium_site

We create an empty project.

```commandline
npm create astro@latest emporium_site
```

---

By default it'll open in the `4321` port when running.

---

In the `src` directory it is mandatory to have a `pages` directory with an `index.astro`.

That is the minimum and mandatory stuff.

The routing is `file_based`, in the `pages` folder, you do see the entire structure of the navigation and folder hierarchies.

The routing system is based on the folders in the pages directory, so its **SUPER CRITICAL** to have **THAT** organized.

---

Inside, there is no need for them to specifically be `.astro` files, they can also be plain `.html` files.

Also, `markdown` files are directly supported.

If the file OR directory starts with a `_` character, Astro will ignore it in the build.

---

## For publishing

Running `npm run build` creates the static site in the `dist` folder.

In the `astro.config` is where we define things about the project.

---
Structure of the pages, a proper `astro` file.

In the `---` section, called *front matter*, it is run on compile time before all the other stuff.

It plain `typescript`. It can be user for iterating over structures and stuff.

The things in the front matter can be referenced in the body, you cant do full expressions like in `react` tho.

All that it is in the front matter is done in an `async` function, so if we want, we can call an external `API`.

We can do maps!

---

## Layouts

To avoid creating a bunch of boilerplate, `astro` can manage layouts.

That way I can have most of the page contour of a page in a single place without going out of my way to do so.

All you need to do is write a `<slot/>` tag to tell `astro` that that component can act as a wrapper.

You only need to call it by the filename.

You can pass arguments to the components by typing `Astro.props._Prop_`, and the property will be a named argument.

```astro
<Component _prop_="_something_">
    foo
</Component>
```

When using layouts and components is useful to remember that the `<style>` section that you create is scoped to the component; but the JS in a the `<script>` is not.

We can install `css` frameworks for our `styles` using an `npx` command.

Speaking of styles...

---

You can create a global css file with all the declarations.

Usually, you import it in the base layout and it stays for the rest of the pages.

We can import react components and stuff if we install the dependencies, then, we can call them
as they are; we just need to make sure to call the `client:visible` declaration in the call to the
component to make sure it hidrates the `js` in case it needs to perform any action.

---

## Deploy

To deploy on github pages, we just need to follow the instructions in the page.

