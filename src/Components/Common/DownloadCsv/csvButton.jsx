import React from "react";
import { DownloadCSVExcelAPI } from "../APIs/api";

const DownloadCsvButton = () => {
  const downloadCsv = async () => {
    try {
      const response = await DownloadCSVExcelAPI();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "organic_farmer_table_payment.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="">
      <button
        onClick={downloadCsv}
        type="button"
        className="btn btn-primary d-block csv-btn"
      >
        Download Excel
      </button>
    </div>
  );
};

export default DownloadCsvButton;
