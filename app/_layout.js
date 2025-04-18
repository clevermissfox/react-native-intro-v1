import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function RootLayout() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Stack
        screenOptions={{
          headerTitle: "", // No title
        }}
      />

      <StatusBar style="auto" />
    </UserContext.Provider>
  );
}
