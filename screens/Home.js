import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  TouchableOpacity
  } from 'react-native';
import { Button, Block, Text, Input, theme, DeckSwiper } from 'galio-framework';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon, Product } from '../components/';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get('screen');
import products from '../constants/products';
import { ScrollView } from 'react-native-gesture-handler';

const thumbMeasure = (width - 48 - 32) / 3;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideIndex: 0,
      carouselItems : [],
    };
  }

  renderButton = () => {
    const buttonClickedHandler = () => {
      console.log('You have been clicked a button!');
      // do something
    };
  
    return (
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}>
        <Icon name="map-marker" family="font-awesome" color={theme.COLORS.WHITE} size={16} />
      </TouchableOpacity>
    );
  }

  renderIcon = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="search" family="material" />

    return (
    <Block flex row space="between" style={{marginHorizontal: theme.SIZES.BASE,marginVertical: theme.SIZES.BASE}}>
      <Block alignItems = "center">
        {this.renderButton()}
        <Text color={theme.COLORS.BLACK} size={16}>Fish</Text>
      </Block>
      <Block alignItems = "center">
        {this.renderButton()}
        <Text color={theme.COLORS.BLACK} size={16}>Crab</Text>
      </Block>
      <Block alignItems = "center">
        {this.renderButton()}
        <Text color={theme.COLORS.BLACK} size={16}>Crab</Text>
      </Block>
      <Block alignItems = "center">
        {this.renderButton()}
        <Text color={theme.COLORS.BLACK} size={16}>Crab</Text>
      </Block>
    </Block>
    );
  };

  renderHeader = () => {
    return(
      <Block flex>
      <ImageBackground
        source={{uri: Images.Profile}}
        style={styles.profileContainer}
        imageStyle={styles.profileImage}>
        <Block flex style={styles.profileDetails}>
          <Block style={styles.profileTexts}>
            <Text color="white" size={28} style={{ paddingBottom: 8 }}>Limited Deals</Text>
            <Block row space="between">
              <Block row>
                <Text color="white" size={16} muted style={styles.seller}>Quality Meat from Argentia</Text>
              </Block>
            </Block>
          </Block>
          <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
        </Block>
      </ImageBackground>
    </Block>
    );
  };

  renderProduct = () => {
    return (
      <Block style={styles.main}>
        <Text size={14} style={{marginBottom:10}}>START INVESTING TODAY FROM ROBY'S PICKS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Block flex row>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE}} />
            <Product product={products[2]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[3]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[4]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]} />
          </Block>
        </ScrollView>
      </Block>
    )
  }

  renderCards = () => {
    return (
      <Block>
        <Text size={14} style={styles.title}>TODAY'S DAILY DEALS</Text>
        <Block flex style={styles.main}>
            <Block flex row>
              <Product minim product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Product minim product={products[2]} />
            </Block>
            <Block flex row>
              <Product minim product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Product minim product={products[2]} />
            </Block>
            <Block flex row>
              <Product minim product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Product minim product={products[2]} />
            </Block>
        </Block>
      </Block>
    )
  }

  _renderItem = ({item,index}) => {
    return (
      <Block style={{
        backgroundColor:'white',
        borderRadius: 25,
        height: (Dimensions.get('window').width*0.8)*9/16,
        elevation: 5,
        marginBottom: 3.5,
        overflow: 'hidden'
        }}>
        {
          <ImageBackground source={{uri: item.image}} style={{ marginRight: theme.SIZES.BASE }}/>
        }
      </Block>
    )
  }

  renderCarousel = () => {
    return(
      <Block style={styles.carousel}>
      <Text size={14} style={styles.title}>YOUR RECOMMENDATION</Text>
      <Carousel
        ref={ref => this.carousel = ref}
        layout={"stack"}
        data={products}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width*0.8}
        renderItem={this._renderItem}
        activeSlideOffset={35}
        onSnapToItem={ (index) => this.setState({activeSlideIndex: index})}/>
      <Pagination
        dotsLength={products.length}
        activeDotIndex={this.state.activeSlideIndex}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 3,
          backgroundColor: 'rgba(200, 200, 200, 1)'
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(200, 200, 200, 1)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}/>
    </Block>
    );
  }

  render() {
    const elements = [
      <Block style={{ backgroundColor: '#B23AFC', height: 250, width: 250 }}>
        <Text>You wanna see a cool component?</Text>
        <Text>Galio has this cool Deck Swiper</Text>
      </Block>,
      <Block style={{ backgroundColor: '#FE2472', height: 250, width: 250 }}>
        <Text>What did you expect?</Text>
        <Text>This React Native component works perfectly</Text>
      </Block>,
      <Block style={{ backgroundColor: '#FF9C09', height: 250, width: 250 }}>
        <Text>Maybe you want to build the next Tinder</Text>
      </Block>,
      <Block style={{ backgroundColor: '#45DF31', height: 250, width: 250 }}>
        <Text>or maybe you just want a nice deck swiper component</Text>
        <Text>Galio has everything sorted out for you</Text>
      </Block>
    ];
    return (
      <ScrollView>
        <Block flex>
          {this.renderHeader()}
          {this.renderIcon()}
          {this.renderCarousel()}
          {this.renderProduct()}
          {this.renderCards()}
        </Block>
      </ScrollView>
    );
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
    borderRadius: 40,
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
    width: width - theme.SIZES.BASE * 1,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  carousel: {
    marginTop : theme.SIZES.BASE * 1,
    marginBottom : theme.SIZES.BASE * 0.5,
  },
  main : {
    paddingHorizontal : theme.SIZES.BASE * 1,
    marginBottom : theme.SIZES.BASE * 1,
  },
  title: {
    paddingVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
  },
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
  roundButton1: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#2f7ae5',
  },
});