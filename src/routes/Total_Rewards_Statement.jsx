

const Total_Rewards_Statement = () => {
  return (<>
   <div className="wrapper-right">
      <form action="">
     
        <div className="dash-right-top">
      
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ Total Rewards Statement</span>
            </h3>
          </div>
          <input type="submit" className="update-button" value="Update"/>
        
        </div>
        <div className="content-container">
    <div className="heading-container">
        <h4>Total Cash</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Culture-inputbox-list">
        <li>
          <input type="text" placeholder="new column" />
        </li>
        <li>
         <button style={{background:"#2074d4",padding:"10px",border:"none"}}>Add</button>
        </li>
       
      </ul>
      </div>
      </form>
      </div>
    
      </>
  )
}

export default Total_Rewards_Statement