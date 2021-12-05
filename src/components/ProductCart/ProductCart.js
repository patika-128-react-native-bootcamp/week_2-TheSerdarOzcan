import {restElement} from '@babel/types';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import Badge from '../Badge';
import ProductInput from '../ProductInput';
import Products from '../Products';
import styles from './ProductCart.styles';

export default function ProductCart() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(3);

  const handleSetData = value => {
    const {name, price, id} = value;
    if (
      !(name === '' || name === undefined) &&
      !(price === '' || price === undefined)
    )
      setData([...data, value]);
  };

  const handleSelected = value => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.badges}>
          <Badge
            id={1}
            name="Artan Fiyat"
            selected={selected}
            onSelectedChange={value => handleSelected(value)}
          />
          <Badge
            id={2}
            name="Azalan Fiyat"
            selected={selected}
            onSelectedChange={value => handleSelected(value)}
          />
          <Badge
            id={3}
            name="Tarih"
            selected={selected}
            onSelectedChange={value => handleSelected(value)}
          />
        </View>
        <FlatList
          data={
            selected === 1
              ? data.sort((a, b) => a.price - b.price)
              : selected === 2
              ? data.sort((a, b) => b.price - a.price)
              : data.sort((a, b) => a.id - b.id)
          }
          renderItem={({item}) => (
            <Products name={item.name} price={item.price + ' TL'} />
          )}
          ItemSeparatorComponent={FlatListItemSeparator}
          style={styles.flatList}
        />
        {console.log(data)}
      </View>
      <ProductInput
        handleSetData={value => handleSetData(value)}
        style={styles.flex}
      />
    </View>
  );
}

const FlatListItemSeparator = () => {
  return <View style={styles.seperator} />;
};
