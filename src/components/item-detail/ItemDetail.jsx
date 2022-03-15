import { useParams } from 'react-router-dom';
import { getProducts } from '../../utilities/db';

export const ItemDetail = () => {
    const { category, subcategory, id } = useParams();

    const item = getProducts(category, subcategory, id);

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
