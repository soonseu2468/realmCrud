/*Screen to view all the user*/
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Realm from 'realm';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

let realm;

export default class topicDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // Received Details Sent From Previous Activity and Set Into State.
        this.setState({
            moviePoster: this.props.navigation.state.params.moviePoster,
            movieId: this.props.navigation.state.params.movieId,
            movieTitle: this.props.navigation.state.params.movieTitle,
            movieYear: this.props.navigation.state.params.movieYear,
            movieType: this.props.navigation.state.params.movieType,
            
        })
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', height: 200, margin: 10, alignItems: 'stretch', }}>
                        <Image
                            source={{ uri: this.state.moviePoster }}
                            style={{ width: 370, height: 220 }} />
                    </View>
                    <Text style={styles.destitle}>{this.state.movieTitle}</Text>
                    <View style={{ margin: 10 }}>
                        <Text style={styles.dessub}>Year: {this.state.movieYear}</Text>
                    </View>
                    <Text style={styles.desdes}>Type: {this.state.movieType}</Text>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    dessub: {
        fontSize: 35,
        color: 'orange'
    },
    destitle: {
        color: 'orange',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    },
    desdes: {
        fontSize: 30,
        color: 'blue',
        margin: 10
    },
    img: {
        height: 150,
        width: 150,
        backgroundColor: 'red',
    },


})