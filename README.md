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

`syntax => {your script here}`

Note: When dealing with objects which are store inside curly braces `{ }` in JS. You would use double brace `{{ }}`.

### Props

These are instruction on the data the component needs to render. Think of it as passing variables to the view.
<pre>
const componenet = props => {
	return (
		native components
		call => props.name, props.address ...
	)
}
</pre>

### State

These are collection of variable and a setter function provided by useSate hook. You can call back the setter hook to update the state of const variable that will trigger reload of that component.

## Core Componenets and Native Componenets

`<View>` is the basic building block for UI on IOS and Android.

`<View>` is a small rectangular element on the screen that can be used to display anything; text, image, input or user input response.

Even a small breaker is a kind of view; some views are nestable.

For web developers View can be translated as a `<div>`.

### Native Components

__Android__ => Kotlin \ Java; [Android Native Component Library ](https://reactnative.dev/docs/native-components-android?android-language=kotlin)

__IOS__ => Swift \ Objective-C; [IOS Native Componenet Library](https://reactnative.dev/docs/native-components-ios)

__React Native__ => Middle man that allows you to access these specific Android and IOS views using JavaScript componenets; [Core component Library](https://reactnative.directory/)

At runtime __React Native__ would create corrosponding views for these components. These components are compiled to their native language.

#### Core Components

These are mostly common componenets shared across Android and IOS; e.g, ImageView, TextView on Android can be UIImageView and UITextView on IOS.

`<View>` => A __container__ that supports Layout

`<Text>` => Display style and __nest strings__

`<Image>` => Displays different types of images

`<ScrollView>` => A generic __scrolling container__

`<TextInput>` => Allows the user to enter text





