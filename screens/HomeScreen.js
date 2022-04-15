import { StyleSheet, View} from 'react-native';

import { ThemeProvider, Text, Button} from 'react-native-elements';


import { HwangsTheme } from '../themes/HwangsTheme';

// Import images
import banner from '../assets/img/bannerimg.jpg'
import storefront from '../assets/img/storefront.jpg';

import '../css/main.css';

export default function HomeScreen({ navigation }) {

  return (
    <ThemeProvider theme={HwangsTheme}>
      <View style={styles.container}> 

        <View style={{marginTop:40}}>

          <View style={styles.bannerDisplay}>
              <View>
                <img src={banner} alt="Bibimbap" className='bannerimg' />
                <div className='box bibimbap'></div>
              </View> 
              <View style={{flexDirection:'column', marginLeft:'10%', marginTop:30}}>
                <Text h1 style={styles.bannerTxt}>authentic and{"\n"}<span style={{color: '#F5C121'}}>home-cooked{"\n"}Korean meals</span></Text>
                <Button 
                style={styles.orderCTA}
                title="Order for Pickup"
                onPress={() => navigation.navigate('Menu')}/>
              </View>
          </View>

        </View>
          <View style={{backgroundColor:'#545454', marginTop:25}}>
            <Text style={{padding:30, lineHeight:28, paddingLeft: '25%'}} h2>Located in the Henderson Mall {"\n"}food-court (2nd floor)</Text>
          </View>

          <View style={styles.container, {padding:40, flexDirection:'row',justifyContent:'center',marginTop: 20,paddingBottom:60, backgroundColor:'none'}}>
              <a href="https://goo.gl/maps/XHr1W4tDVnffUr9e8" className="address" style={{flex:1, textAlign:'right', marginRight:'5%',marginTop:35}}>2088-1163 Pinetree Way, <span style={{display:'block'}}>Coquitlam, BC, V3B 8A6</span></a>
              <div style={{flex:1}}>
                <img src={storefront} alt="Hwang's Kitchen storefront" className='storefrontimg' />
                <div className='box storefront'></div>
              </div>
          </View>


      </View>
      
    </ThemeProvider>

  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    bannerDisplay: {
      flexDirection:'row',
      flexWrap: 'wrap',
      padding: 40,
      justifyContent:'center',
      marginTop:30
    },
    bannerTxt: {

      marginBottom: '-10',
    },
    orderCTA:{
      alignSelf: 'flex-start',
      marginTop: 20
    },
    mallBlurb: {
      fontSize:20,
      color: '#F5C121', 
      backgroundColor:'#545454'
    }
  
  });