import React from 'react';
import './App.css';
import { Button, Card, Text, Pane } from 'evergreen-ui'

import Topbar from './Components/Topbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import ProductPopup from './Components/ProductPopup';

import useScrollbarSize from 'react-scrollbar-size';


function App() {

  const [isProductPopupShown, setIsProductPopupShown] = React.useState(false)
  const [selectedProductId, setSelectedProductId] = React.useState(-1)

  const { height, width } = useScrollbarSize();

  return (
    <div className="App">
      
      <Topbar></Topbar>

      <section className="BannerSection" id="home">
      <Banner></Banner>
      </section>


      <div className="Content">

        <div className="Container">

          <section id="grain-free">
            <h1>Ecomida Grain Free</h1>
            <div className="Desc">Bezzbożowy asortyment karm bardzo wysokiej jakości dla psów oraz kotów.</div>

            <Pane width="100%" flexWrap="wrap" display="flex" alignItems="center" justifyContent="center" clearfix >
              <Card onClick={()=> {
                setSelectedProductId(0)
                setIsProductPopupShown(true)
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = width+"px";
              }}
              className="Product"
              margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema1</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            </Pane>
            <ProductPopup isShown={isProductPopupShown} setIsShown={setIsProductPopupShown}></ProductPopup>

          </section>



          <section id="super-premium">

            <h1>Ecomida Super Premium</h1>
            <div className="Desc">Asortyment karm super-premium dla psów.</div>

            <Pane width="100%" flexWrap="wrap" display="flex" alignItems="center" justifyContent="center" clearfix >
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema1</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            </Pane>

          </section>



          <section id="connoisseur">
            <h1>Ecomida Connoisseur</h1>
            <div className="Desc">Pyszne karmy wysokiej jakości dla wyjątkowo wybrednych kotów.</div>
            <Pane width="100%" flexWrap="wrap" display="flex" alignItems="center" justifyContent="center" clearfix >
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema1</Card>
              <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            </Pane>
          </section>



        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
