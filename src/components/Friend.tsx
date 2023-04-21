import { View, Text } from "react-native";
import React from "react";

interface ITemProps {
  data: {
    name: string;
    likes: number;
  };
}

export const Friend = ({ data }: ITemProps) => {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  );
};
