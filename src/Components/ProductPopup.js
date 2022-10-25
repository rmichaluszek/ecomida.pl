import React from 'react';
import './ProductPopup.css';
import { Dialog, Pane, Text, Button } from 'evergreen-ui'

function ProductPopup(props) {

    return (
        <Dialog
            width="70%"
            isShown={props.isShown}
            hasCancel={false}
            intent="success"
            title="Product title"
            onCloseComplete={() => props.setIsShown(false)}
            confirmLabel="Zobacz w sklepie"
        >
            <Pane>
                Opis
            </Pane>
        </Dialog>
  );
}

export default ProductPopup;
