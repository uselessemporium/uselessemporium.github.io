# 26-03-07

There are a bunch of thing s I need that I already decided that I want in order to advance the project.

The things is, I don't need everything right away.

I just need the basics first.

So... which were the basics?

## Webtoon logic

We are going to publish a webtoon, so the pages need to be thought like that.

Per page we can use `648x2304px` This is `9:32` `(9:(16*2))` at `72dpi`. We might leave a space for comments and annotations. `1296x2304px` leaves half the page for annotations. That is workable; Ive seen some people use that.

According to our friend `gpt`, people typically use `800x1280px` stacks, so for the final rendering on each page we can use `stacks` of `800x3840px` as our final resolution for typical 3 `stacks`. That gives us a good scroll before a `page turn`. Singles and doubles might exist too; but that is the minimal unit and the resolution cap.

So, if we use `800x1920px` we divide in half and have a good size for annotations, and our actual working space is `400x1920px` for the planning of each page. with the possibility of singles or doubles in increments of `640px` vertically.

We are going to do that then!

- Single pages: `800x1280px`
- `Doubles` up to `Triples` on vertical stacks.
- Annotations and plannings on `800x1920px` with minimal unit of `800x640px` (single) with **half** the vertical space dedicated to annotations.

## How do we do the planing?

To organize things, plannings should be on a single file with different layers. Then, we can merge them and simulate a display.

The thing is *where* do I do that.

The sketching and planning can be done in an IPad, the heavy stuff can be done in an actual workstation.

But how do we deal with the preview?

I'm making a component for that with the help of the good old friend GPT. **I HATE DOING FRONT END CODE**.

Aaaaand it works!

I need to create the thumbnails for the site, the favicon n shiet. Oh! And also the background! 

Lets commit this not to loose any of our work.

## What now?

Lets create the avatar and then lets pick a background for the site so I can publish it and use it.


