import axios from 'react-native-axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {

    let changealeurl = url;
    if (country) {
        changealeurl = `${url}/countries/${country}`
    }

    try {
        // const { data } = await axios.get(url);
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }
        // return modifiedData;

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changealeurl);
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (err) {
        console.log(err)

    }
}