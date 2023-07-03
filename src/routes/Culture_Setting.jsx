const Culture_Setting = () => {
  return (
    <>
      <div className="heading-container">
        <h4>Culture Setting</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Culture-inputbox-list">
        <li>
          <input type="text" placeholder="Select Country" />
        </li>
        <li>
          <input type="text" placeholder="Select Number" />
        </li>
        <li>
          <input type="text" placeholder="Select Currency" />
        </li>
        <li>
          <input type="text" placeholder="Select Percentage" />
        </li>
        <li>
          <input type="text" placeholder="Input 5" />
        </li>
        <li>
          <input type="text" placeholder="Input 6" />
        </li>
      </ul>
      <div className="heading-container" style={{ paddingTop: "1rem" }}>
        <h4>Rounding Rule</h4>
        <div className="underline-grey"></div>
      </div>

      <ul className="Culture-inputbox-list">
        <li>
          <input type="text" placeholder="Select Percentage " />
        </li>
        <li>
          <input type="text" placeholder="Select Number" />
        </li>
        <li>
          <input type="text" placeholder="Select Currency" />
        </li>
      </ul>
    </>
  );
};

export default Culture_Setting;
