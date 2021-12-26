import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Result = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    source={{ uri: 'https://d24uab5gycr2uz.cloudfront.net/uploads/white_theme/images/quiz-img.png' }}
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: 'white'
    },
    banner: {
        height: 300,
        width: 300,

    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
