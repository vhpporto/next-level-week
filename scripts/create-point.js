async function getUfs() {
  const ufSelect = document.querySelector("select[name=uf]");
  await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((response) => response.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

getUfs();

async function getCities(event) {
  const citySelected = document.querySelector("select[name=city]");
  const ufValue = event.target.value;
  citySelected.innerHTML = "<option>Selecione a Cidade</option>";
  console.log(ufValue);
  const url = `
  https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
  await fetch(url)
    .then((response) => response.json())
    .then((cities) => {
      for (const city of cities) {
        console.log(city.nome);
        citySelected.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
      }
      citySelected.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);
