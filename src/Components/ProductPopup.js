import React from 'react';
import {useState} from "react";
import './ProductPopup.css';
import { Dialog, Pane, Text, Button, Card, Table, } from 'evergreen-ui'

function ProductPopup(props) {

    const [productDetails, setProductDetails] = useState(
        {
            "pl":[
                {
                    "id":1,
                    "name" : "Wiek psa",
                    "value": "Dorosły"
                },
                {
                    "id":2,
                    "name":"Rozmiar psa",
                    "value":"Karma uniwersalna"
                },
                {
                    "id":3,
                    "name":"Przeznaczenie",
                    "value":"Karma dla psów dorosłych"
                },
                {
                    "id":4,
                    "name":"Źródło białka",
                    "value":"Jagnięcina"
                },
                {
                    "id":5,
                    "name":"Łączna zawartość białka",
                    "value":"50%"
                },
                {
                    "id":6,
                    "name":"Wypełniacz",
                    "value":"Bataty"
                },
                {
                    "id":7,
                    "name":"Hypoalergiczna?",
                    "value":"Tak"
                },
                {
                    "id":8,
                    "name":"Monoproteinowa?",
                    "value":"Tak"
                },
                {
                    "id":9,
                    "name":"Bezzbożowa?",
                    "value":"Tak"
                }
            ],
            "eng": [
    
            ]
        }
    )

    return (
        <Dialog
            className="DialogPanel"
            width="900px"
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
                    <img src='img/ecomida-logo.png' className="ProductPageBrandImg" alt="Ecomida Logo"/>
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
                    <img className="ProductMainImage" src="img/GFF.jpg" alt={"iim"}></img> 
                </section>

                <section className='ProductPageSection'>
                    <Button size="large" className="shopLink">Pokaż produkt w sklepie</Button>
                </section>

                <section className="ProductPageSection">
                    <Text className="Desc">Short desc</Text> 
                </section>

                <section className="ProductPageSection">
                    <Text className="Desc">Long desc</Text> 
                </section>

                <section className="ProductPageSection">
                    <Text><h3>Szczegóły produktu</h3></Text>
                </section>
                    <Table className="Table">
                        <Table.Body>
                            {productDetails['pl'].map((detail) => (
                            <Table.Row  height="auto" intent={detail.id%2?"success":"none"} key={detail.id}>
                                <Table.TextCell>{detail.name}</Table.TextCell>
                                <Table.TextCell>{detail.value}</Table.TextCell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                

                <section className="ProductPageSection">
                    <Text><h3>Skład</h3></Text>
                    <Table className="Table">
                        <Table.Body>
                            {productDetails['pl'].map((detail) => (
                            <Table.Row intent={detail.id%2?"success":"none"} key={detail.id}>
                                <Table.TextCell>{detail.name}</Table.TextCell>
                                <Table.TextCell>{detail.value}</Table.TextCell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </section>

                <section className="ProductPageSection">
                    <Text><h3>Składniki analityczne</h3></Text>
                    <Table className="Table">
                        <Table.Body>
                            {productDetails['pl'].map((detail) => (
                            <Table.Row intent={detail.id%2?"success":"none"} key={detail.id}>
                                <Table.TextCell>{detail.name}</Table.TextCell>
                                <Table.TextCell>{detail.value}</Table.TextCell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </section>

                <Pane width="100%" flexWrap="wrap" display="flex" alignItems="center" justifyContent="center" clearfix >
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                    <Card backgroundImage="url('img/GFF.jpg')" className="ProductImage" margin="1%" minWidth="350px" height="480px;" display="flex" alignItems="center" justifyContent="center" border="default"></Card>
                </Pane>

                <section className='ProductPageSection'>
                    <Button size="large" className="shopLink">Pokaż produkt w sklepie</Button>
                </section>

            </Pane>
        </Dialog>
  );
}

export default ProductPopup;
