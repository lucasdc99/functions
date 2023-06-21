import { phoneSchema } from "@lucactus/zod";

export function formatPhone(value: string | undefined | null) {
  const result = phoneSchema.safeParse(value);

  if (result.success && result.data.length > 0) {
    return `+33 ${result.data.slice(0, 1)} ${result.data.slice(1).replace(/(..)(?=.)/g, "$1 ")}`;
  }
  return undefined;
}

export function formatToCurrency(value: number): string {
  return Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

export const getFullName = (options: { firstName: string | null | undefined; lastName: string }): string => {
  if (options.firstName) {
    return `${options.firstName} ${options.lastName}`;
  }
  return options.lastName;
};

export function formatNumber(num: number, pad: number): string {
  return num.toString().padStart(pad, "0");
}
