
// Función para obtener categorías únicas
export const getCategories = (products) => {
    return [...new Set(products.map((product) => product.category))];
  };
  
  // Función para obtener el rango de precios
  export const getPriceRange = (products) => {
    const prices = products.map((product) => product.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  };
  