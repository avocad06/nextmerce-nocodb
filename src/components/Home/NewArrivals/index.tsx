import React from "react";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-7.5 gap-y-9">
          {/* <!-- ad item --> */}
          {shopData.slice(0, 3).map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
