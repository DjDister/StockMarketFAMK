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
  firstName: string | null;
  lastName: string | null;
  userName: string | null;
  createdAt: string;
  emailAuthentication: boolean;
  smsAuthentication: boolean;
  googleAuthentication: boolean;
  priceAlert: boolean;
  referralCommissionAlerts: boolean;
  deviceLoginAlerts: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
};
