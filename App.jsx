import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-start p-20">
      <View className="w-80 h-16 bg-emerald-400 rounded-lg -top-10">
        <View className="flex-row">
          <Image className ="w-10 h-10 top-3 left-3 rounded-full" source={require("./assets/penguindp.jpeg")} ></Image>
          <Text className="text-left left-4 top-4 text-3xl font-extrabold ">HikeMate</Text>
        </View>
      </View>
      <View className="w-screen">        
          <Image className ="w-full h-52 -top-7 rounded-sm " resizeMode="contain" source={require("./assets/image1.png")} ></Image>
        </View>
        <View className= "right-32 -top-7">
          <Text className=" text-left text-2xl font-extrabold">Activity</Text>
        </View>
      <View className="flex-row top-4">
        <View className="w-20 h-20 bg-emerald-200 rounded-lg -top-10 mr-1 "></View>
        <View className="w-20 h-20 bg-emerald-200 rounded-lg -top-10 mr-1 "></View>
        <View className="w-20 h-20 bg-emerald-200 rounded-lg -top-10 mr-1 "></View>
        <View className="w-20 h-20 bg-emerald-200 rounded-lg -top-10 mr-1 "></View>
      </View>
    </View>
  );
}

