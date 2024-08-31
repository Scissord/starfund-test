'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import debounce from 'lodash/debounce';
import SearchIcon from '../icons/search-icon';
import Loader from './loader';

type Props = {
  value: string;
  setValue: (value: string) => void;
  search: string;
  page: number | string;
  placeholder: string;
  loading: boolean;
};

const css = {
  container: `
    relative flex items-center
    justify-between w-full
  `,
  input: `
    p-2 outline-none grow
    border border-black w-fulls
  `,
  rightIcon: `
    absolute right-5
  `,
};

export default function SearchInput(props: Props) {
  const router = useRouter();

  const updateURL = useCallback(
    debounce((text: string) => {
      router.push(`?page=${props.page}&search=${text}`);
    }, 500),
    [props.page, router]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    props.setValue(text);
    updateURL(text);
  };

  return (
    <label className={css.container}>
      <input
        type="text"
        className={css.input}
        value={props.value}
        placeholder={props.placeholder ?? 'Поиск...'}
        onChange={handleChange}
      />
      <div className={css.rightIcon}>
        {props.loading ? (
          <Loader/>
        ): (
          <SearchIcon/>
        )}
      </div>
    </label>
  );
};
