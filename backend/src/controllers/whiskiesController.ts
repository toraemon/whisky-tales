import { Request, Response } from 'express';
import { getWhiskiesUseCase } from '../usecases/getWhiskies.usecase';

export const getWhiskiesController = async (req: Request, res: Response) => {
    try {
        const whiskies = await getWhiskiesUseCase();
        res.json(whiskies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}