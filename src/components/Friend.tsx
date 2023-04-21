import { View, Text } from "react-native";
import React, { memo } from "react";

interface ITemProps {
  data: {
    id: number;
    name: string;
    likes: number;
  };
}

const FriendComponent = ({ data }: ITemProps) => {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  );
};
export const Friend = memo(FriendComponent, (previewProps, nextProps) => {
  return Object.is(previewProps.data.id, nextProps.data.id);
});
