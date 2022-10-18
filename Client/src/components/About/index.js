import React from "react";
import "./styles.css";

export default function About()
{
    return(
        <div className="d-flex flex-row justify-content-between container mb-5">
            <section className="content-left rounded d-flex flex-column justify-content-between p-5">
                <h1 >Nome Loja</h1>
                <span>
                    Conheça mais sobre a nosso loja.
                </span>
            </section>
            <section className="content-right p-5 rounded">
                <h1>Sobre Nos</h1>
                <div className="container">
                    <p  className="pcText text-justify">
                        Prazer sou Xxxxx, sou natural de YYYYY, e fico feliz por voce estar aqui acessando meu site, espero que tenha gostado da experiencia.
                        Vou contar um pouco sobre minha loja, nos somos uma loja que vende roupas a mais de 10 anos, todos os tipos de roupas para Homens e Mulheres alem de produtos de beleza
                        para ambos, voce pode nos encontrar em varias midias sociais, aqui a baixo voce pode ter acesso a todas as nossas midias.
                    </p>
                    <p  className="mobileText">
                        Vou contar um pouco sobre minha loja, nos somos uma loja que vende roupas a mais de 10 anos, todos os tipos de roupas para Homens e Mulheres alem de produtos de beleza
                        para ambos, voce pode nos encontrar em varias midias sociais, aqui a baixo voce pode ter acesso a todas as nossas midias.
                    </p>
                </div>
            </section>
        </div>
    );
}