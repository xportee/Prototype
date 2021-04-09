import React from 'react';
import { Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, theme } from 'galio-framework';
import materialTheme from '../constants/Theme';

const { height, width } = Dimensions.get('screen');

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor: 'white',
        }}>
          <Image source={require("../assets/images/logo.png")} style={{
            resizeMode: 'contain',
            height: 100
          }}/>
          <Button
            shadowless
            style={styles.button}
            color={materialTheme.COLORS.BUTTON_COLOR}
            onPress={() => navigation.navigate('App')}>
            Mulai
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 16,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 30,
  },
});
