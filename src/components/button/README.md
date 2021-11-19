# Call to Action buttons(s)

Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)

Call to Action buttons or short CTA's are buttons that are used across your site, a user can click this button to take an action. A simple example would be `Buy now!` or a `Download now!` button.

## Props

| Props             | Type      | isRequired? | Description                                                                                                                  |
| ----------------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `className`       | `string`  | `false`     | Used to give the component a class name so that you can apply styles                                                         |
| `type`            | `string`  | `true`      | Type of button you want, for exmaple a `button`, `submit` or `reset`                                                         |
| `isPrimary`       | `boolean` | `true`      | Add's a `primary` or a `secondary` class depending on this value - This way you can easily style the component how you wish. |
| `isDisabled`      | `boolean` | `true`      | Add's the `disabled` prop to the button allowing the button to be disabled                                                   |
| `label`           | `string`  | `true`      | Gives the button a label so the user knows what action might take place when they click it.                                  |
| `onClick`         | `func`    | `true`      | Function you wish to invoke when the button is clicked                                                                       |
| `backgroundColor` | `string`  | `false`     | Optional background colour                                                                                                   |
| `textColor`       | `string`  | `false`     | Optional colour                                                                                                              |

## Usage

```
import { Button } from '../../index';

<Button
	type="button"
	isPrimary={true}
	isDisabled={false}
	label="Download now!"
	onClick={() => console.log('Hello World!')}
/>
```
