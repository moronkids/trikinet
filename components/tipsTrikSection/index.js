import RectangleNews from 'components/tipsTrikSection/rectangleSection';
import SquareNews from 'components/tipsTrikSection/squareSection';
const TipsTrik = () => {
  return (
    <div className="TipsTrik">
      <div className="container">
        <div className="title">TIPS & TRIK</div>
        <div className="row d-flex col-12 p-3">
          <RectangleNews/>
          <SquareNews/>
          <SquareNews/>
          <RectangleNews/>
          <SquareNews/>
          <SquareNews/>
          <SquareNews/>
        </div>
      </div>
    </div>
  );
};
export default TipsTrik;
