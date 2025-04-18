import { globalStyles } from "../theme/globalStyles";
import { router } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

export default function AudioItem({ item }) {
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "filePlayer",
          params: {
            id: item.id,
          },
        });
      }}
      style={[globalStyles.gap1, globalStyles.row, globalStyles.aiCen]}
    >
      <Image source={item.img1x1URL} style={globalStyles.audioImage} />
      <View style={[globalStyles.audioItemContentWrapper]}>
        <Text style={globalStyles.audioTitle}>{item.title}</Text>
        <Text>{item.tags.join(", ")}</Text>
      </View>
    </Pressable>
  );
}
