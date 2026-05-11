export interface Product {
  planName: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  sellingPoints: string[];
  isPopularChoice?: boolean;
}