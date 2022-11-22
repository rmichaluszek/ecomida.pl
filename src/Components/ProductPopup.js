import React from 'react';
import './ProductPopup.css';
import { Dialog, Pane, Text, Button, Card } from 'evergreen-ui'

function ProductPopup(props) {

    return (
        <Dialog
            width="70%"
            isShown={props.isShown}
            hasCancel={false}
            intent="success"
            title="Ecomida Grain Free Adult Lamb & Sweet Potato"
            onCloseComplete={() => {
                props.setIsShown(false);
                document.body.style.overflow = "auto";
                document.body.style.paddingRight = "0px";
            }}
            confirmLabel="Zobacz w sklepie"
            hasFooter={false}
        >
            <Pane className="ProductPage">

                <section className="ProductPageSection">
                    <img src='img/ecomida-logo.png' className="ProductPageBrandImg" />
                </section>

                <section className="ProductPageSection">
                    <Text className="SubBrandName">Super Premium</Text> 
                 </section>

                <section className="ProductPageSection">
                    <Text className="ProductName">Lamb & Sweet Potato</Text> 
                </section>
                <section className="ProductPageSection">
                    <Text className="ProductNameTranslation">(Jagnięcina z Batatami)</Text> 
                </section>

                <section className="ProductPageSection">
                    <Text className="Desc">Opis</Text> 
                </section>

                <Pane width="100%" flexWrap="wrap" display="flex" alignItems="center" justifyContent="center" clearfix >
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="360px" height="500px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                </Pane>

                <section className='ProductPageSection'>
                    <Button size="large" className="shopLink">Pokaż produkt w sklepie</Button>
                </section>

            </Pane>
        </Dialog>
  );
}

export default ProductPopup;
