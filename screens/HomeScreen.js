/* React functional component */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';


const HomeScreen = () =>{
    return (
        <SafeAreaView style={tw`bg-red-900 h-full`}>
            <Text style={tw`text-red-500 p-10`}>I am HomeScreen</Text>
        </SafeAreaView>
    );
};

export default HomeScreen
const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
