'use client';

import { FC } from 'react'
import LeftArrowIcon from '@/components/icons/left-arrot-icon';

type SidebarTopProps = {
  setIsSidebarActive: (val: boolean) => void;
};

const variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const css = {
  motion: `
    w-full flex items-center justify-between px-4
  `,
  title: `
    flex flex-col font-bold text-md
    text-center text-black
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 cursor-pointer
    hover:bg-gray-300
  `,
};

const SidebarTop: FC<SidebarTopProps> = ({ setIsSidebarActive }) => {
  return (
    <div className={css.motion}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className={css.icon}
      >
        <LeftArrowIcon/>
      </div>

      <p className={css.title}>
        <span>Products</span>
      </p>
    </div>
  )
}

export default SidebarTop;
