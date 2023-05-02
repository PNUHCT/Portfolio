import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function profile2() {
  const scrollViewRef = useRef();

  const handleScrollTo = (y) => {
    scrollViewRef.current.scrollTo({ y, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.quickMenu}>
        <TouchableOpacity onPress={() => handleScrollTo(0)}>
          <Text style={styles.quickMenuItem}>Quik menu A</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollTo(140)}>
          <Text style={styles.quickMenuItem}>Quik menu B</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollTo(320)}>
          <Text style={styles.quickMenuItem}>Quik menu C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollTo(500)}>
          <Text style={styles.quickMenuItem}>Quik menu D</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} ref={scrollViewRef}>
        <View style={styles.profileContainer}>
          <View>
            <Image
              style={styles.profilePicture}
              source={{uri: 'https://emojigraph.org/media/emojidex/warning_26a0-fe0f.png'}}
            />
          </View>
          <View>
            <Text style={styles.name}>D's Player Demo ver</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.heading}>추가 작업이 진행중</Text>
          <Text style={styles.tailing}>현재 페이지는 D's player Demo 구현을 위한 테스트페이지입니다.</Text>
          <Text style={styles.tailing}>현재 배포된 Portfolio 버전에서는 사용하실 수 없습니다.</Text>
          <Text style={styles.tailing}>D's player를 Web 환경에서 사용해보실 수 있도록 추가 작업을 진행중입니다.</Text>
          <Text style={styles.tailing}>양해 부탁드립니다.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

/**
 *  position: 'sticky' 버전
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quickMenu: {
    backgroundColor: '#FFFAFA',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  quickMenuItem: {
    color: "#2F4F4F",
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingVertical: 20,
    backgroundColor: "black",
    padding: 30
  },
  profilePicture: {
    width: 200,
    height: 200,
  },
  name: {
    color: "#FFFAFA",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: "#FFFAFA",
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    color: "#FFFAFA",
    fontSize: 16,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#20B2AA"
  },
  tailing: {
    padding: 2,
    fontSize: 15
  }
});