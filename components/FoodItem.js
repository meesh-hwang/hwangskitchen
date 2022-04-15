import React, { useState, useContext } from "react";


import {  Text, ListItem, ThemeProvider, Avatar } from 'react-native-elements';
import { CartDispatchContext, addToCart } from "../contexts/cart";

import '../css/main.js';
import Icon from 'react-native-ionicons';

import { HwangsTheme } from '../themes/HwangsTheme';

const ProductCard = ({ itemData, quantityNumber }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const { keyImage, name, price, id } = itemData;
  

  const handleAddToCart = () => {
    

    const product = { ...itemData, quantity: 1 };
    product
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);


    
  };



  return (    
    <ThemeProvider theme={HwangsTheme}>
    <ListItem>
      <ListItem.Content>
        <Avatar source={{uri: itemData.keyImage}} style={{ width: 200, height: 200, alignSelf:'center'}} />
        <Text h3 style={{alignSelf:'center'}}>{itemData.name}</Text>
        <Text h4 style={{alignSelf:'center'}}>{itemData.price}</Text>
      </ListItem.Content>
    </ListItem>
    <button
        className= { !isAdded ? "addToOrderBtn" : "added"}
        onClick={handleAddToCart}
        style={{
          alignSelf:'center',
          marginBottom: 20
        }}
      >
          {!isAdded ? "+": "✔ ADDED"}

        </button>
    </ThemeProvider>
  );
};
export default ProductCard;
