/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, Image,TouchableOpacity ,Alert} from 'react-native';
import Realm from 'realm';
import 'react-native-gesture-handler';

let realm;
 
export default class ListUser extends React.Component {
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
 
  componentDidMount(){
 
    // Received Details Sent From Previous Activity and Set Into State.
    this.setState({ 
      Name : this.props.navigation.state.params.Name,
      Contact: this.props.navigation.state.params.Contact,
      Address: this.props.navigation.state.params.Address,
      Id: this.props.navigation.state.params.Id
    })

   }
   


  render() {

    return (
        <View>
        <Text 
              value={this.state.Name}
              underlineColorAndroid = "transparent" 
            />
        <Text
              value={this.state.Contact}
              underlineColorAndroid = "transparent" 
            />
        <Text
              value={this.state.Address}
              underlineColorAndroid = "transparent" 
            />      
      </View>
    );
  }
}