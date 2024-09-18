// "use client";

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
    <div className="flex items-center gap-5 grid-cols-fluid">
      <div>
        <Image
          width={800}
          height={800}
          src={res.thumbnail}
          alt={res.title}
          priority
        />
      </div>
      <div className="	">
        <h2 className="text-md md:text-3xl font-bold mb-3 text-ellipsis overflow-hidden line-clamp-2">
          {res.title}
        </h2>
        <p className="text-xs md:text-base text-gray-500">{res.description}</p>
        <p className="text-sm md:text-3xl font-medium price mt-3">
          ฿{res.price}
        </p>
      </div>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
