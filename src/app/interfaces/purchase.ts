export interface Purchase {
  userEmail:     string;
  voucherAmount: number;
  currency:      string;
  purchaseID:    string;
  expiresAt:     Date;
}