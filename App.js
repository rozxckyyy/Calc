import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [result, setResult] = React.useState('')
  const [input, setInput] = React.useState('')

  const click = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input))
      } catch(error) {
        setResult('error')
      }
    } else if (value === 'C') {
      setInput('')
      setResult('')
    } else {
      setInput(input + value)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.result_area}>
        <TextInput
        style={styles.text}
        value={input.length > 0 ? `${input}`+'=' : input}
        onChangeText={setInput}
        readOnly/>
        <Text style={styles.text}>
          {result == Infinity ? "Деление на ноль невозможно" : result}
        </Text>
      </View>
      <View style={styles.btns_group}>
        <View style={styles.btns_inner}>
          <View style={styles.btn_reset}>
            <Button
            onPress={() => click('C')}
            title='C'
            color='lightgrey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('/')}
            title='/'
            color='orange'
            />
          </View>
        </View>
        <View style={styles.btns_inner}>
          <View style={styles.btns}>
            <Button
            onPress={() => click('7')}
            title='7'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('8')}
            title='8'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('9')}
            title='9'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('*')}
            title='*'
            color='orange'
            />
          </View>
        </View>
        <View style={styles.btns_inner}>
          <View style={styles.btns}>
            <Button
            onPress={() => click('4')}
            title='4'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('5')}
            title='5'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('6')}
            title='6'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('-')}
            title='-'
            color='orange'
            />
          </View>
        </View>
        <View style={styles.btns_inner}>
          <View style={styles.btns}>
            <Button
            onPress={() => click('1')}
            title='1'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('2')}
            title='2'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('3')}
            title='3'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('+')}
            title='+'
            color='orange'
            />
          </View>
        </View>
        <View style={styles.btns_inner}>
          <View style={styles.btn_zero}>
            <Button
            onPress={() => click('0')}
            title='0'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('.')}
            title='.'
            color='grey'
            />
          </View>
          <View style={styles.btns}>
            <Button
            onPress={() => click('=')}
            title='='
            color='orange'
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  result_area: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 30,
    width: '100%',
    alignItems: 'flex-end',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  btns_group: {
    marginTop: 10,
    width: '100%',
  },
  btn_reset: {
    padding: 5,
    width: '75%'
  },
  btns: {
    padding: 5,
    width: '25%'
  },
  btns_inner: {
    width: '100%',
    flexDirection: 'row',
  },
  btn_zero: {
    padding: 5,
    width: '50%'
  }
});
