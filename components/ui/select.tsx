'use client';

import { Option } from "@/types/option";
import { FC, ChangeEvent } from 'react';

interface ISelectProps {
  value: string;
  onChange: (val: string) => void;
  options: Option[];
};

const css = {
  container: `
    h-10 p-2 border border-black
    bg-white
  `,
};

export const Select: FC<ISelectProps> = (props) => {
  const { value, onChange, options } = props;

  return (
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={css.container}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
