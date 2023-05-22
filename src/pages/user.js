import React, { Component } from "react";
import api from '../services/api';
import { Container, Header, Avatarperfil, Nameperfil, Bioperfil, Stars, Starred, OwnerAvatar, Info, Title, Author, Bio, Name, List } from './styles';



export default class User extends Component {
  state = {
    location: [],
    locationResidentsLength: 0,
  };


  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/location/${user.locationUrl}`)
    const locationResidentsLength = response.data.residents.length;
    this.setState({ location: response.data, locationResidentsLength: locationResidentsLength });

  }

  render() {
    const { route } = this.props;
    const { user } = route.params;
    const { location, locationResidentsLength } = this.state;
    console.log("🚀 ~ file: user.js:26 ~ User ~ render ~ location:", location.type)
    // const locationResidentsLength = location.residents.length;

    return (
      <Container>
        <Header>
          <Avatarperfil source={{ uri: user.image }} />
          {/* <Nameperfil>{user.name}</Nameperfil> */}
          <Name>Olá amigo, sou o/a {user.name} minha espécie é: {user.species}</Name>
          {/* <Bioperfil>{user.species}</Bioperfil>
          <Bioperfil>{user.episodeQtd}</Bioperfil> */}
        </Header>

        <Header>

          <Name>Aqui vai algumas informações sobre a minha cidade:</Name>
          
          <Bio>Cidade: <Name>{location.name}</Name></Bio>
          
          <Bio>Tipo da cidade: <Name>{location.type}</Name></Bio>
        
          <Bio>Quantidade de habitantes: <Name>{locationResidentsLength}</Name></Bio>

          <Bio>Sou famoso/a, possuo <Name>{user.episodeQtd}</Name> episódios da minha série</Bio>
          

        </Header>

        <Stars
          data={location}
          // keyExtractor={(location) => String(location.id)}
          renderItem={({ item }) => (
            <Starred>
              <Info>
                <Nameperfil>{user.name}</Nameperfil>
                <Bioperfil>{user.species}</Bioperfil>
                <Name>Cidade</Name>
                <Bio>{item.name}</Bio>
                <Name>Tipo da cidade</Name>
                <Bio>{item.type}</Bio>
                <Name>Quantidade de habitantes</Name>
                <Bio>{item.residents.lenght}</Bio>
                <Title>{item.species}</Title>
                <Title>{item.species}</Title>
                <Author>{item.episodeQtd}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container >
    );
  }
}