import { useEffect, useRef, useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { MdLibraryAdd } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Todo: React.FC = () => {
  const [height, setHeight] = useState<any | null>(null);
  const offsetHeightRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const offsetHeight = offsetHeightRef.current?.offsetHeight;
    setHeight(offsetHeight);
  }, [offsetHeightRef]);

  return (
    <div className="bg-white w-[44rem] h-fit mt-20 my-32 mx-auto rounded pt-[28px] pb-[30px] shadow-lg shadow-blue-500/40">
      <div className="h-[93px] p-[25px] relative">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Add a New Task"
          className="h-full w-full outline-none rounded border-2 border-[#999] pt-0 pr-5 pb-0 pl-3  text-[25px] focus:border focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-[#bfbfbf]"
        />
        <MdLibraryAdd className="cursor-pointer text-[25px] absolute top-8 right-8" />
      </div>
      <div className="border-b-2 flex justify-between items-center py-[18px] px-[25px]">
        <div className=" text-[18px] cursor-pointer text-[#444444]">
          <span className="my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-2xl bg-red-600 text-white">
            All
          </span>
          <span className="my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-2xl">
            Pending
          </span>
          <span className="my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-2xl">
            Complete
          </span>
        </div>
        <button
          type="button"
          className=" bg-red-400 border-none outline-none rounded-md text-white cursor-pointer font-[13px] py-[7px] px-[13px] tracking-[0.3px]"
        >
          Clear All
        </button>
      </div>
      <div className="mt-[20px] mr-[5px] pt-0 pr-[20px] pb-[10px] pl-[25px]">
        <ul
          ref={offsetHeightRef}
          className={`${
            height >= 480 ? 'max-h-[480px] overflow-y-auto px-3' : ''
          }`}
        >
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="" />
              <RiDeleteBin5Line />
            </div>
          </li>
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="" />
              <RiDeleteBin5Line />
            </div>
          </li>
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="hover:text-gray-400" />
              <RiDeleteBin5Line />
            </div>
          </li>
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="" />
              <RiDeleteBin5Line />
            </div>
          </li>
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="" />
              <RiDeleteBin5Line />
            </div>
          </li>
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="" />
              <RiDeleteBin5Line />
            </div>
          </li>
          <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
              <p className="text-[18px]">Task 1</p>
            </div>
            <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
              <GrEdit className="" />
              <RiDeleteBin5Line />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
