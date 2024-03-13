import { View, Text, Pressable, Image, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeBottomSection = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{position: 'absolute'}, {zIndex: 1000}, {bottom: 0}, {left: 0}, {right: 0}]}>
        <Pressable onPress={() => navigation.navigate('Discover')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 10}, {justifyContent: 'center'}, {alignItems: 'center'}, {alignSelf: 'flex-end'}, {marginRight: 10}]}>
            <AntDesign name="home" size={26} color="black" />
        </Pressable>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[{marginTop: 20}]}>
            <Pressable onPress={() => navigation.navigate('HouseDetails')} style={[{padding: 13}, {backgroundColor: '#fff'}, {borderRadius: 40}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 150}, {width: 170}, {borderRadius: 30}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                    <Pressable style={[{position: 'absolute'}, {left: 10}, {top: 10}, {height: 50}, {width: 50}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: '#fff'}]}>
                        <MaterialCommunityIcons name="cards-heart-outline" size={23} color="red" />
                    </Pressable>
                    <View style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: 'rgba(17,166,161, .7)'}, {position: 'absolute'}, {bottom: 10}, {left: 10}]}>
                        <Text style={[{color: '#fff'}]}>Apartment</Text>
                    </View>
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontWeight: 700}, {fontSize: 20}, {lineHeight: 30}, {color: '#11A6A1'}]}>Sky Dandelions Apartment</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <FontAwesome name="star" size={20} color="yellow" />
                        <Text style={[{fontWeight: 700}]}>4.9</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="location-sharp" size={24} color="#11A6A1" />
                        <Text>Jakarta, Indonesia</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('HouseDetails')} style={[{padding: 13}, {backgroundColor: '#fff'}, {borderRadius: 40}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 150}, {width: 170}, {borderRadius: 30}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                    <Pressable style={[{position: 'absolute'}, {left: 10}, {top: 10}, {height: 50}, {width: 50}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: '#fff'}]}>
                        <MaterialCommunityIcons name="cards-heart-outline" size={23} color="red" />
                    </Pressable>
                    <View style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: 'rgba(17,166,161, .7)'}, {position: 'absolute'}, {bottom: 10}, {left: 10}]}>
                        <Text style={[{color: '#fff'}]}>Apartment</Text>
                    </View>
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontWeight: 700}, {fontSize: 20}, {lineHeight: 30}, {color: '#11A6A1'}]}>Sky Dandelions Apartment</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <FontAwesome name="star" size={20} color="yellow" />
                        <Text style={[{fontWeight: 700}]}>4.9</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="location-sharp" size={24} color="#11A6A1" />
                        <Text>Jakarta, Indonesia</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('HouseDetails')} style={[{padding: 13}, {backgroundColor: '#fff'}, {borderRadius: 40}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 150}, {width: 170}, {borderRadius: 30}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                    <Pressable style={[{position: 'absolute'}, {left: 10}, {top: 10}, {height: 50}, {width: 50}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: '#fff'}]}>
                        <MaterialCommunityIcons name="cards-heart-outline" size={23} color="red" />
                    </Pressable>
                    <View style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: 'rgba(17,166,161, .7)'}, {position: 'absolute'}, {bottom: 10}, {left: 10}]}>
                        <Text style={[{color: '#fff'}]}>Apartment</Text>
                    </View>
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontWeight: 700}, {fontSize: 20}, {lineHeight: 30}, {color: '#11A6A1'}]}>Sky Dandelions Apartment</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <FontAwesome name="star" size={20} color="yellow" />
                        <Text style={[{fontWeight: 700}]}>4.9</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="location-sharp" size={24} color="#11A6A1" />
                        <Text>Jakarta, Indonesia</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('HouseDetails')} style={[{padding: 13}, {backgroundColor: '#fff'}, {borderRadius: 40}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 150}, {width: 170}, {borderRadius: 30}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                    <Pressable style={[{position: 'absolute'}, {left: 10}, {top: 10}, {height: 50}, {width: 50}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: '#fff'}]}>
                        <MaterialCommunityIcons name="cards-heart-outline" size={23} color="red" />
                    </Pressable>
                    <View style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: 'rgba(17,166,161, .7)'}, {position: 'absolute'}, {bottom: 10}, {left: 10}]}>
                        <Text style={[{color: '#fff'}]}>Apartment</Text>
                    </View>
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontWeight: 700}, {fontSize: 20}, {lineHeight: 30}, {color: '#11A6A1'}]}>Sky Dandelions Apartment</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <FontAwesome name="star" size={20} color="yellow" />
                        <Text style={[{fontWeight: 700}]}>4.9</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="location-sharp" size={24} color="#11A6A1" />
                        <Text>Jakarta, Indonesia</Text>
                    </View>
                </View>
            </Pressable>
        </ScrollView>
    </View>
  )
};

export default HomeBottomSection;