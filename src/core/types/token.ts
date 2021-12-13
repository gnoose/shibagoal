export enum TokenStatus {
  Mint = 0,
  Reveal = 1,
}

export interface MintRequest {
  owner: string;
  token: string;
}

export interface TokenResponse {
  owner: string;
  token: string;
  status: TokenStatus;
}

export interface SuccessResponse {
  success: boolean;
}