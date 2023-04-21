import { View, Text, ListRenderItemInfo, TouchableOpacity } from "react-native";
import React, { memo } from "react";

interface ITemProps {
  data: {
    id: number;
    name: string;
    likes: number;
  };
  fallow: () => void;
}

const FriendComponent = ({ data, fallow }: ITemProps) => {
  return (
    <View>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>
      <TouchableOpacity
        onPress={fallow}
        className="bg-slate-600 mb-2 p-2 w-[150] rounded-md "
      >
        <Text className="text-white">Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  );
};
export const Friend = memo(FriendComponent, (previewProps, nextProps) => {
  return Object.is(previewProps.data.id, nextProps.data.id);
});
