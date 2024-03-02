import { Link } from "react-router-dom";
import Button from "../Elements/Button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-[18rem] bg-gray-800 border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <Link to="">
      <img
        src={image}
        alt=""
        className="p-8 rounded-t-lg h-80 w-full object-cover"
      />
    </Link>
  );
};
const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};
const Footer = (props) => {
  const { price, id, handleAddToCart } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to card
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
