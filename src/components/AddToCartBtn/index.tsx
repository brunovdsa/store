import { useState } from 'react';
import { API } from '../../services';
import { Button } from './styles';

export interface AddProductsToCart {
  date: Date;
  products: {
    productId: string | undefined;
    quantity: number;
    size?: string;
  };
}

export default function AddToCartBtn(props: AddProductsToCart) {
  const [productsToCart, setProductsToCart] = useState<AddProductsToCart>();

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

    const data: AddProductsToCart = await API.post('carts', requestOptions);
    setProductsToCart(data);

    return productsToCart;
  };

  console.log(productsToCart);

  return <Button onClick={onClick}>ADD TO CART</Button>;
}
