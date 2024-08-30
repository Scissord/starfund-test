'use client';

import { FC, RefObject } from "react";
import SidebarTop from "./sidebar/sidebar-top";
import SidebarMiddle from "./sidebar/sidebar-middle";
import SidebarBottom from "./sidebar/sidebar-bottom";

type SidebarProps = {
  setIsSidebarActive: (val: boolean) => void;
};

const css = {
  container: `
    w-full h-full flex flex-col
    items-center py-4 overflow-hidden
  `,
};

const Sidebar: FC<SidebarProps> = ({ setIsSidebarActive }) => {
  return (
    <div className={css.container}>
      <SidebarTop setIsSidebarActive={setIsSidebarActive}/>
      <SidebarMiddle/>
      <SidebarBottom />
    </div>
  );
};

export default Sidebar
