import {doPost, doPut} from './http';
import {MintRequest, SuccessResponse, TokenResponse} from '../types/token';

export const TokenService = {
  mint: (body: MintRequest): Promise<TokenResponse> => {
    return doPost('/token/mint', body);
  },
  reveal: (): Promise<SuccessResponse> => {
    return doPut('/token/reveal', {});
  },
};