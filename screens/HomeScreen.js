import { View, Text } from 'react-native';
import Map from '../components/Map';
import HomeTopBar from '../components/HomeTopBar';
import HomeBottomSection from '../components/HomeBottomSection';

const HomeScreen = () => {
  return (
    <View style={[{flex: 1}]}>
      <HomeTopBar />
      <Map />
      <HomeBottomSection />
    </View>
  )
};

export default HomeScreen;