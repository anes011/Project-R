import { View, Text, ScrollView, Image, Dimensions, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapStyle from '../MapStyle.json';

const HouseDetails = () => {

  const { width, height } = Dimensions.get('window');

  return (
    <View style={[{marginTop: 20}, {flex: 1}]}>
      <View style={[{padding: 20}, {height: height / 2.76}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[{gap: 10}]}>
            <Text style={[{fontSize: 20}, {fontWeight: 700}]}>Nacary Elite House</Text>
            <Text>45-20 43rd St Unit 4A, Queens, NY 11104</Text>
          </View>

          <View style={[{marginTop: 20}, {borderRadius: 20}, {backgroundColor: 'rgba(0, 0, 0, .1)'}, {flexDirection: 'row'}, {padding: 20}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
              <Image style={[{height: 25}, {width: 25}]} source={require('../assets/Bed.png')} />
              <Text style={[{fontWeight: 700}]}>2</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
              <Image style={[{height: 25}, {width: 25}]} source={require('../assets/Bath.png')} />
              <Text style={[{fontWeight: 700}]}>1</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
              <Image style={[{height: 25}, {width: 25}]} source={require('../assets/Parking.png')} />
              <Text style={[{fontWeight: 700}]}>1</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
              <Image style={[{height: 25}, {width: 25}]} source={require('../assets/Distance.png')} />
              <Text style={[{fontWeight: 700}]}>1,250 ft²</Text>
            </View>
          </View>

          <Text style={[{marginTop: 20}, {fontSize: 20}, {fontWeight: 400}, {lineHeight: 30}]}>Don't miss this fantastic home with too much to discuss, and it is a must-see for yourself.</Text>

          <View style={[{height: height / 4}, {marginTop: 20}, {borderRadius: 30}, {overflow: 'hidden'}]}>
            <MapView customMapStyle={MapStyle} region={{ latitude: 37.773972, longitude: -122.431297, latitudeDelta: 0.050, longitudeDelta: 0.050 }} style={[{flex: 1}]}>
              <Marker coordinate={{ latitude: 37.773972, longitude: -122.431297 }} title='San Francisco'>
                <Image style={[{height: 40}, {width: 40}]} source={require('../assets/Pin.png')} />
              </Marker>
            </MapView>
          </View>
        </ScrollView>
      </View>

      <View style={[{backgroundColor: '#fff'}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {flexDirection: 'row'}, {padding: 20}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
        <View>
          <Text style={[{fontSize: 20}, {fontWeight: 700}]}>$ 1 699 678</Text>
          <Text style={[{color: 'grey'}, {fontWeight: 700}]}>1,250 ft²</Text>
        </View>

        <Pressable style={[{padding: 17}, {borderRadius: 20}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 50}]}>
          <Text style={[{fontSize: 16}, {fontWeight: 600}, {color: '#fff'}]}>Reserve now</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default HouseDetails;