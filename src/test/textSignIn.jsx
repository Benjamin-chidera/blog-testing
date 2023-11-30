import React, { useState } from "react";
import { supabase } from "./SupabaseClients";

import { Auth } from "@supabase/auth-ui-react";
import { Link, useNavigate } from "react-router-dom";

export const TextSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
      } else {
        console.log("user signed in successfully", user);
        navigate("/success");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="text-center mt-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          className=" bg-slate-400"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>

        <br />
        <input
          type="password"
          id="password"
          className=" bg-slate-400"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button
          type="submit"
          className=" bg-slate-400 mt-2"
          // onClick={() => {
          //   getSignin();
          // }}
        >
          Submit
        </button>
      </form>

      <div className="flex items-center justify-center gap-3">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <button className="bg-slate-400 mt-2">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
