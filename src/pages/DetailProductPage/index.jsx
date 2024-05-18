import React, { useEffect } from "react";
import DetailProductCard from "../../components/DetailProductCard";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const params = useParams()

  console.log(params);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.productId])

  return (
    <div>
      <DetailProductCard />
    </div>
  );
};

export default DetailProductPage;
