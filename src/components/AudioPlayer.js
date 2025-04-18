import { globalStyles } from "../theme/globalStyles";
import { useState, useRef, useEffect } from "react";
import { View, Text, Pressable, Button, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { AUDIO_DATA } from "../data/audioData";

export default function AudioPlayer({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const soundRef = useRef(null);

  const targetData = AUDIO_DATA.find((d) => Number(d.id) == Number(id));
  if (!targetData) return <Text>Audio not found</Text>;
  const { audioURL, title } = targetData;

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
        (status) => {
          if (!isMounted) return;
          setIsLoading(!status.isLoaded);
          if (status.isLoaded) {
            setPosition(status.positionMillis);
            setDuration(status.durationMillis || 1);
            setIsPlaying(status.isPlaying);
          }
        }
      );
      soundRef.current = sound;
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
    setIsLoading(!status.isLoaded);
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      setIsPlaying(status.isPlaying);
    }
  };
  const playPause = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    if (status.isLoaded) {
      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
      } else {
        await soundRef.current.playAsync();
      }
    }
  };

  // const playPause = async () => {
  //   try {
  //     if (!soundRef.current) {
  //       await loadAndPlay();
  //     } else if (isPlaying) {
  //       await soundRef.current.pauseAsync();
  //     } else {
  //       await soundRef.current.playAsync();
  //     }
  //   } catch (err) {
  //     alert("Error", err.message);
  //     console.log("error", err.message);
  //   }
  // };

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
        disabled={isLoading}
      />
      <Pressable
        onPress={isLoading ? undefined : playPause}
        // onPress={() => alert("Pressed!")}
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
