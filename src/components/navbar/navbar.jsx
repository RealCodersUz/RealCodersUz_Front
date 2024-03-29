import logo from "/alcoders_logo.png";
import "./navbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import Container from "@mui/material/Container";
import { FormControl, NativeSelect } from "@mui/material";
import TemporaryDrawer from "../drawer/drewer";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { t } = useTranslation();
  console.log(i18n.language);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);

    const LangVal = () => {
      return window.localStorage.getItem("i18nextLng");
    };

    LangVal();
  };

  const pages = [
    { name: t("navbar_main_link"), url: "/" },
    { name: t("navbar_about_link"), url: "/about-us" },
    { name: t("navbar_adventages_link"), url: "/advantages" },
    { name: t("navbar_catalog_link"), url: "/catalog" },
    { name: t("navbar_news_link"), url: "/news" },
    { name: t("navbar_contact_link"), url: "/contact" },
  ];

  const items = [
    {
      value: "ru",
      label: "Рус",
    },
    {
      value: "uz",
      label: "Uz",
    },
    {
      value: "en",
      label: "En",
    },
  ];

  return (
    <AppBar
      position="fixed"
      style={{
        background: "rgba(19, 177, 244, 0.8)",
        backdropFilter: "blur(5px)",
        boxShadow: "none",
        borderRadius: "50px",
        padding: "15px 10px",
        margin: "20px auto",
        // width: "90vw",
        height: "93px",
      }}
      className="appbar"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: "53px",
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Link to={"/"}>
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                gap: "1rem",
              }}
            >
              <img
                src={logo}
                alt="Kalde Logo"
                style={{ width: "5rem", height: "50%" }}
              />
              <p style={{ fontSize: "2rem" }}>alcoders</p>
            </div>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              margin: "0",
              justifyContent: "flex-end",
            }}
            // style={}
          >
            <TemporaryDrawer />
            {/* <LinkiOutlineMenu /> */}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.url}
                className="text-white text-xl font-semibold active:text-blue-900 links"
                key={page}
                // style={{ color: "#324291" }}
                // onClick={handleCloseNavMenu}
                // sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page.name}
              </Link>
            ))}

            <Box>
              <a
                className="text-white active:text-orange-900 flex flex-row links"
                href="tel:+998916223406"
              >
                <BiSolidPhoneCall
                  className="text-3xl"
                  style={{ marginRight: "0.5rem", color: "#1276FF" }}
                />
                +998916223406
              </a>
              {/* </Button> */}
            </Box>

            <Box className="select">
              <FaGlobe
                className="text-3xl "
                style={{ marginRight: "0.5rem", color: "#1276FF" }}
              />

              <FormControl>
                <NativeSelect
                  value={i18n.language}
                  onChange={handleLanguageChange}
                  inputProps={{
                    name: "language",
                    id: "language",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      background: "white",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {items.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
