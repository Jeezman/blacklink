// App.js

import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { createBlacklist } from "../redux/actions";
import MOCK_DATA from "./MOCK_DATA.json";

const BlacklistTables = () => {
  //const [data, setData]=useState(useMemo(() => MOCK_DATA, []))

  const blackLists = useSelector((state: any) => state.list.blackList);

  const ListHeader = () => {
    //View to set in Header
    return (
      <View style={styles.tableWrapper}>
        <Text style={styles.header}>Name</Text>
        <Text style={styles.header}>Phone Number</Text>
        <Text style={styles.header}>Telegram Name</Text>
        <Text style={styles.header}>Comments</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={blackLists}
        extraData={blackLists}
        keyExtractor={(x, i) => i.toString()}
        renderItem={(data) => (
          <View style={styles.tableWrapper}>
            {/*<Text style={styles.row}>{data.item.id}</Text>*/}
            <Text style={styles.row}>{data.item.username}</Text>
            <Text style={styles.row}>{data.item.phoneNumber}</Text>
            <Text style={styles.row}>{data.item.telegramName}</Text>
            <Text style={styles.row}>{data.item.comments}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",

    //padding: 5
  },
  tableWrapper: {
    flexDirection: "row",
    //flexWrap: 'wrap',
    borderBottomWidth: 1,
    width: "100%",
    flexGrow: 0,
  },
  row: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexShrink: 0,
    //justifyContent:'center',
    //alignItems: 'center',
    //paddingStart:15,
  },
  firstRow: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexShrink: 0,
    textAlign: "left",
    paddingStart: 15,
  },
  firstHeader: {
    fontWeight: "bold",
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingStart: 15,
  },

  header: {
    fontWeight: "bold",
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default BlacklistTables;
