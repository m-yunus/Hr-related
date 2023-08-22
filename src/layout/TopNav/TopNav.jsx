import "./TopNav.css";
import check from "./check.png"
function TopNav({
  tabActive,
  activeStatus,
  firstStatus,
  secondStatus,
  thirdStatus,
  firstStatusNumber,
  secondStatusNumber,
  thirdStatusNumber,
}) {
  return (
    <div className="top-nav-container">
      <div className="top-tab">
        <div className={`top-tab-item ${tabActive === "plan" && "active"}`}>
          Plan
        </div>
        <div className={`top-tab-item ${tabActive === "execute" && "active"}`}>
          Execute
        </div>
        <div className={`top-tab-item ${tabActive === "analyses" && "active"}`}>
          Analyses
        </div>
      </div>
      <div className="top-status">
        <div className="top-status-item">
          <div className="top-status-icon">
            {activeStatus === firstStatus ? (
              <img src={check} alt="icon" />
            ) : (
                <div className="top-status-number">

                    <p>{firstStatusNumber}</p>
                </div>
            )}
          </div>
          <p className="top-status-item-title">{firstStatus}</p>
          <span className={`${(activeStatus === secondStatus || activeStatus === thirdStatus) && "active"}`}></span>

        </div>
        <div className="top-status-item">
          <div className="top-status-icon">
            {activeStatus === secondStatus ? (
              <img src={check} alt="icon" />
            ) : (
                <div className="top-status-number">

                    <p>{secondStatusNumber}</p>
                </div>
            )}
          </div>
          <p className="top-status-item-title">{secondStatus}</p>
          <span className={`${activeStatus === thirdStatus&&"active"}`}></span>

        </div>
        <div className="top-status-item">
          <div className="top-status-icon">
            {activeStatus === thirdStatus ? (
              <img src={check} alt="icon" />
            ) : (
                <div className="top-status-number-three">

                    <p>{thirdStatusNumber}</p>
                </div>
            )}
          </div>
          <p className="top-status-item-title">{thirdStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
