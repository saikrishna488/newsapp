import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsItems from "./components/NewsItems";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

const App = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("world");
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(3)

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
    setPage(1);
    navigate("/" + cat);
  };

  const changePage = (val)=>{
    setPage(val);
  }

  const indexOfLast = page * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst,indexOfLast);
  console.log(currentItems)
  return (
    <div>
      <Navbar category={changeCategory} page={category} />
      <Routes>
        <Route
          path="/"
          element={
            loading ? <Loading /> : 
            <div>
            <NewsItems items={items} currentItems={currentItems}/>
            <Pagination totalItems={items.length} itemsPerPage={itemsPerPage} currentPage={page} setPage={changePage}/>
            </div>
          }
        />
        <Route
          path="/*"
          element={
            loading ? <Loading /> : 
            <div>
            <NewsItems items={items} currentItems={currentItems}/>
            <Pagination totalItems={items.length} itemsPerPage={itemsPerPage} currentPage={page} setPage={changePage}/>
            </div>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
