# SVG Icons

Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)

**SVG Icons are used to display icons for social links, buttons, spacers etc**

## Props

| Props     | Types    | isRequired? | Description                                                           |
| --------- | -------- | ----------- | --------------------------------------------------------------------- |
| `height`  | `number` | `true`      | Display height of icon                                                |
| `width`   | `number` | `true`      | Display width of icon                                                 |
| `viewBox` | `string` | `true`      | Defines the position and dimension, in user space, of an SVG viewport |
| `fill`    | `string` | `true`      | Sets the fill colour of your icon                                     |
| `type`    | `string` | `true`      | The icons to display                                                  |

## Usage

```
import { Icon } from "../icon";

<Icon
  height={24}
  width={24}
  viewBox="0 0 24 24"
  fill="#ff0000"
  type="twitter"
/>
```
