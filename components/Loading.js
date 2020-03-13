import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator, ToastAndroid } from 'react-native';
import { Font, Location, Permissions } from 'expo';
import { AsyncStorage } from "react-native";
import MyButton from "./MyButton";
import firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAjuEtvVlA_CTrcikfRklNYt-RSsqghssU",
    authDomain: "koziol4ia2.firebaseapp.com",
    databaseURL: "https://koziol4ia2.firebaseio.com",
    projectId: "koziol4ia2",
    storageBucket: "koziol4ia2.appspot.com",
    messagingSenderId: "74905134944"
};
firebase.initializeApp(config);


class Loading extends Component {
    static navigationOptions = {
        header: null,
        title: "SUPER APKA",
        headerStyle: {
            backgroundColor: "#000000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            data: " ",
            number: 0,
            fontloaded: false,
        };

    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            // jeśli nie istnieje - wtedy przechodzimy do ekranu logowania
            if (user == null) {
                this.props.navigation.navigate("s2");
            }
            // jeśli user istnieje, wtedy przechodzimy do wyświetlenia ekranu z listą danych pobranych z bazy firebase
            else {
                ToastAndroid.showWithGravity(
                    'Zalogowano',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
                this.props.navigation.navigate("s5", { mail: user.email })
            }
        })
    }

    navigateTo2() {
        this.props.navigation.navigate("s2");
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </View>

        );
    }
}


export default Loading;