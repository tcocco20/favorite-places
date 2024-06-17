import { FlatList } from "react-native";
import React from "react";
import { type Place } from "models/Place";
import PlaceItem from "./PlaceItem";

interface PlacesListProps {
  places: Place[];
}

const PlacesList = ({ places }: PlacesListProps) => {
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
