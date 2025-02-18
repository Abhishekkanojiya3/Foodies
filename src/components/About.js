import { Outlet } from "react-router-dom";
import { LanguageContext } from "../utils/languageContext";
import { useContext } from "react";

const About = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const messages = {
    en: "This is the Namaste React by meeeeeeeeeee...............",
    hi: "यह नमस्ते रिएक्ट मेरे द्वारा है...............",
  };

  return (
    <div>
      <h1>Hiiiii</h1>
      <p>{messages[language]}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition mt-2 ml-2"
        onClick={toggleLanguage}
      >
        Change language
      </button>
      <Outlet />
    </div>
  );
};

export default About;
