import { View, Text, Pressable, Image, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeBottomSection = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{position: 'absolute'}, {zIndex: 1000}, {bottom: 0}, {left: 0}, {right: 0}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'flex-end'}, {paddingHorizontal: 10}]}>
            <Pressable style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {padding: 10}, {backgroundColor: '#fff'}, {elevation: 10}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Filter.png')} />
            </Pressable>

            <Pressable style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {padding: 13}, {backgroundColor: '#fff'}, {elevation: 10}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/My-Location.png')} />
            </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[{marginTop: 20}]}>
            <Pressable onPress={() => navigation.navigate('HouseDetails')} style={[{padding: 15}, {backgroundColor: '#fff'}, {borderRadius: 25}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 120}, {width: 120}, {borderRadius: 15}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
                        <Text style={[{fontSize: 23}, {fontWeight: 700}, {color: '#11A6A1'}]}>$ 699 678</Text>
                        <Pressable>
                            <AntDesign name="hearto" size={24} color="black" />
                        </Pressable>
                    </View>

                    <Text>3517 W.Gray St.Utica</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 500}]}>2</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bath.png')} />
                            <Text style={[{fontWeight: 500}]}>1</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 500}]}>60 m²</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <Pressable style={[{padding: 15}, {backgroundColor: '#fff'}, {borderRadius: 25}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 120}, {width: 120}, {borderRadius: 15}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
                        <Text style={[{fontSize: 23}, {fontWeight: 700}, {color: '#11A6A1'}]}>$ 699 678</Text>
                        <Pressable>
                            <AntDesign name="hearto" size={24} color="black" />
                        </Pressable>
                    </View>

                    <Text>3517 W.Gray St.Utica</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 500}]}>2</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bath.png')} />
                            <Text style={[{fontWeight: 500}]}>1</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 500}]}>60 m²</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <Pressable style={[{padding: 15}, {backgroundColor: '#fff'}, {borderRadius: 25}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 120}, {width: 120}, {borderRadius: 15}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
                        <Text style={[{fontSize: 23}, {fontWeight: 700}, {color: '#11A6A1'}]}>$ 699 678</Text>
                        <Pressable>
                            <AntDesign name="hearto" size={24} color="black" />
                        </Pressable>
                    </View>

                    <Text>3517 W.Gray St.Utica</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 500}]}>2</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bath.png')} />
                            <Text style={[{fontWeight: 500}]}>1</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 500}]}>60 m²</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <Pressable style={[{padding: 15}, {backgroundColor: '#fff'}, {borderRadius: 25}, {flexDirection: 'row'}, {elevation: 50}, {marginBottom: 50}, {marginLeft: 10}, {width: width / 1.13}, {marginRight: 5}]}>
                <View style={[{height: 120}, {width: 120}, {borderRadius: 15}, {overflow: 'hidden'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa.jpg')} />
                </View>

                <View style={[{flex: 1}, {padding: 10}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
                        <Text style={[{fontSize: 23}, {fontWeight: 700}, {color: '#11A6A1'}]}>$ 699 678</Text>
                        <Pressable>
                            <AntDesign name="hearto" size={24} color="black" />
                        </Pressable>
                    </View>

                    <Text>3517 W.Gray St.Utica</Text>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 500}]}>2</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Bath.png')} />
                            <Text style={[{fontWeight: 500}]}>1</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 20}, {width: 20}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 500}]}>60 m²</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </ScrollView>
    </View>
  )
};

export default HomeBottomSection;