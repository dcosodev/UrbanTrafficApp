import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TrafficFlowDetails from '../components/TrafficFlowDetails';
import { getTrafficFlow } from '../services/api';

const HomeScreen = () => {
  const [trafficFlowData, setTrafficFlowData] = useState([]);

  useEffect(() => {
    const fetchTrafficFlowData = async () => {
      try {
        const data = await getTrafficFlow();
        setTrafficFlowData(data);
      } catch (error) {
        console.error('Error fetching traffic flow data:', error);
      }
    };

    fetchTrafficFlowData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traffic Monitoring</Text>
      <FlatList
        data={trafficFlowData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TrafficFlowDetails flowData={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
