const fabrincantesSelect = document.querySelector("#fabricante");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const options = { method: "post", body: formData };

  const response = await fetch(
    "https://api-pw-2021-1.herokuapp.com/produtos",
    options
  );

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    alert("O produto foi cadastrado com sucesso.");
  } else {
    console.warn("Falha ao consultar a API");
  }
});

async function getFabricantes() {
  const response = await fetch(
    "https://api-pw-2021-1.herokuapp.com/fabricantes"
  );
  const fabricantes = await response.json();

  fabricantes.forEach((fabricante) => {
    fabrincantesSelect.innerHTML += `<option value="${fabricante.id}">${fabricante.nome}</option>`;
  });
}

getFabricantes();
