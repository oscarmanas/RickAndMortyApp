import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CharacterItem = ({ character }) => {
  const navigation = useNavigation(); //This hook is for handle the navigation between screens

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("CharacterDetail", { character })}
      testID="character-item"
    >
      <Image
        source={{ uri: character.image }}
        style={styles.image}
        testID="character-image"
      />
      <View style={styles.cardInfo}>
        <Text numberOfLines={1} style={styles.text}>
          Name: {character.name}
        </Text>
        <Text numberOfLines={1} style={styles.text}>
          State: {character.status}
        </Text>
        <Text numberOfLines={1} style={styles.text}>
          Origin: {character.origin.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cardInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
  text: {
    width: 250,
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    marginBottom: 10,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default memo(
  CharacterItem,
  (prevProps, nextProps) => prevProps.character.id === nextProps.character.id
);
