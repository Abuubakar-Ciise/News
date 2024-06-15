import React, { useState } from "react";
import Newsbar from "./components/Newsbar";
import News from "./components/News";
import LanguageDropdown from "./components/LanguageDropdown";

const App = () => {
  const [category, setCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("us");

  return (
    <div>
      <Newsbar setCategory={setCategory} />
      <LanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <News category={category} selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default App;
