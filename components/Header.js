import HeaderStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        {" "}
        WebDev<span> News</span>
      </h1>
    </div>
  );
};

export default Header;
