import { Character } from "@domain/entities"

export const characterAdapter = (dto: any): Character => {
  return {
    id: dto.id,
    name: dto.name,
    status: dto.status,
    species: dto.species,
    type: dto.type,
    gender: dto.gender,
    image: dto.image,
    url: dto.url,
    created: dto.created
  }
}