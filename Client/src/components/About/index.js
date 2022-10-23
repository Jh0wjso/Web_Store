import React from "react";
import "./styles.css";

export default function About()
{
    return(
        <div className="fw-bold d-flex flex-row justify-content-between container mb-5">
            <section className="content-left justify-content-between p-5">
                <h1 className="text-center">Stylos Store</h1>
                <span className="text-center">
                    Conheça mais sobre a nosso loja.
                </span>
            </section>
            <div className="border-right borda" />
            <section className="content-right p-5"> 
                <h1 className="text-center" >Sobre Nos</h1>
                <div className="container">
                    <strong  className="pcText text-justify">
                        Prazer sou Daiane, sou natural de Tejupa, e fico feliz por voce estar aqui acessando meu site, espero que tenha gostado da experiencia.
                        Vou contar um pouco sobre minha loja, nos somos uma loja que vende roupas a mais de 10 anos, todos os tipos de roupas para Homens e Mulheres alem de produtos de beleza
                        para ambos, voce pode nos encontrar em varias midias sociais, aqui a baixo voce pode ter acesso a todas as nossas midias.
                    </strong>
                    <strong  className="mobileText">
                        Vou contar um pouco sobre minha loja, nos somos uma loja que vende roupas a mais de 10 anos, todos os tipos de roupas para Homens e Mulheres alem de produtos de beleza
                        para ambos, voce pode nos encontrar em varias midias sociais, aqui a baixo voce pode ter acesso a todas as nossas midias.
                    </strong>
                </div>
            </section>
        </div>
    );
}