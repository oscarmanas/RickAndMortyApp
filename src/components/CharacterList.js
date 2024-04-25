import { ActivityIndicator, FlatList, Text, View } from "react-native";
import CharacterItem from "./CharacterItem";
import { useState, useEffect, useCallback } from "react";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  //This function get the characters and handle the infinite scroll
  const fetchCharacters = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    const res = await fetch(url);
    const resJson = await res.json();

    setCharacters((items) => {
      return [...items, ...resJson.results];
    });
    setUrl(resJson.info.next);
    setLoading(false);
  };

  const renderItem = useCallback(
    ({ item }) => <CharacterItem character={item} />,
    []
  );

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 10 }}
        onEndReached={fetchCharacters}
        ListHeaderComponent={
          <Text style={{ fontSize: 40, marginLeft: 10, marginBottom: 20 }}>
            Character List
          </Text>
        }
        ListFooterComponent={() => loading && <ActivityIndicator />}
      />
    </View>
  );
};

export default CharacterList;
