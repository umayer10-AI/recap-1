import ModalTask from "@/component/ModalTask";
import { allCarts } from "@/lib/cart";
import React from "react";

const page = async () => {
  const data = await allCarts();
  console.log(data);

  return (
    <div className="max-w-[90%] mx-auto">
      <h2 className="text-center text-3xl font-bold my-10">
        About page: {data.length}
      </h2>
      <div className="flex justify-center">
        <ModalTask></ModalTask>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {data.map((v) => (
          <div key={v.id} className="text-center p-4 rounded-xl border border-white">
            <h2 className="text-2xl font-bold">{v.author}</h2>
            <h2 className="font-semibold">{v.category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
