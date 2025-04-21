import { globalStyles } from "../src/theme/globalStyles";
import { useRouter, Link } from "expo-router";
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
        <Image
          source={require("../assets/icon.png")}
          style={[
            globalStyles.logo,
            {
              width: width * 0.6, // 60% of screen width
              height: width * 0.6,
            },
          ]}
        />

        <View style={[globalStyles.aiEnd, globalStyles.buttonWrapper]}>
          <Link href="/intro" style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Start</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
