import { globalStyles } from "../theme/globalStyles";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import TagList from "./TagList";
import { useEffect } from "react";

export default function AudioItem({ item, currentFilter, onFilterChange }) {
  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "filePlayer",
          params: { id: item.id.toString() },
        });
      }}
      style={[
        globalStyles.gap1,
        globalStyles.audioItem,
        isTablet ? globalStyles.row : globalStyles.col,
        isTablet && globalStyles.aiCen,
      ]}
    >
      <Image
        source={item.img1x1URL}
        style={[
          globalStyles.audioImage,
          isTablet
            ? globalStyles.audioImageSmall
            : globalStyles.audioImageLarge,
        ]}
      />
      <View
        style={[globalStyles.audioItemContentWrapper, globalStyles.gapHalf]}
      >
        <Text style={globalStyles.audioTitle}>{item.title}</Text>
        <TagList
          allTags={item.tags}
          currentFilter={currentFilter}
          onFilterChange={onFilterChange}
          classes={[globalStyles.row, globalStyles.fwWrap]}
        />
      </View>
    </Pressable>
  );
}
