import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Search from './tabs/Search';
import Add from './tabs/Add';
import WishList from './tabs/WishList';
import User from './tabs/User';
import Home from './tabs/Home';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add
          onPost={() => {
            setSelectedTab(0);
          }}
        />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <User />
      )}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(0)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'cyan' : 'black'},
            ]}
            source={require('../assets/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(1)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'cyan' : 'black'},
            ]}
            source={require('../assets/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(2)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 2 ? 'cyan' : 'black'},
            ]}
            source={require('../assets/plus.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(3)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 3 ? 'cyan' : 'black'},
            ]}
            source={require('../assets/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(4)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 4 ? 'cyan' : 'black'},
            ]}
            source={require('../assets/user.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabIcon: {
    height: 30,
    width: 30,
  },
});
