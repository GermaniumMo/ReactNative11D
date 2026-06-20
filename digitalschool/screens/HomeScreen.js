import React, { useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper-new';
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
    const [carouselndex, setCarouselndex] = useState(0);

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
                    onIndexChanged={(index) => setCarouselndex(index)}
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
    }
});

export default HomeScreen;