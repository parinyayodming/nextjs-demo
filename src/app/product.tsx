import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  key: string;
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
};

export default function product({
  title,
  id,
  description,
  thumbnail,
  price,
}: Props) {
  return (
    <div className="mt-3">
      <Link href={`/product/${id}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={thumbnail}
            width={800}
            height={800}
            alt={title}
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-3">
            <div className="font-bold mb-2 text-ellipsis overflow-hidden line-clamp-1">
              {title}
            </div>
            <p className="text-gray-700 text-base text-ellipsis overflow-hidden line-clamp-2">
              {description}
            </p>
            <p className="mt-2 price">฿{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
