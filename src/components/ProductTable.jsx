import Search from "antd/es/input/Search";
import { AiOutlinePrinter } from "react-icons/ai";
import TableBox from "./Table";

const ProductTable = () => {
  return (
    <>
      <div className="bg-white border-[1px] border-solid rounded-lg mt-12 p-[30px] border-[#b8b5b5] shadow-sm ">
        <div className="flex justify-between">
          <div>
            <Search
              placeholder="Search..."
              style={{ width: 400 }}
              className=""
            />
          </div>
          <div className="flex items-center gap-5">
          <button className="border-2 border-solid border-green-700 py-2 px-3 bg-white rounded-2xl text-green-600 font-bold cursor-pointer">Add item</button>
            <div>
              <AiOutlinePrinter size={30} color="green"/>
            </div>
          </div>
        </div>
        <div>
            <TableBox/>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
