import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RegisterActions } from '~/store/ducks/register';

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

class Register extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = { username: '', email: '', password: '' };

  goToAuthentication = () => {
    const { navigation } = this.props;
    navigation.navigate('Auth');
  };

  register = () => {
    const { username, email, password } = this.state;
    const { registerRequest } = this.props;

    registerRequest({ username, email, password });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContentLogo>
            <Logo source={ImageLogo} />
          </ContentLogo>
          <ContentForm>
            <Input
              value={username}
              onChangeText={text => this.setState({ username: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome completo"
            />
            <Input
              value={email}
              onChangeText={text => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              autoCompleteType="email"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha secreta"
              secureTextEntry
            />
            <Button onPress={this.register}>
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

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = dispatch => bindActionCreators(RegisterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
