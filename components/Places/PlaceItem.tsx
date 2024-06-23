import { type Place } from "@/models/Place";
import { Pressable } from "react-native";
import { Image, Text, View } from "tamagui";

interface PlaceItemProps {
  place: Place;
  onSelect: () => void;
}

const PlaceItem = ({ place, onSelect }: PlaceItemProps) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
