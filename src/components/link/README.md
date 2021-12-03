# Link

Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)

**Links are found on almost every webpage and provide a simple means of navigating between pages on the web.**

## Props

| Props             | Types             | isRequired?                      | Description                                                                        |
| ----------------- | ----------------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| `className`       | `string`          | `false`                          | Used to give the component a class name so that you can apply styles.              |
| `title`           | `string`          | `false`                          | Use this to give additional information about the page being linked to             |
| `uri`             | `string`          | `true`                           | This is the location which you will be navigating to when you click the link       |
| `download`        | `boolean`         | `false`                          | Allows the link to have the download attribute                                     |
| `children`        | `React.ReactNode` | `children` or `text` prop needed | Content between the Link component for example `<Link {...props}>`Click me`</Link` |
| `text`            | `text`            | `children` or `text` prop needed | Link text                                                                          |
| `onClick`         | `func`            | `false`                          | Allows you to add an onClick action to the link                                    |
| `openInNewWindow` | `boolean`         | `false`                          | Will allow the link to open in a new window                                        |

## Usage

```
import { Link } from '../../index';

<Link
	title="Take me to Google!"
	uri="www.google.co.uk"
	download={false}
	openInNewWindow={true}
	onClick={() => console.log('Clicked!')}
>
Click me!
</Link>
```
