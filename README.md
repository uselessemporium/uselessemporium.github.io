# Readme

## For building stuff with this thing

Remember to add in the config file if working on `vscode`:

```
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll": true
}
```

## To run this thing

Just run:

```
npm install
npm run dev
```

## Creating entries for the blog

In the `/` directory, there are two scripts. One for creating blog posts and another to set them in place.

First run:

```
python3 create_blog_entry.py
```

Once all the entries are in place:

```
python3 create_sources.py
```

That will create the json structure that this thing reads to open the new entries.

## For deployment!

Deploying this thing to github-pages is kind of a pain in the ass...

First, you need to check if everything builds.

```
npm run deploy
```

This thing deploys directly to `github-pages` on `https://uselessemporium.github.io`.


