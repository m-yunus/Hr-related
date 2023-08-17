import  { useState } from 'react';
import "./usercreation.css"
const User_Creation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmitdata = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wrapper-right">
     
        <div className="dash-right-top">
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ User creation</span>
            </h3>
          </div>
          <button className="update-button" onClick={openModal}>Create User</button>
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>user creation</h4>
            <div className="underline-grey"></div>
          </div>
        </div>
     

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="custom-modal">
          <div className="usermodal-content">
          
          <div className="heading-container">
            <h4>user creation</h4>
            <div className="underline-grey"></div>
          
        </div>
        <div className="text-fields-row">
              <input type="text" name='user_name' placeholder="FullName" />
              <input type="text" name='user_email' placeholder="Email" />
             <select name="" id="">
              <option value="Role">Role</option>
              <option value="Role">Rolefddh</option>
              <option value="Role">Role</option>
             </select>
              <input type="text" name=' user_password' placeholder="password" />
            </div>
            <div className="radio-row">
              <h5>Do You want to limit the accees for the user</h5>
              <label>
                <input type="radio" name="" value="Yes" />
               yes
              </label>
              <label>
                <input type="radio" name="gender" value="No" />
                No
              </label>
            </div>
            <div className="access-row">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                {/* Add more options as needed */}
              </select>
              <input type="text" placeholder="Additional Field" />
              <button>Restrict</button>
              </div>
              <div className="heading-container">
            <h4>Access granted</h4>
            <div className="underline-grey"></div>
          
        </div>
            <button onClick={handleSubmitdata}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default User_Creation;
