import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, img, price} = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-40 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex text-orange-500">
            <p className="text-xl">Price: ${price}</p>
            <Link to={`/checkout/${_id}`}><span><FaArrowRight /></span></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
