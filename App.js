import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, PADDING, SIZE } from "./src/theme/tokens";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> hello friend</Text>
      <View style={[styles.header, styles.wrapper]}>
        <Text>This is the Header</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral100,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: COLORS.neutral900,
    paddingBlock: PADDING.large,
    paddingInline: PADDING.medium,
  },
  wrapper: {
    width: "min(100%, 60ch)",
    marginInline: "auto",
  },
});
