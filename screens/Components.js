import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product} from '../components/';

import { ProgressBar, Colors } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';

import { TouchableOpacity} from 'react-native'

const { width } = Dimensions.get('screen');
import products from '../constants/products';
import productClass from '../constants/productClass'





const tempCheck = [];



export default class ClassScreen extends React.Component {
  
  state = {
    docHave: []

  }
  handleCheckBox = (id,value) =>{
    this.setState({ docHave: !this.state.docHave })

    var tempCheckBoxCheck = this.state.docHave;
    tempCheckBoxCheck[id] = !value;

    this.setState({
      docHave: tempCheckBoxCheck
    })
  
  } 
  

  
  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        left
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }
  
  renderProgress = () => {
    const { navigation } = this.props;

    return (
      <Block >
        <Text size={14} style={{marginVertical:5}}>Perjalanan Kelas</Text>
        <ProgressBar progress={0.8} color="#2f7ae5"/>
        <Block style={{flexDirection:'row-reverse'}}>
          <Text style={{marginHorizontal:5,fontWeight:'bold'}} color='#2f7ae5'>Kelas Ekspor Pemula</Text>
          <Text >Kategori Saya</Text>
          
        </Block>
      </Block>
    )
  }

  renderDocument = () => {
    const products = [{
      id: 1,
      text:'Dokumen A Indonesia'
    },
    {
      id: 2,
      text:'Dokumen A Jepang'
    },
    {
      id: 3,
      text:'Dokumen A Amerika Serikat'
    },
    {
      id:4,
      text:'Dokumen A Inggris'
    }];
    

    
    const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props}) => (
      <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
          <Icon
              size={size}
              color={color}
              name={ selected ? 'check-box' : 'check-box-outline-blank'}
              family='Ionicons'
          />
  
          <Text style={textStyle}> {text} </Text>
      </TouchableOpacity>
  )
  
    return(
      products.map((val) => {
        {tempCheck[val.id] = false}
        return (
          <Block key={val.id}>
            <CheckBox selected={this.state.docHave[val.id]} onPress={() => this.handleCheckBox(val.id , this.state.docHave[val.id])} text={val.text}/>
          </Block>
        )
      })
      
    )
  }

  renderButton = () => {
    return(
      <Block flex style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity>
          <Button style={styles.buttonstyle}>
          <Text size={12} color='#ffffff'>Saya Butuh Bantuan</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button style={styles.buttonstyle}>
          <Text size={12} color='#ffffff'>Unggah Dokumen</Text>
          </Button>
        </TouchableOpacity>
        
        
      </Block>
      
    )
  }

  
  
  
  
  

  renderCard = () => {
    return(
      
      <Block >
        <Text size={18} style={{fontWeight:'bold'}}>Kelas Rekomendasi Roby</Text>
        <TouchableOpacity style={{flexDirection:'row-reverse'}} color='#2'>
          <Text color='#2f7ae5'>Lihat disini </Text>
        </TouchableOpacity>   
        <Product card ikut product={productClass[0]}/>
        <Product card  product={productClass[0]}/>
        <Product card  product={productClass[0]}/>
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
          {this.renderProgress()}
          </View>
          
        <Block>
          <Text size={16} style={styles.title}>Lengkapi Dokumenmu secara otomatis</Text>
          {this.renderDocument()}
          {this.renderButton()}
          {this.renderCard()}
        </Block>
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
  title:{
    fontSize:16,
    fontWeight:'bold',
    marginVertical:10,
    color:'#000000'
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
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonstyle: {
    width:width*0.3,
    height:30,
    backgroundColor:'#2f7ae5'
  }
  
  

});
