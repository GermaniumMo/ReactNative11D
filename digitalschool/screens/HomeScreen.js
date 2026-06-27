import React, { useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper';
import Icon from '../components/Icon';
import Item from '../components/Item';
import data from '../data/data.json';

const COLORS = {
    primary: '#384053',
    accent: '#22D3FF',
    white: '#ffffff',
    lightGray: '#f5f5f5',
    darkText: '#000',
    secondaryText: '#666'
};

const HomeScreen = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setProducts(data.popularproducts);
    }, []);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay={true}
                    autoplayTimeout={5}
                    autoplayDirection={true}
                    index={0}
                    loop={true}
                    showsButtons={false}
                    dotStyle={styles.dot}
                    activeDotColor={COLORS.accent}
                    paginationStyle = {styles.paginationStyle}
                >
                    <View style={styles.imgItem}>
                        <Image
                            source={require('../assets/avatar1.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.imgItem}>
                        <Image
                            source={require('../assets/avatar2.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.imgItem}>
                        <Image
                            source={require('../assets/avatar3.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.imgItem}>
                        <Image
                            source={require('../assets/avatar4.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.imgItem}>
                        <Image
                            source={require('../assets/avatar5.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.imgItem}>
                        <Image
                            source={require('../assets/project1.png')}
                            style={styles.imgItem}
                            resizeMode="cover"
                        />
                    </View>
                </Swiper>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.iconRow}>
                    <View style={styles.iconCol}>
                        <Icon name="Cellphone-iphone" iconText='iPhone'/>
                    </View>
                    <View style={styles.iconCol}>
                        <Icon name="android" iconText='Samsung'/>
                    </View>
                    <View style={styles.iconCol}>
                        <Icon name="laptop" iconText='Laptop'/>
                    </View>
                </View>
                <View style={styles.iconRow}>
                    <View style={styles.iconCol}>
                        <Icon name="tablet" iconText='Tablet'/>
                    </View>
                    <View style={styles.iconCol}>
                        <Icon name="mouse-outline" iconText='Mouse'/>
                    </View>
                    <View style={styles.iconCol}>
                        <Icon name="keyboard" iconText='Keyboard'/>
                    </View>
                </View>
            </View>

            <View style={styles.productsContainer}>
                <Text style={styles.sectionTitle}>Most popular products</Text>
            </View>

            <View style={styles.productsContainer}>
                {products.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </View>
            <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreTxt}>View More</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    sliderContainer: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: COLORS.lightGray
    },
    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    dot: {
        backgroundColor: 'rgb(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginBottom: 3,
        marginTop: 3,
        marginRight: 3,
    },
    paginationStyle: {
        marginBottom: 8
    },

    iconsContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    iconCol: {
        alignItems: 'center',
        width: '30%',
        height: 100,
    },
    item: {
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: COLORS.darkText
    },
    productsContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    viewMoreButton: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.accent,
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    viewMoreTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.white
    }
});

export default HomeScreen;