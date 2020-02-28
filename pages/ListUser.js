/*Screen to view all the user*/
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Realm from 'realm';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

let realm;

export default class ListUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
        realm = new Realm({ path: 'UserDatabase.realm' });
        var topic_details = realm.objects('topic_details');
        this.state = {
            FlatListItems: topic_details,
        };
    }
    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
        );
    };
    componentDidMount() {

        // Received Student Details Sent From Previous Activity and Set Into State.

        this.setState({
            topicId: this.props.navigation.state.params.topic_id,
            topicTitle: this.props.navigation.state.params.Title,
            topicSubtitle: this.props.navigation.state.params.Subtitle,
            topicDescription: this.props.navigation.state.params.Description,
            topicImage: this.props.navigation.state.params.Image
        })

    }


    render() {

        return (
            <View>
                <ScrollView>

                    <View style={{ flexDirection: 'row', height: 200, margin: 10, alignItems: 'stretch', }}>
                        <Image
                            source={{ uri: this.state.topicImage }}
                            style={{ width: 250, height: 220 }}
                        />
                    </View>
                    <Text style={styles.destitle}>Title: {this.state.topicTitle}</Text>
                    <View style={{ margin: 10 }}>
                        <Text style={styles.dessub}>Subtitle: {this.state.topicSubtitle}</Text>
                        <Text style={styles.dessub}>Subtitle: {this.state.topicSubtitle}</Text>
                        <Text style={styles.dessub}>Subtitle: {this.state.topicSubtitle}</Text>
                    </View>
                    <Text style={styles.desdes}>Description: {this.state.topicDescription}</Text>
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
        fontSize: 50,
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