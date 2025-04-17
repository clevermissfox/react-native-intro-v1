import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { COLORS, PADDING, RADIUS, SIZE } from "./src/theme/tokens";
import { useState } from "react";

export default function App() {
  const { width, height } = useWindowDimensions();
  const [user, setUser] = useState();
  const [started, setStarted] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/splash-bg.webp")}
        style={[
          styles.imageBackground,
          { width, height }, // dynamic values here!
        ]}
        resizeMode="cover"
      />
      <View style={[styles.overlay, { width, height }]} />

      <View style={styles.wrapper}>
        <View style={styles.alignEnd}>
          <Pressable onPress={() => setStarted(true)} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        </View>
        {started && (
          <View style={styles.inputScreen}>
            <Text style={styles.prompt}>What should we call you?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={user.name || ""}
              onChangeText={(name) => setUser((prev) => ({ ...prev, name }))}
              autoFocus
            />
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignSelf: "stretch",
    position: "absolute",
    top: "auto",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -2,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255,255,255,0.2)",
    zIndex: -1,
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral100,
    alignItems: "stretch",
    justifyContent: "stretch",
    alignSelf: "stretch",
  },
  wrapper: {
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1,
    padding: PADDING.default,
    width: SIZE.wrapperWidth,
    marginInline: "auto",
  },
  alignEnd: {
    marginBlockStart: "auto",
  },
  button: {
    backgroundColor: COLORS.accent500,
    paddingInline: PADDING.large,
    paddingBlock: PADDING.medium,
    borderRadius: RADIUS.button,
    elevation: 2,
    color: COLORS.neutral100,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  inputScreen: {
    position: "absolute",
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  prompt: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    elevation: 2,
  },
});
