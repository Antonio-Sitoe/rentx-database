import { ScrollView, Text, View } from "react-native";
import { Friend } from "./Friend";
interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}
export function FriendList({ data }: Props) {
  return (
    <ScrollView className="mt-[30]">
      <Text>Resultado:</Text>
      {data.map((friend) => {
        return <Friend data={friend} key={friend.id} />;
      })}
    </ScrollView>
  );
}
