# vscode-language-babel
JavaScript syntax highlighting for ES201x, React JSX, Flow and GraphQL.

A few notes:
- I've only ported the syntax highlighting. The transpiling and configuration is not included.
- I highly recommend using this syntax highlighting with a theme that supports it.
  - My favorite is [Theme - Oceanic Next](https://marketplace.visualstudio.com/items?itemName=naumovs.theme-oceanicnext) (shown in the screenshot below)

![Screenshot](https://raw.githubusercontent.com/mgmcdermott/vscode-language-babel/master/images/screenshot.png)

## Why this package?
The [language-babel](https://github.com/gandm/language-babel) package by [gandm](https://github.com/gandm) for Atom is the best highlighting I've seen for today's JavaScript. Out of the box it supports:
 - ES201x JavaScript
 - React (including JSX)
 - FlowType
 - Support for GraphQL code highlighting within template strings:
   ```javascript
   - Relay.QL`This is how Relay Classic uses template strings`
   - graphql`This is how Relay Modern uses template strings`
   - gql`This is how Apollo for GraphQL uses template strings`
   - /* GraphQL */`For cases where no template tag function is available`
   ```
 - [styled-components](https://github.com/styled-components/styled-components), [emotion](https://github.com/emotion-js/emotion) CSS inside tagged template strings plus additional highlighting via `/* CSS */` comment

 ## Comparison to Sublime Babel
 See [#1](https://github.com/mgmcdermott/vscode-language-babel/issues/1)
