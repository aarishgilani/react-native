# React Native - Notes

## React Fundamentals

- Components
- JSX
- Props
- State

### Components
These are building blocks of view. Think of a componenet as a functional peice with it's own memory and layout. You can then provide it with needed data to render view and manage functional state.

### JSX
This is where you can write you native core componenets while being inside JavaScript.
`syntax - {your script here}`
Note: When dealing with objects which are store inside curly braces '{}' in JS. You would use double brace '{{}}'.

### Props
These are instruction on the data the component needs to render. Think of it as passing variables to the view.
`syntax - const componenet = props => {
	return (
		native components
		call => props.name, props.address ...
	)
}`

### State
These are collection of variable and a setter function provided by useSate hook. You can call back the setter hook to update the state of const variable that will trigger reload of that component.


