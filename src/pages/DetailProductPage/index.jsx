import React, { useEffect } from "react";
import DetailProductCard from "../../components/DetailProductCard";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const params = useParams()


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.id_product])

  return (
    <>
      <DetailProductCard />
    </>
  );
};

export default DetailProductPage;
