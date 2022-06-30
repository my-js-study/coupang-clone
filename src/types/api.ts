type SignupAgreements = {
  privacy: boolean;
  ad: Ad | false;
};

type Ad = {
  email: boolean;
  sms: boolean;
  app: boolean;
};

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  agreements: SignupAgreements;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface GetReadRequest {
  id: number;
}
