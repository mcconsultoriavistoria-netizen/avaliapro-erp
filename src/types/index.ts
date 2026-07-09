// Type definitions para o projeto

export interface IClient {
  id: string;
  name: string;
  email: string;
  phone?: string;
  cpf?: string;
  cnpj?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProperty {
  id: string;
  clientId: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  type: string;
  area?: number;
  value?: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEvaluation {
  id: string;
  clientId: string;
  propertyId: string;
  title: string;
  description?: string;
  status: string;
  value?: number;
  visitDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReport {
  id: string;
  evaluationId: string;
  clientId: string;
  content: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
