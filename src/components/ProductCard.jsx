const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-white bg-opacity-20 p-6 rounded-md shadow-md text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;