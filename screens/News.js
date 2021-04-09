import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
  } from 'react-native';
import { Button, Block, Text, Input, theme, DeckSwiper } from 'galio-framework';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements';

import { Icon, Product } from '../components/';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { Card, ListItem} from 'react-native-elements';

const { width, height } = Dimensions.get('screen');
import products from '../constants/news';
import { ScrollView } from 'react-native-gesture-handler';

const thumbMeasure = (width - 48 - 32) / 3;

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideIndex: 0,
      carouselItems : [],
      search: '',
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
        <Icon name="search" family="font-awesome" color={theme.COLORS.WHITE} size={16} />
      </TouchableOpacity>
    );
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  renderSearch = () => {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search for News..."
        onChangeText={this.updateSearch}
        value={search}
        round
        lightTheme
        platform="android"
      />
    )
  };

  renderPortfolio = () => {
    return (
      <Block style={styles.main}>
        <Text size={18} style={{marginBottom:10, marginLeft:theme.SIZES.BASE, fontWeight:"bold"}}>Your News Recommendation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Block flex row>
            <Product news product={products[5]} style={{ marginLeft: theme.SIZES.BASE, marginRight: theme.SIZES.BASE, borderWidth:1, borderColor:"#439CEF"}} />
            <Product news product={products[1]} style={{ marginRight: theme.SIZES.BASE, borderWidth:1, borderColor:"#439CEF"}} />
            <Product news product={products[2]} style={{ borderWidth:1, marginRight: theme.SIZES.BASE, borderColor:"#439CEF" }}/>
          </Block>
        </ScrollView>
      </Block>
    )
  }

  renderHeader = () => {
    return(
    <Block>
    <Text size={18} style={{marginBottom:10, marginLeft:theme.SIZES.BASE, fontWeight:"bold"}}>Hot News</Text>
    <Card containerStyle={styles.card}>
        <Card.Title>Why Sumatra Coffee will be a popular Export Commodities</Card.Title>
        <Card.Divider style={{backgroundColor:materialTheme.COLORS.BUTTON_COLOR}}/>
        <Card.Image source={{uri:'https://images.unsplash.com/photo-1577161618325-2663fcfb4636?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2976&q=80'}}/>
        <Text style={{margin: 10}}>
            You may have heard about Sumatra Cofffee. You go to a coffee store near your office, order a coffee,
            and all of a sudden the barista asks about the kind of coffee you wanna drink. "Sumatra Coffee" or...
        </Text>
    </Card>
    <Card containerStyle={styles.card}>
        <Card.Title>10 Trends that will shape Export in 2021</Card.Title>
        <Card.Divider style={{backgroundColor:materialTheme.COLORS.BUTTON_COLOR}}/>
        <Card.Image source={{uri:'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}}/>
        <Text style={{margin: 10}}>
            Export surely is dynamic. Globalization means more and more people are influenced by another country's culture.
            This means more and more Commodities will be exported. Our research team predict that...
        </Text>
    </Card>
    <Card containerStyle={styles.card}>
        <Card.Title>Export potential from Indonesia</Card.Title>
        <Card.Divider style={{backgroundColor:materialTheme.COLORS.BUTTON_COLOR}}/>
        <Card.Image source={{uri:'https://images.unsplash.com/photo-1598193957011-39b9f2916992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}}/>
        <Text style={{margin: 20}}>
            Islands, nature, green, sea, culture. Indonesia is home to more than 17000 islands and many tribes. 
            Which means : Export Potential. Our team has analyzed which export Commodities...
        </Text>
    </Card>
    <Block style={{alignItems:"center", marginVertical:10}}>
        <Text size={20} color='#2f7ae5'>See More...</Text>
    </Block>
    </Block>
    );
  };

  renderProduct = () => {
    return (
      <Block style={styles.main}>
        <Text size={18} style={{marginBottom:10, marginLeft:theme.SIZES.BASE, fontWeight:"bold"}}>UMKM's Listing</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Block flex row>
            <Product product={products[1]} style={{ marginLeft: theme.SIZES.BASE, marginRight: theme.SIZES.BASE, borderWidth:1, borderColor:"#439CEF"}} />
            <Product product={products[2]} style={{ marginRight: theme.SIZES.BASE, borderWidth:1, borderColor:"#439CEF" }} />
            <Product product={products[3]} style={{ marginRight: theme.SIZES.BASE, borderWidth:1, borderColor:"#439CEF" }} />
            <Product product={products[4]} style={{ marginRight: theme.SIZES.BASE, borderWidth:1, borderColor:"#439CEF" }} />
            <Product product={products[2]} style={{ borderWidth:1, marginRight: theme.SIZES.BASE, borderColor:"#439CEF" }}/>
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
              <Product minim product={products[3]} style={{ marginRight: theme.SIZES.BASE }} />
              <Product minim product={products[4]} />
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
    return (
      <ScrollView>
        <Block flex style={{backgroundColor: 'white'}}>
          {this.renderSearch()}
          {this.renderPortfolio()}
          {this.renderHeader()}
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
    height: width/1.5,
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
  card:{
    borderRadius: 30,
  },
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
});