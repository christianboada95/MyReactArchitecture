import { Character } from "@domain/entities";
import { CharactersRepository } from "@domain/repositories";
import { characterAdapter } from "@infrastructure/adapters";

const PATH = "https://rickandmortyapi.com/api/character";

export const charactersRepository: CharactersRepository = {
  
  getAll: async (): Promise<Character[]> => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const dto = await res.json();
    return dto.results.map(characterAdapter);
    //throw new Error("Function not implemented.");
  },

  findById: async (id: number): Promise<Character> => {
    const res = await fetch(`${PATH}/${id}`);
    const dto = await res.json();
    return characterAdapter(dto);
  }
}