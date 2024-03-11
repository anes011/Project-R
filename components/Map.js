import { View, Text } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { useState, useEffect, useRef } from 'react';
import MapStyle from '../MapStyle.json';

const Map = () => {

    const [circleCenter, setCircleCenter] = useState({ latitude: 0, longitude: 0 });
    const [circleRadius, setCircleRadius] = useState(0);

    const [coordinates, setCoordinates] = useState([
        { latitude: 37.773972, longitude: -122.431297 }, //San Francisco
        { latitude: 37.8080, longitude: -122.4177 }, // Fisherman's Wharf
        { latitude: 37.8267, longitude: -122.4233 }, // Alcatraz Island
        { latitude: 37.8199, longitude: -122.4783 }, // Golden Gate Bridge
    ]);

    useEffect(() => {
        // Calculate the center point
        let sumLat = 0;
        let sumLong = 0;
    
        coordinates.forEach(coord => {
          sumLat += coord.latitude;
          sumLong += coord.longitude;
        });
    
        const centerLat = sumLat / coordinates.length;
        const centerLong = sumLong / coordinates.length;
    
        setCircleCenter({ latitude: centerLat, longitude: centerLong });
    
        // Calculate the maximum distance from center to any coordinate
        let maxDistance = 0;
        coordinates.forEach(coord => {
          const distance = Math.sqrt(
            Math.pow(coord.latitude - centerLat, 2) +
            Math.pow(coord.longitude - centerLong, 2)
          );
    
          if (distance > maxDistance) {
            maxDistance = distance;
          }
        });
    
        setCircleRadius(maxDistance * 111000); // 1 degree latitude is approximately 111000 meters
    }, [coordinates]);

  return (
    <View style={[{flex: 1}]}>
        <MapView customMapStyle={MapStyle} style={[{flex: 1}]} region={{
            latitude: circleCenter.latitude,
            longitude: circleCenter.longitude,
            latitudeDelta: 0.110,
            longitudeDelta: 0.110
        }}>
            {
                coordinates.map((x) => (
                    <Marker coordinate={x}>
                        <View style={[{alignItems: 'center'}]}>
                            <View style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 15}]}>
                                <Text style={[{fontWeight: 700}, {fontSize: 16}]}>$ 660.780</Text>
                            </View>
                            <View style={{ width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid', borderLeftWidth: 8, borderRightWidth: 8, borderBottomWidth: 10, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#fff', transform: [{rotate: '180deg'}] }} />
                        </View>
                    </Marker>
                ))
            }
            
            <Circle center={circleCenter} radius={circleRadius} fillColor="rgba(17,166,161, .2)" strokeColor="rgb(17,166,161)" strokeWidth={2} />
        </MapView>
    </View>
  )
}

export default Map;