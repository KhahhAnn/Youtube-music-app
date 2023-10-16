import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home/HomeScreen";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ExploreScreen from "./screens/Explore/ExploreScreen";
import Upgrade from "./screens/Upgrade/Upgrade";
import ProfileScreen from './screens/Account/ProfileScreen'
import LoginScreen from "./screens/Login/LoginScreen";
import Library from "./screens/Library/Library";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LibraryScreen from "./screens/Library/Library";
const Tab = createBottomTabNavigator();

function BottomTabs() {
   return (
      <Tab.Navigator screenOptions={{
         tabBarStyle: {
            backgroundColor: "rgba(0,.0,0,0.5)",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            shadowOpacity: 4,
            elevation: 4,
            shadowOffset: {
               width: 0,
               height: -4
            },
            borderTopWidth: 0
         }
      }} >
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarLabel: "Home",
               headerShown: false,
               tabBarLabelStyle: { color: "white" },
               tabBarIcon: ({ focused }) =>
                  focused ? (<Entypo name="home" size={24} color="white" />) : (<AntDesign name="home" size={24} color="white" />)
            }}
         />
         <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
               tabBarLabel: "Explore",
               headerShown: false,
               tabBarLabelStyle: { color: "white" },
               tabBarIcon: ({ focused }) =>
                  focused ? (<Ionicons name="ios-compass-sharp" size={28} color="white" />) : (<Ionicons name="ios-compass-outline" size={28} color="white" />)
            }}
         />
         <Tab.Screen
            name="Library"
            component={LibraryScreen}
            options={{
               tabBarLabel: "Library",
               headerShown: false,
               tabBarLabelStyle: { color: "white" },
               tabBarIcon: ({ focused }) =>
                  focused ?  (<MaterialCommunityIcons name="music-box-multiple" size={24} color="white" />) : (<MaterialCommunityIcons name="music-box-multiple-outline" size={24} color="white" />)
            }}
         />
         <Tab.Screen
            name="Upgrade"
            component={Upgrade}
            options={{
               tabBarLabel: "Upgrade",
               headerShown: false,
               tabBarLabelStyle: { color: "white" },
               tabBarIcon: ({ focused }) =>
                  focused ? (<FontAwesome name="play-circle" size={26} color="white" />) : (<Feather name="play-circle" size={26} color="white" />)
            }}
         />
         <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
               tabBarLabel: "Profile",
               headerShown: false,
               tabBarLabelStyle: { color: "white" },
               tabBarIcon: ({ focused }) =>
                  focused ? (<Ionicons name="person" size={24} color="white" />) : (<Ionicons name="person-outline" size={24} color="white" />)
            }}
         />
         
      </Tab.Navigator>
   );
}
const Stack = createNativeStackNavigator();
function Navigation() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Explore" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Upgrade" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Library" component={BottomTabs} options={{ headerShown: false }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
export default Navigation;


