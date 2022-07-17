import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat</Text>
    </View>
  );
};
export default function App() {
  return (
    <View>
      <Text>Welcome</Text>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Image
        source={{
          uri: "https://i.imgur.com/kWDfQRS_d.webp?maxwidth=760&fidelity=grand",
        }}
        style={{ width: 400, height: 400 }}
      />
      <StatusBar />
    </View>
  );
}
