import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { PickerIOSComponent, StyleSheet, Text, View , Button} from 'react-native';

export default function App() {

  const [lotto, setLotto] = useState([]);

  function makeLotto(){
    let i=0;
    let lnumber = [];
    let rnumber = 0;

    let lottos = [];
    let a = 0;

    for(i=1; i<=45; i++){
      lottos.push(i);
    }

    for(i=0; i<=44; i++){
      rnumber = Math.floor(Math.random()*45);

      a = lottos[i];
      lottos[i] = lottos[rnumber];
      lottos[rnumber] = a;

    }

    console.log(lottos);

    for(i=0; i<6; i++){
      lnumber.push(lottos[i]);
    }
    setLotto(lnumber);
  }

  useEffect(() => { // 처음 한번만 렌더링 됨
    makeLotto();
  },[]);

  

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 100, }}>lotto</Text>
      <Button title="생성" onPress={()=>makeLotto()}/>
      <Text>{lotto.toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
