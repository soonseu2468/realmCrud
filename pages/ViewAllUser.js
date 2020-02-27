/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, Image,TouchableOpacity ,Alert} from 'react-native';
import Realm from 'realm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

let realm;
 
export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'UserDatabase.realm' });
    var user_details = realm.objects('user_details');
    this.state = {
      FlatListItems: user_details,
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };

  _onPressButton(user_name,user_address,user_contact,user_id) {
    //  Alert.alert((user_name),user_address);
    this.props.navigation.navigate('List',{ 
 
      Name : user_name,
      Address : user_address,
      Contact : user_contact,
      Id : user_id,
 
    }) 
    console.log(`${user_address} ${user_contact}is being onclick`)
  }

  render() {
    return (
      <View>
        
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this._onPressButton.bind(this,item.user_name,item.user_address,item.user_contact,item.user_id)}
            >
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.user_id}</Text>
              <Text>Name: {item.user_name}</Text>
              <Text>Contact: {item.user_contact}</Text>
              <Text>Address: {item.user_address}</Text>
              <Text>Image: {item.user_image}</Text>

              <View>
                    <Image style={{ width: 100, height: 100 }} backgroundColor={'black'} source={{ uri:item.user_image}} />
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
        
      </View>
    );
  }
}