import React from "react";
import Image from "next/image";

type Props = {
  params: any;
};

export default async function ProductDetail({ params }: Props) {
  const { id } = params;
  const data = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  const res = await data.json();
  await delay(1000);

  return (
    <div>
      <h2 className="text-4xl">{res.title}</h2>
      <p>{res.description}</p>
      <p className="text-2xl price mt-3">฿{res.price}</p>
      <Image
        width={800}
        height={800}
        className="my-10 w-full"
        src={res.thumbnail}
        alt={res.title}
        priority
      />
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
