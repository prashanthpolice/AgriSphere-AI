'use client';

import { useEffect, useState } from "react";
import i18n from "../i18n";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLang(lng);
  };

  return (
    <div style={{ display: "flex", gap: 10, padding: 10 }}>
      <button
        onClick={() => changeLanguage("en")}
        style={{ fontWeight: lang === "en" ? "bold" : "normal" }}
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("hi")}
        style={{ fontWeight: lang === "hi" ? "bold" : "normal" }}
      >
        HI
      </button>

      <button
        onClick={() => changeLanguage("te")}
        style={{ fontWeight: lang === "te" ? "bold" : "normal" }}
      >
        TE
      </button>

      <button
        onClick={() => changeLanguage("kn")}
        style={{ fontWeight: lang === "kn" ? "bold" : "normal" }}
      >
        KN
      </button>
    </div>
  );
}