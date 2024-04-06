const url = "https://example.com/api"; // Replace with your API endpoint
const payload = {
  key1: "value1",
  key2: "value2",
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
