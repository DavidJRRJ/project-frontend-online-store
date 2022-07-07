export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    if (categoryId && query) {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&query=${query}`);
      return response.json();
    }
    if (categoryId) {
      const response = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      return response.json();
    }
    if (query) {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      return response.json();
    }
  } catch (err) {
    console.log(err);
  }
}
