import { useEffect, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";

import {
  getProduct,
  selectProductData,
  updateStatus,
} from "../redux/ProductSlice";

const TableBox = () => {
  //const [productData, setProductData] = useState(null);

  const dispatch = useDispatch();
  const productData = useSelector(selectProductData);
  const [modalData, setModalData] = useState({
    isOpen: false,
    productId: null,
  });

  useEffect(() => {
    // Define the path to your static JSON file
   // const jsonFilePath = "src/utils/data.json";
    const jsonFilePath = "https://raw.githubusercontent.com/trishank01/Reeco/main/src/utils/data.json"

    // Make a GET request using Axios
    axios
      .get(jsonFilePath)
      .then((response) => {
        // Assuming your JSON data is an object, you can set it to state
        dispatch(getProduct(response.data));
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [dispatch]);

  const handleStatusCheck = (args, id) => {
    // setUpdatestatusData({  ...filterData , status :  args })
    dispatch(updateStatus({ args, id }));
  };

  const showModal = (args, id) => {
    setModalData({ isOpen: true, productId: id });
  };

  const handleOk = (args, id) => {
    dispatch(updateStatus({ args, id }));
    setModalData({ isOpen: false, productId: null });
  };

  const handleCancel = () => {
    setModalData({ isOpen: false, productId: null });
  };

  // const showModal = (args , id) => {
  //   productData.map((item) => {
  //   return item.id === id ?  setIsModalOpen(true) : setIsModalOpen(false)
  //  })

  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <table className=" mt-12">
      <thead className="">
        <tr className="border-2  border-solid border-black p-3">
          <th>Icon</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {productData?.length > 0 &&
          productData.map((product) => {
            return (
              <>
                <tr key={product.id}>
                  <td className="">
                    <img src={product.icon} alt="Title Icon" className="w-10" />
                  </td>
                  <td>{product.Product_name}</td>
                  <td>{product.Brand}</td>
                  <td>{product.Price}</td>
                  <td>{product.Quanity}</td>
                  <td>{product.Total}</td>
                  <td>
                    <div className="flex col gap-5">
                      <p
                        className={`text-white px-2 py-3 rounded-md w-[90px] ${
                          product.status === "none" ? "invisible" : ""
                        } ${
                          product.status === "Approved" ? "bg-green-600" : ""
                        } ${product.status === "Missing" ? "bg-red-400" : ""} ${
                          product.status === "Urgent Missing"
                            ? "bg-red-800"
                            : ""
                        }`}
                      >
                        {product.status}
                      </p>
                      <BsCheck2
                        size={25}
                        onClick={() =>
                          handleStatusCheck("Approved", product.id)
                        }
                        className={`cursor-pointer font-bold ${ product.status === "Approved" ? "text-green-600" : ""}`}
                      />
                      <div>
                        <RxCross2
                          onClick={() => showModal("Missing", product.id)}
                          size={25}
                          className={`cursor-pointer font-bold ${ product.status === "Missing" ? "text-red-400" : product.status === "Urgent Missing" ? "text-red-700" : ""}`}
                        />
                        <Modal
                          title="Missing Product"
                          visible={
                            modalData.isOpen &&
                            modalData.productId === product.id
                          }
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={[
                            <Button
                              key="submit"
                              type="primary"
                              onClick={() =>
                                handleOk("Urgent Missing", product.id)
                              }
                            >
                              Yes
                            </Button>,
                            <Button
                              key="Submit"
                              onClick={() => handleOk("Missing", product.id)}
                            >
                              No
                            </Button>,
                          ]}
                        >
                          <p>{product.Product_name.slice(0, 30)}...urgent</p>
                        </Modal>
                      </div>
                      <span className="cursor-pointer">Edit</span>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableBox;
