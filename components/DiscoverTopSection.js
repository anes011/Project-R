import { View, Text, TextInput, Pressable, Dimensions, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { FontAwesome6 } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const DiscoverTopSection = () => {

    const { width, height } = Dimensions.get('window');

    const [search, setSearch] = useState('San Francisco');
    const [showClearSearch, setShowClearSearch] = useState(false);
    const [sliderValue, setSliderValue] = useState(2);
    const [filterPrice, setFilterPrice] = useState(false);

    const progress = useSharedValue(2);
    const min = useSharedValue(1);
    const max = useSharedValue(4);

    useEffect(() => {
        if (search !== '') {
            setShowClearSearch(true);
        } else {
            setShowClearSearch(false);
        };
    }, [search]);

    //Drop down states
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);
    //

  return (
    <View>
        <View style={[{justifyContent: 'center'}, {marginTop: 20}]}>
            <TextInput value={search} onChangeText={(text) => setSearch(text)} style={[{backgroundColor: '#fff'}, {elevation: 50}, {borderRadius: 25}, {textAlign: 'center'}, {paddingHorizontal: 50}, {fontSize: 16}, {height: height / 14}]} placeholder='Search the location...' />

            <Pressable style={[{position: 'absolute'}, {left: 10}]}>
                <Feather name="search" size={24} color="black" />
            </Pressable>

            {
                showClearSearch && (
                    <Pressable onPress={() => setSearch('')} style={[{position: 'absolute'}, {right: 10}, {backgroundColor: '#000'}, {height: 28}, {width: 28}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        <AntDesign name="close" size={18} color="#fff" />
                    </Pressable>
                )
            }
        </View>

        <View style={[{marginTop: 20}]}>
            <View style={[{flexDirection: 'row'}]}>
                <Pressable onPress={() => setFilterPrice(!filterPrice)} style={[{padding: 15}, {borderRadius: 20}, {backgroundColor: '#fff'}, {marginRight: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <Text>Price</Text>
                    {
                        filterPrice ? (
                            <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
                        ) : (
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        )
                    }
                </Pressable>

                {/* /// */}

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    containerStyle={{width: width / 2}}
                />
            </View>

            {
                filterPrice && (
                    <>
                        <Slider
                            style={{marginVertical: 40}}
                            progress={progress}
                            minimumValue={min}
                            maximumValue={max}
                            theme={{
                                disableMinTrackTintColor: '#fff',
                                maximumTrackTintColor: '#fff',
                                minimumTrackTintColor: '#11A6A1',
                                cacheTrackTintColor: '#333',
                                bubbleBackgroundColor: '#666',
                                heartbeatColor: '#999',
                            }}
                            containerStyle={{ height: 20, borderRadius: 10, overflow: 'hidden' }}
                            onValueChange={(value) => setSliderValue(value)}
                            step={3}
                            bubbleContainerStyle={{display: 'none'}}
                            markStyle={{height: 5, width: 5, borderRadius: 100 / 2}}
                            renderThumb={() => (
                                <View style={[{height: 40}, {width: 40}, {backgroundColor: '#11A6A1'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {borderRadius: 10}, {borderWidth: 2}, {borderColor: '#fff'}]}>
                                    <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
                                </View>
                            )}
                        />

                        <View style={[{padding: 20}, {borderRadius: 10}, {backgroundColor: '#11A6A1'}, {paddingHorizontal: 50}]}>
                            {
                                sliderValue === 1 && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 700}]}>$ 100 000 OR LESS</Text>
                                        <FontAwesome6 name="money-bill-transfer" size={24} color="#fff" />
                                    </View>
                                )
                            }

                            {
                                sliderValue === 2 && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 700}]}>$ 300 000</Text>
                                        <FontAwesome6 name="money-bill-transfer" size={24} color="#fff" />
                                    </View>
                                )
                            }

                            {
                                sliderValue === 3 && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 700}]}>$ 600 000</Text>
                                        <FontAwesome6 name="money-bill-transfer" size={24} color="#fff" />
                                    </View>
                                )
                            }

                            {
                                sliderValue === 4 && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 700}]}>$ 800 000 OR MORE</Text>
                                        <FontAwesome6 name="money-bill-transfer" size={24} color="#fff" />
                                    </View>
                                )
                            }
                        </View>
                    </>
                )
            }
        </View>
    </View>
  )
};

export default DiscoverTopSection;