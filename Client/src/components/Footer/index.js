import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./styles.css"

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="gray" bgColor="light">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="whatsapp" />
          </MDBBtn>

          <MDBBtn
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="google" />
          </MDBBtn>

          <MDBBtn
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="instagram" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center flex-column">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong className="text-dark">Alguma sugestao nos envie um e-mail</strong>
                </p>
              </MDBCol>
              <MDBCol size="auto">
                <MDBBtn color="dark" href="#!" className="mb-4">
                  Clique Aqui
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Aqui em baixo desponibilizamos alguns links rapidos para voce, para facilitar sua vida.
          </p>
        </section>

        <section className="text-dark">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-dark">
              <h5 className="text-uppercase fw-bold">
                <strong>Masculinas</strong>
              </h5>

              <ul className="list-unstyled mb-0 text-dark">
                <li>
                  <a href="#!" className="text-dark">
                    Camisas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Camisetas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Calças
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Blusas
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <strong>
                    Femininas
                </strong>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Vestidos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Shorts
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Blusinhas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Calças
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <strong>
                    Cosmeticos
                </strong>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Masculinos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Femininos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Infatis
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Outros
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <strong>Contato</strong>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    TikTok
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#040404" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="#!">
          NomeLoja
        </a>
      </div>
    </MDBFooter>
  );
}
