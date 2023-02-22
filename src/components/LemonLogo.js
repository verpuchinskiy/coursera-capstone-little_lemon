import { useNavigate } from "react-router-dom";
import Logo from "../Logo.svg";

const LemonLogo = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return <img src={Logo} alt="Logo" className="logo" onClick={goToMainPage} />;
};

export default LemonLogo;
