import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsItems from "./components/NewsItems";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const App = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("world");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (category) => {
      setLoading(true);
      let res = await axios.get(import.meta.env.VITE_API_URL + category);
      let data = res.data;
      setItems(data.data);
      setLoading(false);
    };
    fetchData(category);
  }, [category]);

  const changeCategory = (cat) => {
    setCategory(cat);
    navigate("/" + cat);
  };

  return (
    <div>
      <Navbar category={changeCategory} page={category} />
      <Routes>
        <Route
          path="/"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
        <Route
          path="/sports"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
        <Route
          path="/cricket"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
        <Route
          path="/football"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
        <Route
          path="/india"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
        <Route
          path="/politics"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
        <Route
          path="/*"
          element={loading ? <Loading /> : <NewsItems items={items} />}
        />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
