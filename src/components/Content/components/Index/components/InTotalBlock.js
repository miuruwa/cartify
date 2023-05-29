import React from "react";

import XBlock, { XHorizontal, XVertical } from "../../../../XBlock";
import { XField } from "../../../../XForms";
import {nanoid} from "nanoid";

export class InTotalBlock extends React.Component {
  getTotal = () => {
    return <XHorizontal key={nanoid()} xstyle={{justifyContent:"space-between"}} sx={[{fontSize:this.props.toolkit.inTotalMode ? "18px":"24px", lineHeight:"24px"}, {fontSize:"24px", lineHeight:"24px"}]}>
      <div className="total-class">
        Итого:
      </div>
      <div className="total-class">
        {parseFloat(this.props.toolkit.getTotalCost()).toFixed(2)} {this.props.toolkit.currency}
      </div>
    </XHorizontal>
  }

  getChange = () => {
    let change = parseFloat(this.props.toolkit.getChange()).toFixed(2);
    let status = change > 0 ? "Ваша сдача:" : "Вам не хватает:"
    let color = change > 0 ? "white" : "red"

    return <XHorizontal key={nanoid()} xstyle={{justifyContent:"space-between", color: color}} sx={[{fontSize:"24px", lineHeight:"32px"}, {fontSize:"24px", lineHeight:"32px"}]}>
      <div className="total-class">
        {status}
      </div>
      <div className="total-class">
        {Math.abs(change)} {this.props.toolkit.currency}
      </div>
    </XHorizontal>
  }

  render () {
    if (this.props.toolkit.inTotalMode) {
      return <XBlock>
        <XVertical xstyle={{padding: "8px 0"}}>
          {this.getTotal()}
          <XHorizontal key={nanoid()} xstyle={{justifyContent:"space-between"}}  sx={[{fontSize:"18px", lineHeight:"40px"}]}>
            <div className="total-class">
              Ваши наличные:
            </div>
            <XField fieldValue = {this.props.toolkit.currency} cleanable={true} field={this.props.toolkit.getAvailableMoney()} setField={this.props.toolkit.setAvailableMoney}>
              Наличные
            </XField>
          </XHorizontal>
          {this.getChange()}
        </XVertical>
      </XBlock>
    }
    return <XBlock>
      <XVertical xstyle={{padding: "8px 0"}}>
        {this.getTotal()}
      </XVertical>
    </XBlock>
  }
}
