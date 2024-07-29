import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getTrafficFlows } from '../services/api';

interface TrafficFlowData {
    id: number;
    street_name: string;
    vehicle_count: number;
}

const TrafficFlow = () => {
    const [data, setData] = useState<TrafficFlowData[]>([]);

    useEffect(() => {
        getTrafficFlows().then(response => {
            setData(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <View>
            <Text>Traffic Flow</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Text>{item.street_name}: {item.vehicle_count} vehicles</Text>
                )}
            />
        </View>
    );
};

export default TrafficFlow;
