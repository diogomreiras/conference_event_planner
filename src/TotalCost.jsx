import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <h1>Total cost for the event</h1>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
            {totalCosts}
          </h2>
          <div className="render_items">
            <ItemsDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
