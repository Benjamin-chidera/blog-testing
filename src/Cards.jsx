/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Btn } from "./Btn";

export const Cards = ({ post, index }) => {
  const handleDelete = (index) => {
    const items = JSON.parse(localStorage.getItem("blog"));

    const item = items.fliter((item) => item.index !== index);

    if (item.length === 0) {
      localStorage.removeItem("blog");
    }
  };

  return (
    <div className=" mt-5">
      <Card
        style={{ width: "18rem" }}
        className=" bg-slate-200 p-5 rounded-t-xl relative"
      >
        <Card.Body>
          <Card.Title>
            <h1 className=" font-bold text-xl">{post.title}</h1>
          </Card.Title>
          <Btn post={post} />
          <Card.Text>
            <Link
              to={post.img}
              className="font-semibold hover:underline"
              target="_blank"
            >
              view picture
            </Link>
          </Card.Text>
        </Card.Body>
        <div
          className=" absolute top-0 right-3 bg-red-600 my-2 h-7 w-7 rounded-full text-xl text-white font-bold cursor-pointer"
          onClick={() => handleDelete(index)}
        >
          &times;
        </div>
      </Card>

      <div className=" bg-blue-400 p-3 " style={{ width: "288px" }}></div>
    </div>
  );
};
