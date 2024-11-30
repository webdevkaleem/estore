export default async function Home() {
  fetch(`http://localhost:9000/store/regions`, {
    credentials: "include",
    headers: {
      "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
    },
  })
  .then((res) => res.json())
  .then(({ regions }) => {
    // use regions...
    console.log(regions)
  })
  return (
    <h1>Hello World</h1>
  );
}
