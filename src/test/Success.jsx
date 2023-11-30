import React from "react";
import { supabase } from "./SupabaseClients";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }

    navigate("/signin");
  };
  return (
    <div>
      <h1>Success</h1>

      <button className=" bg-slate-300" onClick={handleSignout}>
        sign out
      </button>
    </div>
  );
};
