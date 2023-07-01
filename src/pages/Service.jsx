import Card from "../components/Card";

function Service() {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center">Our Services</h2>
      </div>
      <div className="container">
        <div className="row gy-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Service;
