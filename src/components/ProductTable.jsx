import Search from "antd/es/input/Search";
import { AiOutlinePrinter } from "react-icons/ai";

const ProductTable = () => {
  return (
    <>
      <div className="flex bg-white border-[1px] border-solid rounded-lg mt-12 p-[30px] border-[#b8b5b5] shadow-sm ">
        <div className="flex justify-between">
          <div>
            <Search
              placeholder="Search..."
              style={{ width: 400 }}
              className=""
            />
          </div>
          <div>
            <button>Add item</button>
            <div>
              <AiOutlinePrinter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
