import("node-fetch").then((module) => {
  const fetch = module.default;
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  console.log(fetchPromise);

  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
});
