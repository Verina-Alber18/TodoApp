import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function sandbox() {
    return (
        <View style={styles.bigContainer}>
            <View style={styles.containerOne}>
                <Text style={styles.boxOne}>One</Text>
                <Text style={styles.boxTwo}>Two</Text>
                <Text style={styles.boxThree}>Three</Text>
                <Text style={styles.boxFour}>Four</Text>
            </View>
            <View style={styles.containerTwo}>
                <Text style={styles.boxOne}>One</Text>
                <Text style={styles.boxTwo}>Two</Text>
                <Text style={styles.boxThree}>Three</Text>
                <Text style={styles.boxFour}>Four</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        backgroundColor: '#333',
    },
    containerOne: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#aaa',
    },
    containerTwo: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        paddingTop: 40,
        backgroundColor: '#777',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 2,
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        flex: 3,
        backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {
        flex: 4, //it determines the ratio that this box takes from row and it makes no free space in the row "stretches across the row"
        backgroundColor: 'skyblue',
        padding: 10,
    },
});
//EXPLANATION:
//these different properties give us control over how to display different components in rows and columns
//justifyContent determines how we display the different components on the main axis "the default is flex-start"
//flexDirection determines the main axis and the other will be cross axis "the default main axis is column"
//flex: 1 means to flex all the way down the screen "it is not the default"
//alignItems determines how we spread things out in the cross axis