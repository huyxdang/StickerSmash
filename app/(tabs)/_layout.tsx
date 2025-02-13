import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
            headerShadowVisible: false,
        }}>
        <Tabs.Screen 
        name="index"
        options={{ title: "Homepage",
        tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name={focused ? "home-sharp" : "home-outline"}
        size={30}
        />
        )
        }}
        />
      <Tabs.Screen 
      name="about" 
      options={{ title: 'About',
      tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name = {focused ? "information-circle" : "information-circle-outline"}
        size={24}
        />
      )
      }} />
      <Tabs.Screen name = "+not-found" options={{ title: 'Error Page'}} />
    </Tabs>
  );
}
