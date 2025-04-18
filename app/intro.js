import { globalStyles } from "../src/theme/globalStyles";
import { UserContext } from "./_layout";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { Text, TextInput, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Intro() {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState();
  const router = useRouter();

  const validateName = () => {
    if (user.name && user.name.trim() !== "") {
      setError(""); // clear error if valid
      router.navigate("/fileList");
    } else {
      setError("Please enter your name into the input");
    }
  };

  // 2. On typing: clear error if no longer empty
  const handleChangeText = (name) => {
    setUser((prev) => ({ ...prev, name }));
    if (error && name.trim() !== "") {
      setError("");
    }
  };

  // 3. On blur: show error if input is empty
  const handleBlur = () => {
    if (!user.name || user.name.trim() === "") {
      setError("Please enter your name into the input");
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.wrapper}>
        <View style={globalStyles.inputScreen}>
          <Text style={globalStyles.prompt}>What should we call you?</Text>
          <View
            style={[globalStyles.row, globalStyles.gap1, globalStyles.aiCen]}
          >
            <TextInput
              style={globalStyles.input}
              placeholder="Enter your name"
              value={user?.name || ""}
              onChangeText={handleChangeText}
              onBlur={handleBlur}
              autoFocus
            />
            <Pressable
              onPress={validateName}
              style={globalStyles.iconButton}
              accessibilityLabel="Input what we should call you"
            >
              <Ionicons
                name="checkmark-circle"
                style={globalStyles.iconButtonIcon}
              />
            </Pressable>
          </View>
          {error && <Text>{error}</Text>}
        </View>
      </View>
    </View>
  );
}
