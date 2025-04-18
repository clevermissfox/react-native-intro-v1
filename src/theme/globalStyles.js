import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, PADDING, RADIUS, SIZE } from "./tokens";

const globalStyles = StyleSheet.create({
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
    maxWidth: SIZE.wrapperMaxWidth,
    marginInline: "auto",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  fwWrap: {
    flexWrap: "wrap",
  },
  aiCen: {
    alignItems: "center",
  },
  aiEnd: {
    alignItems: "end",
    marginBlockStart: "auto",
  },
  gap1: {
    gap: FONTSIZE.default,
  },
  gapHalf: {
    gap: FONTSIZE.xSmall,
  },
  logo: {
    resizeMode: "contain",
    backgroundColor: "blue",
  },
  buttonWrapper: {
    alignItems: "stretch",
    justifyContent: "stretch",
  },
  button: {
    backgroundColor: COLORS.accent500,
    paddingInline: PADDING.large,
    paddingBlock: PADDING.medium,
    borderRadius: RADIUS.button,
    color: COLORS.neutral100,
    width: SIZE.wrapperWidth,
    alignSelf: "stretch",
  },
  buttonText: {
    color: COLORS.neutral100,
    fontSize: FONTSIZE.default,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  buttonPlay: {
    zIndex: 50,
  },
  iconButton: {
    padding: FONTSIZE.xSmall,
  },
  iconButtonIcon: {
    fontSize: FONTSIZE.large,
    color: COLORS.accent500,
  },
  // intro page
  inputScreen: {
    alignItems: "center",
    gap: FONTSIZE.medium,
    justifyContent: "center",
    padding: PADDING.default,
  },
  prompt: {
    color: COLORS.neutral900,
    fontSize: FONTSIZE.default,
    textAlign: "center",
    textWrap: "pretty",
  },
  input: {
    backgroundColor: COLORS.neutral100,
    paddingHorizontal: PADDING.medium,
    paddingVertical: PADDING.small,
    fontSize: FONTSIZE.medium,
    textAlign: "center",
    width: "80%",
  },
  // audio components

  audioImage: {
    display: "block",
    maxWidth: "100%",
    width: FONTSIZE.xxLarge,
    height: FONTSIZE.xxLarge,
    aspectRatio: 1,
    borderRadius: RADIUS.image,
  },
  audioItemContentWrapper: {
    flex: 1,
  },
  audioTitle: {
    fontSize: FONTSIZE.medium,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export { globalStyles };
