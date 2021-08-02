import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { Avatar, Title, Text, Caption, Paragraph, Drawer, TouchableRipple, Switch, Image } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function DrawerContain(props) {

    const [isDarkTheme, setIsDarkTheme]=React.useState(false);
    const ToggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#c5ccb4' }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerCont}>
                    <View style={styles.userInfoSection, styles.userinfoBorderColor, { backgroundColor: '#fff' }}>
                        {/* userAvater */}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image style={styles.image} source={require('../image/avatar.png')} />
                            <View style={{ paddingLeft: 15, marginTop: 10, flexDirection: 'column' }}>
                                <Title style={styles.title}>Shuvo PAl</Title>
                                <Caption style={styles.caption}>Shuvo@gmail.com</Caption>
                            </View>
                        </View>
                        {/* userParagraph */}
                        <View style={styles.row}>
                            <View style={styles.followsection}>
                                <Paragraph style={styles.paragrap}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.followsection}>
                                <Paragraph style={styles.paragrap}>40</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawersection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='home-outline' color={color} size={size} />
                            )}
                            label='Home'
                            style={styles.draweritem}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='account-outline' color={color} size={size} />
                            )}
                            label='Profiles'
                            style={styles.draweritem}
                            onPress={() => {props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='bookmark-outline' color={color} size={size} />
                            )}
                            label='About'
                            style={styles.draweritem}
                            onPress={() => {props.navigation.navigate('About') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='message-settings-outline' color={color} size={size} />
                            )}
                            label='Settings'
                            style={styles.draweritem}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='message-settings-outline' color={color} size={size} />
                            )}
                            label='Settings'
                            style={styles.draweritem}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='message-settings-outline' color={color} size={size} />
                            )}
                            label='Settings'
                            style={styles.draweritem}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='message-settings-outline' color={color} size={size} />
                            )}
                            label='Settings'
                            style={styles.draweritem}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name='account-check-outline' color={color} size={size} />
                            )}
                            label='Support'
                            style={styles.draweritem}
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferance" >
                        <TouchableRipple onPress={()=>{ToggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch color="green" value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name='logout' color={color} size={size} />
                    )}
                    label='Sign Out'
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}
const styles = StyleSheet.create({
    DrawerCont: {
        flex: 1,
    },
    draweritem:{
        backgroundColor:'#7ba318',
    },
    image: {
        borderWidth: 2,
        borderColor: 'red',
        height: 80,
        width: 100,
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingTop: 5
    },
    title: {
        fontWeight: '600',
        marginBottom: 0,
    },
    caption: {
        marginTop: 0,
        fontSize: 15
    },
    userinfoBorderColor: {
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
    },
    followsection: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 10
    },
    paragrap: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    userInfoSection: {
        paddingLeft: 15,
    },
    drawersection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
});
export default DrawerContain;