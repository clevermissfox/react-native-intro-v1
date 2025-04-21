import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE, PADDING, RADIUS, SIZE } from "./tokens";

const globalStyles = StyleSheet.create({
  // wrappers
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
  //utils
  hide: {
    display: "none",
  },
  relative: {
    position: "relative",
  },
  maxH15: {
    maxHeight: "15vh",
  },
  z50: {
    zIndex: 50,
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
  gapQuarter: {
    gap: FONTSIZE.xsSmall,
  },
  fsxxLarge: {
    fontSize: FONTSIZE.xxLarge,
  },
  taCen: {
    textAlign: "center",
  },
  shadow2: {
    elevation: 2,
  },
  clrN100: {
    color: COLORS.neutral100,
  },
  bgAccent: {
    backgroundColor: COLORS.accent500,
  },
  // common components
  logo: {
    resizeMode: "contain",
    marginInline: "auto",
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
    textAlign: "center",
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
  audioItem: {
    backgroundColor: COLORS.neutral800,
    padding: PADDING.medium,
    borderRadius: RADIUS.image,
  },
  audioImage: {
    display: "block",
    maxWidth: "100%",
    aspectRatio: 1,
    borderRadius: RADIUS.image,
    borderWidth: 1,
    borderColor: COLORS.neutral100,
    color: COLORS.neutral100,
  },
  audioImageSmall: {
    width: SIZE.imageSmall,
    height: SIZE.imageSmall,
  },
  audioImageLarge: {
    // flex: 1,
    width: "100%",
    height: SIZE.imageLarge,
    aspectRatio: "auto",
  },
  audioItemContentWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  audioTitle: {
    color: COLORS.neutral100,
    fontSize: FONTSIZE.medium,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sliderThumb: {
    backgroundColor: COLORS.accent500,
  },
  sliderTrack: {
    height: 10,
  },
  popoverContentWrapper: {
    alignItems: "stretch",
    justifyContent: "center",
    flex: 1,
    padding: PADDING.medium,
    width: SIZE.wrapperWidth,
    maxWidth: SIZE.wrapperMaxWidth,
    marginInline: "auto",
  },
  popover: {
    backgroundColor: COLORS.neutral100,
    borderRadius: RADIUS.image,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 2,
    // flex: 1,
    // width: SIZE.width100,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // optional for dimming background
    justifyContent: "flex-end",
  },
  modalPopover: {
    backgroundColor: COLORS.neutral100,
    padding: PADDING.medium,
    borderTopLeftRadius: RADIUS.image,
    borderTopRightRadius: RADIUS.image,
    maxHeight: "60%",
  },
  tags: {
    color: COLORS.neutral800,
    backgroundColor: COLORS.neutral100,
    paddingInline: PADDING.small,
    paddingBlock: PADDING.xSmall,
    borderRadius: RADIUS.pill,
  },
  tag: {
    color: COLORS.neutral800,
    backgroundColor: COLORS.neutral100,
    paddingInline: PADDING.small,
    paddingBlock: PADDING.xSmall,
    borderRadius: RADIUS.pill,
  },
  tagActive: {
    color: COLORS.neutral100,
    backgroundColor: COLORS.accent500,
  },
  tagText: {
    fontSize: FONTSIZE.default,
    fontWeight: 200,
    // lineHeight: FONTSIZE.default,
    color: COLORS.neutral800,
  },
  tagActiveText: {
    color: COLORS.neutral100,
  },
});

export { globalStyles };
