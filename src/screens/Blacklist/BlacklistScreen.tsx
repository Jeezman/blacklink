import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import BlacklistTables from "../../components/blacklistTables";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.",
]);
export default function BlacklistScreen() {
  return (
    <ScrollView>
      <View>
        <BlacklistTables />
      </View>
    </ScrollView>
  );
}
