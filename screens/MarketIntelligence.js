import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image, TouchableWithoutFeedback  } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components';
import { ProgressBar, Colors, Divider } from 'react-native-paper';

import productClass from '../constants/productClass'

const { width } = Dimensions.get('screen');
import products from '../constants/products';
import titleCard from '../constants/titleCard'
import { TouchableOpacity } from 'react-native-gesture-handler';





export default class MarketScreen extends React.Component {
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
  

  renderMap = () => {
    return(
      <Block> 
        <Text size={14} style={{marginVertical:10,fontWeight:'bold'}} >Lokasi Penjual</Text>
        <Image source={require('../assets/images/x3.jpg')} style={styles.image}/>
        
        <Block>
          <Block flex row>
            <Block style = {styles.circle} >
              <Text size={18} style={{fontWeight:'bold'}} color="#ffffff"> 1</Text>
            </Block>
            <Text style={{margin:10,fontWeight:'bold'}} size={20} color='#2f7ae5'>Denpasar,Bali</Text>
            </Block>
          <Block flex row>
            <Block style = {styles.circleOther} >
              <Text size={16} style={{fontWeight:'bold'}} color="#ffffff"> 2</Text>
            </Block>
            <Text style={{margin:10,fontWeight:'bold'}} size={20}>Banyuwangi, East Java</Text>
          </Block>
          <Block flex row>
            <Block style = {styles.circleOther} >
              <Text size={16} style={{fontWeight:'bold'}} color="#ffffff"> 3</Text>
            </Block>
            <Text style={{margin:10,fontWeight:'bold'}} size={20}>Singaraja,Bali</Text>
          </Block>
        </Block>
      </Block>
      
    )
  }
  renderFeature = () => {
    return (
      <Block styles={styles.main}>
        <Text size={20} style={{ fontWeight:"bold"}} color="#2f7ae5">CV. Sukses Mulya</Text>
        
        {this.renderMap()}
        <Block >
        <Divider style={{marginVertical:10}}/>
        </Block>
        <Text size={20} style={{fontWeight:'bold'}} color="#707070">Saran Roby Untuk Kamu</Text>
        
      
      </Block>
      
    )
  }
  
  renderCardTitle = (title) => {
    return(
      <Block>
        <Block flex row>
          <Icon name={title.iconName} family={title.iconFamily} style={{margin:5}} color="#2f7ae5"/>
          <Text style={{margin:5,fontWeight:'bold'}} color="#2f7ae5">{title.name}</Text>
        </Block>
        <Divider style={{marginVertical:10}}/>

      </Block>

    )
  }

  renderCardDescription = () => {
    return(
      <Block>
          <Block flex row >
          <Block flex space="between" style={{margin:10}}>
            <Text style={{marginBottom:10,fontWeight:'bold'}} color="#2f7ae5"> Dokumen tidak Terverifikasi</Text>
            <Text size={12}> Dokumen ABC</Text>
            <Text size={12}> Dokumen ABC</Text>
            <Button style={styles.buttonstyle}>
              Cek Dokumen
            </Button>
          </Block>
          <Block flex space="between" style={styles.productDescription}>
          <Text style={{marginBottom:10,fontWeight:'bold'}} color="#2f7ae5"> Dokumen belum di-upload</Text>
            <Text> Dokumen ABC</Text>
            <Text> Dokumen ABC</Text>
            <Button style={styles.buttonstyle}>
              Masukkan
            </Button>
          </Block>
        </Block >
        <TouchableOpacity style={{flexDirection:'row-reverse'}}>
          
          <Text color="#2f7ae5"> Saya Butuh Bantuan dari Roby</Text>
          <Icon name="questioncircle" family="AntDesign" color="#2f7ae5"/>
        </TouchableOpacity>
      </Block>
      
    )
  }

  renderCardDescription2 = () => {
    return(
      <Block flex row>
        <Image source={require('../assets/images/x3.jpg')} style={styles.imageCard}/>
        <Block flex space="between" style={styles.productDescription}>
          <Text color="#2f7ae5">Barang Terjual Bulan ini</Text>
        
          <Text >1 Ikan gurame</Text>
          <Block style={{flexDirection:'row-reverse'}}>
            <Text size={10} flex style={{flexDirection:'row-reverse'}}>(123 Tons)</Text>
          </Block>
          <Text>2 Ikan Kakap</Text>
          <Block style={{flexDirection:'row-reverse'}}>
              <Text size={10} flex style={{flexDirection:'row-reverse'}}>(80 Tons)</Text>
          </Block>
          
          <Text>3 Ikan Lele</Text>
          <Block style={{flexDirection:'row-reverse'}}>
          <Text size={10} flex style={{flexDirection:'row-reverse'}}>(12 Tons)</Text>
          </Block>

          
          
        </Block>
      </Block>
    )
  }
  



  renderAllCard = () => {
    return (
      <Block style={styles.allCard}>
        <Block  style={[styles.productClass, styles.shadow,]} >
          <Block>
            {this.renderCardTitle(titleCard[0])}
          </Block>
           <Block row flex>
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
              <Block flex  style={styles.productDescription}>
                
                {this.renderCardDescription()}
            
              </Block>
            </TouchableWithoutFeedback>
          </Block>
        
      
          </Block>
          <Block  style={[styles.productClass, styles.shadow,]} >
          <Block>
            {this.renderCardTitle(titleCard[1])}
          </Block>
           <Block row flex>
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
              <Block flex  style={styles.productDescription}>
                
                {this.renderCardDescription2()}
            
              </Block>
            </TouchableWithoutFeedback>
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
        
        {this.renderAllCard()}
          
        
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
  },
  circle: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor:'#2f7ae5',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  circleOther: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor:'#E1F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  allCard: {
    backgroundColor:'#E1F0FF',
    padding:5
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    width:200
    
  },
  productClass: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    width:350
    
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
  imageCard: {
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
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  buttonstyle: {
    width:width*0.3,
    height:30,
    backgroundColor:'#2f7ae5'
  }
  
  

});
