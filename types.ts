export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface APIResponse { 
  success: boolean;
  data: any;
}