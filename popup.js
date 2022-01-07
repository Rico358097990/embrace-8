let changeColor = document.getElementById("xx");
console.log(changeColor)
alert(changeColor)

let arr =  document.getElementsByClassName("🕓");
console.log("1111")

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
      console.log("ssss");
      let arr =  document.getElementsByClassName("🕓");
      alert(arr.length);

}