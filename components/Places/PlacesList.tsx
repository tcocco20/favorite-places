import { FlatList } from "react-native";
import { type Place } from "@/models/Place";
import PlaceItem from "./PlaceItem";
import { Text, View } from "tamagui";
import { colors } from "@/constants/Colors";

interface PlacesListProps {
  places: Place[];
}

const PlacesList = ({ places }: PlacesListProps) => {
  if (!places || places.length === 0) {
    return (
      <View display="flex" flex={1} jc="center" ai="center">
        <Text fontSize={16} color={colors.primary200}>
          No places found. Maybe start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <PlaceItem place={item} />;
      }}
    />
  );
};

export default PlacesList;
