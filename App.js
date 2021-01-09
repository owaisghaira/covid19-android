import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Image } from 'react-native';
import Card from './src/component/Card/Card'
import { fetchData } from './src/confiq'
import CountryPicker from './src/component/CountryPicker/CountryPicker.js'

const App = () => {
  const [fetc, setFetchData] = useState({})

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData()
      setFetchData({ data })
    }
    fetchApi()
    // console.log(fetc.data.confirmed.value)
    // fetch("https://covid19.mathdro.id/api")
    // .then((data)=>data.json())
    // .then(covid=>{
    //   setFetchData({data:covid})
    //   console.log(fetc.data)
    // })
  }, [])

  return (
    <ScrollView>
      <View>
        <Image
          source={require('./src/images/imagec.png')}
          style={styles.stretch}
        />
        <CountryPicker />
        <Card />
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretch: {
    marginTop: 10,
    marginLeft: 60,
    // justifyContent:'center',
    // alignItems:'center',
    width: 250,
    height: 50,
    resizeMode: 'stretch',
  }


});

export default App;
