import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native'
import MovieRow from './movieRow'
import { connect } from 'react-redux'

class movieHome extends Component {

    constructor(props) {
        super(props)
    }


    async SearchFilterFunction(text) {
        console.log(text)
        const { addMovies } = this.props
        const response = await fetch('http://www.omdbapi.com/?apikey=693c84e5&s=' + text + '')
        const data = await response.json()
        addMovies(data.Search)

    }

    render() {
        const { movies } = this.props
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Search here'
                    style={{ borderWidth: 0.5, margin: 5 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                />
                <FlatList
                    data={movies}
                    renderItem={({ item: movie }) => <MovieRow movie={movie} />}
                    keyExtractor={(movie) => movie.imdbID}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

function mapStateToProps(state) {
    return {
        movies: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovies: (movies) => dispatch({
            type: 'ADD_MOVIES',
            payload: { movies }
        }
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)
    (movieHome)