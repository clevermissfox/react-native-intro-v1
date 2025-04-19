import { globalStyles } from "../src/theme/globalStyles";
import { UserContext } from "./_layout";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { AUDIO_DATA } from "../src/data/audioData";
import { FlatList, Modal, Pressable, Text, View } from "react-native";

import AudioItem from "../src/components/AudioItem";
import TagList from "../src/components/TagList";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function fileList() {
  const { user, setUser } = useContext(UserContext);
  const [isHidden, setIsHidden] = useState(true);
  const [filterTags, setFilterTags] = useState([]);
  const allTags = [...new Set(AUDIO_DATA.flatMap((item) => item.tags))];

  const toggleTag = (tag) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setFilterTags([]);

  const filteredAudioItems =
    filterTags.length > 0
      ? AUDIO_DATA.filter((item) =>
          item.tags.some((tag) => filterTags.includes(tag))
        )
      : AUDIO_DATA;

  return (
    <>
      <View style={[globalStyles.container]}>
        <View style={[globalStyles.wrapper, globalStyles.gap1]}>
          <View>
            {/* Button-Toggle filter list  */}
            <Pressable
              accessibilityLabel="Choose Filters"
              onPress={() => setIsHidden((prev) => !prev)}
            >
              <Ionicons
                name={
                  isHidden ? "filter-circle-outline" : "close-circle-outline"
                }
                style={[globalStyles.iconButtonIcon, globalStyles.fsxxLarge]}
              />
            </Pressable>
          </View>

          <FlatList
            contentContainerStyle={[globalStyles.gap1, globalStyles.audioList]}
            data={filteredAudioItems}
            renderItem={({ item }) => (
              <AudioItem
                item={item}
                currentFilter={filterTags}
                onFilterChange={toggleTag}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      {/* Popover */}
      <View
        style={[
          globalStyles.popover,
          globalStyles.z50,
          isHidden && globalStyles.hide,
        ]}
      >
        {/* <Pressable
          accessibilityLabel="Close filter list"
          onPress={() => setIsHidden((prev) => !prev)}
          style={{ alignSelf: "end", padding: 8, position: "absolute" }}
        >
          <Ionicons
            name="close-circle-outline"
            style={globalStyles.iconButtonIcon}
          />
        </Pressable> */}
        <View style={[globalStyles.popoverContentWrapper, globalStyles.gap1]}>
          <Pressable
            accessibilityLabel="Clear filters"
            onPress={clearFilters}
            disabled={filterTags.length === 0}
            style={[
              globalStyles.row,
              globalStyles.gapQuarter,
              globalStyles.aiCen,
              filterTags.length === 0 && { opacity: 0.4 },
            ]}
          >
            <MaterialIcons
              name="filter-list-off"
              style={[globalStyles.iconButtonIcon]}
            />

            <Text>Clear Filters</Text>
          </Pressable>
          <ScrollView style={globalStyles.maxH15}>
            <TagList
              allTags={allTags}
              currentFilter={filterTags}
              onFilterChange={toggleTag}
              classes={[globalStyles.col]}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
