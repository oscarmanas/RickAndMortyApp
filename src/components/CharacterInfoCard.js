import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CharacterInfoCard = ({ character }) => {
  return (
    <View style={styles.container}>
      <Image testID="character-image" source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} testID="character-name">
          {character.name}
        </Text>
        <Text style={styles.infoText}>Status: {character.status}</Text>
        <Text style={styles.infoText}>Origin: {character.origin.name}</Text>
        <Text style={styles.infoText}>Gender: {character.gender}</Text>
        <Text style={styles.infoText}>Location: {character.location.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 20,
    elevation: 2,
    borderWidth: 1,
    borderColor: "darkgray",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default CharacterInfoCard;
