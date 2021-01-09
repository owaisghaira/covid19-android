import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const CountryPicker = () => {
    const [country, setcountry] = useState({ country: 'Global' })
    return (
        <View>
            <DropDownPicker
                items={[
                    { label: 'USA', value: 'usa', },
                    { label: 'UK', value: 'uk', },
                ]}
                // defaultValue={""}
                // defaultValue = 'Global'
                placeholder="Global"
                containerStyle={{ height: 40, width: '80%', marginLeft: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setcountry({
                    country: item.value
                })}
            />
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