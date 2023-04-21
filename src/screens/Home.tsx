import { Button, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FriendList } from "../components/FriendList";

export function Home() {
  const [name, setName] = useState("");
  const [frinds, setFriends] = useState(null);

  function handleSearch() {
    fetch("http:192.168.18.37:3333/friends?q=" + name)
      .then((r) => r.json())
      .then((json) => {
        console.clear();
        console.log(json);
        setFriends(json);
      });
  }

  return (
    <View className="flex-1 px-10 pb-10 bg-slate-100 decoration-white">
      <Text className="mt-[100] font-bold text-base">Amigos</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nome do cliente"
        className="border-2 border-blue-600 border-solid  p-4 mt-4 mb-4 divide-x-2 rounded "
      />
      <Button title="Buscar" onPress={handleSearch} />

      {frinds && <FriendList data={frinds} />}
    </View>
  );
}
