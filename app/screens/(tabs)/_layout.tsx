import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs
     screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}>
      <Tabs.Screen name="home" options={{ title: 'Home', 
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
      }} />
      <Tabs.Screen name="library" options={{ title: 'Library',
         tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24}/>
          ),
       }} />

       <Tabs.Screen name="search" options={{ title: 'Search',
         tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24}/>
          ),
       }} />

       <Tabs.Screen name="profile" options={{ title: 'Profile',
         tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24}/>
          ),
       }} />
    </Tabs>
  );
}

<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#25292e',
    },
  }} />
