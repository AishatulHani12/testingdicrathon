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
                        <View className="-top-28 justify-end">
                            <Text className=" right-32 text-2xl font-extrabold">Reviews</Text>
                        </View>
                    </View>
                    <View className="w-screen items-center">
                        <Image className="w-80 h-60 -top-24 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image>
                    </View>
                    <View className="items-start">
                        <Text className="-top-24 left-9 font-bold text-lg">Broga Hill Park </Text>
                        <Text className="-top-24 left-9 ">Semenyih, Selangor</Text>
                        <Text className="-top-24 left-9">⭐ 4.6 • Moderate • 3.2km • Est. 1h 26m </Text>
                    </View>
                    <View className="-top-16 justify-end">
                        <Text className="left-4 text-2xl font-extrabold">Popular</Text>
                    </View>
                    <View className="w-screen items-center">
                        <Image className="w-80 h-60 -top-12 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/MK1.jpg")} ></Image>
                    </View>
                    <View className="items-end">
                        <Text className="-top-10 right-9 font-normal bg-teal-800 rounded-md text-sm"> View More </Text>
                    </View>
                    <View className="items-start">
                        <Text className="-top-16 left-9 font-bold text-lg">Mount Kinabalu </Text>
                        <Text className="-top-16 left-9">Ranau,Sabah</Text>
                        <Text className="-top-16 left-9">⭐ 4.9 (2138) • Hard • 22.4km • Est. 187days </Text>
                    </View>
                    <View className="w-screen items-center">
                        <Image className="w-80 h-60 -top-12 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image>
                    </View>
                    <View className="items-end">
                        <Text className="-top-10 right-9 font-normal bg-teal-800 rounded-md text-sm"> View More </Text>
                    </View>
                    <View className="items-start">
                        <Text className="-top-16 left-9 font-bold text-lg">Penang Hill Heritage</Text>
                        <Text className="-top-16 left-9">Penang Hill</Text>
                        <Text className="-top-16 left-9">⭐ 4.7 (145) • Hard • 5.1km • Est. 3h 19m </Text>
                    </View>
                    <View className="-top-12 justify-end">
                        <Text className="left-4 text-2xl font-extrabold">State</Text>
                    </View>

                    <View className="w-screen flex-row">
                        <View>
                            <Image className="w-40 h-40 -top-8 left-4 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image>
                            <Text className="text-lg text-center text-gray-50 -top-32 font-extrabold ml-10">Perak</Text>
                            </View>
                            <View>
                        <Image className="w-40 h-40 -top-8 left-4 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image>
                        <Text className="text-lg text-center text-gray-50 -top-32 font-extrabold ml-10">Penang</Text>
                    </View>
                        <Image className="w-40 h-40 -top-8 left-4 rounded-2xl bg-black ml-2 " resizeMode="contain" source={require("../assets/rc1.jpg")} ></Image>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Recommendation
