import { MdKeyboardArrowRight } from "react-icons/md";

const OrdersBar = () => {
  return (
    <div className="container px-[100px] pb-3 shadow-lg">
      <div>
        <div className="flex items-center py-4 gap-2">
          Order <MdKeyboardArrowRight /> <span className="border-0 border-b-2 border-solid">Order 34457ABC</span>{" "}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1>Order 34457ABC</h1>
        </div>
        <div className="flex gap-5">
          <button className="border-2 border-solid border-green-700 py-2 px-3 bg-white rounded-2xl text-green-600 font-bold cursor-pointer">Back</button>
          <button className="border-none bg-green-600 py-2 px-3 text-white rounded-2xl font-bold cursor-pointer">Approve Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersBar;
