export const PROJECT_NAME = "currencyExchange";
export const apiKey = "a21c44001ef8415ea7c06c165de6226c";

export function currencyConvert(rubs, usdPrice, targetPrice) {
  return +((rubs / usdPrice) * targetPrice).toFixed(4);
}
