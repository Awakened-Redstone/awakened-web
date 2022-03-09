import * as React from "react";
import Button from "../components/navbar/button.jsx";

export default function Error404() {
  return (
    <>
      <span className="navbar">
        <Button text="Home" link="/" />
        <Button text="Mods" link="/mods" padRight="28px" icon="https://cdn.glitch.com/d1ecc540-3be9-472b-8c8e-59054ee1cda4%2Fg6615.png?v=1615824394201"/>
        <Button text="Github" link="https://github.com/Awakened-Redstone/" padRight="32px" icon="https://cdn.glitch.com/b4fe08b2-a216-4ca6-a836-38b072b573c1%2Fgithub-white.svg?v=1622673817493" newTab="true"/>
      </span>
      <splashbackground></splashbackground>
      <splashbackgroundcolor></splashbackgroundcolor>
      <splashscreen>
        <splashimage redstone=""></splashimage>
        <name>404</name>
      </splashscreen>
      <content>
        <section class="aboutme">
          <div class="content"></div>
          <section class="hasfancything">
            <div class="fancything"></div>
          </section>
        </section>
      </content>
    </>
  );
}
