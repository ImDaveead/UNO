# UNO Documentation
Explains everything about the UNO Card game, and many additional ways to play the game. This was originally
a huge latex document, which is now being converted to a documentation-style website.

This documentation is [open-sourced on GitHub](https://github.com/imdaveead/uno-docs) if you would like to make
any changes. A link to edit any page is available at the bottom of that page.

Visit the site at [uno.netlify.com](https://uno.netlify.com/)

## Build
To build the documentation
- Have NODEJS and NPM installed
- Run `npm run build`
- Output is in `/dist/`

To run a live development server
- Have NODEJS and NPM installed
- Run `npm start`
- Open your web browser to [localhost:3000](http://localhost:3000)

## Contributing
### Sidebar
The navigation sidebar is created using the `docs/navigation.js`, with an array of pages
```js
export default [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Introduction",
        path: "/introduction"
    },
    ...
]
```
The `name` field is a display name, and the `path` is the markdown file location without the `.md`
extension, and also the url it will have. `name` is the only required field, if you remove the path
you get a label for a catagory.

To add navigation catagory, you simply add a `children` array to any item
```js
    ...
    {
        name: "Game Modes",
        children: [
            {
                name: "No U UNO",
                path: "/no-u"
            },
            ...
        ]
    },
    ...
```
### Markdown Files
You can edit the markdown files in the `docs` folder to change the documentation content. These
will automatically reload if you have a live development server running, which is started with
`npm start`

### Extra Content (Images, etc)
Any files placed in `/public/` are added to the final site, and the live development server. Place
any images and other content there.