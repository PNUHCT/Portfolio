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
          <Text style={styles.quickMenuItem}>Technologies Used</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollTo(140)}>
          <Text style={styles.quickMenuItem}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollTo(320)}>
          <Text style={styles.quickMenuItem}>Education</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollTo(500)}>
          <Text style={styles.quickMenuItem}>Other</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} ref={scrollViewRef}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={{uri: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F4c872d42-35d0-4af8-8f96-4c3b919b6bd3%2FKakaoTalk_20221011_011503210.jpg?id=157f7ace-8624-4f84-9fb1-e30b314c994b&table=space&spaceId=157f7ace-8624-4f84-9fb1-e30b314c994b&width=110&userId=03a0f9b5-e755-4c7c-80c1-f84f784e9383&cache=v2'}}
          />
          <Text style={styles.name}>김동진</Text>
          <Text style={styles.name}>Kim Dong Jin</Text>
          <Text style={styles.email}>nyong9221@gmail.com</Text>
          <Text style={styles.phone}>010-3167-1552</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.heading}>Technologies Used</Text>
          <Text>Java, SpringBoot, MySQL(RDBMS), Redis(NoSQL), React Native(Expo)</Text>
          <Text style={styles.heading}>Projects</Text>
          <Text style={styles.tailing}>1. D's player</Text>
          <Text style={styles.tailing}>2. 보배빌림</Text>
          <Text style={styles.tailing}>3. 우유부단</Text>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.tailing}>1. Code States</Text>
          <Text style={styles.tailing}>2. Sparta</Text>
          <Text style={styles.tailing}>3. Gachon University</Text>
          <Text style={styles.tailing}>4. Overseas training in Singapore and Malaysia</Text>
          <Text style={styles.heading}>Other</Text>
          <Text style={styles.tailing}>알고리즘 : Java (Solved.ac)</Text>
          <Text style={styles.tailing}>프로그래머스 : MySQL</Text>
          <Text style={styles.tailing}>Career : 방사선사 (부산대학교병원)</Text>
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
    backgroundColor: '#fff',
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
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#556B2F",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
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
    marginTop : 100,
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


/**
 * 좌상단 버전
 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   quickMenu: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 150,
//     backgroundColor: '#f2f2f2',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     zIndex: 1,
//   },
//   quickMenuItem: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   profileContainer: {
//     alignItems: 'center',
//     padding: 20,
//     marginTop: 80,
//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   email: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   phone: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   detailsContainer: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// });