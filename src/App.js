import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import TranslationContextProvider from "./components/TranslationContextProvider";
import LoadingText from "./components/LoadingText";
import PersonalProjects from "./components/PersonalProjects";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingText />
      ) : (
        <TranslationContextProvider>
          <BrowserRouter>
            <div className="app">
              <Navbar />
              <main id="main">
                <Routes>
                  <Route path="/*" element={<HomePage />} />
                  <Route path="/work-experience" element={<MyProjects />} />
                  <Route
                    path="/personal-projects"
                    element={<PersonalProjects />}
                  />
                  <Route path="/my-skills" element={<MySkills />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TranslationContextProvider>
      )}
    </>
  );
};

export default App;
