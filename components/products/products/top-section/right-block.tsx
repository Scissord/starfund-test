'use client';

import IconShoppingCard from "@/components/icons/shopping-cart-icon";
import useCart from "@/hooks/useCart";

type Props = {
  setIsSidebarActive: (value: boolean) => void;
};

const css = {
  right: `
    flex items-center gap-3
  `,
  text: `
    whitespace-nowrap
  `,
  button: `
    transform active:scale-95
    transition-transform p-2
    border border-black rounded-full
    flex items-center justify-center
    relative
  `,
};

export default function RightBlock(props: Props) {
  const { setIsSidebarActive } = props;

  const { totalQuantity, totalPrice } = useCart(null);

  return (
    <div className={css.right}>
      <span className={css.text}>{totalQuantity ? "items - " + totalQuantity : ""}</span>
      <span className={css.text}>
        {totalPrice ? "price - " + totalPrice.toFixed(2) + "$" : ""}
      </span>
      <button
        onClick={() => setIsSidebarActive(true)}
        className={css.button}
      >
        <IconShoppingCard/>
      </button>
    </div>
  )
};