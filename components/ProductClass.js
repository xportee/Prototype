import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class ProductClass extends React.Component {
  renderDetail = () => {
    const { minim,priceColor,product } = this.props;
    if (!minim) {
      return (
        <Block right>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={10}>sudah diikuti</Text>
            <Text size={12} style={{textAlign:'right',marginBottom:10}} muted={!priceColor} color={priceColor}>{product.type}</Text>
            <Text size={12} style={{marginBottom:10}}>{product.description}</Text>
            <Text size={12} style={{fontWeight:'bold',marginBottom:5}} color='#707070'>Business Value</Text>
            <Text size={14} style={{fontWeight:'bold',marginBottom:10}} color='#2F7AE5'>Rp {product.price}</Text>
            <Text size={12} style={{fontWeight:'bold',marginBottom:5}} color='#707070'>Inventors</Text>
            <Text size={14} style={{fontWeight:'bold',marginBottom:10}} color='#000000'>Rp {product.people}</Text>
          </Block>
        </Block>
      )
    }
    return null;
  }

  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle,card } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row card flex style={[styles.product, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: product.image }} style={imageStyles} />
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
}

export default withNavigation(ProductClass);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    width:200
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
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});