import { phoneSchema } from "@lucactus/zod";

export function formatPhone(code: `+${string}`, value: string | undefined | null): string | undefined {
  const result = phoneSchema.safeParse(value);

  if (result.success && result.data.length > 0) {
    return `${code} ${result.data.slice(0, 1)} ${result.data.slice(1).replace(/(..)(?=.)/g, "$1 ")}`;
  }
  return undefined;
}

export function formatToCurrency(value: number): string {
  return Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value);
}

export function getPercent(price: number): string {
  let value = price;

  if (Number.isNaN(price)) {
    value = 0;
  }
  return new Intl.NumberFormat("fr-FR", {
    style: "percent",
    minimumFractionDigits: 2,
  }).format(value / 100);
}

export function getFullName(options: {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
}): string {
  const firstName = options.firstName || options.first_name;
  const lastName = options.lastName || options.last_name;

  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  if (firstName) {
    return firstName;
  }
  if (lastName) {
    return lastName;
  }

  return "";
}

export function formatNumber(num: number, pad: number): string {
  return num.toString().padStart(pad, "0");
}
