import type { IHorizontalProduct } from "~/domain/models";
import styles from "./ProductCard.module.css";
import { Link } from "@remix-run/react";
import Typography from "../Typography";
import { DataTestIdsAndClasses, FOLLOW, PRICE } from "./constants";

export const ProductCard = (props: IHorizontalProduct) => {
  const { imageUrl, name, price, countOfPrices, followCount, code } = props;

  return (
    <Link
      to={`/detail/${code}`}
      data-testid={DataTestIdsAndClasses.PRODUCT_CARD}
      className={styles[DataTestIdsAndClasses.PRODUCT_CARD]}
    >
      <div
        data-testid={DataTestIdsAndClasses.PRODUCT_IMAGE_WRAPPER}
        className={styles[DataTestIdsAndClasses.PRODUCT_IMAGE_WRAPPER]}
      >
        <img
          src={imageUrl}
          alt={name}
          data-testid={DataTestIdsAndClasses.PRODUCT_IMAGE}
          className={styles[DataTestIdsAndClasses.PRODUCT_IMAGE]}
        />
      </div>
      <div
        data-testid={DataTestIdsAndClasses.PRODUCT_DETAIL_WRAPPER}
        className={styles[DataTestIdsAndClasses.PRODUCT_DETAIL_WRAPPER]}
      >
        <Typography
          as="h3"
          variant="body-small"
          color="info"
          fullWidth
          style={{
            height: "36px",
          }}
        >
          {name}
        </Typography>
        <div
          data-testid={DataTestIdsAndClasses.PRICE_WRAPPER}
          className={styles[DataTestIdsAndClasses.PRICE_WRAPPER]}
        >
          <Typography as="h1" variant="body-large" color="primary">
            {price} TL
          </Typography>
          {countOfPrices && (
            <Typography
              as="p"
              variant="body-small"
              color="secondary"
              data-testid={DataTestIdsAndClasses.COUNT_OF_PRICES}
              className={styles[DataTestIdsAndClasses.COUNT_OF_PRICES]}
            >
              +{countOfPrices} {PRICE.toLocaleUpperCase()}
            </Typography>
          )}
        </div>
        {followCount && (
          <Typography
            as="p"
            variant="subtext"
            color="info"
            fullWidth
            data-testid={DataTestIdsAndClasses.FOLLOW_COUNT}
          >
            {followCount}+ {FOLLOW.toLocaleLowerCase()}
          </Typography>
        )}
      </div>
    </Link>
  );
};
