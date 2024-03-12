import { View, Text } from 'react-native';
import HouseImages from '../components/HouseImages';
import HouseDetails from '../components/HouseDetails';

const HouseDetailsScreen = () => {
  return (
    <View style={[{flex: 1}]}>
        <HouseImages />
        <HouseDetails />
    </View>
  )
};

export default HouseDetailsScreen;