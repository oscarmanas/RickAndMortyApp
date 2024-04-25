import React from "react";
import { render } from "@testing-library/react-native";
import CharacterInfoCard from "../../src/components/CharacterInfoCard";

describe("CharacterInfoCard", () => {
  const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    origin: { name: "Earth" },
    gender: "Male",
    location: { name: "Earth (Replacement Dimension)" },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  it("renders character information correctly", () => {
    const { getByText, getByTestId } = render(
      <CharacterInfoCard character={character} />
    );

    expect(getByText(`${character.name}`)).toBeTruthy();
    expect(getByText(`Status: ${character.status}`)).toBeTruthy();
    expect(getByText(`Origin: ${character.origin.name}`)).toBeTruthy();
    expect(getByText(`Gender: ${character.gender}`)).toBeTruthy();
    expect(getByText(`Location: ${character.location.name}`)).toBeTruthy();
    expect(getByTestId("character-image")).toBeTruthy();
  });
});
