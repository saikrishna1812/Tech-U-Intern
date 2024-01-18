document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

async function fetchData() {
  const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your chosen API
  
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      displayData(data);
  } catch (error) {
      displayError(error.message);
  }
}

function displayData(data) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = ''; // Clear previous content

  data.slice(0, 3).forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <img src="${product.image}" alt="${product.title}" />
          <hr>
      `;
      appDiv.appendChild(productDiv);
  });
}

function displayError(errorMessage) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
}
