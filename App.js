import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';

// Child component
const Cat = props => {
  return (
    <View>
    <Image 
          source={{
          uri: props.source,
        }}
        style={{width: 300, height: 300}}
    />

    <Text>{props.salue}</Text>
    </View>
  )
}

// Parent component - Exporting by default
export default function App() {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Cat source="https://reactnative.dev/docs/assets/p_cat1.png" salue="Hi I am Meow!" />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
          />
      </View>
    </ScrollView>
  );
}

// Optional component style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
