function ChangeFontFamilyOnSelect(selectBtnRef) {
    let selectedFontFamily = selectBtnRef.value;
    if (currentActiveCell) {
      currentActiveCell.style.fontFamily = selectedFontFamily;
      activeCellOptionsState.fontFamily = selectedFontFamily;
    }
  }
  
  function ChangeFontSizeOnSelect(selectBtnRef) {
    let selectedFontSize = selectBtnRef.value + "px";
    if (currentActiveCell) {
      currentActiveCell.style.fontSize = selectedFontSize;
      console.log(currentActiveCell.style);
    }
  }
  
  function handleBold() {
    /**
     * 1. toggle `active-option` class for the button.
     * 2. get the selected cell.
     */
    boldButton.classList.toggle("optionActive");
    if (currentActiveCell) {
      if (activeCellOptionsState.isBoldActive === false) {
        currentActiveCell.style.fontWeight = "600";
      } else {
        currentActiveCell.style.fontWeight = "400";
      }
      activeCellOptionsState.isBoldActive = !activeCellOptionsState.isBoldActive;
    }
  }
  
  function handleItalic() {
    italicButton.classList.toggle("optionActive");
    if (currentActiveCell) {
      if (activeCellOptionsState.isItalicActive) {
        currentActiveCell.style.fontStyle = "normal";
      } else {
        currentActiveCell.style.fontStyle = "italic";
      }
      activeCellOptionsState.isItalicActive =
        !activeCellOptionsState.isItalicActive;
    }
  }
  
  function handleUnderline() {
    underlineButton.classList.toggle("optionActive");
    if (currentActiveCell) {
      if (activeCellOptionsState.isUnderlineActive) {
        // if the text is underlined => none
        currentActiveCell.style.textDecoration = "none";
      } else {
        currentActiveCell.style.textDecoration = "underline";
      }
      activeCellOptionsState.isUnderlineActive =
        !activeCellOptionsState.isUnderlineActive;
    }
  }
  function handleTextAlign(btnRef) {
    let selectedAlignment = btnRef.getAttribute("data-value");
    highlightTextAlignButtons(selectedAlignment);
  
    if (currentActiveCell) {
      currentActiveCell.style.textAlign = selectedAlignment;
      activeCellOptionsState.textAlign = selectedAlignment;
    }
  }
  function handleTextColor(txtColorInput) {
    let selectedTxtColor = txtColorInput.value;
    if (currentActiveCell) {
      currentActiveCell.style.color = selectedTxtColor;
      activeCellOptionsState.textColor = selectedTxtColor;
    }
  }
  function HandleBackgroundColor(BgColorInput) {
    let selectedBGColor = BgColorInput.value;
    if (currentActiveCell) {
      currentActiveCell.style.backgroundColor = selectedBGColor;
      activeCellOptionsState.backgroundColor = selectedBGColor;
    }
  }
  
  function handleCut() {
    if (currentActiveCell) {
      const textCut = currentActiveCell.innerText;
      navigator.clipboard
        .writeText(textCut)
        .then(function () {
          currentActiveCell.innerText = "";
          console.log("text cut and  copied to clipboard");
        })
        .catch(function (err) {
          console.error("unable to cut text: ", err);
        });
    }
  }
  
  function handleCopy() {
    if (currentActiveCell) {
      const textCopied = currentActiveCell.innerText;
      navigator.clipboard
        .writeText(textCopied)
        .then(function () {
          console.log("Text copied to clipboard");
        })
        .catch(function (err) {
          console.error("Unable to copy text: ", err);
        });
    }
  }
  
  function handlePaste() {
    if (currentActiveCell) {
      navigator.clipboard
        .readText()
        .then(function (text) {
          currentActiveCell.innerText = text;
          console.log("Text pasted from clipboard");
        })
        .catch(function (err) {
          console.error("Unable to paste text: ", err);
        });
    }
  }