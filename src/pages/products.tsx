import { useState } from "react"
import { ListView, ProductsHeader, GridView } from "../components"
import React from "react"
import bags from "~/constant/bags.json"

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState({
    grid: true,
    list: false,
  })
  return (
    <div className="flex h-fit flex-col items-center ">
      <section className="mx-auto my-0  w-full max-w-[1284px] px-8 tablet:px-0">
        <ProductsHeader sortOption={sortOption} setSortOption={setSortOption} productsCount={bags.length} />
        {sortOption.grid && <GridView products={bags} />}
        {sortOption.list && <ListView products={bags} />}
      </section>
    </div>
  )
}

export default ProductsPage
