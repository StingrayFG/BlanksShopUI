import { useLocation, Link } from "react-router-dom";
import CardPage from "./CardPage";

const CardPageWrap = (props) => {
  const location = useLocation();
  const state = location.state;

  return(
    <CardPage json={state.json} user={state.user}></CardPage>
  ) 
  
};

export default CardPageWrap;