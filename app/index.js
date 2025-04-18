import { globalStyles } from "../src/theme/globalStyles";
import { useRouter } from "expo-router";
import {
  Text,
  Image,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.wrapper}>
        {/* <Image
          source={require("../assets/icon.png")}
          style={[globalStyles.logo]}
        /> */}

        <View style={[globalStyles.aiEnd, globalStyles.buttonWrapper]}>
          <Pressable
            onPress={() => router.navigate("/intro")}
            style={globalStyles.button}
          >
            <Text style={globalStyles.buttonText}>Start</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
