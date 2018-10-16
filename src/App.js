import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './services/text.service';

class App extends Component {
  state = {
    text: '',
    isBold: false,
    isItalic: false,
    isUnderscored: false
  }

  componentDidMount() {
    App.getText()
      .then((text) => {
        this.setState({ text })
      });
  }

    static getText() {
        return getMockText();
    }

    onBoldBtnClick = () => {
      const { isBold } = this.state;
      this.setState({ isBold: !isBold })
    }

    onItalicBtnClick = () => {
      const { isItalic } = this.state;
      this.setState({ isItalic: !isItalic })
    }

    onUnderscoreBtnClick = () => {
      const { isUnderscored } = this.state;
      this.setState({ isUnderscored: !isUnderscored })
    }

    render() {
      const {
        text,
        isBold,
        isItalic,
        isUnderscored
      } = this.state;

        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel
                      isBold={ isBold }
                      isItalic={ isItalic }
                      isUnderscored={ isUnderscored }
                      onBoldBtnClick={ this.onBoldBtnClick }
                      onItalicBtnClick={ this.onItalicBtnClick }
                      onUnderscoreBtnClick={ this.onUnderscoreBtnClick }
                    />
                    <FileZone
                      text={ this.state.text }
                      isBold={ isBold }
                      isItalic={ isItalic }
                      isUnderscored={ isUnderscored }
                    />
                </main>
            </div>
        );
    }
}

export default App;
