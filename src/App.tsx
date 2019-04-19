import { useBarn } from 'bara'
import React, { useState, useEffect } from 'react'

import { StyleSheet } from 'react-native'

import { BaraProvider, View, Text } from 'bara-react'

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
        <Text name="version">Version: {version}</Text>
      </View>
    </BaraProvider>
  )
}

export default App
