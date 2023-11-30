import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./SupabaseClients";

export const Testhome = () => {
  console.log(supabase);
  const [name, setName] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("smoothie").select();

      if (error) {
        console.log(error);
      } else {
        setName(data);
      }
    };

    getData();
  }, []);

  console.log(name);

  return (
    <div className="text-center my-10 space-y-3">
      <Link to={"/signin"}>sign in</Link>

      <h1 className="text-3xl font-bold">Welcome to Smoothie!</h1>
      <h2 className="text-xl font-bold">
        Here you can find all of the smoothies you have created.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {name.map((names) => {
          return (
            <div key={names.id}>
              <h1>{names.title}</h1>
              <p>{names.method}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
