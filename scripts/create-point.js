async function getUfs() {
  const ufSelect = document.querySelector("select[name=uf");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((response) => response.json())
    .then((responseJson) => console.log(responseJson));
}

getUfs();
