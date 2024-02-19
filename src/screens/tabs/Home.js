import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const items = useSelector(state => state.post.data);
  // console.warn(items.data);
  const navigation = useNavigation();

  // Check if items is not undefined and not an empty array
  if (items && items.length > 0) {
    console.log('data of post is here : ', items[0]);
    console.log('Number of posts: ', items.length);
  } else {
    console.log('No posts available');
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.logo]}>Olx </Text>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search the Item.." />
        <Image
          source={require('../../assets/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <Text style={styles.heading}> What are you looking for ?</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          numColumns={3}
          data={[
            {title: 'Car', icon: require('../../assets/car.png')},
            {title: 'Bike', icon: require('../../assets/bycicle.png')},
            {title: 'Furniture', icon: require('../../assets/furniture.png')},
            {title: 'Mobile', icon: require('../../assets/smartphone.png')},
            {title: 'Tv', icon: require('../../assets/smart-tv.png')},
            {title: 'Property', icon: require('../../assets/house.png')},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ItemsByCategory', {
                    category: item.title,
                  });
                }}
                style={styles.categoryList}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.listTitles}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.heading}> Posted Items</Text>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: 800,
    color: 'blue',
    marginLeft: 20,
    marginTop: 20,
  },
  search: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '86%',
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  heading: {
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: 40,
  },
  icon: {width: 50, height: 50, padding: 3},
  categoryList: {
    width: Dimensions.get('window').width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 3,
    backgroundColor: '#909090',
  },
  categoryContainer: {marginTop: 20, marginRight: 5, marginLeft: 5},
  listTitles: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
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
