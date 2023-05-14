export const formatMoney = (amount: number): string => {
  return new Intl.NumberFormat('en-us', { minimumFractionDigits: 0 }).format(
    amount,
  );
};
