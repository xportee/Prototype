import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components/';
const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class SmartScreen extends React.Component {
    renderFeature = () => {
        return (
          <Block styles={styles.main}>
                <Text size={14} style={{fontSize:14, fontWeight:"bold"}}> Featured Business</Text>
                <Image source={{uri:products[1].image}} style={styles.image}> 
                </Image>
                <Block >
                    <Text color="#000000" style={{fontSize:20, fontWeight:"bold"}} >PT. STEINS GATE</Text>
                    <Text size={14} style={{textAlign:'right',marginBottom:5}}>Future Gadget</Text>
                <Block style={styles.FeatureSubtitle}>
                    <Text size={14}>Menyelamatkan Mayuri dan Kurisu adalah Jalan Ninjaku Kaizokuou ni ore wa naruuu</Text>
                </Block>
                </Block>
            </Block>
        )
    }
    render() {
        return(
            <Block>
                {this.renderFeature}
            </Block>
        )
    }

    
}
const styles = StyleSheet.create({
    home: {
      width: width,    
    },
    search: {
      height: 48,
      width: width - 32,
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 3,
    },
    header: {
      backgroundColor: theme.COLORS.WHITE,
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 8,
      shadowOpacity: 0.2,
      elevation: 4,
      zIndex: 2,
    },
    tabs: {
      marginBottom: 24,
      marginTop: 10,
      elevation: 4,
    },
    tab: {
      backgroundColor: theme.COLORS.TRANSPARENT,
      width: width * 0.50,
      borderRadius: 0,
      borderWidth: 0,
      height: 24,
      elevation: 0,
    },
    tabTitle: {
      lineHeight: 19,
      fontWeight: '300'
    },
    divider: {
      borderRightWidth: 0.3,
      borderRightColor: theme.COLORS.MUTED,
    },
    products: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE * 2,
    },
    image: {
      
      height:300,
      width:width,
      margin:5,
      marginVertical:10
    },
    FeatureSubtitle: {
      fontSize:30,
      fontWeight:"bold",
      textAlign:'left',
      marginVertical:10
    },
    main: {
      margin:5,
      marginBottom:10,
      marginTop:10,
      borderRadius:5,
      paddingLeft:10,
      paddingVertical:10
    },
    blockRow: {
      margin:5
    },
    iconStyle: {
      margin:5
    }
    
    
  
  });