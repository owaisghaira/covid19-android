import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import { Picker } from '@react-native-community/picker'
// import DropDownPicker from 'react-native-dropdown-picker';
import { countries } from '../../confiq/index'

const CountryPicker = ({ handlechange }) => {
    const [country, setcountry] = useState([])
    const [selectedValue, setSelectedValue] = useState("java");
    useEffect(() => {
        const fetchCountries = async () => {
            setcountry(await countries())
        }
        fetchCountries()
    }, [setcountry])
    console.log(country)
    return (
        <View>
            {/* <DropDownPicker
                items={[{ label: 'USA', value: 'usa1', },]}
                
                // defaultValue={""}
                // defaultValue = 'Global'
                placeholder="Global"
                containerStyle={{ height: 40, width: '80%', marginLeft: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setcountry({ country: item.value })}
            /> */}
            <Picker
                selectedValue={selectedValue}
                style={{ height: 20, width: '80%', marginTop: 5, marginLeft: 40 }}
                onValueChange={(e) => {
                    handlechange(e)
                    return setSelectedValue(e)
                }}
            >
                <Picker.Item label="Global" value="Gobal" />

                {country.map((data, i) => <Picker.Item key={i} label={data} value={data} />)}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CountryPicker;