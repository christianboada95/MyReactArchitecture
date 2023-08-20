import { findCharacterByIdUseCase } from "@application/rickandmorty/findCharacterByIdUseCase";
import { getAllCharactersUseCase } from "@application/rickandmorty/getAllCharactersUseCase";
import { CharactersRepository } from "@domain/contracts";
import { ApplicationContext } from "@infrastructure/contexts";

interface Props {
  children: React.ReactNode;
  dependencies: {
    charactersRepository: CharactersRepository;
  };
}

export const ApplicationProvider = ({ children, dependencies }: Props) => {
  const { charactersRepository } = dependencies;
  return (
    <ApplicationContext.Provider
      value={{
        findCharacterById: findCharacterByIdUseCase(charactersRepository),
        getAllCharacters: getAllCharactersUseCase(charactersRepository)
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider
