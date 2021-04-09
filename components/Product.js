import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { ProgressBar, Colors } from 'react-native-paper';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Product extends React.Component {
  renderDetail = () => {
    const { minim,priceColor,product,card,ikut,portfolio, news } = this.props;
    if (!minim & !card &!portfolio & !news) {
      return (
        <Block right>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={12} style={{textAlign:'right',marginBottom:10}} muted={!priceColor} color={priceColor}>{product.type}</Text>
            <Text size={12} style={{marginBottom:10}}>{product.description}</Text>
            <Text size={12} style={{fontWeight:'bold',marginBottom:5}} color='#707070'>Business Value</Text>
            <Text size={14} style={{fontWeight:'bold',marginBottom:10}} color='#2F7AE5'>Rp {product.price}</Text>
            <Text size={12} style={{fontWeight:'bold',marginBottom:5}} color='#707070'>Inventors</Text>
            <Text size={14} style={{fontWeight:'bold',marginBottom:10}} color='#000000'>{product.people} orang</Text>
          </Block>
        </Block>
      )
    }
    else if (portfolio) {
      return (
        <Block>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={12} style={{fontWeight:'bold',marginBottom:5}} color='#707070'>Your Portfolio</Text>
            <Text size={14} style={{fontWeight:'bold',marginBottom:10}} color='#2F7AE5'>Rp {product.price}</Text>
            <Text size={12} style={{fontWeight:'bold',marginBottom:5}} color='#707070'>Profit</Text>
            <Text size={14} style={{fontWeight:'bold',marginBottom:10}} color='#000000'>Rp {product.people}</Text>
          </Block>
        </Block>
      )
    }
    else if (news) {
      return (
        <Block>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={{fontWeight:'bold',margin:10}} color='#2F7AE5'>See More</Text>
          </Block>
        </Block>
      )
    }
    else if(card & ikut) {
      return(
        <Block >
          <Block flex space="between" style={styles.productDescription}>
          <Text style={{}} color='#2f7ae5'>Already joined</Text>
              <Text size={16} style={styles.productTitle}>{product.title}</Text>
            <Text>{product.description}</Text>
            
            
          </Block>
        </Block>
      )
    }
    else if(card & !ikut) {
      return(
        <Block >
          <Block flex space="between" style={styles.productDescription}>
          
            <Text size={16} style={styles.productTitle}>{product.title}</Text>
            <Text>{product.description}</Text>
            
            
          </Block>
        </Block>
      )
    }
    
    return null;
  }

  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle,card } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    const imageStylesClass = [styles.imageClass, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    if(!card) {
      return (
        <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: product.image }} style={imageStyles} />
              <ProgressBar  progress={0.8} color="#2f7ae5" />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            <Block flex space="between" style={styles.productDescription}>
              
              <Text size={20} style={styles.productTitle}>{product.title}</Text>
              {this.renderDetail()}
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      );
    }
    else{
      return(
        <Block row card flex style={[styles.productClass, styles.shadow, style]} backgroundColor='#E1F0FF'>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: product.image }} style={imageStylesClass} />
            </Block>
            
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            <Block flex  style={styles.productDescription}>
              
              {this.renderDetail()}
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      );
    }
    
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    width:200,
    shadowRadius:3,
    borderWidth:1, borderColor:"#439CEF"
  },
  productClass: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    shadowRadius:3,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    fontWeight:'bold'
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  imageClass: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop:theme.SIZES.BASE / 2
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 5,
    elevation: 6,
  },
});