import  { useState } from 'react';
import * as XLSX from 'xlsx';

const History_Data = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setUploadedFile(file);

      // Parse and display data from the uploaded Excel file
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setTableData(jsonData);
      };
      reader.readAsBinaryString(file);
    } else {
      // Handle invalid file type
      alert('Please upload a valid Excel file.');
    }
  };

  return (
    <div className="wrapper-right">
      <form>
        <div className="dash-right-top">
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span> <span>/ History Data</span>
            </h3>
          </div>
          
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>History data</h4>
            <div className="underline-grey"></div>
          </div>
          <a href="/path/to/your/template.xlsx" download>
            <button className="download-button">Download Template</button>
          </a>
          <label className="upload-label">
            <input type="file" accept=".xlsx" onChange={handleUpload} />
            Upload Now
          </label>
          {uploadedFile && tableData.length > 0 && (
            <div className="uploaded-table-container">
              <table>
                <thead>
                  <tr>
                    {Object.keys(tableData[0]).map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.values(row).map((cellValue, cellIndex) => (
                        <td key={cellIndex}>{cellValue}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default History_Data;
