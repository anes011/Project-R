import { View, Text, TextInput, Pressable, Dimensions, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';

const DiscoverTopSection = () => {

    const { width, height } = Dimensions.get('window');

    const [search, setSearch] = useState('San Francisco');
    const [showClearSearch, setShowClearSearch] = useState(false);
    const [sliderValue, setSliderValue] = useState('');

    const progress = useSharedValue(1000000);
    const min = useSharedValue(10000);
    const max = useSharedValue(10000000);

    useEffect(() => {
        if (search !== '') {
            setShowClearSearch(true);
        } else {
            setShowClearSearch(false);
        };
    }, [search]);

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
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable style={[{padding: 15}, {borderRadius: 20}, {backgroundColor: '#fff'}, {marginRight: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <Text>Price</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </Pressable>

                <Pressable style={[{padding: 15}, {borderRadius: 20}, {backgroundColor: '#fff'}, {marginRight: 20}]}>
                    <Text>Newest</Text>
                </Pressable>

                <Pressable style={[{padding: 15}, {borderRadius: 20}, {backgroundColor: '#fff'}, {marginRight: 20}]}>
                    <Text>Newest</Text>
                </Pressable>

                <Pressable style={[{padding: 15}, {borderRadius: 20}, {backgroundColor: '#fff'}, {marginRight: 20}]}>
                    <Text>Newest</Text>
                </Pressable>

                <Pressable style={[{padding: 15}, {borderRadius: 20}, {backgroundColor: '#fff'}, {marginRight: 20}]}>
                    <Text>Newest</Text>
                </Pressable>
            </ScrollView>

            {/* //// */}

            <Slider
                style={[{marginTop: 20}]}
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                theme={{
                    disableMinTrackTintColor: '#fff',
                    maximumTrackTintColor: '#fff',
                    minimumTrackTintColor: '#000',
                    cacheTrackTintColor: '#333',
                    bubbleBackgroundColor: '#666',
                    heartbeatColor: '#999',
                }}
                thumbWidth={20}
                containerStyle={{ height: 10, borderRadius: 10, overflow: 'hidden' }}
                onValueChange={(value) => setSliderValue(value)}
            />
        </View>
    </View>
  )
};

export default DiscoverTopSection;