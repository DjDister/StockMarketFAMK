export type PortfolioType = {
  name: string;
  symbol: string;
  boughtPrice: string;
  amount: string;
}[];

export type WalletType = {
  totalBalanceDollars: string;
  transactionHistory: {
    amount: string;
    date: string;
    type: string;
    status: string;
  }[];
};

export type UserData = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  phoneNumber: string | null;
  portfolio: PortfolioType;
  wallet: WalletType;
  createdAt: string;
};
