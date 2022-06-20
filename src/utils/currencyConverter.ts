export default function currencyConverter(value: number) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
