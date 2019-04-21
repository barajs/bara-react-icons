import { useBarn } from 'bara'
import { BaraProvider, Touchable, View, Text, TouchableOpacity } from 'bara-react'
import React, { Component, ReactNode, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { WelcomeText } from './examples/components/WelcomeText'
import { MaterialIcons as Icon, Octicons } from './lib'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
})

const App = () => {
  const [version, setVersion] = useState('0.0.0')

  useEffect(() => {
    useBarn('version', newVersion => {
      setVersion(newVersion)
    })
  }, [version])

  return (
    <BaraProvider>
      <View style={styles.view}>
        <Text name="version">
          Version: {version}</Text>
        <View style={styles.button}>
          <Touchable name="welcome-button">
            <Text>Material Icons</Text>
            <Icon name="star" size={30} />
            <Icon name="accessible" size={30} />
            <Icon name="stop" size={30} />
            
          </Touchable>
        </View>
        <View style={styles.button}>
          <TouchableOpacity name="greet-button">
            <Text>Octicons</Text>
            <Text>gear</Text>
            <Octicons name="gear" size={30} />
            <Text>chevron-right</Text>
            <Octicons name="chevron-right" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <WelcomeText />
        </View>
      </View>
    </BaraProvider>
  )
}

export default App
