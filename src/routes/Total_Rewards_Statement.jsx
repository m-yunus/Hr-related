

const Total_Rewards_Statement = () => {
  return (<>
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
      </>
  )
}

export default Total_Rewards_Statement