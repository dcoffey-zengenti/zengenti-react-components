# Alert banner

Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)

**Alert banners are used for presenting messages to visitors who are your website.**

## Props

| Props             | Types    | isRequired? | Description                                                                               |
| ----------------- | -------- | ----------- | ----------------------------------------------------------------------------------------- |
| `className`       | `string` | `false`     | Used to give the component a class name so that you can apply styles.                     |
| `type`            | `string` | `true`      | Stating the type will add a class name to the alert which you can then style accordingly. |
| `text`            | `string` | `true`      | Text you wish to display on the alert.                                                    |
| `iconColor`       | `string` | `false`     | Colour of your icon                                                                       |
| `backgroundColor` | `string` | `false`     | Colour of the alert background                                                            |

## Usage

```
import { Alert } from '../../index';

<Alert
	type="high"
	text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>
```
