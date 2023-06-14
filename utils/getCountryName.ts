import { getName } from "country-list";
export const getCountryName = (countryCode: string | undefined) => getName(countryCode) ?? "No info";