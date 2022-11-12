import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="fullContainer fw-bold d-flex justify-content-between mb-3 mx-3 rounded">
      <section className="content-left d-flex justify-content-center align-items-center">
        <h1 className="text-center font-weight-bold">Stylos <br/><h1 className="ml-5">Store</h1></h1>
      </section>
      <div className="border-right m-4 borda" />
      <div className="border-bottom m-4 bordaBottom" />
      <section className="content-right p-5">
        <h1 className="text-center font-weight-bold">Sobre Nos</h1>
        <div className="container">
          <span className="pcText text-justify">
            Prazer sou Daiane, sou natural de Tejupa, e fico feliz por voce
            estar aqui acessando meu site, espero que tenha gostado da
            experiencia. Vou contar um pouco sobre minha loja, nos somos uma
            loja que vende roupas a mais de 10 anos, todos os tipos de roupas
            para Homens e Mulheres alem de produtos de beleza para ambos, voce
            pode nos encontrar em varias midias sociais, aqui a baixo voce pode
            ter acesso a todas as nossas midias.
          </span>
          <span className="mobileText">
            Vou contar um pouco sobre minha loja, nos somos uma loja que vende
            roupas a mais de 10 anos, todos os tipos de roupas para Homens e
            Mulheres alem de produtos de beleza para ambos, voce pode nos
            encontrar em varias midias sociais, aqui a baixo voce pode ter
            acesso a todas as nossas midias.
          </span>
        </div>
      </section>
    </div>
  );
}
