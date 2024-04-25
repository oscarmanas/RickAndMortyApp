import React from 'react';
import { View } from 'react-native';
import CharacterInfoCard from '../components/CharacterInfoCard';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <CharacterInfoCard character={character} />
    </View>
  );
};

export default CharacterDetailScreen;
