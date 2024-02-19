import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
// Add.js
import {addPost} from '../../../redux/PostSlice'; // Update import path
import {Dropdown} from 'react-native-element-dropdown';
const data = [
  {label: 'Car', value: 'Car'},
  {label: 'Mobile', value: 'Mobile'},
  {label: 'Tv', value: 'Tv'},
  {label: 'Furniture', value: 'Furniture'},
  {label: 'Bike', value: 'Bike'},
  {label: 'Property', value: 'Property'},
];
const Add = ({onPost}) => {
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 75093,
        height: 1856,
        originalPath: '',
        type: 'image/jpeg',
        uri: '',
        width: 1392,
      },
    ],
  });
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
    // console.log(result);
  };
  const addItem = () => {
    // console.log({
    //   name: name,
    //   price: price,
    //   description: description,
    //   image: photo.assets[0].uri,
    // });
    const post = {
      name: name,
      price: price,
      description: description,
      image: photo.assets[0].uri,
      category: value,
    };
    console.log(post);
    dispatch(addPost(post));
    onPost();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Add Post </Text>
        </View>
        <TouchableOpacity
          onPress={requestCameraPermission}
          style={styles.imageView}>
          {photo.assets[0].uri == '' ? (
            <Image
              style={styles.imageView}
              source={require('../../assets/placeholderImage.webp')}
            />
          ) : (
            <Image
              style={styles.imageView}
              source={{uri: photo.assets[0].uri}}
            />
          )}
        </TouchableOpacity>
        <TextInput
          value={name}
          onChangeText={txt => setName(txt)}
          placeholder="Enter Item name..."
          style={styles.textInput}
        />

        <TextInput
          value={description}
          onChangeText={txt => setDescription(txt)}
          placeholder="Enter Item description.."
          style={[styles.textInput, {marginTop: 10}]}
        />
        <TextInput
          value={price}
          onChangeText={txt => setPrice(txt)}
          placeholder="Enter Item Price.."
          style={[styles.textInput, {marginTop: 10}]}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={'90%'}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            addItem();
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Post My Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  imageView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    height: 130,
  },
  textInput: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    paddingLeft: 20,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '90%',

    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    // marginTop: 50,
    paddingLeft: 20,
    // borderColor: 'red',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
