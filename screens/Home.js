import * as React from 'react' 
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'lefter',
    justifyContent: 'center',
  },
});
