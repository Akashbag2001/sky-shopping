import Home from "./routes/home/Home.component.jsx";
import Navigation from "./routes/navigation/Navigation.component.jsx";
import { Routes, Route } from "react-router-dom";
import SingIn from "./routes/sign-in/sign-in.component.jsx";

const Shop = () => {
  return <h1> Hi, I m the shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="Sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
