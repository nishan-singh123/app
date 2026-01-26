"use client";

import { useParams, useSearchParams } from "next/navigation";

const ProductReviewByIdPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  

  const id = params.id;
  const reviewId = params.reviewId;

  return (
    <div className="text-7xl">
      Product id: {id} and review id: {reviewId}

      <p>
        Search: {searchParams.get("name")}
      </p>
    </div>
  );
};

export default ProductReviewByIdPage;
