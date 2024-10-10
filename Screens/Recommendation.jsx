import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

export class Recommendation extends Component {
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
                        <Image className="w-full h-60 rounded-sm ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image>
                        <Text className="text-5xl text-center text-gray-50 -top-44 font-extrabold ml-5">What is Today's Exploring</Text>
                    </View>
                    <View className="items-center">
                        <View className="-top-32 bg-white w-72 h-14 rounded-full">
                            <Image className="w-8 h-8 top-3 left-3 rounded-full" source={require("../assets/search1.png")} ></Image>
                            <Text className="left-14 text-slate-400 -top-4 text-sm font-normal">Search by city, trail, park </Text>
                        </View>
                        <View className="-top-24 justify-end">
                            <Text className=" right-32 text-2xl font-extrabold">Reviews</Text>
                        </View>
                    </View>
                    <View className="w-screen items-center">
                        <Image className="w-80 h-60 -top-28 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image></View>
                </ScrollView>
            </View>
        )
    }
}

export default Recommendation
