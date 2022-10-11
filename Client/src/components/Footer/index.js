import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="whatsapp" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
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
                  <strong>Alguma sugestao nos envie um e-mail</strong>
                </p>
              </MDBCol>
              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Clique Aqui
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4 mt-4">
          <p>
            Aqui em baixo desponibilizamos alguns links rapidos para voce, para facilitar sua vida.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Masculinas</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Camisas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Camisetas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Calças
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Blusas
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Femininas</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Vestidos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Shorts
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Blusinhas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Calças
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Cosmeticos</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Masculinos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Femininos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Infatis
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Outros
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Contato</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    E-mail
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          NomeLoja
        </a>
      </div>
    </MDBFooter>
  );
}
