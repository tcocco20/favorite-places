import { type Place } from "models/Place";
import { Pressable } from "react-native";
import { Image, Text, View } from "tamagui";

const PlaceItem = ({ place }: { place: Place }) => {
  return (
    <Pressable>
      <Image />
      <View>
        <Text>NAME</Text>
        <Text>ADDRESS</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
