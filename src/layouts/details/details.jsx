import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { pokemon } = useParams();
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    name: "",
    img: "",
    weight: "",
    sprites: "",
    id: ""
  });
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad((prev) => !prev);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        setIsLoad((prev) => !prev);
        setDetails({
            name: res.data.name,
            img: res.data.sprites.front_default,
            weight: res.data.weight,
            sprites: res.data.sprites.front_default,   
            id: res.data.id         
          });
        console.log(res);
      })
      .catch((err) => {
        setIsLoad((prev) => !prev);

        console.log(err);
      });
  }, []);

  useEffect(()=>{
    console.log(details)
  },[details])
  return (
    <>
      {isLoad && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <div className="details">
          <h1>{details.name}</h1>
          <img src={details.img} height></img>
          <h3>id: {details.id}</h3>
          <h3>weight: {details.weight}</h3>
      </div>
      <div className="back">
      <button onClick={() => navigate(-1)}>Go back</button>
      </div>

    </>
  );
};

export default Details;
