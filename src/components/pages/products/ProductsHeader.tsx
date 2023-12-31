import { BsGridFill } from "react-icons/bs"
import { FaListUl } from "react-icons/fa"
import { AiOutlineDown } from "react-icons/ai"

import { DropdownContainer } from "./DropdownContainer"
import { Button } from "~/components/ui"

interface navProps {
  sortOption: { grid: boolean; list: boolean }
  setSortOption: React.Dispatch<
    React.SetStateAction<{
      grid: boolean
      list: boolean
    }>
  >
  productsCount: number
}
const ProductsHeader = ({ sortOption, setSortOption, productsCount }: navProps) => (
  <nav className="font-primary mb-8 grid w-full max-w-[1284px] grid-cols-1 items-center gap-x-8 tablet:px-8 pt-4 text-xs font-bold text-white tablet:grid-cols-[auto,auto,1fr,auto]">
    <div className="grid w-14 grid-cols-2 gap-x-2 ">
      <button
        onClick={() => setSortOption({
          grid: true,
          list: false,
        })}
        className={`w-6 rounded-md ${sortOption.grid ? "bg-black text-white" : "scale-90 bg-white text-black"}  stroke-black stroke-2  p-1 `}>
        {<BsGridFill size={16} />}
      </button>
      <button
        onClick={() => setSortOption({
          grid: false,
          list: true,
        })}
        className={`w-6 rounded-md ${sortOption.list ? "bg-black text-white" : "scale-90 bg-white  text-black"}  stroke-black stroke-2  p-1 `}>
        {<FaListUl size={16} />}
      </button>
    </div>
    <p>{productsCount} Products Found</p>
    <hr className=" h-1 w-full border-t border-white" />
    {/* Dropdown */}
    <DropdownContainer
      className="top-[30px] right-[-16px] tablet:right-[0px] w-[83vw] tablet:w-[750px]"
      childrenTrigger={<>
        <h1 className="text-xs font-bold mr-2">Sort by</h1> <AiOutlineDown />
      </>}>
      <div className="flex flex-col gap-4 text-center tablet:text-start px-4 py-2 text-xs font-bold tablet:text-sm">
        <h1>
          Sort by
          <span className="hidden tablet:inline-block">:</span>
        </h1>

        {/* Radio buttons */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-4">
          <div className="flex flex-col items-center tablet:items-start gap-y-2">
            {/* Add on change event using documentation in src/components/ui/dev_readme.md  */}
            {/* <RadioButton label="Name A to Z" inputName="name" onChange={() => {}} /> */}
            {/* <RadioButton inputName="name" label="Name Z to A" /> */}
          </div>
          <div className="flex flex-col items-center tablet:items-start gap-y-2">
            {/* <RadioButton inputName="price" label="Price low to high" /> */}
            {/* <RadioButton inputName="price" label="Price high to low" /> */}
          </div>
        </div>

        {/* pice - color - buttons */}
        <div className="grid grid-cols-1 gap-x-8 tablet:grid-cols-2 laptop:grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-start">Price:</h1>
            <div className="flex flex-row items-center gap-x-2">
              {/* <Input type="number" placeholder="Min" size="sm" /> */}
              <h1>-</h1>
              {/* <Input type="number" placeholder="Max" size="sm" /> */}
            </div>
            {/* Create another component named Range in src/components/ui */}
            {/* <Input type="range" /> */}
          </div>
          <div className="flex flex-col">
            <h1 className="text-start">Color:</h1>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 tablet:gap-0">
              <div className="flex">
                {/* Unkomment it and use by following documentation in src/components/ui/dev_readme.md */}
                {/* <Checkbox label="White" /> */}
              </div>
              <div className="flex">
                {/* <Checkbox label="Gray" /> */}
              </div>
              <div className="flex">
                {/* <Checkbox label="Black" /> */}
              </div>
            </div>
          </div>
          <div className="col-span-2 laptop:col-span-1 flex flex-col justify-end gap-y-2">
            <Button>Clear all filters</Button>
            <Button>Create own bag</Button>
          </div>
        </div>
      </div>
    </DropdownContainer>
  </nav>
)

export default ProductsHeader
