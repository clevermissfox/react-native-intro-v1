import { globalStyles } from "../src/theme/globalStyles";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import AudioPlayer from "../src/components/AudioPlayer";

export default function filePlayer() {
  const { id } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.wrapper}>
        <AudioPlayer id={id} />
      </View>
    </View>
  );
}
