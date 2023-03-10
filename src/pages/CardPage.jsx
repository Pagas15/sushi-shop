import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useToCart } from '../hooks/use-add-to-cart';
import { API_SUSHI } from '../utill/consts';

const CardPage = () => {
  const [sushi, setSushi] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [onClick, element] = useToCart();

  useEffect(() => {
    axios
      .get(`${API_SUSHI}/${id}`)
      .then((res) => setSushi(res.data))
      .catch((error) => {
        alert('No such product found');
        navigate('/products');
      });

    return () => {};
  }, []);

  if (!sushi) {
    return <Loading />;
  }

  const onClickAdd = () => {
    onClick(sushi);
  };

  return (
    <section className="cardPage">
      <div className="cardPage__wrapper wrapper">
        <div className="cardPage__img">
          <img src={sushi.imageUrl} alt="" />
        </div>
        <div className="cardPage__cnt">
          <h2 className="cardPage__title">{sushi.title}</h2>
          <p className="cardPage__description">{sushi.description}</p>
          <div className="cardPage__sumsInfo">Weight: {sushi.weight} g.</div>
          <button className="button cardPage__btn" onClick={onClickAdd}>
            Add to cart
          </button>
        </div>
      </div>
      {element}
    </section>
  );
};

export default CardPage;
