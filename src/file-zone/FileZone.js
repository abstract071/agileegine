import React, { Component } from 'react'
import './FileZone.css'
import fetchSynonyms from '../services/datamuse.service'


class FileZone extends Component {
  text = React.createRef()
  selectionElement = React.createRef()
  state = {
    isSelected: false
  }

  componentDidUpdate() {
    this.state.isSelected && this.styleSelection()
  }

  styleSelection = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    if (!this.state.isSelected) {
      this.selectionElement = document.createElement( 'span' );
      this.selectionElement.className = this.combineSelectionClass();
      range.surroundContents( this.selectionElement );
      fetchSynonyms(selection.toString())
        .then(res => console.log(res))
        .catch(e => console.log(e))
    } else {
      this.selectionElement.className = this.combineSelectionClass();
    }
  }

  onDoubleClick = (...args) => {
    if (!this.state.isSelected) {
      this.setState({ isSelected: true })
    }
    this.styleSelection();
  }

  combineSelectionClass = () => {
    const {
      isBold,
      isItalic,
      isUnderscored
    } = this.props;

    const resultClass = [
      { class: 'bold', isApply: isBold },
      { class: 'italic', isApply: isItalic },
      { class: 'underscored', isApply: isUnderscored }
    ].reduce((prev, curr) => {
      return curr.isApply ? `${prev} ${curr.class}` : prev;
    }, '').trim()

    return resultClass;
  }

  onContainerClick = () => {
    if ( this.state.isSelected ) {
      this.selectionElement.outerHTML = this.selectionElement.innerHTML;
      this.setState( { isSelected: false } )
    }
  }

  render() {
        return (
            <div id="file-zone">
                <div id="file"
                  onClick={ this.onContainerClick }
                >
                  <span
                    ref={ this.text }
                    className="text"
                    onSelect={ this.onSelect }
                    onMouseUp={ this.onMouseUp }
                    onDoubleClick={ this.onDoubleClick }
                  >
                    { this.props.text }
                  </span>
                </div>
            </div>
        );
    }
}

export default FileZone;
