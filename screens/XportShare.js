import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components';
import { ProgressBar, Colors } from 'react-native-paper';



const { width } = Dimensions.get('screen');
import products from '../constants/products';



export default class XportShareScreen extends React.Component {
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
        <Image source={require('../assets/images/x3.jpg')} style={styles.image}>
        
          
        </Image>
        <Block >
        <Text color="#000000" style={{fontSize:20, fontWeight:"bold"}} >PT. STEINS GATE</Text>
        <Text size={14} style={{textAlign:'right',marginBottom:5}}>Future Gadget</Text>
        <Block style={styles.FeatureSubtitle}>
        <Text size={14}>Menyelamatkan Mayuri dan Kurisu adalah Jalan Ninjaku Kaizokuou ni ore wa naruuu</Text>
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
        </Block>
        
        
      
      </Block>
      
    )
  }
  
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

  renderCard = () => {
    return(
      <Block style={styles.main} backgroundColor='#2F7AE5'>
        <Text size={14} style={{marginBottom:5,fontWeight:'bold'}} color="#091a4d">Your Investor type</Text>
        <Block flex row style={{marginBottom:10}}>
        <Icon name="hand" family="Entypo"  size={20} color='white' style={styles.iconStyle}/>
          
          <Text color='#ffffff' style={{fontSize:20, fontWeight:"bold"}}  >Aggresive investor</Text>
        </Block>
        <Text color="#ffffff">{products[1].description}</Text>  
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
        <View>
          {this.renderCard()}
        </View>
        
          
        
        {this.renderProduct()}
      </ScrollView>
      </View>
      
    )
  }

  render() {
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
