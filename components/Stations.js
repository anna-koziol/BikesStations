import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, Image, ActivityIndicator, YellowBox, ToastAndroid } from 'react-native';
import MyButton from "./MyButton";
import ListItem from "./ListItem";
import firebase from "firebase";


// YellowBox.ignoreWarnings(['Setting a timer']);
// const _console = _.clone(console);
// console.warn = message => {
//     if (message.indexOf('Setting a timer') <= -1) {
//         _console.warn(message);
//     }
// };

class Stations extends Component {
    static navigationOptions = {
        title: "bikes stations in NY",
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
            errorMessage: " ",
            data: [],
            load: false
        };
        this.stations = this.getFirebase().child("stations_big")
        this.map = this.map.bind(this);
    }

    componentDidMount() {
        this.stations.on("value", (elements) => {
            //console.log(elements)
            var helper = [];
            // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
            elements.forEach((item) => {
                var it = JSON.stringify(item);
                var item = JSON.parse(it);
                var station = {
                    'stationName': item['stationName'],
                    'latitude': item['latitude'],
                    'longitude': item['longitude'],
                    'totalDocks': item['totalDocks'],
                    'statusValue': item['statusValue'],
                    "availableBikes": item['availableBikes'],
                    "availableDocks": item['availableDocks'],
                };
                helper.push(station);
            })
            //state
            this.setState({
                data: helper,
                load: true
            })

            console.log(this.state.data)
        })

    }

    getFirebase() {
        return firebase.database().ref()
    }

    mainPage() {
        this.props.navigation.navigate("s1");
    }

    map(latitude, longitude) {
        this.props.navigation.navigate("s6", { latitude: latitude, longitude: longitude });
    }

    _renderItem = ({ item }) => (
        <ListItem key={item.id} data={item} map={this.map}> </ListItem>
    );

    LogOut() {
        firebase.auth()
            .signOut()
            .then(() =>
                ToastAndroid.showWithGravity(
                    'Wylogowano',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                ))
            .catch((error) => alert(error))
    }

    render() {
        return (
            this.state.load ?
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#212121", textAlign: "center", fontSize: 20, fontWeight: "bold", marginTop: 15 }}>Witaj: {this.props.navigation.state.params.mail}</Text>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                            <MyButton tekst="MAIN PAGE" funkcja={() => this.mainPage()} />
                            <MyButton tekst="LOG OUT" funkcja={() => this.LogOut()} />
                        </View>
                    </View>

                    <View style={{ flex: 5, flexDirection: "row", justifyContent: "space-around" }}>
                        <FlatList
                            data={
                                this.state.data
                            }
                            key={Math.random()}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
                :
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#212121", textAlign: "center", fontSize: 20, fontWeight: "bold", marginTop: 15 }}>Witaj: {this.props.navigation.state.params.mail}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#536DFE" />
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

export default Stations;