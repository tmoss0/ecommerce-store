'use client';

import { useCart } from '@/hooks/useCart';
import { CartItem } from '../../../types/cart';

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <>
      {items.map((item: CartItem) => (
        <CartItemComponent
          key={item.productId}
          item={item}
          onUpdateQuantity={(qty: number) => updateQuantity(item.productId, qty)}
          onRemove={() => removeItem(item.productId)}
        />
      ))}
    </>
  );
}
