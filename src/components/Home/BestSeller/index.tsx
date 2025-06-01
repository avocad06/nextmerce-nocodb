"use client";

import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import Link from "next/link";

const BestSeller = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const res = await fetch(
          "https://app.nocodb.com/api/v2/tables/mar197tvkk97ywm/records?limit=25&shuffle=0&offset=0",
          {
            headers: {
              accept: "application/json",
              // 필요시 Authorization 헤더 추가:
              "xc-token": "01rF8rvoFnj3l_fAfrN6pz_wG9V1MSXu7n67B3tE",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        // NocoDB 데이터는 `list` 안에 있음
        setItems(data.list.slice(0, 6)); // 최대 6개만 사용
      } catch (error) {
        console.error("Error fetching shop data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShopData();
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* section title */}
        <div className="mb-10">
          <div className="flex items-center">
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark shrink-0">
              BEST SELLING PRODUCT
            </h2>
            <span className="relative block w-full">
              <span className="block border-t border-[#3a3a3a] w-full"></span>
            </span>
          </div>
        </div>

        {/* loading or product grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            Loading...
          </div>
        ) : (
          <div className="grid gap-7.5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {items.map((item, index) => (
              <SingleItem item={item} key={index} />
            ))}
          </div>
        )}

        {/* View All */}
        {!loading && (
          <div className="text-center mt-12.5">
            <Link
              href="/shop-without-sidebar"
              className="inline-flex font-medium text-custom-sm py-3 px-7 sm:px-12.5 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
