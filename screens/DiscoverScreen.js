import { View, Text } from 'react-native';
import DiscoverTopSection from '../components/DiscoverTopSection';
import DiscoverHousesSection from '../components/DiscoverHousesSection';

const DiscoverScreen = () => {
  return (
    <View style={[{flex: 1}, {backgroundColor: 'rgba(0, 0, 0, .05)'}, {padding: 20}]}>
        <DiscoverTopSection />
        <DiscoverHousesSection />
    </View>
  )
}

export default DiscoverScreen;