import { colors } from "@/constants/Colors";
import { useState } from "react";
import { Form, Input, Label, ScrollView, Text, View } from "tamagui";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState<string>();

  const changeTitleHandler = (text: string) => {
    setEnteredTitle(text);
  };

  const submitFormHandler = () => {
    console.log("Form Submitted");
  };
  return (
    <ScrollView flex={1} p={24}>
      <Form onSubmit={submitFormHandler}>
        <Label fontWeight={700} color={colors.primary500}>
          Title
        </Label>
        <Input
          fontSize={16}
          backgroundColor={colors.primary100}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </Form>
    </ScrollView>
  );
};

export default PlaceForm;
