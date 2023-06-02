import type { IHorizontalProduct } from "~/domain/models";
import { ProductCard } from "../ProductCard";
import styles from "./ProductList.module.css";
import { DataTestIdsAndClasses } from "./constants";

const ProductList = ({ products }: { products: IHorizontalProduct[] }) => {
  return (
    <div
      data-testid={DataTestIdsAndClasses.PRODUCT_LIST_WRAPPER}
      className={styles[DataTestIdsAndClasses.PRODUCT_LIST_WRAPPER]}
    >
      <ul
        data-testid={DataTestIdsAndClasses.PRODUCT_LIST}
        className={styles[DataTestIdsAndClasses.PRODUCT_LIST]}
      >
        {products.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
