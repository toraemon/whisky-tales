import { getAllWhiskies } from "../repositories/whiskyRepository";

export const getWhiskiesUseCase = async () => {
    return await getAllWhiskies();
}