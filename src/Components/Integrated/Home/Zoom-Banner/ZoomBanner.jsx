import React from 'react'
import { Container } from 'react-bootstrap'
import "./ZoomBanner.css"


function ZoomBanner() {
  return (
    <Container fluid className="contenedor mx-0 ">
        <h2 className="title_v">Verduras Frescas</h2>
        <section className="verduras container-fluid">
            <img className="verdura" src="https://img.freepik.com/foto-gratis/deliciosa-ensalada-mesa-lista-ser-servida_23-2148538691.jpg?t=st=1729295154~exp=1729298754~hmac=8a89e7916ec9c06e7ccf9935b894e85509433189a828663305f7e3ad1dbdffce&w=360" alt="img3" />
            <img className="verdura" src="https://img.freepik.com/foto-gratis/ensalada-tomate-pepino-cebolla-morada-hojas-lechuga-menu-saludable-vitaminas-verano-comida-vegetariana-vegana-mesa-cena-vegetariana_2829-6473.jpg?semt=ais_hybrid" alt="img" />
            <img className="verdura" src="https://img.freepik.com/foto-gratis/verduras-cesta-mimbre_141793-1324.jpg?t=st=1729294789~exp=1729298389~hmac=8f3b86032ea4b05a78bdf868c02973c1f30707568348d333a77bfc85671e3724&w=360" alt="img" />
            <img className="verdura" src="https://img.freepik.com/foto-gratis/tiro-macro-hojas-verdes-frescas-col-china_23-2147926356.jpg?t=st=1729295025~exp=1729298625~hmac=98e1307f37cb09c214f3cf25f39086f31da5d96eebe02b7ecb9ae2d4bf8af022&w=360" alt="imagen1" />
            <img className="verdura" src="https://img.freepik.com/foto-gratis/vista-zanahorias-cocina-otras-verduras_23-2150316474.jpg?semt=ais_hybrid" alt="img" />
            <img className="verdura" src="https://img.freepik.com/foto-gratis/deliciosos-tomates-verduras-ensalada-saludable_23-2148585804.jpg?t=st=1729294809~exp=1729298409~hmac=313899afa0de7bd830ab29b5e8e2af42ad76c9acaae2bba3f1a0662854a1ed5d&w=360" alt="img" />
            <img className="verdura" src="https://img.freepik.com/foto-gratis/alta-vista-deliciosa-ensalada-plato-marron_23-2148537250.jpg?t=st=1729295145~exp=1729298745~hmac=7176b66a5ae76234dcad3da11f9aeaced6766fda4e05ee147870b77e31b5ba77&w=360" alt="imagen2" />
        </section>
    </Container>
  )
}

export default ZoomBanner
