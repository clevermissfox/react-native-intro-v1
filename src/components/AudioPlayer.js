import { globalStyles } from "../theme/globalStyles";
import { useState, useRef, useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { AUDIO_DATA } from "../data/audioData";
import { COLORS } from "../theme/tokens";
import { useLocalSearchParams } from "expo-router";
import { IMAGE_MAP } from "../data/imageMap";

export default function AudioPlayer() {
  const { id } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const soundRef = useRef(null);

  // const targetData = AUDIO_DATA.find((d) => d.id.toString() === id?.toString());
  const targetData = AUDIO_DATA.find((d) => Number(d.id) == Number(id));
  if (!targetData) return <Text>Audio not found</Text>;
  const { audioURL, title, img1x1URL: imgURL } = targetData;

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      volume: 1.0,
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadSound = async () => {
      setIsLoading(true); // Start loading
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      if (!audioURL) {
        alert("Audio asset is not loaded correctly.");
        setIsLoading(false);
        return;
      }

      const { sound } = await Audio.Sound.createAsync(
        audioURL,
        { shouldPlay: false }, // Don't play yet!
        onPlaybackStatusUpdate
      );
      soundRef.current = sound;

      // Get the status to ensure duration and position are updated right away
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        setPosition(status.positionMillis);
        setDuration(status.durationMillis || 0); // Default to 1 to avoid division by zero
        setIsPlaying(status.isPlaying);
        setIsLoading(false); // Now we can stop the loading state
      }
    };

    loadSound();

    return () => {
      isMounted = false;
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, [audioURL]);

  const loadAndPlay = async () => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
    }

    if (!audioURL) {
      alert("Audio asset is not loaded correctly.");
      return; // Stop the function if no audioURL
    }

    const { sound } = await Audio.Sound.createAsync(
      Number(audioURL),
      {
        shouldPlay: true,
      },
      onPlaybackStatusUpdate
    );
    soundRef.current = sound;
    setIsPlaying(true);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);

      setIsPlaying(status.isPlaying);
      // Only update the duration if it changes
      if (status.durationMillis && duration !== status.durationMillis) {
        setDuration(status.durationMillis);
      }
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  const playPause = async () => {
    try {
      if (!soundRef.current) return;
      const status = await soundRef.current.getStatusAsync();
      if (status.isLoaded) {
        if (status.isPlaying) {
          await soundRef.current.pauseAsync();
        } else {
          await soundRef.current.playAsync();
        }
      }
    } catch (err) {
      console.error("Error: ", err.message);
      alert("There has been an error playing this audio: ", err.message);
    }
  };

  const formatTime = (millis) => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const seek = async (value) => {
    if (soundRef.current) {
      await soundRef.current.setPositionAsync(value);
    }
  };

  return (
    <View style={[globalStyles.audioItem, globalStyles.gapHalf]}>
      {imgURL && (
        <Image
          source={imgURL}
          style={[globalStyles.audioImage, globalStyles.audioImageLarge]}
          resizeMode="cover"
        />
      )}

      <Text style={[globalStyles.audioTitle, globalStyles.taCen]}>{title}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={[
            globalStyles.clrN100,
            { opacity: !isLoading && duration > 0 ? 1 : 0 },
            ,
          ]}
        >
          {formatTime(position)}
        </Text>
        <Text
          style={[
            globalStyles.clrN100,
            { opacity: !isLoading && duration > 0 ? 1 : 0 },
            ,
          ]}
        >
          {formatTime(duration)}
        </Text>
      </View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        onSlidingComplete={seek}
        maximumTrackTintColor={COLORS.neutral100A2}
        minimumTrackTintColor={COLORS.accent500}
        thumbTintColor={COLORS.accent500}
        // trackStyle={globalStyles.sliderTrack}
        disabled={isLoading}
      />
      <Pressable
        onPress={isLoading ? undefined : playPause}
        style={[
          globalStyles.button,
          globalStyles.buttonPlay,
          isLoading && { opacity: 0.5 },
        ]}
      >
        <Text style={globalStyles.buttonText}>
          {isLoading ? "Loading Audio..." : isPlaying ? "Pause" : "Play"}
        </Text>
      </Pressable>
    </View>
  );
}
