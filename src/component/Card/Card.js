import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, FlatList, View, Text, StatusBar, } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';

const CardIte = ({ daTa }) => {
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState({ confirmed: "", deaths: "", recovered: "", lastUpdate: "" });

    let propData = daTa.data

    useEffect(() => {
        // console.log(propData)
        // fetch("https://covid19.mathdro.id/api")
        //     .then((response) => response.json())
        //     .then((json) => {
        //         setData({ confirmed: json.confirmed, deaths: json.deaths, recovered: json.recovered, lastUpdate: json.lastUpdate })
        //     }
        //     )
        //     .catch((error) => console.error(error))
        //     .finally(() => setLoading(false));
    }, [daTa]);

    return (
        <>
            <View style={{ flex: 1, padding: 24 }}>
                {/* {isLoading ? <ActivityIndicator /> : (
                    <>

                        <Content >
                            <Card style={styles.cardstyle1}>
                                <CardItem footer header bordered>
                                    <Text style={{ fontSize: 20, }}>Confirmed</Text>
                                </CardItem>
                                <Text style={{ fontSize: 28, margin: 10 }}>{data.confirmed.value}</Text>
                                <Text>{data.lastUpdate}</Text>
                                <CardItem >
                                    <Text>No. of active cases of COVID19</Text>
                                </CardItem>

                            </Card>
                        </Content>

                        <Content >
                            <Card style={styles.cardstyle2}>
                                <CardItem footer header bordered>
                                    <Text style={{ fontSize: 20, }}>Recovered</Text>
                                </CardItem>
                                <Text style={{ fontSize: 28, margin: 10 }}>{data.recovered.value}</Text>
                                <Text>{data.lastUpdate}</Text>
                                <CardItem >
                                    <Text>No. of recovred from COVID19</Text>
                                </CardItem>

                            </Card>
                        </Content>
                        <Content >
                            <Card style={styles.cardstyle3}>
                                <CardItem footer header bordered>
                                    <Text style={{ fontSize: 20, }}>Deaths</Text>
                                </CardItem>
                                <Text style={{ fontSize: 28, margin: 10 }}>{data.deaths.value}</Text>
                                <Text>{data.lastUpdate}</Text>
                                <CardItem >
                                    <Text>No. of deaths cause by COVID19</Text>
                                </CardItem>

                            </Card>
                        </Content>

                    </>


                )} */}
                {propData ? (
                    <>
                        <Content >
                            <Card style={styles.cardstyle1}>
                                <CardItem footer header bordered>
                                    <Text style={{ fontSize: 20, }}>Confirmed</Text>
                                </CardItem>
                                <Text style={{ fontSize: 28, margin: 10 }}>{propData.confirmed.value}</Text>
                                <Text>{propData.lastUpdate}</Text>
                                <CardItem >
                                    <Text>No. of active cases of COVID19</Text>
                                </CardItem>

                            </Card>
                        </Content>

                        <Content >
                            <Card style={styles.cardstyle2}>
                                <CardItem footer header bordered>
                                    <Text style={{ fontSize: 20, }}>Recovered</Text>
                                </CardItem>
                                <Text style={{ fontSize: 28, margin: 10 }}>{propData.recovered.value}</Text>
                                <Text>{propData.lastUpdate}</Text>
                                <CardItem >
                                    <Text>No. of recovred from COVID19</Text>
                                </CardItem>

                            </Card>
                        </Content>
                        <Content >
                            <Card style={styles.cardstyle3}>
                                <CardItem footer header bordered>
                                    <Text style={{ fontSize: 20, }}>Deaths</Text>
                                </CardItem>
                                <Text style={{ fontSize: 28, margin: 10 }}>{propData.deaths.value}</Text>
                                <Text>{propData.lastUpdate}</Text>
                                <CardItem >
                                    <Text>No. of deaths cause by COVID19</Text>
                                </CardItem>

                            </Card>
                        </Content>
                    </>

                ) : <ActivityIndicator />}
            </View>
            {/* <View style={styles.cards}>
                    <View>
                    <Text style={styles.txt}>card</Text>
                    </View>
                </View> */}

            {/* <Header  /> */}
            {/* <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>NativeBase</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                                NativeBase is a free and open source framework that enable
                                developers to build
                                high-quality mobile apps using React Native iOS and Android
                                apps
                                with a fusion of ES6.
                              </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text>ans</Text>
                    </CardItem>
                </Card>
            </Content> */}

        </>
    );

};

const styles = StyleSheet.create({
    containe: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 25
    },
    cards: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    cardstyle1: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'blue'
    },
    cardstyle2: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'green'
    },
    cardstyle3: {
        alignItems: 'center',
        borderRadius: 15,
        borderBottomWidth: 10,
        borderBottomColor: 'red'
    }

});

export default CardIte;
