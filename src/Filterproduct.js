import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilterItems from "./component/FilterItems";

function Filterproduct() {
  const [filterdata, setFilterdata] = useState();
  const [link, setLink] = useState("all");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("http://localhost:4000/sign/userOne?all=true");
  // const [tab, setTab] = useState()
  const fetchFilterData = (url) => {
    setLoading(true);
    axios.get(url).then((res) => {
      console.log(res.data);
      setFilterdata(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    console.log(url);
    fetchFilterData(url);
  }, [url]);
  console.log(filterdata);
  console.log(loading);
  return (
    <div className="w-full grid place-items-center my-10">
      <div className="w-[1000px] flex flex-row">
        <div className="w-[200px] p-3">
          <h1 className="text-xl text-black font-semibold uppercase border-b-2 border-black pb-2">
            filter product
          </h1>
          <div className="w-full">
            <ul className="flex flex-col cursor-pointer">
              <li
                className={
                  link === "all"
                    ? "text-blue-700 w-full py-1 font-semibold ease-in-out duration-200 hover:bg-gray-300 text-left pl-3 rounded-sm my-1 capitalize text-sm"
                    : "text-black w-full py-1 ease-in-out duration-200 hover:bg-gray-300 text-left pl-3 rounded-sm my-1 capitalize text-sm"
                }
                onClick={() => {
                  setUrl("http://localhost:4000/sign/userOne?all=true");
                  setLink("all");
                }}
              >
                all products
              </li>
              <li
                className={
                  link === "mobile"
                    ? "text-blue-700 w-full py-1 ease-in-out duration-200 font-semibold hover:bg-gray-300 text-left pl-3 rounded-sm my-1 capitalize text-sm"
                    : "text-black w-full py-1 ease-in-out duration-200 hover:bg-gray-300 text-left pl-3 rounded-sm my-1 capitalize text-sm"
                }
                onClick={() => {
                  setUrl("http://localhost:4000/sign/userOne?category=mobile");
                  setLink("mobile");
                }}
              >
                mobile
                
              </li>
              <li
                className={
                  link === "tablet"
                    ? "text-blue-700 w-full py-1 font-semibold ease-in-out duration-200 hover:bg-gray-300 text-left pl-3 rounded-sm my-1 capitalize text-sm"
                    : "text-black w-full py-1 ease-in-out duration-200 hover:bg-gray-300 text-left pl-3 rounded-sm my-1 capitalize text-sm"
                }
                onClick={() => {
                  setUrl("http://localhost:4000/sign/userOne?tablet=true");
                  setLink("tablet");
                }}
              >
                tablet
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[calc(100%-200px)] p-3 border-black border rounded-sm">
          <FilterItems filterdata={filterdata} />
        </div>
      </div>
    </div>
  );
}

export default Filterproduct;
