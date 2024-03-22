import React from 'react';
import {
  Container,
  Plants,
  PlantsTitle,
  Spotlight,
  SpotlightImage,
  SpotlightText,
} from './styles';
import {Header} from '../../components/Header';
import WaterDropImage from '../../assets/images/waterdrop.png';
import {FlatList} from 'react-native';
import {PlantCardSecondary} from '../../components/PlantSecondaryCard';

const MOCK_plants = [
  {
    id: 1,
    name: 'Aningapara',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg',
    hour: '12:00',
  },
  {
    id: 2,
    name: 'Aningapara',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/2.svg',
    hour: '12:00',
  },
  {
    id: 3,
    name: 'Aningapara',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/3.svg',
    hour: '12:00',
  },
  {
    id: 4,
    name: 'Aningapara',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/4.svg',
    hour: '12:00',
  },
  {
    id: 5,
    name: 'Aningapara',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/5.svg',
    hour: '12:00',
  },
];

export function MyPlants() {
  return (
    <Container>
      <Header title="Minhas" subTitle="Plantinhas" />

      <Spotlight>
        <SpotlightImage source={WaterDropImage} />
        <SpotlightText>Regue sua NOME_PLANTA daqui a TEMPO</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas</PlantsTitle>

        <FlatList
          data={MOCK_plants}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}
