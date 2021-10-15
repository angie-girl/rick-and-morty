import { ILocation } from "./ilocation";

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    // origin: IOrigin;
    location: ILocation;
    image: string;
    episode: [];
    url: string;
    created: string;
}
