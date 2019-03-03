import React, { Component } from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'

export default class DetailsContainer extends Component {
    gotoHome = () => {
        this.props.navigation.pop();
    }
  render() {
    return (
      <SafeAreaView>
        <Text> DetailsContainer </Text>
        <TouchableOpacity onPress={this.gotoHome}>
            <Text style={{ color: 'white', alignSelf: 'center',height: 50, paddingHorizontal: 20, backgroundColor: 'orange'}}>BackToHome</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
