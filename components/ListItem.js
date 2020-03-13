import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.showMap = this.showMap.bind(this);
    }

    showMap() {
        this.props.map(this.props.data.latitude, this.props.data.longitude)
    }


    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                padding: 10,
                margin: 10,
                borderWidth: 2,
                borderColor: '#1976D2',
                elevation: 2,
            }}>
                <Text style={{ flex: 1, color: "#1976D2", fontWeight: 'bold', fontSize: 15 }}>{this.props.data.stationName}</Text>

                <View style={{
                    flex: 1, flexDirection: 'row'
                }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text>latitude: {this.props.data.latitude}</Text>
                        <Text>longitude: {this.props.data.longitude}</Text>
                        <Text>razem stacji: {this.props.data.availableBikes}</Text>
                    </View>


                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 1 }}>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: this.props.data.availableBikes, backgroundColor: '#212121' }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>R</Text>
                                </View>
                                <View style={{ flex: this.props.data.availableDocks, backgroundColor: '#BDBDBD' }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>S</Text>
                                </View>
                            </View>

                            <View>
                                {
                                    this.props.data.statusValue == 'In Service' ?
                                        <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#FFC107', color: 'white', fontWeight: 'bold', fontSize: 18 }}>W SERWISE</Text>
                                        :
                                        <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold', fontSize: 18 }}>DOSTĘPNA</Text>
                                }
                            </View>

                        </View>

                    </View>


                </View>

                    <TouchableOpacity key={2} onPress={() => this.showMap()} style={{ flex: 1 }} >
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>MAPA</Text>
                    </TouchableOpacity >

            </View>

        );
    }
}



export default ListItem;