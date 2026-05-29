"use client";

import PhoneInput, { Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Props = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  country?: Country;
  international?: boolean;
};

export default function PhoneNumberInput({
  value,
  onChange,
  country = "LB" as Country,
  international = false,
}: Props) {
  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      country={country}
      defaultCountry={country}
      placeholder="Phone Number *"
      international={international}
    />
  );
}
