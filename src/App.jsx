import React from "react";
import { Content, ExportingSpices, Footer, Header } from "./components";

const App = () => {
  return (
    <div className='nunito-body text-[#333434]'>
    {/* <div> */}
      <Header />
      <ExportingSpices />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
