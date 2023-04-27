# README

Remark plugin that removes empty nodes



## Features

- remove empty nodes
- nodes are defined using a [`Test`](https://github.com/syntax-tree/unist-util-is#test)



## Example

To remove empty `emphasis`, `strong`, and `link` nodes

```js
import { unified, rehypeParse, rehypeRemark, remarkStringify } from "./deps.ts";
import remarkRemoveEmpty from "./src/main.ts";

const result = (await unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeRemark)
  .use(remarkRemoveEmpty, {
    nodeTest: (node) =>
      ["emphasis", "link", "strong"].includes(node.type) &&
      node.children.length == 0,
  })
  .use(remarkStringify)
  .process(`foo<em><a href="https://example.com"></a></em>bar`))
  .toString();
console.log(result);
```

Before

```html
foo<em><a href="https://example.com"></a></em>bar
```

After

```md
foobar
```
