import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ImageBackground,
  Container,
  ContentLogo,
  Logo,
  ContentForm,
  Input,
  Button,
  Text,
  LinkText,
} from './styles';
import BackgroundLogin from '~/assets/background_login.png';
import ImageLogo from '~/assets/logo.png';

class LoginRegister extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  goToAuthentication = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  render() {
    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContentLogo>
            <Logo source={ImageLogo} />
          </ContentLogo>
          <ContentForm>
            <Input autoCapitalize="none" autoCorrect={false} placeholder="Nome completo" />
            <Input autoCapitalize="none" autoCorrect={false} placeholder="Seu email" />
            <Input autoCapitalize="none" autoCorrect={false} placeholder="Senha secreta" />
            <Button>
              <Text>Criar Conta</Text>
            </Button>
            <LinkText onPress={this.goToAuthentication}>
              <Text>Já tenho login</Text>
            </LinkText>
          </ContentForm>
        </Container>
      </ImageBackground>
    );
  }
}

export default LoginRegister;
