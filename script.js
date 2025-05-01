// const form = document.getElementById('orderForm');
//   const responseMsg = document.getElementById('responseMsg');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const data = {
//       name: document.getElementById('name').value,
//       phone: document.getElementById('phone').value,
//       address: document.getElementById('address').value,
//       message: document.getElementById('message').value
//     };

//     fetch('https://script.google.com/macros/s/AKfycbxUzuwPc0ei86yobu9L_XpGOOl8aoSVWzeFhWrzFHIAWGFPrpc6bmZVOYbHQ64gqMLr/exec', {
//       method: 'POST',
//       mode: 'cors', // Use 'cors' if the script is set to allow it // important for cross-origin access
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//     .then(() => {
//       responseMsg.textContent = "Order submitted successfully! Generating order code...";
//       // Optional: Get actual response if CORS is enabled in deployment
//       setTimeout(() => {
//         responseMsg.textContent = "Thank you! Your order has been placed.";
//         form.reset();
//       }, 2000);
//     })
//     .catch(err => {
//       console.error(err);
//       responseMsg.textContent = "Error sending order. Please try again.";
//     });
//   });



// =========================


const form = document.getElementById('orderForm');
const responseDiv = document.getElementById('responseMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    message: document.getElementById('message').value
  };

  fetch("https://script.google.com/macros/s/AKfycbxUzuwPc0ei86yobu9L_XpGOOl8aoSVWzeFhWrzFHIAWGFPrpc6bmZVOYbHQ64gqMLr/exec", {
    method: "POST",
     mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    if (response.success) {
      responseDiv.innerHTML = `✅ Order placed! Your code is <strong>${response.orderCode}</strong>`;
      form.reset();
    } else {
      responseDiv.textContent = "❌ Error: " + response.error;
    }
  })
  .catch(err => {
    console.error(err);
    responseDiv.textContent = "❌ Failed to submit. Please try again.";
  });
});









