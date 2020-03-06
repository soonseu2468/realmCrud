import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MovieRow from '../pages/movieRow'
import { connect } from 'react-redux'

class movieHome extends Component {

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const { addMovies } = this.props
        const response = await fetch('http://www.omdbapi.com/?apikey=693c84e5&s=batman')
        const data = await response.json()
        addMovies(data.Search)

    }

    render() {
        const { movies } = this.props
        return (
            <View style={styles.container}>
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(movieHome)