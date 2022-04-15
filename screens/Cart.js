import { StyleSheet, View, } from 'react-native';

import { ThemeProvider, Button, Text, Image} from 'react-native-elements';

import { HwangsTheme2 } from '../themes/HwangsTheme';

// Bring in everything added to the cart
import useLocalStorage from "../hooks/useLocalStorage";
import classNames from "classnames";

import '../css/main.css';

import React, { useContext } from "react";
import {
  CartStateContext,
  CartDispatchContext,
  ClearCart,
  addToCart,
  removeFromCart,
} from "../contexts/cart";

export default function Cart({navigation}) {
    
    const { items, isCartOpen }=useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);

    const handleClear = (productId) => {
      return ClearCart(dispatch, productId);
    };
    const handleAdd = (productId) => {
      return addToCart(dispatch, productId);
    };
    const handleRemove = (productId) => {
      return removeFromCart(dispatch, productId);
    };
  
  return (
    <ThemeProvider theme={HwangsTheme2}>
          <View style={styles.secondHeader}>
              <Button
                icon={{
                  name: 'arrow-back-outline',
                  type: 'ionicon',
                  size: 23,
                }} 
                onPress={() => navigation.goBack()} />
              <Text h1 style={{textAlign:'center', flex:1}}>Cart</Text>
            </View>
    <View style={styles.container,{backgroundColor:'#fff'}}>

    
      <div className="cart-items">

        {items.map((product) => {
          console.log(product);
          return (
            <div className="cart-item" key={product.name}>
              <img className="product-image" src={product.keyImage} />

              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>

              <div style={{flexDirection:'column'}}> 
                <div className="quantity-btn">
                  <button
                    className="product-remove"
                    onClick={() => handleRemove(product)}
                  >
                    -
                  </button>
                  <span>x</span>
                  <p className="quantity" contentEditable="true">
                    {`${product.quantity} ${
                      product.quantity > 1 ? "" : ""
                    }`}
                  </p>
                  <button
                    className="product-add"
                    onClick={() => handleAdd(product)}
                  >
                    +
                  </button>
                </div>

                  <button
                    className="product-clear"
                    onClick={() => handleClear(product.id)}
                  >
                    Remove
                  </button>
                <div className="product-total">
                  
                  <p className="amount">{(product.quantity * product.price).toFixed(2)}</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
      
    </View>
    </ThemeProvider>

  );
};


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
    paddingHorizontal: 50,
    marginTop: 50
  },
  backBtn: {
    padding:30,
    borderColor:'transparent',
    width: 80,
    marginTop:'-10px',
  },
});