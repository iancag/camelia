import { products } from '../assets/data/data';

export const getProducts = (category, subcategory, id) => {
    return products.filter(p => p.categories.some(c => c.name === category))[0]
    .categories[0].subcategories.filter(s => s.name === subcategory)[0]
    .items.filter(item => item.id === parseInt(id))[0];
}