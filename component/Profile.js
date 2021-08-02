import React, { Component } from 'react';
import {View, Text,Button} from 'react-native'


class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Component</Text>
                {/* <Button title="Go To Home" onPress={()=>{navigation.navigate('Profile')}} /> */}
            </View>
        );
    }
}

export default Profile;