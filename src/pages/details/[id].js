import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchDetail } from "../api/hello";
import DetailCard from "@/components/ProductCard/DetailCard";

function DetailPage() {
  const [details, setDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const getDetail = async () => {
    const response = await fetchDetail(id);

    setDetails(response);
  };

  useEffect(() => {
    if (id) getDetail();
  }, [id]);
  return (
    <>
      <DetailCard product={details} />
    </>
  );
}

export default DetailPage;
