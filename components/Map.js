import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import MyButton from "./MyButton";
import { MapView } from 'expo';


class Map extends Component {
    static navigationOptions = {
        title: "Station location on map",
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
        };
    }



    render() {
        return (
            <View style={{ flex: 1 }}>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: this.props.navigation.state.params.latitude,
                        longitude: this.props.navigation.state.params.longitude,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude:this.props.navigation.state.params.latitude,
                            longitude: this.props.navigation.state.params.longitude,
                        }}
                        title={"MARKER "}
                        description={"Our checked station"}
                    />
                </MapView>


            </View>
        );
    }

}

const styles = StyleSheet.create({
    text: { fontSize: 48, }
});

export default Map;