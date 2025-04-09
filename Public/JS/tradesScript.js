// public/js/tradesScript.js

document.addEventListener("DOMContentLoaded", () => {
    const tradeForm = document.getElementById("tradeForm");
    const tradeList = document.getElementById("tradeList");
  
    // Load stored trades
    function loadTrades() {
      tradeList.innerHTML = "<h3>Available Trades:</h3>"; // Reset available trades section
      const trades = JSON.parse(localStorage.getItem("dreamSyncTrades")) || [];
  
      trades.forEach((trade, index) => {
        const tradeItem = document.createElement("div");
        tradeItem.className = "trade-item";
        tradeItem.innerHTML = `
          <h4>${trade.offerTitle} (Type: ${trade.tradeType})</h4>
          <p><strong>Looking for:</strong> ${trade.lookingFor}</p>
          <p><strong>Trade Type:</strong> ${trade.tradeType}</p>
        `;
        tradeList.appendChild(tradeItem);
      });
    }
  
    // Handle form submission
    tradeForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const offerTitle = document.getElementById("offerTitle").value.trim();
      const tradeType = document.getElementById("tradeType").value;
      const lookingFor = document.getElementById("lookingFor").value.trim();
  
      const newTrade = { offerTitle, tradeType, lookingFor };
      const trades = JSON.parse(localStorage.getItem("dreamSyncTrades")) || [];
      trades.push(newTrade);
      localStorage.setItem("dreamSyncTrades", JSON.stringify(trades));
  
      // Reset the form and reload trades
      tradeForm.reset();
      loadTrades();
    });
  
    loadTrades();
  });
  