import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../theme/globalStyles";

export default function TagList({
  allTags,
  currentFilter = [],
  onFilterChange,
  classes = null,
}) {
  console.log(allTags, "allTags", typeof allTags);
  return (
    <View style={[globalStyles.gapQuarter, ...classes]}>
      {allTags.map((tag) => {
        const isActive = currentFilter.includes(tag);

        return (
          <Pressable
            key={tag}
            onPress={() => onFilterChange(tag)} // Toggle off if same tag
            style={[globalStyles.tag, isActive && globalStyles.tagActive]}
          >
            <Text
              style={[
                globalStyles.tagText,
                isActive && globalStyles.tagActiveText,
              ]}
            >
              {tag}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
