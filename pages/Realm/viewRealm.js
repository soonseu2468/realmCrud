/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Realm from 'realm';
import 'react-native-gesture-handler';

let realm;

export default class viewTopic extends React.Component {
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

  _onPressButton(title, subtitle, description, topic_id, image) {
    this.props.navigation.navigate('realmDescription', {

      Title: title,
      Subtitle: subtitle,
      Description: description,
      Id: topic_id,
      Image: image

    })
    console.log(`${Image} is being onclick`)
  }

  render() {
    return (
      <View>

        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this._onPressButton.bind(this, item.title, item.subtitle, item.description, item.topic_id, item.image)}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 150, height: 150 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>
                    Title:{item.title}
                  </Text>
                  <Text numberOfLines={3} style={styles.sub}>
                    Subtitle:{item.subtitle}
                  </Text>
                </View>
              </View>
              <Text numberOfLines={2} style={styles.des}>
                Description:{item.description}
              </Text>
            </TouchableOpacity>
          )}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  sub: {
    fontSize: 25,
    color: 'red',
    margin: 5,
    flex: 1

  },
  title: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 5,
    flex: 1

  },
  des: {
    fontSize: 20,
    color: 'orange',
    flex: 1,
    margin: 5

  },

})