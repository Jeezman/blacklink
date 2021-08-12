import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function BlacklistScreen() {
  return (
    <View style={styles.container}>
      <Grid>
        <Col size={10}>
          <Row style={styles.cell}>
            <Text>No.</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>2</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>3</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>4</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>5</Text>
          </Row>
        </Col>
        <Col size={20}>
        <Row style={styles.cell}>
            <Text>Name</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Chris Okoye</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Anna Adebisi</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Roseline Emmanuel</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Tunde Abayomi</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Yusuf Abubakar</Text>
          </Row>
        </Col>
        <Col size={25}>
        <Row style={styles.cell}>
            <Text>Phone Number</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>08053323912</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>07054327189</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>08165282375</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>09045321870</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>08095421348</Text>
          </Row>
        </Col>
        <Col size={20}>
        <Row style={styles.cell}>
            <Text>Telegram Comments</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Chris Okoye</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Anna Adebisi</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Roseline Emmanuel</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Tunde Abayomi</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Yusuf Abubakar</Text>
          </Row>
        </Col>
        <Col size={25}>
        <Row style={styles.cell}>
            <Text style={styles.cellText}>Comments</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>He doesn't confirm payments on time</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>She doesn't confirm payments on time</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>She hardly picks her calls</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>He doesn't confirm payments on time</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>He doesn't confirm payments on time</Text>
          </Row>
        </Col>
      </Grid>
    </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellText: {
    fontSize: 14
  },
});