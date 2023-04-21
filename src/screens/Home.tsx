import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FriendList } from "../components/FriendList";

export function Home() {
  const [name, setName] = useState("");

  function handleSearch() {}
  return (
    <View className="flex-1 px-10  bg-slate-100 decoration-white">
      <Text className="mt-[100] ">Amigos</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nome do cliente"
        className="border-2 border-blue-600 border-solid  p-4 mt-4 mb-4 divide-x-2 rounded "
      />
      <Button title="Buscar" onPress={handleSearch} />

      <FriendList data={[]} />
    </View>
  );
}
