import React from "react";
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue sur le <span>shop</span> !
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vehicula nulla in finibus viverra. Donec fringilla ullamcorper eros nec
        laoreet. Suspendisse varius libero tortor, in consectetur tellus
        sollicitudin a. Vestibulum in elit ut enim efficitur vestibulum vitae ac
        turpis. Etiam erat tortor, commodo sit amet risus in, scelerisque
        molestie tellus. Aliquam vehicula nisi a venenatis rhoncus. Aliquam
        euismod, ipsum a finibus consequat, ligula tortor fermentum nisl, eu
        venenatis erat ex non metus. Morbi accumsan dolor lacus, quis feugiat
        urna lacinia vitae. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris varius sem a tellus dapibus vulputate. Nunc vulputate
        tortor augue, sit amet fringilla elit ultricies et.
      </p>
      <img src={imgHomeShop} alt="Home shop"></img>
    </div>
  );
}
