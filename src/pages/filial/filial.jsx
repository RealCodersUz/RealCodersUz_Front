/* eslint-disable no-unused-vars */
import { List, ListItemText, Typography } from "@mui/material";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
// import product from "../../assets/product_img.jpg";
import { TbCalendarEvent, TbMapSearch } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

import "./index.scss";
const Filial = () => {
  const navigate = useNavigate();
  const [filials, setFilial] = useState([]);

  async function getFilials() {
    try {
      let { data } = await axios.get(`/dealers`);
      console.log(data, "data");
      setFilial(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getFilials();
  }, []);
  console.log(filials, "state");
  const LangVal = () => {
    return i18n.language;
  };
  // const Filial = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg_img">
        <Navbar />
        {/* <!-- Hero Area Start --> */}
        <div className="hero-area pt-40 pb-20">
          <Typography
            variant="h3"
            component="h1"
            style={{
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              fontFamily: "Okta Neue",
              lineHeight: "70px",
              paddingBottom: "3rem",
              background:
                "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            {t("branches_1_1")}
          </Typography>
          <section className="filials flex flex-col gap-10">
            {filials.map((filial) => {
              return (
                <div
                  key={filial.id}
                  // onClick={() => {
                  //   navigate(`/contact/${filial.id}`);
                  // }}
                  // style={{ backgroundColor: "#fff" }}
                  className="filial-card flex flex-col lg:flex-row w-72 sm:w-max justify-start lg:w-10/12 p-8 mx-auto gap-6 rounded-3xl shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)]"
                >
                  <div className="f_info">
                    {/* <h5
                      style={{
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontFamily: "Okta Neue",
                        lineHeight: "normal",
                        background:
                          "var(--liniar, linear-gradient(90deg, #052438 0%, #186BA3 100%))",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        //   textAlign: "center",
                        paddingBottom: "2rem",
                      }}
                    >
                      {LangVal() == "uz"
                        ? filial.title_uz
                        : LangVal() == "en"
                        ? filial.title_en
                        : filial.title_ru}
                    </h5> */}
                    <List>
                      <ListItemText>
                        <p
                          // style={{ textAlign: "center" }}
                          className="pages text-black active:text-orange-500 flex flex-row "
                          style={{ color: "#324291" }}
                        >
                          <MdLocationOn className="icons text-2xl text-orange-500" />{" "}
                          <span>
                            {" "}
                            {/* {t("firyal_1_1")} {""} */}
                            {LangVal() == "uz"
                              ? filial.desc_uz
                              : LangVal() == "en"
                              ? filial.desc_en
                              : filial.desc_ru}
                          </span>
                        </p>
                      </ListItemText>

                      <ListItemText>
                        <a
                          href={`tel:${filial.phone_number}`}
                          // style={{ textAlign: "center" }}
                          className="pages flex flex-row text-black active:text-orange-500 items"
                          style={{ color: "#324291" }}
                        >
                          <BsTelephoneFill className="icons text-xl text-orange-500" />
                          <span>
                            {" "}
                            {/* {t("firyal_1_4")} */}
                            {filial.phone_number}
                          </span>
                        </a>
                      </ListItemText>

                      {filial.addition_number == "NULL" ? (
                        ""
                      ) : (
                        <ListItemText>
                          <a
                            href={`tel:${filial.addition_number}`}
                            // style={{ textAlign: "center" }}
                            className="pages flex flex-row text-black active:text-orange-500 items"
                            style={{ color: "#324291" }}
                          >
                            <BsTelephoneFill className="icons text-xl text-orange-500" />
                            <span>
                              {/* {t("firyal_1_4")} */}
                              {filial.addition_number}
                            </span>
                          </a>
                        </ListItemText>
                      )}

                      {filial.location == "NULL" ? (
                        ""
                      ) : (
                        <ListItemText>
                          <Link
                            to={filial.location}
                            target="_blank"
                            // style={{ textAlign: "center" }}
                            className="pages flex flex-row active:text-orange-500 items"
                            style={{ color: "#324291" }}
                          >
                            <TbMapSearch className="contactIcons contactIcons text-xl text-orange-500" />
                            <span style={{ marginLeft: "0.5rem" }}>
                              {" "}
                              {t("firyal_1_6")}{" "}
                              {LangVal() == "uz"
                                ? filial.title_uz
                                : LangVal() == "en"
                                ? filial.title_en
                                : filial.title_ru}
                            </span>
                          </Link>
                        </ListItemText>
                      )}
                    </List>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Filial;
