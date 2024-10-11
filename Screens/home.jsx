import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Pressable } from 'react-native'
import Slideshow from 'react-native-image-slider-show'

export class Home extends Component {
  render() {
    return (
      <View className="flex-1 items-center justify-start py-10 ">
        <ScrollView className="-mx-20 pl-46 -top-10" >
          <View className="w-screen h-16 bg-emerald-700 rounded-lg ml-2">
            <View className="flex-row">
              <Image className="w-10 h-10 top-3 left-3 rounded-full" source={require("../assets/penguindp.jpeg")} ></Image>
              <Text className="text-left left-4 top-4 text-3xl font-extrabold ">HikeMate</Text>
            </View>
          </View>
        
          <View className="w-screen">
            <Image className="w-full h-52 rounded-sm ml-2 " resizeMode="contain" source={require("../assets/image1.png")} ></Image>
          </View>
          <View className="ml-5">
            <Text className=" text-2xl font-extrabold">Activity</Text>
          </View>
          <View className="flex-row top-4 left-1 ml-4">
            <View className="w-20 h-20 bg-emerald-600 rounded-lg  mr-1 ">
              <Pressable onPress={() => Alert.alert('Pressed')}>
                <Image className="w-10 h-10 top-5 left-5 rounded-full" source={require("../assets/penguindp.jpeg")} ></Image>
              </Pressable>
            </View>

            <View className="w-20 h-20 bg-emerald-600 rounded-lg  mr-1 ">
              <Pressable onPress={() => Alert.alert('Pressed')}>
                <Image className="w-10 h-10 top-5 left-5 rounded-full" source={require("../assets/penguindp.jpeg")} ></Image>
              </Pressable>
            </View>
            <View className="w-20 h-20 bg-emerald-600 rounded-lg  mr-1 ">
              <Image className="w-10 h-10 top-5 left-5 rounded-full" source={require("../assets/penguindp.jpeg")} ></Image>
            </View>
            <View className="w-20 h-20 bg-emerald-600 rounded-lg mr-1 ">
              <Image className="w-10 h-10 top-5 left-5 rounded-full" source={require("../assets/penguindp.jpeg")} ></Image>
            </View>
          </View>
          <View className="top-4 flex-row right-4">
            <Text className="text-center left-6 w-24 text-sm font-normal">Hike</Text>
            <Text className="text-center left-8 w-16 mr-4 text-sm font-normal">Camp</Text>
            <Text className="text-center left-5 w-24 text-sm font-normal">Trails</Text>
            <Text className="text-center left-2 w-24 text-sm font-normal">Outdoor Activities</Text>
          </View>
          <View className="top-7 ml-5">
            <Text className=" text-left text-2xl font-extrabold">Reviews</Text>
          </View>
          <View className="flex-row  ">
            <Image className="w-10 h-10 left-6 top-10 rounded-full" source={require("../assets/penguindp.jpeg")} ></Image>
          </View>
          <View className=" left-20 w-64">
            <Text className="text-sm font-semibold">Lisa Racher</Text>
            <Text className="text-sm font-normal text-gray-500">Mount Kinabalu is one of the most popular hiking destinations in Sabah.</Text>
          </View>
          <View className="flex-row justify-start ">
            <Image className="w-48 h-48 top-3 ml-6 rounded-md" source={require("../assets/penguindp.jpeg")} ></Image>
            <Image className="w-32 h-24 top-3 ml-2 rounded-md" source={require("../assets/penguindp.jpeg")} ></Image>
          </View>
          <View className=" justify-center left-52 -top-20 ">
            <Image className="w-32 h-24  ml-4  rounded-md" source={require("../assets/penguindp.jpeg")} ></Image>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Home
