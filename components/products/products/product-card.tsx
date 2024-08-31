'use client';

import { Product } from '@/types/product';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import IconShoppingCart from '@/components/icons/shopping-cart-icon';
import Image from 'next/image';
import useCart from '@/hooks/useCart';

type Props = {
  product: Product;
};

const css = {
  container: `
    col-span-1 border p-4
    bg-white rounded shadow-md
  `,
  img: `
    cursor-pointer w-full h-48
    overflow-hidden mb-4 relative
  `,
  title: `
    font-semibold h-12
  `,
  showButton: `
    text-blue-500
    hover:text-blue-700 mt-2
  `,
  category: `
    text-gray-500
  `,
  price: `
    font-bold
  `,
  wrapper: `
    flex items-center
    justify-between
  `,
  rating: `
    text-yellow-500
  `,
  counterWrapper: `
    flex items-center
  `,
  button: `
    transform active:scale-95
    transition-transform w-8 h-8
    p-1 border border-black rounded-lg
    flex items-center justify-center
  `,
  quantity: `
    mx-2
  `,
};

const maxDescriptionLength = 90;

export default function ProductCard(props: Props) {
  const { product } = props;

  const router = useRouter();

  const { quantity, handleAddToCart, handleRemoveFromCart } = useCart(product);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggleDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={css.container}>
      <div
        className={css.img}
        onClick={() => router.push(`products/${product.id}`)}
      >
        <Image
          src={product.images[0] || '/default-product.png'}
          alt='product-image'
          layout='fill'
          objectFit='contain'
          priority
          className='absolute inset-0'
        />
      </div>
      <p className={css.title}>{product.title}</p>
      <p>
        {isExpanded
          ? product.description
          : product.description.length > maxDescriptionLength
            ? `${product.description.slice(0, maxDescriptionLength)}...`
            : product.description}
      </p>
      {product.description.length > maxDescriptionLength && (
        <button
          onClick={(e) => handleToggleDescription(e)}
          className={css.showButton}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
      <p className={css.category}>{product.category}</p>
      <p className={css.price}>${product.price}</p>
      <div className={css.wrapper}>
        <p className={css.rating}>{product.rating} ★</p>
        {quantity > 0 ? (
          <div className={css.counterWrapper}>
            <button
              onClick={handleRemoveFromCart}
              className={css.button}
            >
              -
            </button>
            <p className={css.quantity}>{quantity}</p>
            <button
              onClick={handleAddToCart}
              className={css.button}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className={css.button}
          >
            <IconShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
};
