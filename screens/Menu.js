import { StyleSheet, View, FlatList,} from 'react-native'; 
import { ThemeProvider, Text, Button, Icon} from 'react-native-elements';

import { HwangsTheme2 } from '../themes/HwangsTheme';

import ProductCard from '../components/FoodItem';
import { getAllFoods } from '../data/FOODDATA';


export default function Menu({ navigation }) {

  const renderItem = ({ item }) => (
    <ProductCard itemData={item} navigatorRef={navigation} />
  );
  return (
    <ThemeProvider theme={HwangsTheme2}>
      <View style={styles.container}> 
          <View style={styles.secondHeader}>
              <Button
                icon={{
                  name: 'arrow-back-outline',
                  type: 'ionicon',
                  size: 23,
                }} 
                onPress={() => navigation.goBack()} />
              <Text h1 style={{textAlign:'center', flex:1}}>Menu</Text>
            </View>
        <FlatList
          style={styles.foodList, {backgroundColor:'#fff'}}
          data={getAllFoods()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          keyImage='true'
        />

      </View>
    </ThemeProvider>

  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50
    },
    secondHeader: {
      flexDirection: 'row',
      justifyContent:'center',
      width: '100%',
      height: 80,
      paddingHorizontal: 50
    },
    backBtn: {
      padding:30,
    borderColor:'transparent',

      width: 80,
      marginTop:'-10px',
    },
  });