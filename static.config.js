import fs from 'fs-extra'
import path from 'path'
import React, { Component } from 'react'
import { reloadRoutes } from 'react-static/node'
import { ServerStyleSheet } from 'styled-components'
import chokidar from 'chokidar'
import reload from 'require-reload'

chokidar.watch('./docs').on('all', () => reloadRoutes())

const repoName = 'UNO Documentation' // Change this
const repo = 'imdaveead/uno-docs' // Change this
const repoURL = `https://github.com/${repo}`;

// No need to touch any of this, unless you want to.
export default {
  getSiteData: () => ({
    menu: reload("./docs/navigation").default,
    repo,
    repoURL,
    repoName,
  }),
  getRoutes: () => {
    const docPages = [];

    reload("./docs/navigation").default.forEach(function each(item) {
      if (item.children) item.children.forEach(each);

      if (item.path) {
        docPages.push({
          path: item.path,
          title: item.name,
          markdownSrc: (item.path === "/") ? "docs/index.md" : ("docs" + item.path + ".md"),
        })
      }
    });

    return [
      ...docPages.map(page => (
          fs.existsSync(page.markdownSrc)

          ? ({
            path: `${page.path}`,
            component: 'src/containers/Doc',
            getData: () => ({
              markdown: fs.readFileSync(path.resolve(page.markdownSrc), 'utf8'),
              editPath:
                repoURL + path.join('/blob/master/', page.markdownSrc),
              title: page.title,
            }),
          })
          : undefined
        )
      ).filter( x => x !== undefined),
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
            <title>{repoName}</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
