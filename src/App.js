import './App.css';
import { Button, Card, Text, Pane } from 'evergreen-ui'

import Topbar from './Components/Topbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
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
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema1</Card>
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
            <Card margin="1%" minWidth="320px" width="31%" height={500} display="flex" alignItems="center" justifyContent="center" border="default">Siema2</Card>
          </Pane>
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
