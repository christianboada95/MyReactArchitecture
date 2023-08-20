import { Character } from "@domain/entities";

export interface CharactersRepository {
  getAll: () => Promise<Array<Character>>;
  findById: (id: number) => Promise<Character>;
  //save: (character: Character) => Promise<Character>;  // Cant create from Rick API
  //delete: (character: Character) => void;   // Cant delete from Morty API
}