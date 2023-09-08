import * as React from "react";

// Import use state
import { useState, useContext } from "react";

import '../css/main.css';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../RootNavigation.js';
// Import theme
import { ThemeProvider, } from 'react-native-elements';
import { HwangsTheme } from '../themes/HwangsTheme';

// Import images
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png';
import HomeScreen from "../screens/HomeScreen";

import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "../contexts/cart";

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);

  // Cart quantity number
  let cartQuantity=0;
  let itemQuantity = [...cartItems];
    const quantityObj = itemQuantity.filter(item => { cartQuantity+=
      item.quantity});

    Array.from(cartQuantity);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  };
  return (
    <ThemeProvider theme={HwangsTheme}>
      <View style={styles.header}> 
            <View style={{flex:1 }}>
              <nav className="navBar">
                <button onClick={handleToggle}>
                  <div className={navbarOpen ? "open" : "close"}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                  </div>
                  </button>
                <ul className={`menuNav${navbarOpen ? "showMenu" : ""}`}>
                  <li>
                    <a href="#">Menu</a>
                  </li>
                  <li>
                    <a href="#">Catering</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </nav>
            </View>
            <View style={{flex:1}}>
              <button onClick={()=>RootNavigation.navigate('Home')} className='headerLogo' style={{backgroundColor:'transparent',border:'none'}}>
                <img src={logo} alt="Hwang's Kitchen" className="logo" />
              </button>         
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end'}}>
              <div className="cart-icon">
                <button style={{border:'none', backgroundColor:'transparent', padding:0}} onClick={() => RootNavigation.navigate('Cart')} className='cartBtn'><img src={cart} alt="Shopping cart icon" className={props.cartBounce ? "tada" : " "} />
                </button>
                {cartQuantity ? (
                    <span className="cart-count">{cartQuantity}</span>
                  ) : (
                    ""
                  )}
              </div>
            </View>
      </View>
    </ThemeProvider>

  );

};
export default Header;


const styles = StyleSheet.create({
    header: {
      backgroundColor:'white',
      top:0,
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      paddingVertical: '40px',
      zIndex:100,
      position:'fixed',
      width: '100%',
      paddingHorizontal: '2vw'
    }
  });
