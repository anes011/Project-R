import { View, Text, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const HomeTopBar = () => {

    const [search, setSearch] = useState('San Francisco');
    const [showClearSearch, setShowClearSearch] = useState(false);

    useEffect(() => {
        if (search !== '') {
            setShowClearSearch(true);
        } else {
            setShowClearSearch(false);
        };
    }, [search]);

  return (
    <View style={[{position: 'absolute'}, {top: 0}, {left: 0}, {right: 0}, {zIndex: 1000}, {flexDirection: 'row'}, {gap: 15}, {paddingTop: 50}, {paddingHorizontal: 10}]}>
        <Pressable style={[{backgroundColor: '#fff'}, {height: 60}, {width: 60}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {elevation: 50}]}>
            <AntDesign name="user" size={24} color="black" />
        </Pressable>
        
        <View style={[{flex: 1}, {height: '100%'}, {justifyContent: 'center'}]}>
            <TextInput value={search} onChangeText={(text) => setSearch(text)} style={[{backgroundColor: '#fff'}, {elevation: 50}, {height: '100%'}, {borderRadius: 25}, {textAlign: 'center'}, {paddingHorizontal: 50}, {fontSize: 16}]} placeholder='Search the location...' />

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
    </View>
  )
};

export default HomeTopBar;