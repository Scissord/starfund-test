'use client';

import { useState, useCallback } from 'react';
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
    <label className={'relative flex items-center justify-between w-[40%]'}>
      <input
        type="text"
        className='p-2 outline-none grow border border-black w-fulls'
        value={props.value}
        placeholder={props.placeholder ?? 'Поиск...'}
        onChange={handleChange}
      />
      <div className='absolute right-5'>
        {props.loading ? (
          <Loader/>
        ): (
          <SearchIcon/>
        )}
      </div>
    </label>
  );
}
