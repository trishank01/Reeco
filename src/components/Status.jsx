

const Status = () => {
  return (
    <div className="flex gap-10 bg-white border-[1px] border-solid rounded-lg p-[30px] border-[#b8b5b5] shadow-sm">
        <div className="w-1/6 flex flex-col gap-3 border-0 border-r-[1px] border-solid border-[#b8b5b5]">
            <p className="font-bold text-[#878383]">Supplier</p>
            <p className="font-bold text-[18px]">East coast fruits & vegetables</p>
        </div>
        <div className="w-1/6  flex flex-col gap-3 border-0 border-r-[1px] border-solid border-[#b8b5b5]">
            <p className="font-bold text-[#878383]">Shipping Date</p>
            <p className="font-bold text-[18px]">Thu, Feb 10</p>
        </div>
        <div className="w-1/6 flex flex-col gap-3 border-0 border-r-[1px] border-solid border-[#b8b5b5]">
            <p className="font-bold text-[#878383]">Total</p>
            <p className="font-bold text-[18px]">15,028.3</p>
        </div>
        <div className="w-1/6 flex flex-col gap-3 border-0 border-r-[1px] border-solid border-[#b8b5b5]">
            <p className="font-bold text-[#878383]">Category</p>
            <p className="font-bold text-[18px]">East coast fruits & vegetables</p>
        </div>
        <div className="w-1/6 flex flex-col gap-3 border-0 border-r-[1px] border-solid border-[#b8b5b5]">
            <p className="font-bold text-[#878383]">Department</p>
            <p className="font-bold text-[18px]">300-444-678</p>
        </div>
        <div className="w-1/6 flex flex-col gap-3 ">
            <p className="font-bold text-[#878383]">Status</p>
            <p className="font-bold text-[18px]">Awaiting your approvel</p>
        </div>
    </div>
  )
}

export default Status