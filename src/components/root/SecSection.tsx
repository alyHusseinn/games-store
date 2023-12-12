import { Link } from "react-router-dom";
import Sec2Img from "../../assets/imgs/root-sec-2.jpg";

export default function SecSection() {
  return (
    <div className="sec-2-root">
      <div className="marquee-1">
        <div>
          <span>Your journy starts here.</span>
          <span>your journy starts here</span>
        </div>
      </div>
      <div className="marquee-2">
        <div>
          <span>Your journy starts here.</span>
          <span>your journy starts here</span>
        </div>
      </div>

      <div className="descreption">
        <div className="img-btn">
          <img src={Sec2Img} />
          <Link to="/games">Explore our games..</Link>
        </div>
        <div className="txt">
          <h1>
            explore the <span>Best</span> games store in that world.
          </h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eligendi facere, soluta animi qui in ab placeat maxime repellendus
          iusto, quasi aut officia. Cupiditate repellendus ipsam qui dolores
          eos! Atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas, dicta obcaecati aspernatur eveniet earum voluptatibus
          doloremque eum natus veniam provident numquam, voluptate cumque
          itaque, laudantium facere assumenda unde asperiores? Ad?
        </div>
      </div>
    </div>
  );
}
