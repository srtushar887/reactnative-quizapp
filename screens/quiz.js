import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Quiz = ({ navigation }) => {
    const [question, setQuestion] = useState();
    const [quiz, setQuiz] = useState(0);

    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuestion(data.results);
    };

    useEffect(() => {
        getQuiz();
    }, [])
    return (
        <View style={styles.container}>
            {question && (
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <Text style={styles.question}>Q. Image this a really cool question</Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.option}>option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.option}>option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.option}>option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.option}>option 1</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.buttom}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Skip</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>End</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            }
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: 'white'
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    buttom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 28
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'

    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12
    },
    parent: {
        height: '100%'
    }
})
