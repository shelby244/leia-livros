function myFunction() {
  let terror = document.querySelector(".op1");
  let suspense = document.querySelector(".op2");
  let comedia = document.querySelector(".op3");
  let aventura = document.querySelector(".op4");
  let poesias = document.querySelector(".op5");
  let espiritualidade = document.querySelector(".op6");
  let educacaoFinanceira = document.querySelector(".op7");
  let todos = document.querySelector(".op8");

  let sectionTerror = document.querySelector(".terror");
  let sectionSuspense = document.querySelector(".suspense");
  let sectionComedia = document.querySelector(".comedia");
  let sectionAventura = document.querySelector(".aventura");
  let sectionPoesia = document.querySelector(".poesia");
  let sectionEspiritualidade = document.querySelector(".espiritualidade");
  let sectionedFinanceira = document.querySelector(".educacaoFinanceira");

  let input = document.getElementById("input").value;

  if (input === terror.value) {
    sectionTerror.classList.add("show"),
      sectionSuspense.classList.remove("show");
    sectionSuspense.classList.add("hide"),
      sectionComedia.classList.remove("show"),
      sectionComedia.classList.add("hide"),
      sectionAventura.classList.remove("show");
    sectionAventura.classList.add("hide"),
      sectionPoesia.classList.remove("show"),
      sectionPoesia.classList.add("hide"),
      sectionEspiritualidade.classList.remove("show");
    sectionEspiritualidade.classList.add("hide"),
      sectionedFinanceira.classList.remove("show");
    sectionedFinanceira.classList.add("hide");
  } else if (input === suspense.value) {
    sectionTerror.classList.remove("show"),
      sectionTerror.classList.add("hide"),
      sectionComedia.classList.remove("show"),
      sectionComedia.classList.add("hide"),
      sectionAventura.classList.remove("show"),
      sectionAventura.classList.add("hide"),
      sectionPoesia.classList.remove("show"),
      sectionPoesia.classList.add("hide"),
      sectionEspiritualidade.classList.remove("show");
    sectionEspiritualidade.classList.add("hide"),
      sectionedFinanceira.classList.remove("show");
    sectionedFinanceira.classList.add("hide"),
      sectionSuspense.classList.add("show");
  } else if (input === comedia.value) {
    sectionSuspense.classList.remove("show");
    sectionSuspense.classList.add("hide");
    sectionComedia.classList.add("show"),
      sectionTerror.classList.remove("show");
    sectionTerror.classList.add("hide");
    sectionAventura.classList.remove("show");
    sectionAventura.classList.add("hide");
    sectionPoesia.classList.remove("show");
    sectionPoesia.classList.add("hide");
    sectionEspiritualidade.classList.remove("show");
    sectionEspiritualidade.classList.add("hide");
    sectionedFinanceira.classList.remove("show");
    sectionedFinanceira.classList.add("hide");
  } else if (input === aventura.value) {
    sectionAventura.classList.add("show");
    sectionTerror.classList.remove("show");
    sectionTerror.classList.add("hide");
    sectionSuspense.classList.remove("show");
    sectionSuspense.classList.add("hide");
    sectionComedia.classList.remove("show");
    sectionComedia.classList.add("hide");
    sectionPoesia.classList.remove("show");
    sectionPoesia.classList.add("hide");
    sectionEspiritualidade.classList.remove("show");
    sectionEspiritualidade.classList.add("hide");
    sectionedFinanceira.classList.remove("show");
    sectionedFinanceira.classList.add("hide");
  } else if (input === poesias.value) {
    sectionPoesia.classList.add("show");
    sectionTerror.classList.remove("show");
    sectionTerror.classList.add("hide");
    sectionSuspense.classList.remove("show");
    sectionSuspense.classList.add("hide");
    sectionComedia.classList.remove("show");
    sectionComedia.classList.add("hide");
    sectionAventura.classList.remove("show");
    sectionAventura.classList.add("hide");
    sectionEspiritualidade.classList.remove("show");
    sectionEspiritualidade.classList.add("hide");
    sectionedFinanceira.classList.remove("show");
    sectionedFinanceira.classList.add("hide");
  } else if (input === espiritualidade.value) {
    sectionEspiritualidade.classList.add("show");
    sectionTerror.classList.remove("show");
    sectionTerror.classList.add("hide");
    sectionSuspense.classList.remove("show");
    sectionSuspense.classList.add("hide");
    sectionComedia.classList.remove("show");
    sectionComedia.classList.add("hide");
    sectionAventura.classList.remove("show");
    sectionAventura.classList.add("hide");
    sectionPoesia.classList.remove("show");
    sectionPoesia.classList.add("hide");
    sectionedFinanceira.classList.remove("show");
    sectionedFinanceira.classList.add("hide");
  } else if (input === educacaoFinanceira.value) {
    sectionedFinanceira.classList.add("show");
    sectionTerror.classList.remove("show");
    sectionTerror.classList.add("hide");
    sectionSuspense.classList.remove("show");
    sectionSuspense.classList.add("hide");
    sectionComedia.classList.remove("show");
    sectionComedia.classList.add("hide");
    sectionAventura.classList.remove("show");
    sectionAventura.classList.add("hide");
    sectionPoesia.classList.remove("show");
    sectionPoesia.classList.add("hide");
    sectionEspiritualidade.classList.remove("show");
    sectionEspiritualidade.classList.add("hide");
  } else if (input === todos.value) {
    sectionTerror.classList.add("show");
    sectionSuspense.classList.add("show");
    sectionComedia.classList.add("show");
    sectionAventura.classList.add("show");
    sectionPoesia.classList.add("show");
    sectionEspiritualidade.classList.add("show");
    sectionedFinanceira.classList.add("show");
  } else if (
    input != educacaoFinanceira.value &&
    espiritualidade.value &&
    terror.value &&
    suspense.value &&
    comedia.value &&
    aventura.value &&
    poesias.value
  ) {
    sectionTerror.classList.add("show");
    sectionSuspense.classList.add("show");
    sectionComedia.classList.add("show");
    sectionAventura.classList.add("show");
    sectionPoesia.classList.add("show");
    sectionEspiritualidade.classList.add("show");
    sectionedFinanceira.classList.add("show");
  }
}
