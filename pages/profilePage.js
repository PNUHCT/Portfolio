import React, {useRef} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import profileImage from '../assets/hospital_life2.jpg';

export default function profile() {

  // 사이드바 화면 이동을 위한 코드
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const practiceRef = useRef(null);
  const careerRef = useRef(null);
  const handleScrollTo = (ref) => {ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });};
  const portfolioLink = () => {Linking.openURL("https://www.canva.com/design/DAFh4CeA76I/L1tx14uewnRpHET93AncHw/view?utm_content=DAFh4CeA76I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink")};

  // 토글 목록을 만들기 위한 코드


  // 렌더링 코드
  return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
          {/* 사이드바 */}
          <View style = {styles.sidebarContainer}>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => handleScrollTo(profileRef)}><Text style={styles.sidebarText}>Profile</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => handleScrollTo(projectRef)}><Text style={styles.sidebarText}>Projects</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => handleScrollTo(educationRef)}><Text style={styles.sidebarText}>Education</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => handleScrollTo(practiceRef)}><Text style={styles.sidebarText}>Practice</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton} onPress={() => handleScrollTo(careerRef)}><Text style={styles.sidebarText}>Career</Text></TouchableOpacity>
          </View>
          <ScrollView style = {styles.contentContainer}>
            <View ref = {profileRef} style = {styles.profileContainer}>
              <View>
                <Image
                  style={styles.profilePicture}
                  // source={require('../assets/hospital_life2.jpg')}
                  source={require('../assets/카페1.jpg')}
                />
              </View>
              <View style= {styles.profileDetailsContainer}>
                <Text style={styles.profileTitle}>김동진  Kim Dong Jin</Text>
                <Text style={styles.profileSubtitle}>nyong9221@gmail.com</Text>
                <Text style={styles.profileDetails}>010-3167-1552</Text>
                <TouchableOpacity onPress={portfolioLink}><Text style={styles.profileDetails}>Portfolio-Canva</Text></TouchableOpacity>
              </View>
              <View style={styles.techContainer}>
                <Text style={styles.TechnologiesUsed}>Technologies Used</Text>
                <View style={styles.techContentContainer}>
                  <View style={styles.techTitleContainer}>
                    <Text style={styles.profileSubtitle}>Back-End</Text>
                    <Text style={styles.profileSubtitle}>Front-End</Text>
                    <Text style={styles.profileSubtitle}>Tools</Text>
                  </View>
                  <View style={styles.techDetailsContainer}>
                    <Text style={styles.profileDetails}>Java, SpringBoot, MySQL(RDBMS), Redis(NoSQL)</Text>
                    <Text style={styles.profileDetails}>React Native(Expo)</Text>
                    <Text style={styles.profileDetails}>GitHub, Chat GPT, EAS, AWS, Git Actions, Postman</Text>
                    <Text style={styles.profileDetails}>MySQL Workbench, Docker Desktop, VM Ware</Text>                   
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View ref = {projectRef}>
                <Text style={styles.heading}>Projects</Text>
                <Text style={styles.tailing}>1. D's player</Text>
                <Text style={styles.tailing}>2. 보배빌림</Text>
                <Text style={styles.tailing}>3. 우유부단</Text>
              </View>
              <View ref = {educationRef}>
                <Text style={styles.heading}>Education</Text>
                <Text style={styles.tailing}>1. Code States</Text>
                <Text style={styles.tailing}>2. Sparta</Text>
                <Text style={styles.tailing}>3. Gachon University</Text>
                <Text style={styles.tailing}>4. Overseas training in Singapore and Malaysia</Text>
              </View>
              <View ref = {practiceRef}>
                <Text style={styles.heading}>Practice</Text>
                <Text style={styles.tailing}>알고리즘 : Java (Solved.ac)</Text>
                <Text style={styles.tailing}>프로그래머스 : MySQL</Text>
              </View>
              <View ref = {careerRef}>
                <Text style={styles.heading}>Career</Text>
                <Text style={styles.tailing}>Career : 방사선사 (부산대학교병원)</Text>
              </View>
            </View>
          </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: 'stretch',
    backgroundColor: '#FFFAFA',
    padding: 15,
    width: '100%',
    height: '100%',
  },

  // 사이드바 부분
  sidebarContainer: {
    padding:10,
    paddingVertical: 15,
    backgroundColor: '#FFFAFA',
  },
  sidebarButton: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#20B2AA",
    borderColor:"#DA70D6",
    borderRadius:15,
    margin:7
  },
  sidebarText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },

  // 우측 콘텐츠 전체 컨테이너
  contentContainer: {
    padding:20,
    paddingHorizontal: 20
  }, 

  // Profile CSS 부분
  profileContainer: {
    flexDirection: "row",
    backgroundColor: "#20B2AA",
    padding : 10,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 80,
    alignContent: "center",
    justifyContent: "center",
  },
  profileDetailsContainer : {
    padding: 10,
    // justifyContent: "center",
    // backgroundColor: "#8B4513",
  },
  profileTitle: {
    color: "#696969",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileSubtitle: {
    color: "#FFFAFA",
    fontSize: 16,
    marginBottom: 5,
  },
  profileDetails: {
    color: "#FFFAFA",
    fontSize: 16,
  },
  TechnologiesUsed: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#696969"
  },
  techContainer :{
    // backgroundColor: "#696969",
    marginLeft: 50,
    borderLeftColor: "#FFFAFA",
    borderLeftWidth: 3,
    borderRightColor: "#FFFAFA",
    borderRightWidth: 3,
    borderRadius: 7,
    alignItems: 'stretch',
    paddingHorizontal: 30
  },
  techContentContainer: {
    flexDirection: "row",
  },
  techTitleContainer: {
    padding: 10,
  },
  techDetailsContainer: {
    padding: 10,
  },

  // 콘텐츠 영역
  detailsContainer: {
    backgroundColor: "#FFFAFA",
    padding : 10,
    paddingHorizontal: 150,
  },
  heading: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#20B2AA"
  },
  tailing: {
    padding: 2,
    fontSize: 15,
    marginVertical: 10,
  }
});