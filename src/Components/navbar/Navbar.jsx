
import curnencyImg from "../../assets/Currency.png";
import logoImg from "../../assets/logo.png";

const Navbar = ({ availableBanlance }) => {
  return (
    <>
      <div className="navbar max-w-[1280px] mx-auto pt-4">
        <div className="flex-1">
          <a>
            <img src={logoImg} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <button className="btn ">
            <span>{availableBanlance}</span> <span> Coin</span>
            <img src={curnencyImg} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;