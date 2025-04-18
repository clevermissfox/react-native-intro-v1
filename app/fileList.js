import { globalStyles } from "../src/theme/globalStyles";
import { UserContext } from "./_layout";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";

import { AUDIO_DATA } from "../src/data/audioData";
import AudioItem from "../src/components/AudioItem";

export default function fileList() {
  const { user, setUser } = useContext(UserContext);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.wrapper}>
        <FlatList
          contentContainerStyle={[globalStyles.gap1, globalStyles.audioList]}
          data={AUDIO_DATA}
          renderItem={({ item }) => <AudioItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text>Hi {user.name} I will be the list of files</Text>
      </View>
    </View>
  );
}
