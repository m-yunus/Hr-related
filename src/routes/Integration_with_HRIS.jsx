import { useState } from "react";

const Integration_with_HRIS = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
     <div className="wrapper-right">
      <form action="">
      <div className="dash-right-top">
        <div className="pathname">
          <h3>{location.pathname}</h3>
        </div>
        <input type="submit" className="update-button" value="Update" />
      </div>
      <div className="content-container">
        <div className="heading-container">
          <h4>Integration With HRIS</h4>
          <div className="underline-grey"></div>
        </div>
        <table className="salary-table">
          <tbody>
            <tr>
              <td>
                <h5>Do You Want Salary Components?</h5>
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
                <h5>Get Data From</h5>
              </td>
              <td>
                <input type="text" placeholder="location" />
              </td>
            </tr>
            <tr>
              <td>
                <h5>Store letters</h5>
              </td>
              <td>
                <input type="text" placeholder="location" />
              </td>
            </tr>
            <tr>
              <td>
                <h5>store Payroll extract </h5>
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
                <h5>User Photos </h5>
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
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </form>
      </div>
    </>
  );
};

export default Integration_with_HRIS;
