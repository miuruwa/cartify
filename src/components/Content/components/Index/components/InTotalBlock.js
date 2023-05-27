import React from "react";
import XBlock from "../../../../XBlock";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

export class InTotalBlock extends React.Component {

  getTotal = () => {
    return <div className="total-class">
      <div>
        Итого
      </div>
      <div>
        <CurrencyRubleIcon />
        {parseFloat(this.props.toolkit.getTotalCost()).toFixed(2)}
      </div>
    </div>
  }
  getChange = () => {
    return <div className="total-class">
      <div>
        Сдача
      </div>
      <div>
        <CurrencyRubleIcon />
        {parseFloat(this.props.toolkit.getChange()).toFixed(2)}
      </div>
    </div>
  }

  render () {
    if (this.props.toolkit.productList.length === 0) {
      return null
    }
    else {
      return <div className="block-wrapper">
        <XBlock>
          <this.getTotal/>
          {this.props.toolkit.inTotalMode ? <this.getChange/> : null}
        </XBlock>
      </div>
    }
  }
}
