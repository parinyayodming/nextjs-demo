import React from "react";

type Props = {
  params: any;
};

export default async function Blog({ params }: Props) {
  const { slug } = params;
  await delay(1000);

  return (
    <div className="text-center">
      <h1 className="text-4xl">{slug}</h1>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
