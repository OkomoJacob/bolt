import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EastScreen", //Change in future
    },
];

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            //Add key to tell react what specifically to render when asked to
            keyExtractor = {(item) => item.id}
            renderItem={({ item }) => (
                // Opacity changes on touch
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain"}}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
      />
    );
}

export default NavOptions