import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { BlacklistTable } from '../../components/blacklistTable';

export default function BlacklistScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <BlacklistTable/>
    </View>    
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //padding: 16,
    //paddingTop: 100,
    backgroundColor: '#fff',
  },
  cell: {
    borderBottomWidth: 1,
    borderColor: '#000',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    paddingTop:5,
    paddingBottom:5, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellText: {
    fontSize: 14
  },
});