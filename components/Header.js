import * as React from "react";

// Import use state
import { useState, useContext } from "react";

import '../css/main.css';
import { StyleSheet, View, TouchableOpacity} from 'react-native';

// Import theme
import { ThemeProvider, } from 'react-native-elements';
import { HwangsTheme } from '../themes/HwangsTheme';

// Import images
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png';

import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "../contexts/cart";
import { CommonDispatchContext } from "../contexts/common";

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
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
              <a href="../screens/HomeScreen" className='headerLogo'>
                <img src={logo} alt="Hwang's Kitchen" className="logo" />
              </a>         
            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end'}}>
              <div className="cart-icon">
                <img src={cart} alt="Shopping cart icon" className={props.cartBounce ? "tada" : " ", cart}></img>
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
      padding: '40px',
      zIndex:100,
      position:'fixed',
      width: '100%'
    }
  });