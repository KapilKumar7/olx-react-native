import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const ItemsByCategory = () => {
  const items = useSelector(state => state.post);
  const [itemList, setItemList] = useState([]);
  const route = useRoute();
  useEffect(() => {
    let allItems = items.data;
    let categoryData = [];
    allItems.map(item => {
      if (item.category == route.params.category) {
        categoryData.push(item);
      }
    });
    setItemList(categoryData);
    console.log('items list by category are ' + itemList);
  }, []);

  return (
    <View>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.item}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ItemsByCategory;

const styles = StyleSheet.create({
  item: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'green',
  },
});
