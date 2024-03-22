import React from 'react';
import {FlatList, View} from 'react-native';

// Components
import {Header} from '../../components/Header';
import {EnvironmentButton} from '../../components/EnvironmentButton';
import {PlantPrimaryCard} from '../../components/PlantPrimaryCard';

// Styles
import {
  Container,
  HeaderContainer,
  PlantsContainer,
  Subtitle,
  Title,
} from './styles';

const MOCK_plants = [
  {
    id: 1,
    name: 'Aningapara',
    about:
      'É uma espécie tropical que tem crescimento rápido e fácil manuseio.',
    water_tips:
      'Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg',
    environments: ['living_room', 'kitchen'],
    frequency: {
      times: 2,
      repeat_every: 'week',
    },
  },
  {
    id: 2,
    name: 'Zamioculca',
    about:
      'Apesar de florescer na primavera, fica o ano todo bonita e verdinha. ',
    water_tips:
      'Utilize vasos com furos e pedras no fundo para facilitar a drenagem. Regue 1 vez no dia.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/2.svg',
    environments: ['living_room', 'bedroom'],
    frequency: {
      times: 1,
      repeat_every: 'day',
    },
  },
  {
    id: 3,
    name: 'Peperomia',
    about:
      'Adapta-se tanto ao sol e sombra, mas prefere ficar num cantinho fresco, sem sol direto. ',
    water_tips:
      'Nos dias mais quentes borrife água nas folhas. Regue 3 vezes na semana.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/3.svg',
    environments: ['bedroom'],
    frequency: {
      times: 3,
      repeat_every: 'week',
    },
  },
  {
    id: 4,
    name: 'Imbé',
    about:
      'De médio porte que se adapta a diversas regiões, além de ser bem fácil de cultivar. Conquista cada vez mais pessoas.',
    water_tips:
      'Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/4.svg',
    environments: ['bedroom', 'living_room'],
    frequency: {
      times: 2,
      repeat_every: 'week',
    },
  },
  {
    id: 5,
    name: 'Espada São Jorge',
    about:
      'O aroma reduz os níveis de ansiedade e seu cheiro ajudar na qualidade do sono e a produtividade durante o dia.',
    water_tips: 'Regue o solo ao redor. Regue 1 vez no dia.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/5.svg',
    environments: ['bedroom', 'living_room'],
    frequency: {
      times: 1,
      repeat_every: 'day',
    },
  },
  {
    id: 6,
    name: 'Yucca',
    about:
      'São indicadas pois são fáceis de manter e cuidar. Você colocar em pequenos vasos, ou até mesmo em xícaras.',
    water_tips:
      'Graças à reserva de água dessas verdinhas, é sempre melhor regar pouco. Regue 1 vez na semana.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/6.svg',
    environments: ['kitchen', 'bedroom'],
    frequency: {
      times: 1,
      repeat_every: 'week',
    },
  },
  {
    id: 7,
    name: 'Frutíferas',
    about:
      'Exigem algumas horinhas de sol por dia, por isso deixe próximo a janelas.',
    water_tips:
      'Regue sempre na terra e não as folhas. Regue 3 vezes na semana',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/7.svg',
    environments: ['kitchen', 'living_room'],
    frequency: {
      times: 3,
      repeat_every: 'week',
    },
  },
  {
    id: 8,
    name: 'Orquídea',
    about:
      'Traz sensação de tranquilidade e paz ao ambiente. Requer pouca manutenção e ótima para quem tem pouco espaço.',
    water_tips: 'Regue moderadamente. Reque 4 vezes na semana.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/8.svg',
    environments: ['bathroom'],
    frequency: {
      times: 4,
      repeat_every: 'week',
    },
  },
  {
    id: 9,
    name: 'Violeta',
    about:
      'Com flores delicadas. Elas são ótimas sugestões para decorar o banheiro. ',
    water_tips:
      'Nada de molhar as flores e folhas. Regue o solo 2 vezes na semana.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/3.svg',
    environments: ['bathroom'],
    frequency: {
      times: 2,
      repeat_every: 'week',
    },
  },
  {
    id: 10,
    name: 'Hortênsia',
    about:
      'A hortênsia é uma planta rústica e se adapta a diferentes tipos de solos.',
    water_tips:
      'Mantenha a terra sempre húmida sem encharcar. Regue 1 vez no dia.',
    photo:
      'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/2.svg',
    environments: ['bathroom'],
    frequency: {
      times: 1,
      repeat_every: 'day',
    },
  },
];

const MOCK_environments = [
  {key: 'living_room', title: 'Sala'},
  {key: 'bedroom', title: 'Quarto'},
  {key: 'kitchen', title: 'Cozinha'},
  {key: 'bathroom', title: 'Banheiro'},
  {key: 'balcony', title: 'Varanda'},
];

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </HeaderContainer>

      <View>
        <FlatList
          data={MOCK_environments}
          keyExtractor={item => String(item.key)}
          renderItem={({item}) => <EnvironmentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 40,
            justifyContent: 'center',
            paddingBottom: 5,
            marginLeft: 32,
            marginVertical: 32,
            paddingRight: 32,
          }}
        />
      </View>

      <PlantsContainer>
        <FlatList
          data={MOCK_plants}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <PlantPrimaryCard data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
        />
      </PlantsContainer>
    </Container>
  );
}