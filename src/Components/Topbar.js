import './Topbar.css';
import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import Scrollspy from 'react-scrollspy'


function Topbar() {
  return (
    <div className="Topbar">
      <div className="Container">
        <a href=""><img src='img/ecomida-logo.png' className="Logo" /></a>
        
        <div className="ButtonContainer">
        <Scrollspy className="ScrollSpy" items={ ['home','grain-free', 'super-premium', 'connoisseur'] } currentClassName="is-current">
          <a href=""> </a>
          <a href="#grain-free">
            <Button marginRight={16} appearance="minimal" height={50} >
              Grain Free
            </Button>
          </a>
          <a href="#super-premium">
            <Button marginRight={16} appearance="minimal" height={50} >
              Super Premium
            </Button>
          </a>
          <a href="#connoisseur">
            <Button marginRight={16} appearance="minimal" height={50} >
              Connoisseur
            </Button>
          </a>
          </Scrollspy>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
