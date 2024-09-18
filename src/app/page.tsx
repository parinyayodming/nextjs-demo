import React from "react";
import Product from "./product";

type Props = {};

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://dummyjson.com/products`;
  const data = await fetch(url);
  const res = await data.json();
  await delay(1000);

  return (
    <div>
      <div className="grid gap-5 grid-cols-fluid">
        {res.products.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
