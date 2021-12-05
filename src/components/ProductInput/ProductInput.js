import React, {useState} from 'react';
import {View} from 'react-native';

import Button from '../Button';
import Input from '../Input';

let id = 1;

export default function ProductInput({handleSetData}) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const handleName = value => {
    setName(value);
  };
  const handlePrice = value => {
    setPrice(value);
  };
  const handleAddProduct = () => {
    handleSetData({name: name, price: price, id: id});
    id++;
  };

  return (
    <View>
      <Input name="Name" onValueChange={inputText => handleName(inputText)} />
      <Input name="Price" onValueChange={inputText => handlePrice(inputText)} />
      <Button handleAddProduct={handleAddProduct} />
    </View>
  );
}
