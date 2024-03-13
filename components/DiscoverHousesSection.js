import { View, Text, ScrollView, Image, Pressable, Dimensions } from 'react-native';

const DiscoverHousesSection = () => {

    const { width, height } = Dimensions.get('window');

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[{marginTop: 20}]}>
        <Pressable style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 20}]}>
            <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa-img.jpg')} />
            </View>

            <View style={[{marginTop: 10}, {gap: 15}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 16}, {fontWeight: 700}]}>Nacary Elite House</Text>
                    <View style={[{padding: 7}, {borderRadius: 10}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 20}]}>
                        <Text style={[{color: '#fff'}]}>For Sale</Text>
                    </View>
                </View>

                <Text>45-20 43rd St Unit 4A, Queens, NY 11104</Text>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 20}, {fontWeight: 700}]}>$ 699 678</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 700}]}>4</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 700}]}>260 m²</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>

        <Pressable style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 20}]}>
            <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa-img.jpg')} />
            </View>

            <View style={[{marginTop: 10}, {gap: 15}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 16}, {fontWeight: 700}]}>Nacary Elite House</Text>
                    <View style={[{padding: 7}, {borderRadius: 10}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 20}]}>
                        <Text style={[{color: '#fff'}]}>For Sale</Text>
                    </View>
                </View>

                <Text>45-20 43rd St Unit 4A, Queens, NY 11104</Text>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 20}, {fontWeight: 700}]}>$ 699 678</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 700}]}>4</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 700}]}>260 m²</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>

        <Pressable style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 20}]}>
            <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa-img.jpg')} />
            </View>

            <View style={[{marginTop: 10}, {gap: 15}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 16}, {fontWeight: 700}]}>Nacary Elite House</Text>
                    <View style={[{padding: 7}, {borderRadius: 10}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 20}]}>
                        <Text style={[{color: '#fff'}]}>For Sale</Text>
                    </View>
                </View>

                <Text>45-20 43rd St Unit 4A, Queens, NY 11104</Text>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 20}, {fontWeight: 700}]}>$ 699 678</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 700}]}>4</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 700}]}>260 m²</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>

        <Pressable style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 20}]}>
            <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa-img.jpg')} />
            </View>

            <View style={[{marginTop: 10}, {gap: 15}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 16}, {fontWeight: 700}]}>Nacary Elite House</Text>
                    <View style={[{padding: 7}, {borderRadius: 10}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 20}]}>
                        <Text style={[{color: '#fff'}]}>For Sale</Text>
                    </View>
                </View>

                <Text>45-20 43rd St Unit 4A, Queens, NY 11104</Text>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 20}, {fontWeight: 700}]}>$ 699 678</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 700}]}>4</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 700}]}>260 m²</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>

        <Pressable style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 20}]}>
            <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/Villa-img.jpg')} />
            </View>

            <View style={[{marginTop: 10}, {gap: 15}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 16}, {fontWeight: 700}]}>Nacary Elite House</Text>
                    <View style={[{padding: 7}, {borderRadius: 10}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 20}]}>
                        <Text style={[{color: '#fff'}]}>For Sale</Text>
                    </View>
                </View>

                <Text>45-20 43rd St Unit 4A, Queens, NY 11104</Text>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{fontSize: 20}, {fontWeight: 700}]}>$ 699 678</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Bed.png')} />
                            <Text style={[{fontWeight: 700}]}>4</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Image style={[{height: 23}, {width: 23}]} source={require('../assets/Distance.png')} />
                            <Text style={[{fontWeight: 700}]}>260 m²</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    </ScrollView>
  )
}

export default DiscoverHousesSection;