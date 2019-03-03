import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RootRoute from './AppRoutes/RootRoute';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex:1,  backgroundColor: 'white'}}>
        <RootRoute />
      </View>
    )
  }
}
