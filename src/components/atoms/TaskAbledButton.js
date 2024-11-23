import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors'; // colors.js에서 색상 불러오기

const TaskAbledButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* 버튼 중앙에 동적으로 입력받은 텍스트 */}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%', // 화면 너비의 90% 차지
    height: 64,
    backgroundColor: colors.primary001, // colors.js에서 가져온 primary001
    borderRadius: 16,
    justifyContent: 'center', // 중앙 정렬
    alignItems: 'center', // 중앙 정렬
    alignSelf: 'center', // 부모 기준으로 수평 중앙 배치
    marginVertical: 16, // 위아래 간격 추가
  },
  text: {
    color: colors.white000, // 텍스트 색상 (흰색)
    fontSize: 18, // 텍스트 크기
    fontWeight: 'bold', // 굵은 텍스트
  },
});

export default TaskAbledButton;