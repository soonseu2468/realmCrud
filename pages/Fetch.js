import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, Image, TextInput  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://www.omdbapi.com/?apikey=693c84e5&s=harry')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Search,
        }, function(){
          this.arrayholder = responseJson.Search;
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000',margin:5 }} />
    );
  };

  _onPressButton(Title, Year, Type, Poster ,imdbID) {
    this.props.navigation.navigate('topicDescription', {

      movieTitle: Title,
      movieYear: Year,
      movieType: Type,
      movieId: imdbID,
      moviePoster: Poster,
    })
    console.log(imdbID,"has been click")
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.Title ? item.Title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return(
      <View>
         <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here By Title"
          autoFocus
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this._onPressButton.bind(this, item.Title, item.Year, item.Type, item.Poster, item.imdbID)}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: item.Poster }}
                  style={{ width: 150, height: 150 , borderRadius: 50 / 3, margin:5 }}
                />
                <View style={{ flex: 1 }}>
                  <Text numberOfLines={3} style={styles.title}>
                    {item.Title}
                  </Text>
                  <Text numberOfLines={1} style={styles.sub}>
                    Year:{item.Year}
                  </Text>
                </View>
              </View>
              <Text numberOfLines={2} style={styles.des}>
                Type:{item.Type}
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
    fontSize: 30,
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
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#c1ecf4',
    backgroundColor: '#FFFFFF',
    margin:5
  },

})
