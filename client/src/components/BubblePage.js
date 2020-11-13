import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "./AxiosWithAuth"
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(function(){
    axiosWithAuth().get("/colors")
    .then(function(data){
      setColorList(data.data)
    })
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
