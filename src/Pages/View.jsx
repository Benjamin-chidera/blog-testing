/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cards } from "../Cards";

export const View = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("blog");

    if (data) {
      setMyData(JSON.parse(data));
    }

    if (!data) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (!data) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("user");

    setName(JSON.parse(data)?.name);
  }, []);

  return (
    <div className="mx-5">
        <marquee behavior="smooth" direction="">Welcome {name}</marquee>
      <Link to={"/"} className="me-3">
        Posts
      </Link>
      <button
        className="bg-slate-500 mt-3 py-2 px-5 text-white font-semibold rounded-lg"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/signin");
        }}
      >
        LogOut
      </button>

      <div className=" text-center  mx-5">
        <div className=" flex justify-evenly gap-5 flex-wrap">
          {myData.map((post, index) => (
            <div key={index}>
              <Cards post={post} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <button
            className="bg-red-300 py-2 px-7 text-white rounded-md"
            onClick={() => {
              localStorage.removeItem("blog");
              setMyData([]);
              navigate("/");
            }}
          >
            Clear posts
          </button>
        </div>
      </div>
    </div>
  );
};
