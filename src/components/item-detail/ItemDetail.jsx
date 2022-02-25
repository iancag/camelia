import { useParams } from 'react-router-dom';
import { products } from '../../assets/data/data';

export const ItemDetail = () => {
  const { category, subcategory, id } = useParams();

  const item = products
    .filter((p) => p.categories.some((c) => c.name === category))[0]
    .categories[0].subcategories.filter((s) => s.name === subcategory)[0]
    .items.filter((item) => item.id === parseInt(id))[0];

  return (
    <div className="card">
      <div className="title">{item.brand}</div>
      <div className="description">{item.description}</div>
      <div className="price">${item.price} MXN</div>
      <div>
        <img src={item.imageUrl} alt="image" width="200px" />
      </div>
    </div>
  );
};
