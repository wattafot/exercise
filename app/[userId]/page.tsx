import React from "react";

function Page({ params }: { params: { userId: number } }) {
  return <div>{params.userId}</div>;
}

export default Page;
