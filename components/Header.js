import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, ImageBackground, View } from 'react-native';
import { Button, Block, NavBar, Input, Text, theme } from 'galio-framework';

import Icon from './Icon';
import materialTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);




const ChatButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Chat')}>
    <Icon
      family="GalioExtra"
      size={16}
      name="chat-33"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} >
    <Icon
      size={16}
      family="entypo"
      name="magnifying-glass"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        left
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        placeholderTextColor={theme.COLORS.MUTED}
        
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="magnifying-glass" family="entypo" />}
      />
    )
  }

  renderRight = () => {
    const { white, title, navigation } = this.props;
  
    if (title === 'Title') {
      return ([
        <ChatButton key='chat-categories' navigation={navigation} isWhite={white} />,
        <SearchButton key='search-product' navigation={navigation} isWhite={white} />
      ]);
    }
  
    switch (title) {
      case 'Deals':
        return ([
          <ChatButton key='chat-categories' navigation={navigation} />,
          <BasketButton key='basket-categories' navigation={navigation} />
        ]);
      case 'Categories':
        return ([
          <ChatButton key='chat-categories' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-categories' navigation={navigation} isWhite={white} />
        ]);
      case 'Category':
        return ([
          <ChatButton key='chat-deals' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Profile':
        return ([
          <ChatButton key='chat-profile' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Product':
        return ([
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-product' navigation={navigation} isWhite={white} />
        ]);
      case 'Search':
        return ([
          <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      case 'Settings':
        return ([
          <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      default:
        break;
    }
  }


  


  renderHeader = () => {
    const { search } = this.props;
    if (search ) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
        </Block>
      )
    }
    return null;
  }


  render() {
    const { back, title, white, transparent, navigation } = this.props;
    // const { routeName } = navigation.state;
    const noShadow = ["Search", "Categories", "Deals", "Pro", "Profile"].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];
    
      return(
        <Block  style={headerStyles}>
          
          
          <NavBar
            back={back}
            style={styles.navbar}
            transparent={transparent}
            title={title}
            right={this.renderRight()}
            rightStyle={{ alignItems: 'flex-start' }}
            leftStyle={{ flex: 0.3, paddingTop: 2  }}
            leftIconName={(back ? 'chevron-left' : 'navicon')}
            leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
            titleStyle={[
              styles.title,
              {color: theme.COLORS[white ? 'WHITE' : 'ICON']},
            ]}
            onLeftPress={this.handleLeftPress}
          >{this.renderHeader()}</NavBar>
          
          
        </Block>
      )
    }
}  
        
      
    
    
      
    
    
  


export default withNavigation(Header);

const styles = StyleSheet.create({
  button: {
    padding: 1,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: materialTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    
    height: 48,
    width: width*0.5,
    marginHorizontal: 6,
    borderWidth: 1,
    borderRadius: 35,
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
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
})
  
