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
  citySelected.disabled = true;
  console.log(ufValue);
  const url = `
  https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
  await fetch(url)
    .then((response) => response.json())
    .then((cities) => {
      for (const city of cities) {
        console.log(city.nome);
        citySelected.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }
      citySelected.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

let collectedItems = document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelectedItem(event) {
  const itemId = event.target.dataset.id;
  const itemLi = event.target;

  itemLi.classList.toggle("selected");

  const alreadySelected = selectedItems.findIndex((item) => item == itemId);

  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter((item) => {
      const itemIsDifferent = item != itemId;
      return itemIsDifferent;
    });
    selectedItems = filteredItems;
  } else {
    selectedItems.push(itemId);
  }
  collectedItems = selectedItems;
}
