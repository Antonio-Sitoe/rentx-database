import { FlatList, ScrollView, Text, View } from "react-native";
import { Friend } from "./Friend";
import { useMemo } from "react";
interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
  fallow: () => void;
}
export function FriendList({ data, fallow }: Props) {
  const totalLikes = useMemo(
    () => data.reduce((total, item) => total + item.likes, 0),
    [data]
  );
  return (
    <>
      <Text className="mt-5">Total de Likes: {totalLikes}</Text>
      <FlatList
        data={data}
        className="mt-5"
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return <Friend data={item} fallow={fallow} />;
        }}
      />
    </>
  );
}
