import { Character } from "@domain/entities";
import { CharactersRepository } from "@domain/repositories";
import { charactersRepository } from "@infrastructure/repositories";

export const findCharacterByIdUseCase = (repository: CharactersRepository) => async (id: number): Promise<Character> => {
  const character = await repository.findById(id);
  return character;
}

const findCharacterByIdWithRepositoryResolved = findCharacterByIdUseCase(charactersRepository);
let rick = findCharacterByIdWithRepositoryResolved(1);
let morty = findCharacterByIdWithRepositoryResolved(2);
//console.log(`${rick} and ${morty}`);
console.log(rick, morty);