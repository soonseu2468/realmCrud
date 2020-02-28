/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, Image, KeyboardAvoidingView, Alert } from 'react-native';
import Realm from 'realm';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import Mybutton from './components/Mybutton';

let realm;

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      description: '',
      image: ''

    };
    realm = new Realm({ path: 'UserDatabase.realm' });
  }

  register_user = () => {
    var that = this;
    const { title } = this.state;
    const { subtitle } = this.state;
    const { description } = this.state;
    const { image } = this.state;
    if (title) {
      if (subtitle) {
        if (description) {
          if (image) {
            realm.write(() => {
              var ID =
                realm.objects('topic_details').sorted('topic_id', true).length > 0
                  ? realm.objects('topic_details').sorted('topic_id', true)[0]
                    .topic_id + 1
                  : 1;
              realm.create('topic_details', {
                title_id: ID,
                title: that.state.title,
                subtitle: that.state.subtitle,
                description: that.state.description,
                image: that.state.image.uri,
              });
              console.log(this.state.image.uri)
              Alert.alert(
                'Success',
                'You are registered successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => that.props.navigation.navigate('HomeScreen'),
                  },
                ],
                { cancelable: false }
              );
            });
          } else {
            alert('Please fill Image')
          }
        } else {
          alert('Please fill Description');
        }
      } else {
        alert('Please fill Subtitle');
      }
    } else {
      alert('Please fill Title');
    }
  };

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          image: source,
        });
      }
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <TextInput
              style={{ fontSize: 40, margin: 10 }}
              placeholder="Title"
              onChangeText={title => this.setState({ title })}
            />
            <TextInput
              style={{ fontSize: 30, flex: 1, margin: 10 }}
              placeholder="Subtitle"
              onChangeText={subtitle => this.setState({ subtitle })}
              numberOfLines={3}
              multiline={true}
            />
            <TextInput
              placeholder="Description"
              onChangeText={description => this.setState({ description })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top', fontSize: 25, margin: 10 }}
            />
            <Image
              source={{
                uri: 'data:image/jpeg;base64,' + this.state.image.data,
              }}
              style={{ flex: 1, width: 250, height: 250, margin: 10 }}
            />

          </KeyboardAvoidingView>
        </ScrollView>
        <Mybutton title="Choose File" customClick={this.chooseFile.bind(this)} />

        <Mybutton
          title="Submit"
          customClick={this.register_user.bind(this)}
        />

      </View>
    );
  }
}

