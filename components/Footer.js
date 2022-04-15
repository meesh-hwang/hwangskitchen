import '../css/footer.css';
import { StyleSheet, View, } from 'react-native';

//Import images
import instagram from '../assets/img/instagram.png';
import facebook from '../assets/img/facebook.png';

// Import theme
import { ThemeProvider, } from 'react-native-elements';
import { HwangsTheme } from '../themes/HwangsTheme';


export default function Footer() {
    return(
        <ThemeProvider theme={HwangsTheme} style={{width:"100%"}}>
            <View style={styles.container, {flex:1}}>
                <View style={styles.footer}>
                    <View style={styles.socials} >
                        <a href="https://www.instagram.com/hwang_skitchen/?hl=en" className='socials'>
                            <img src={instagram} alt="instagram icon" className='socialIcon' />
                        </a>
                        <a href="https://m.facebook.com/HwangsKitchen/" className='socials'>
                            <img src={facebook} alt="facebook icon" className='socialIcon' />
                        </a>
                    </View>
                    <View style={{alignItems:'center', flex:1}}>
                        <a href="mailto:hwangskitchencoq@gmail.com" className='contactInfo'>hwangskitchencoq@gmail.com</a>
                        <a href="tel:6044695559" className='contactInfo'>(604) 469 - 5559</a>
                    </View>
                </View>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'static',
        bottom: "-100%",
        width: '100%',
        flex: 1,
        height: '150px'
    },
    footer: {
      alignItems: "center",
      justifyContent:'flex-end',
      flex:1,
      backgroundColor:'#545454',
      padding: 10,
      position:'absolute'
    },
    socials: {
        flexDirection: 'row',
        flex:1
    }
  });