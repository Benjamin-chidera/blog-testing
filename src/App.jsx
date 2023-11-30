import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Post } from "./Pages/Post";
import { View } from "./Pages/View";
import { SignUp } from "./Pages/SignUp";
import { Testhome } from "./test/testhome";
import { TextSignUp } from "./test/textSignUp";
import { TextSignIn } from "./test/textSignIn";
import { Success } from "./test/Success";

function App() {
  return (
    <div>
      <h1 className=" text-center mt-3 text-3xl font-bold">My Blog Post</h1>

      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Post />}></Route>
            <Route path="/view-posts" element={<View />}></Route>
            <Route path="/signin" element={<SignUp />}></Route> */}
            <Route path="/" element={<Testhome />}></Route>
            <Route path="/signup" element={<TextSignUp />}></Route>
            <Route path="/signin" element={<TextSignIn/>}></Route>
            <Route path="/success" element={<Success/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
