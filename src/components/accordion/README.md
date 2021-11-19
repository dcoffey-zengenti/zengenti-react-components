# Accordion component

Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)

**A simple accordion component, use this as a group or as one single. The accordion can expand to show rolled up content by clicking on a heading or arrow and contract to hide it again.**

## Example

**Given** a FAQ web page with a long list of questions
<br />
**When** a user clicks on a question
<br />
**Then** the accordion component opens and displays the information

## Props

<br />

### Group

| Props       | Type      | isRequired? | Description                                                          |
| ----------- | --------- | ----------- | -------------------------------------------------------------------- |
| `className` | `string`  | `false`     | Used to give the component a class name so that you can apply styles |
| `title`     | `string`  | `false`     | Give your accordion group a title                                    |
| `items`     | `array[]` | `true`      | Items which your accordion will display                              |

<br />

### Single

| Props       | Type     | isRequired? | Description                                                               |
| ----------- | -------- | ----------- | ------------------------------------------------------------------------- |
| `className` | `string` | `false`     | Used to give the component a class name so that you can apply styles.     |
| `title`     | `string` | `true`      | Gives your accordion a title.                                             |
| `content`   | `string` | `true`      | Content which you would like to be displayed when you click the accordion |

<br />

## Usage

Usage of the `<Accordion />` , pass in the props, `title` and `items`.

> Remember to import your component!

```
import { Accordion } from '../../index';

<Accordion
	title="Example Accordion!"
	items={[
	{
		title:  "Example title",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae 			aliquam volutpat nibh duis enim mi nibh.t tortor.",
	},
	{
		title:  "Example title",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae 			aliquam volutpat nibh duis enim mi nibh.t tortor.",
	},
	]}
/>
```

Usage of the `<AccordionItem />` , pass in the props, `title` and `content`.

```
import { AccordionItem } from '../../index';
<AccordionItem
	title="Example Accordion!"
	content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae 			aliquam volutpat nibh duis enim mi nibh.t tortor.",
/>
```
