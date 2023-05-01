import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function profile() {
  return (
    <View style={styles.container}>
      <Text>김동진</Text>
      <Text>사진</Text>
      <Text>이메일</Text>
      <Text>연락처</Text>
      <Text>사용기술</Text>

      <Text>프로젝트</Text>
      <Text>D's player</Text>
      <Text>보배빌림</Text>
      <Text>우유부단</Text>
      
      <Text>교육</Text>
      <Text>코드스테이츠</Text>
      <Text>스파르타</Text>
      <Text>학교</Text>
      <Text>해외연수</Text>

      <Text>Else</Text>
      <Text>알고리즘 : 자바 (Solved.ac)</Text>
      <Text>알고리즘 : MySQL (프로그래머스)</Text>
      <Text>career : 부산대</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});