import { Text, View } from "react-native";
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
    <View className="mt-[30]">
      <Text>Resultado:</Text>
      {data.map((friend) => {
        return <Friend data={friend} key={friend.id} />;
      })}
    </View>
  );
}
