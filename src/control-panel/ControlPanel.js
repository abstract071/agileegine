import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
      const {
        isBold,
        isItalic,
        isUnderscored,
        onBoldBtnClick,
        onItalicBtnClick,
        onUnderscoreBtnClick
      } = this.props;

        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button
                      className={`format-action${isBold ? ' active' : ''}`}
                      type="button"
                      onClick={ onBoldBtnClick }
                    ><b>B</b></button>
                    <button
                      className={`format-action${isItalic ? ' active' : ''}`}
                      type="button"
                      onClick={ onItalicBtnClick }
                    ><i>I</i></button>
                    <button
                      className={`format-action${isUnderscored ? ' active' : ''}`}
                      type="button"
                      onClick={ onUnderscoreBtnClick }
                    ><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
