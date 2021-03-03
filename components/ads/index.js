const Ads = (props) => {
  let Width;
  let Height;
  if (props.type === "rectangle") {
    Width = "728px";
    Height = "90px";
  }
  if (props.type === "square") {
    Width = "300px";
    Height = "250px";
  }
  return (
    <>
      <div
        className={"typeAds "+ props.class}
        style={{ width: Width, height: Height, backgroundColor: "gray" }}
      />
    </>
  );
};

export default Ads;
