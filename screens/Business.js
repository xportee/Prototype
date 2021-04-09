import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components';
import { ProgressBar, Colors } from 'react-native-paper';
import materialTheme from '../constants/Theme';



const { width } = Dimensions.get('screen');
import products from '../constants/products';



export default class BusinessScreen extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }
  


  renderFeature = () => {
    return (
      <Block styles={styles.main}>
        <Text size={14} style={{fontSize:14, fontWeight:"bold"}}> Featured Business</Text>
        <Image source={{uri:'https://source.unsplash.com/XOhI_kW_TaM'}} style={styles.image}>
        
          
        </Image>
        <Block >
        <Text color="#000000" style={{fontSize:20, fontWeight:"bold"}} >PT. Bisnis</Text>
        <Text size={14} style={{textAlign:'right',marginBottom:5}}>High Quality Coffee</Text>
        <Block style={styles.FeatureSubtitle}>
        <Text size={14}>We have been experienced in exporting high-quality sumatra coffee to 3 countries</Text>
        </Block>
        <Block style={{marginVertical:10}}>
          <ProgressBar  progress={0.8} color="#2f7ae5" />
        </Block>
        
        <Block flex row>
          <Block style={styles.blockRow}>
            <Text size={14} style={{fontWeight:'bold'}} color='#091a4d'>89%</Text>
            <Text fontWeight='bold' color='#091a4d'>Funded</Text>
          </Block >
          <Block style={styles.blockRow}>
            <Text size={14} style={{fontWeight:'bold'}} color='#091a4d'>123k</Text>
            <Text>Inventors</Text>
          </Block>
          <Block style={styles.blockRow}>
            <Text size={14} style={{fontWeight:'bold'}} color='#091a4d'>23</Text>
            <Text>Days To go</Text>
          </Block>
          <Block style={styles.blockRow}>
            <Block flex row>
              <Text size={14} style={{fontWeight:'bold'}} color='#2f7ae5'>Rp 100.999.999,00</Text>
              <Icon name="swap-vert" family="Ionicons"  size={20} color='#000000'/>
            </Block>
            <Text>Business Value</Text>
          </Block>
          
        </Block>
        <Block style={{flex:1,flexDirection:'row-reverse'}}>
          <Icon name="like2" family="AntDesign"  size={20} color='#000000' style={styles.iconStyle}/>
          <Icon name="send" family="Feather"  size={20} color='#000000' style={styles.iconStyle}/>
          <Icon name="bookmark" family="Feather"  size={20} color='#000000' style={styles.iconStyle}/>
        </Block>
        <Block alignItems='space-between' flexDirection="row">
        <Button
            shadowless
            style={styles.buttonInverse}
            color={materialTheme.COLORS.BUTTON_COLOR}>
            Business Portfolio
        </Button>
        <Button
            shadowless
            style={styles.button}
            color="white">
            <Text style={{color:materialTheme.COLORS.BUTTON_COLOR}}>Buy Stock</Text>
        </Button>
        </Block>

        </Block>

        <Block> 
        <Text size={14} style={{marginVertical:10,fontWeight:'bold'}} >Business's Statistics</Text>
        <Image source={require('../assets/images/Stats.png')} style={styles.image}/>
        
        </Block>
        
        
      
      </Block>
      
    )
  }
  
  renderProduct = () => {
    return (
      <Block>
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

  renderCard = () => {
    return(
      <Block>
      <Text size={14} style={{marginBottom:5,fontWeight:'bold'}} color="#091a4d">Your Investor type</Text>
      <Block style={styles.main} backgroundColor="#2F7AE5">
        <Block flex row style={{marginBottom:10}}>
        <Icon name="hand" family="Entypo"  size={20} color='white' style={styles.iconStyle}/>
          
          <Text color='#ffffff' style={{fontSize:20, fontWeight:"bold"}}  >Aggresive investor</Text>
        </Block>
        <Text color="#ffffff">You are Tolerant to high risk in aiming return</Text>
        <Block style={{
            flex: 1, 
            alignItems: 'center',
        }}>
        <Button
            shadowless
            style={styles.buttonInverse}
            color="white">
         <Text size={16} style={{color:materialTheme.COLORS.BUTTON_COLOR}}>Test again</Text> 
        </Button>
        </Block>

      </Block>
      </Block>

        
        
     
    )
  }

  
  

  renderProducts = () => {
    return (
      <View>
        
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <View style={{marginBottom:10}}>
          {this.renderFeature()}
          </View>
      </ScrollView>
      </View>
      
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,  
    backgroundColor:'#ffffff'  
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
    width:width,
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
  },
  button: {
    width: width - theme.SIZES.BASE * 14.5,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 30,
  },
  buttonInverse: {
    width: width - theme.SIZES.BASE * 14.5,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 30,
    borderWidth:1,
    borderColor:materialTheme.COLORS.BUTTON_COLOR,
    fontSize:11,
    color:"white",
  },
  

});
