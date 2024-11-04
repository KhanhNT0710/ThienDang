import React, { useEffect } from "react";
import ContentProduct from "../../components/ContentProduct";
import { useLocation, useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params])

  return (
    <>
      <ContentProduct />
    </>
  );
};

export default ProductPage;
