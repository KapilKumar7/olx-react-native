import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {useSelector} from 'react-redux';

const Search = () => {
  const [search, setSearch] = useState('');
  const items = useSelector(state => state.post.data);
  const [itemList, setItemList] = useState([]);

  const filterList = text => {
    const tempList = items;
    let searchedResult = tempList.filter(item => {
      if (item.name) {
        let lowerCaseName = item.name.toLowerCase();
        return lowerCaseName.match(text.toLowerCase());
      }
      return tempList;
    });
  };

  return (
    <View>
      <Text>Search</Text>
      <TextInput
        value={search}
        onChangeText={txt => {
          setSearch(txt);
          filterList(txt);
        }}
        placeholder="Enter Item name..."
        style={styles.textInput}
      />
      <FlatList
        data={items}
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

export default Search;

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 20,
  },
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
