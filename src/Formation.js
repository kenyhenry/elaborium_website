import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Formation.css";
// import { Document, Page } from 'react-pdf';

const Formation = () => {
  const navigate = useNavigate();
  const main = () => {
    navigate("/Website", { replace: true });
  };
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <div style = {{height:'100%', backgroundColor:'rgb(33, 73, 68)'}}>
      <button className="button-style" onClick={main}> Return</button>
      <a
        href="/FormationInformatique.pdf" // Replace with the correct relative path to your PDF file
        download="plaquette.pdf"
      >
       Click to Download PDF
      </a>
    </div>
  );
};

export default Formation;
