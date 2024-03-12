import { View, Text, ScrollView, Image } from 'react-native';

const HouseDetails = () => {
  return (
    <ScrollView style={[{padding: 20}, {marginTop: 20}]}>
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
    </ScrollView>
  )
};

export default HouseDetails;