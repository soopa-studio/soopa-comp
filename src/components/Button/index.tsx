import { View, Text } from "react-native";
import React from "react";

export default function Button({ text }: { text: string }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
