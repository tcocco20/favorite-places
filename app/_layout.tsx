import "../tamagui-web.css";

import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { Provider } from "./Provider";
import { Button } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import { colors } from "@/constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Provider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary500,
            },
            headerTintColor: colors.gray700,
            contentStyle: {
              backgroundColor: colors.gray700,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => {
                return (
                  <Button
                    icon={Plus}
                    scaleIcon={1.5}
                    color={tintColor}
                    chromeless
                    onPress={() => router.push("AddPlace")}
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name="AddPlace"
            options={{
              title: "Add a New Place",
              headerBackTitle: "All Places",
            }}
          />
          <Stack.Screen
            name="PlaceDetails"
            options={{
              title: "Place Details",
            }}
          />
          <Stack.Screen
            name="Map"
            options={{
              title: "Map",
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
