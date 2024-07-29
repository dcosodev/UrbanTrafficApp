import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrafficFlowDetails = ({ flowData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traffic Flow Details</Text>
      <Text>Street: {flowData.street}</Text>
      <Text>Vehicles per hour: {flowData.vehiclesPerHour}</Text>
      <Text>Time: {flowData.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TrafficFlowDetails;
