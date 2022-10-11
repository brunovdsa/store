import { AxiosResponse } from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { API } from '../../services';

export interface ProductsToCart {
  date: Date;
  products: {
    productId: string | undefined;
    quantity: number;
    size?: string;
  };
  children: ReactNode;
}

export default function AddToCartBtn(props: ProductsToCart) {
  const [productsToCart, setProductsToCart] = useState<ProductsToCart>();

  const onClick = async (e: any) => {
    e.preventDefault();

    const requestOptions = {
      date: props.date,
      products: [
        {
          productId: props.products.productId,
          quantity: props.products.quantity,
          size: props.products.size,
        },
      ],
    };

    const data: ProductsToCart = await API.post('carts', requestOptions);
    setProductsToCart(data);
  };

  console.log(productsToCart);

  return (
    <div>
      <button onClick={onClick}>Aqui</button>
    </div>
  );
}
