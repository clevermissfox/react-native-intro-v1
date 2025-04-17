import { useState, useRef } from "react";
import { View, Text, Button, Slider } from "react-native";
import { Audio } from "expo-av";

export default function AudioPlayer({ source, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const soundRef = useRef(null);

  const loadAndPlay = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync(
      source,
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    soundRef.current = sound;
    setIsPlaying(true);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      setIsPlaying(status.isPlaying);
    }
  };

  const playPause = async () => {
    if (!soundRef.current) {
      await loadAndPlay();
    } else if (isPlaying) {
      await soundRef.current.pauseAsync();
    } else {
      await soundRef.current.playAsync();
    }
  };

  const seek = async (value) => {
    if (soundRef.current) {
      await soundRef.current.setPositionAsync(value);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>{title}</Text>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        onSlidingComplete={seek}
        style={{ marginVertical: 16 }}
      />
      <Button title={isPlaying ? "Pause" : "Play"} onPress={playPause} />
    </View>
  );
}
