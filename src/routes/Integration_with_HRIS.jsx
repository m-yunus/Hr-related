import { useState } from "react";


const Integration_with_HRIS = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
  <>
  
  <div className="heading-container">
        <h4>Integration With HRIS</h4>
        <div className="underline-grey"></div>
      </div>
      <table className="salary-table">
      <tbody>
        <tr>
          <td>
            <label>Do You Want Salary Components?</label>
          </td>
          <td>
            <div className="radio-button-group">
              <input
                type="radio"
                name="salaryComponents"
                value="yes"
                defaultChecked
              />{" "}
              Yes
              <input type="radio" name="salaryComponents" value="no" /> No
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label>Get Data From</label>
          </td>
          <td>
            <input type="text" placeholder="location" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Store letters</label>
          </td>
          <td>
            <input type="text" placeholder="location" />
          </td>
        </tr>
        <tr>
          <td>
            <label>store Payroll extract </label>
          </td>
          <td>
            <input type="text" placeholder="location" />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="heading-container">
        <h4>User Photos</h4>
        <div className="underline-grey"></div>
      </div>
      <table className="salary-table">
      <tbody>
        <tr>
          <td>
            <label>User Photos </label>
          </td>
          <td>
          <div className="file-input-container">
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleFileChange}
        />
        <label htmlFor="file-input" className="file-input-label">
          Choose File
        </label>
      </div>

      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
        </div>)}
          </td>
        </tr>
        </tbody>
        </table>
     
  </>
  )
}

export default Integration_with_HRIS