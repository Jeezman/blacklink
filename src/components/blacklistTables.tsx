// App.js

import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, FlatList,ScrollView } from 'react-native';
import MOCK_DATA from './MOCK_DATA.json';


const BlacklistTables = () => {
 const [data, setData]=useState(useMemo(() => MOCK_DATA, []))

 
    return (
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <View style={styles.tableWrapper}>
            <Text style={styles.firstHeader}>No.</Text>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.header}>Phone Number</Text>
            <Text style={styles.header}>Telegram Name</Text>
            <Text style={styles.header}>Comments</Text>
          </View>
          <FlatList 
          data={data}
          renderItem={({item}) =>
          <View style={styles.tableWrapper}>
            <Text style={styles.firstRow}>{item.No}</Text>
            <Text style={styles.row}>{item.name}</Text>
            <Text style={styles.row}>{item.phone_number}</Text>
            <Text style={styles.row}>{item.telegram_name}</Text>
            <Text style={styles.row}>{item.comments}</Text>
          </View>
        }
          >
            
          </FlatList>
        </View>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',

    //padding: 5 
  },
  tableWrapper: {
    flexDirection:'row',
    //flexWrap: 'wrap',
    borderBottomWidth:1,
    width: '100%',
    flexGrow:0,
  },
  row: {
    flex:1,
    fontSize:12,
    paddingHorizontal:5,
    paddingVertical: 10,
    flexShrink:0,
    //justifyContent:'center',
    //alignItems: 'center',
    //paddingStart:15,
  },
  firstRow: {
    flex:1,
    fontSize:12,
    paddingHorizontal:5,
    paddingVertical: 10,
    flexShrink:0,
    textAlign: 'left',
    paddingStart:15,
  },
  firstHeader: {
    fontWeight: 'bold',
    flex:1,
    fontSize:12,
    paddingHorizontal:5,
    paddingVertical: 10,
    paddingStart:15,
  },

  header: {
    fontWeight: 'bold',
    flex:1,
    fontSize:12,
    paddingHorizontal:5,
    paddingVertical: 10,
  }
});

export default BlacklistTables