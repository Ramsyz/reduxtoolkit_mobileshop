import JsonData from "../Data/JsonData.json";
import { useDispatch } from "react-redux";
import { incrementcart, decrementcart } from "../Reducer/CartReducer";

const Products = () => {
  const disptach = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="row">
          {JsonData.products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card m-1"
                style={{ width: "18rem", height: "25rem", textAlign: "center" }}
              >
                <img
                  src={product.src}
                  alt="productimg"
                  className="card-img-top"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p className="card-title">
                  {product.name} | ${product.price}
                </p>
                <div className="card-body">
                  <button
                    className="btn btn-dark ml-auto"
                    onClick={() =>
                      disptach(
                        incrementcart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      )
                    }
                  >
                    Add
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-dark ml-auto"
                    onClick={() =>
                      disptach(
                        decrementcart({
                          productName: product.name,
                          productPrice: product.price,
                        })
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
