/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Realm from 'realm';
let realm;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'topic_details',
          properties: {
            topic_id: { type: 'int', default: 0 },
            title: 'string',
            subtitle: 'string',
            description: 'string',
            image: 'string'
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="RealM Example" />
        <Mybutton
          title="Add new topic"
          customClick={() => this.props.navigation.navigate('addTopic')}
        />
        <Mybutton
          title="View All"
          customClick={() => this.props.navigation.navigate('viewTopic')}
        />
      </View>
    );
  }
}