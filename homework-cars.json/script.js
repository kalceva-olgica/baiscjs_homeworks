fetch(
  "https://raw.githubusercontent.com/kalceva-olgica/cars.json/refs/heads/main/cars.json"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const tableBody = document.querySelector("#carsTable tbody");

    data.forEach((car) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.year}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) =>
    console.error("Theere was an error fetching the dataa:", error)
  );
