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

## Core Componenets and Native Componenets

View is the basic building block for UI on IOS and Android. \n
*View* is a small rectangular element on the screen that can be used to display anything; text, image, input or user input response. \n
Even a small breaker is a kind of view; some views are nestable. \n
For web developers View can be translated as a `<div>`. \n

### Native Components

Android => Kotlin \ Java \n https://reactnative.dev/docs/native-components-android?android-language=kotlin
IOS => Swift \ Objective-C \n https://reactnative.dev/docs/native-components-ios
React Native => Middle man allows you to access these specific Android and IOS views using JavaScript componenets. \n
At runtime Native would create corrosponding views for these components. These componenets are compiled to native componenet for that operating system and hence feels very simillar if you were working with Kotlin/Swift. \n
Hence, these components are called *Native Componenets*. https://reactnative.directory/

### Core Components

These are mostly common componenets shared across Android and IOS; e.g, ImageView, TextView on Android can be UIImageView and UITextView on IOS. \n

<View> => A container that supports Layout \n
<Text> => Display style and nest strings \n
<Image> => Displays different types of images \n
<ScrollView> => A generic scrolling container \n
<TextInput> => Allows the user to enter text \n





