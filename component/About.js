import React, { Component } from 'react';
import {View, Text,} from 'react-native'

class About extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'green', alignItems: 'center', justifyContent: 'center' }}>
                <Text>About Component</Text>
            </View>
        );
    }
}

export default About;