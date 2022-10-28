import React from 'react';
import './ProductPopup.css';
import { Dialog, Pane, Text, Button } from 'evergreen-ui'

function ProductPopup(props) {

    return (
        <Dialog
            width="90%"
            isShown={props.isShown}
            hasCancel={false}
            intent="success"
            title="Ecomida Grain Free Adult Lamb & Sweet Potato"
            onCloseComplete={() => {
                props.setIsShown(false);
                document.body.style.overflow = "auto";
            }}
            confirmLabel="Zobacz w sklepie"
            hasFooter={false}
            preventBodyScrolling={true}
        >
            <Pane>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>
                Opis <br></br>

            </Pane>
        </Dialog>
  );
}

export default ProductPopup;
