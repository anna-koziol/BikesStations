import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, Image } from 'react-native';
import MyButton from "./MyButton";
import firebase from "firebase";

class Login extends Component {
    static navigationOptions = {
        title: "logowanie do Bikes in NY",
        headerStyle: {
            backgroundColor: "#FFC107",
        },
        headerTitleStyle: {
            color: "black"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            username: " ",
            password: "  ",
            errorMessage: " "
        };

    }

    clickLogin() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(() => "nawiguj do ekranu logowania")
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    navigateRegister() {
        this.props.navigation.navigate("s3");
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.banner}>
                    <Image
                        key={'xxxx'}
                        source={require('./bicycle.png')}
                        style={{ flex: 1, height: 200, width: 'auto', alignSelf: "center", resizeMode: 'contain' }}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ marginLeft: 10, marginTop: 15 }}>Mail</Text>
                    <TextInput
                        style={{ height: 50, margin: 10, marginTop: 10, marginBottom: 10 }}
                        placeholder="Type username"
                        onChangeText={(username) => this.setState({ username })}
                    />

                    <Text style={{ marginLeft: 10 }}>Password</Text>
                    <TextInput
                        style={{ height: 50, margin: 10, marginTop: 10, marginBottom: 10 }}
                        placeholder="Type password"
                        onChangeText={(password) => this.setState({ password })}
                    />


                    <View style={styles.banner1}>
                        <Text style={{ flex: 1, textAlign: 'center', flexDirection: 'row', fontSize: 10, color: '#D32F2F' }} >
                            {this.state.errorMessage}
                        </Text>
                        <MyButton tekst="ZALOGUJ SIĘ" funkcja={() => this.clickLogin()} />
                        <MyButton tekst="NIE MASZ KONTA? ZAREJESTRUJ SIĘ " funkcja={() => this.navigateRegister()} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        alignContent: 'center'
    },
    banner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    banner1: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center'
    },


});

export default Login;