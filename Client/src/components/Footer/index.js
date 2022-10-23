import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <MDBFooter
        style={{ backgroundColor: "transparent" }}
        className="pt-1 text-center text-lg-start text-muted container"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block text-white">
            <span>Conecte-se conosco nas redes sociais:</span>
          </div>

          <div>
            <a href="#!" className="btnSocialMedia mx-2 text-reset">
              <MDBIcon
                icon="facebook-f"
                className="iconSocialMedia rounded p-2"
              />
            </a>
            <a href="#!" className="mx-2 text-reset">
              <MDBIcon icon="twitter" className="iconSocialMedia rounded p-2" />
            </a>
            <a href="" className="mx-2 text-reset">
              <MDBIcon icon="google" className="iconSocialMedia rounded p-2" />
            </a>
            <a href="" className="mx-2 text-reset">
              <MDBIcon
                icon="instagram"
                className="iconSocialMedia rounded p-2"
              />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-white text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h2 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  <strong>Stylos Store</strong>
                </h2>
                <p>
                  Somos uma loja que sempre busca melhor atende-lo e melhor
                  servi-lo.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-white">
                <h5 className="text-uppercase fw-bold mb-4">
                  <strong>Masculinos</strong>
                </h5>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Camisas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Calças
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Shorts
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Blusas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Outros
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-white">
                <h5 className="text-uppercase fw-bold mb-4">
                  <strong>Feminino</strong>
                </h5>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Camisetas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Saias
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Blusas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Shorts
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-white-50">
                    Outros
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h5 className="text-uppercase fw-bold mb-4">
                  <strong>Contato</strong>
                </h5>
                <p>
                  <MDBIcon icon="home" className="mx-2" />
                  Tejupa, SP, BR
                </p>
                <p>
                  <MDBIcon icon="envelope" className="mx-2" />
                  Nosso Email
                  <a href="mailto:jhonatansilverio1258@gmail.com">
                    <strong className="text-white text-decoration-none mx-1 fw-bold">
                      Clique Aqui
                    </strong>
                  </a>
                </p>
                <p>
                  <MDBIcon icon="mobile" className="mx-3" />
                  +55(14) 99798 - 1721
                </p>
                <p>
                  <MDBIcon icon="phone" className="mx-3" />
                  +55(14) 99807 - 4693
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
      <div className="text-center text-light p-4 copy-bg">
        Acesse Nosso Whatsapp:
        <a
          className="fw-bold mx-1 text-white"
          href="https://api.whatsapp.com/send?phone=5514998074693&text=Oi%2C%20vim%20pelo%20site."
          target={"_blank"}
        >
          <strong>Clique Aqui</strong>.
        </a>
      </div>
    </footer>
  );
}
