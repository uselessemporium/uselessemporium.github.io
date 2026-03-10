# 26-03-09

So, here is the thing. The adaptation that i need to do requires me to take an original text displayed in a chaotic and disorganized way as a source.

I need to organize and sometimes even re write parts of the script.

But I don't have the time for that.

So what Im gonna do is to use `Google Sheets` to have an easy way to share text between my computers; on the same account.
With that, I'm going to take the original text and start splicing it into distinct _sections_.

Basically, the divisions will be organized by `scenes`, or `sequences`.

For script-writing/adaptation purposes, lets keep these `sequences` `location` based. 
Every time we change `location` in the perspective that we need to place ourselves to draw the scene to tell it, we count a change of `location`.
A discontinuous change in time over the same location counts an `location` change, and therefore is another `sequence`.

That way, we can organize the structure of our script per block as.

- Location: Where we are.
- Actions: What I need to show.
- Narration: What I need to narrate as off voices and `can not` show (like some inner monologues or the actual narrator voice).
- Dialog: Coded by character, who says what. (These can have many numerations, because dialogue speech split).

Therefore, as I copy/adapt the original text, I have nomenclature of `n.m`; with `sequence` `n` and, lets call it a `block`, `m`. On the actual planning storyboard, I just need to know the text of coordinates and I'll know `exactly` what woes there; that way, I wont have to go around fighting with text in `Procreate` and such as I diagram and plan the actual execution.

This way, I can copy whatever I need to copy, and rewrite only what it __absolutely__ have to.

Ok, now, to make things simple with `gdocs` Ill make a custom highlighter as a button pad.

Thanks to `Gemini` itself, with these things I have a template document that I can use for formatting all the others.

Its just:

```
select text -> click sidebar and hotkey or just button -> repeat!
```


The snippet for the application:

```
function onOpen() {
  DocumentApp.getUi()
      .createMenu('Comic Tools')
      .addItem('Open Toolbar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('Script Formatter')
      .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

/** * Action: White text on 90% Gray background.
 */
function styleAction() {
  applyStyle('#1a1a1a', '#FFFFFF'); 
}

/** * Narration: White text on Dark Goldenrod background.
 */
function styleNarration() {
  applyStyle('#b8860b', '#FFFFFF'); 
}

/** * Dialogue: White text on Dark Red background.
 */
function styleDialogue() {
  applyStyle('#8b0000', '#FFFFFF'); 
}

/**
 * Core function to apply colors to selected text.
 */
function applyStyle(bgColor, textColor) {
  const selection = DocumentApp.getActiveDocument().getSelection();
  if (selection) {
    const elements = selection.getRangeElements();
    elements.forEach(el => {
      const element = el.getElement();
      if (element.editAsText) {
        const text = element.asText();
        if (el.isPartial()) {
          text.setBackgroundColor(el.getStartOffset(), el.getEndOffsetInclusive(), bgColor);
          text.setForegroundColor(el.getStartOffset(), el.getEndOffsetInclusive(), textColor);
        } else {
          text.setBackgroundColor(bgColor);
          text.setForegroundColor(textColor);
        }
      }
    });
  }
}



<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: sans-serif; padding: 10px; background: #e5e5e5; color: #eee; }
      .btn { width: 100%; padding: 12px; margin-bottom: 8px; border: none; border-radius: 4px; color: white; font-weight: bold; cursor: pointer; text-align: left; }
      .action { background-color: #444; }
      .narration { background-color: #b8860b; }
      .dialogue { background-color: #8b0000; }
      kbd { background: #333; padding: 2px 4px; border-radius: 3px; float: right; border: 1px solid #555; }
    </style>
  </head>
  <body>
    <button class="btn action" onclick="run('styleAction')">ACTION <kbd>1</kbd></button>
    <button class="btn narration" onclick="run('styleNarration')">NARRATION <kbd>2</kbd></button>
    <button class="btn dialogue" onclick="run('styleDialogue')">DIALOGUE <kbd>3</kbd></button>

    <script>
      // The key listener
      window.addEventListener('keydown', function(e) {
        if (e.key === '1') run('styleAction');
        if (e.key === '2') run('styleNarration');
        if (e.key === '3') run('styleDialogue');
      });

      function run(funcName) {
        // This calls the .gs functions
        google.script.run[funcName]();
      }
    </script>
  </body>
</html>
```


