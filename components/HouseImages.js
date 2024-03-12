import { useEffect } from 'react';
import { View, Text, Dimensions, FlatList, Image, Animated, Pressable } from 'react-native';
import { SlidingBorder } from "react-native-animated-pagination-dots";
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HouseImages = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const images = [
        'https://firebasestorage.googleapis.com/v0/b/now-p-224b3.appspot.com/o/Villa-ph-1.jpg?alt=media&token=724c113f-dea6-4918-a0fe-832ca3809c94',
        'https://firebasestorage.googleapis.com/v0/b/now-p-224b3.appspot.com/o/Villa-ph-2.jpg?alt=media&token=ac91a542-05f1-48a4-a3eb-d06b1343f330',
        'https://firebasestorage.googleapis.com/v0/b/now-p-224b3.appspot.com/o/Villa-ph-3.jpg?alt=media&token=85660839-6cd4-4ec0-b819-92162d36587e',
        'https://firebasestorage.googleapis.com/v0/b/now-p-224b3.appspot.com/o/Villa-ph-1.jpg?alt=media&token=724c113f-dea6-4918-a0fe-832ca3809c94',
        'https://firebasestorage.googleapis.com/v0/b/now-p-224b3.appspot.com/o/Villa-ph-2.jpg?alt=media&token=ac91a542-05f1-48a4-a3eb-d06b1343f330',
        'https://firebasestorage.googleapis.com/v0/b/now-p-224b3.appspot.com/o/Villa-ph-3.jpg?alt=media&token=85660839-6cd4-4ec0-b819-92162d36587e'
    ];

    const scrollX = new Animated.Value(0);

  return (
    <View style={[{height: height / 2}, {borderBottomLeftRadius: 60}, {borderBottomRightRadius: 60}, {overflow: 'hidden'}]}>
        <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: false,
                }
            )}
            pagingEnabled
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            data={images} 
            renderItem={({item}) => (
            <Image style={[{width: width}, {height: height / 2}]} source={{uri: item}} />
        )} />

        <SlidingBorder
            data={images}
            scrollX={scrollX}
            slidingIndicatorStyle={{
                borderWidth: 2,
                borderColor: '#fff'
            }}
            dotStyle={{
                width: 6,
                height: 6,
                backgroundColor: '#fff',
                borderRadius: 100 / 2,
                marginHorizontal: 5
            }}
            containerStyle={{
                bottom: 30,
            }}
        />

        <Pressable onPress={() => navigation.navigate('Home')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {position: 'absolute'}, {backgroundColor: '#fff'}, {justifyContent: 'center'}, {alignItems: 'center'}, {top: 20}, {left: 20}, {elevation: 50}]}>
            <SimpleLineIcons name="arrow-left" size={20} color="black" />
        </Pressable>
    </View>
  )
};

export default HouseImages;