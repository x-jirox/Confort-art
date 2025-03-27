// scripts/filters.js

document.addEventListener("DOMContentLoaded", () => {
    // Obtener elementos del DOM
    const sortSelect = document.getElementById("sortSelect");
    const productsGrid = document.getElementById("productsGrid");
    const searchInput = document.getElementById("search");
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const clearFiltersBtn = document.getElementById("clearFilters");
    const productCountElement = document.getElementById("productCount");
  
    // Verificar si productsGrid existe antes de continuar
    if (!productsGrid || !productCountElement) {
      console.error("Error: 'productsGrid' o 'productCountElement' no se encontraron en el DOM.");
      return;
    }
  
    // Productos iniciales
    let products = Array.from(productsGrid.children);
    const originalProducts = [...products];
  
    // Función para aplicar filtros
    function applyFilters() {
      if (!productsGrid || !searchInput || !minPriceInput || !maxPriceInput || !productCountElement) return;
  
      let filteredProducts = [...originalProducts];
  
      // Filtro de búsqueda
      const searchTerm = searchInput.value.toLowerCase().trim();
      if (searchTerm) {
        filteredProducts = filteredProducts.filter((product) => {
          const name = product.querySelector("h3")?.textContent?.toLowerCase() || "";
          const category = product.querySelector(".text-sm")?.textContent?.toLowerCase() || "";
          return name.includes(searchTerm) || category.includes(searchTerm);
        });
      }
  
      // Filtro de categoría
      const selectedCategoryElement = document.querySelector('input[name="category"]:checked');
      const selectedCategory = selectedCategoryElement ? selectedCategoryElement.value : "all";
  
      if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter((product) => {
          const category = product.querySelector(".text-sm")?.textContent || "";
          return category === selectedCategory;
        });
      }
  
      // Filtro de precio
      const minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : 0;
      const maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : Infinity;
  
      filteredProducts = filteredProducts.filter((product) => {
        const priceText = product.querySelector(".text-xl")?.textContent?.replace(/[^0-9.]/g, "") || "0";
        const price = parseFloat(priceText);
        return price >= minPrice && price <= maxPrice;
      });
  
      // Ordenar productos
      sortProducts(filteredProducts);
  
      // Actualizar contador de productos
      productCountElement.textContent = filteredProducts.length.toString();
  
      // Mostrar productos filtrados
      productsGrid.innerHTML = "";
      filteredProducts.forEach((product) => {
        productsGrid.appendChild(product);
      });
    }
  
    // Función para ordenar productos
    function sortProducts(productsToSort) {
      if (!sortSelect) return;
  
      const sortValue = sortSelect.value;
  
      productsToSort.sort((a, b) => {
        const nameA = a.querySelector("h3")?.textContent || "";
        const nameB = b.querySelector("h3")?.textContent || "";
  
        const priceA = parseFloat(a.querySelector(".text-xl")?.textContent?.replace(/[^0-9.]/g, "") || "0");
        const priceB = parseFloat(b.querySelector(".text-xl")?.textContent?.replace(/[^0-9.]/g, "") || "0");
  
        switch (sortValue) {
          case "price-asc":
            return priceA - priceB;
          case "price-desc":
            return priceB - priceA;
          case "name-asc":
            return nameA.localeCompare(nameB);
          case "name-desc":
            return nameB.localeCompare(nameA);
          default:
            return 0;
        }
      });
  
      return productsToSort;
    }
  
    // Event listeners
    if (sortSelect) sortSelect.addEventListener("change", applyFilters);
    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (minPriceInput) minPriceInput.addEventListener("input", applyFilters);
    if (maxPriceInput) maxPriceInput.addEventListener("input", applyFilters);
  
    categoryRadios.forEach((radio) => {
      radio.addEventListener("change", applyFilters);
    });
  
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => {
        if (!searchInput || !minPriceInput || !maxPriceInput || !productsGrid || !productCountElement) return;
  
        // Restablecer búsqueda y precios
        searchInput.value = "";
        minPriceInput.value = "";
        maxPriceInput.value = "";
  
        // Restablecer categoría a "Todos"
        const allCategory = document.querySelector('input[name="category"][value="all"]');
        if (allCategory) allCategory.checked = true;
  
        // Restablecer orden de selección
        if (sortSelect) sortSelect.value = "default";
  
        // Restaurar productos originales
        productsGrid.innerHTML = "";
        originalProducts.forEach((product) => {
          productsGrid.appendChild(product);
        });
  
        // Actualizar contador
        productCountElement.textContent = originalProducts.length.toString();
      });
    }
  });
  