import { createContext } from "react";
import { findCharacterByIdUseCase } from "@application/rickandmorty/findCharacterByIdUseCase";
import { getAllCharactersUseCase } from "@application/rickandmorty/getAllCharactersUseCase";

export interface ContextValue {
  findCharacterById: ReturnType<typeof findCharacterByIdUseCase>;
  getAllCharacters: ReturnType<typeof getAllCharactersUseCase>;
}

export const ApplicationContext = createContext<ContextValue>({} as ContextValue);