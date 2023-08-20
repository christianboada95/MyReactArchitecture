import { Character } from "@domain/entities";
import { CharactersRepository } from "@domain/contracts";

export const getAllCharactersUseCase = (repository: CharactersRepository) => async (): Promise<Character[]> => {
  const character = await repository.getAll();
  return character;
}