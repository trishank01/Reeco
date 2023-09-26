import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="container flex justify-between  px-[100px]  text-white bg-[#1E633F]">
      <div className="flex gap-5 items-center py-[14px] ">
        <h1 className="cursor-pointer">Reeco</h1>
        <p className="cursor-pointer">Store</p>
        <p className="cursor-pointer">Orders</p>
        <p className="cursor-pointer">Analytics</p>
      </div>
      <div className="flex items-center gap-5 py-[14px]">
        <div className="mt-1 cursor-pointer">
          <AiOutlineShoppingCart size={30}/>
        </div>
        <div className="cursor-pointer">
          Hello, James <MdKeyboardArrowDown />{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
