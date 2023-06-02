import type { LoaderArgs } from "@remix-run/node";
import ProductService from "../data/userCases/product";
import { useLoaderData } from "@remix-run/react";
import styles from "../react/styles/ProductDetail.module.css";
import Typography from "~/react/components/Typography";
import Rating from "~/react/components/Rating";
import Button from "~/react/components/Button";

const getSingleProduct = async (code: number) => {
  return await ProductService.getProductDetail(code);
};

export const loader = async (args: LoaderArgs) => {
  const { params } = args;

  return await getSingleProduct(Number(params.productId));
};

const ProductDetail = () => {
  const result = useLoaderData<typeof loader>();

  const {
    imageUrl,
    productName,
    mkName,
    badge,
    price,
    freeShipping,
    lastUpdate,
    rating,
    countOfPrices,
    storageOptions,
  } = result.result;

  return (
    <div className={styles["product-detail-wrapper"]}>
      <div className={styles["product-detail"]}>
        <div className={styles["product-detail-image-wrapper"]}>
          <img
            className={styles["product-detail-image"]}
            src={imageUrl}
            alt={productName}
          />
        </div>
        <div className={styles["product-detail-content-wrapper"]}>
          <Typography as="h3" variant="body-base" color="secondary">
            {mkName}
          </Typography>
          <Typography as="h2" variant="header-base" color="info">
            {productName}
          </Typography>
          {badge && (
            <Typography
              className={styles["product-detail-badge"]}
              as="p"
              variant="body-small"
              color="primary"
            >
              {badge}
            </Typography>
          )}
          {storageOptions?.length > 0 && (
            <div className={styles["detail-storage-wrapper"]}>
              <Typography as="p" variant="body-base" color="primary">
                Seçenekler:
              </Typography>
              <div className={styles["detail-storage-options"]}>
                {storageOptions?.map((storage, index) => (
                  <Button key={index} text={storage} />
                ))}
              </div>
            </div>
          )}
          <div className={styles["detail-price-wrapper"]}>
            <Typography as="h1" variant="header-large" color="primary">
              {price} TL
            </Typography>
            {freeShipping && (
              <Typography
                className={styles["free-shipping"]}
                as="p"
                variant="body-small"
                color="success"
              >
                {freeShipping && "Ücretsiz Kargo"}
              </Typography>
            )}
          </div>
          {countOfPrices && (
            <Typography
              as="p"
              variant="body-base"
              color="secondary"
              className={styles["count-of-prices"]}
            >
              {countOfPrices}+ FİYAT
            </Typography>
          )}
          <div className={styles["last-update-wrapper"]}>
            {lastUpdate && (
              <Typography as="p" variant="body-small" color="info">
                Son güncelleme: {lastUpdate}
              </Typography>
            )}
            {rating && <Rating value={rating} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
