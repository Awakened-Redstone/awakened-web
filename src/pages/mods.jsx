import * as React from "react";
import Button from "../components/navbar/button.jsx";
import Mod from "../components/mod.jsx";
import "../styles/mods.css";
//<Mod name="AutoWhitelist" side="server" version="beta-4" mc_version="1.18.1" description="A way to automate the whitelist of a minecraft server based on discord roles utility" link="https://modrinth.com/mod/autowhitelist"/>

var getJSON = function(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status === 200) {
    return JSON.parse(xhr.response);
  } else {
    return null;
  }
};

function getMods() {
  var json = getJSON("https://api.modrinth.com/v2/user/awakened-redstone/projects");
  if (!json) return [];
  var projects = [];
  json.forEach((project) => {
    if (project.status == "approved" && project.project_type == "mod") {
      var side;
      if (project.client_side == "unsupported" && project.server_side == "required") side = "server";
      if (project.client_side == "required" && project.server_side == "unsupported") side = "client";
      if (project.client_side != "unsupported" && project.server_side != "unsupported") side = "both";
      var description = project.description;
      var title = project.title;
      var link = `https://modrinth.com/mod/${project.slug || project.id}`
      var versionList = getJSON(`https://api.modrinth.com/v2/project/${project.id}/version`);
      var versions = [];
      versionList.forEach((version) => {
        if (version.version_type == "release" && !versions[0]) {
          versions[0] = version.version_number;
          versions[1] = version.game_versions[version.game_versions.length - 1];
          return;
        }
      });
      projects.push(<Mod name={title} 
                      side={side} 
                      version={versions[0]} 
                      mc_version={versions[1]}
                      description={description} 
                      link={link}/>)
    }
  });
  return projects;
}


export default function Mods() {
  return (
    <>
      <span className="navbar">
        <Button text="Home" link="/"/>
        <Button text="Mods" link="/mods" padRight="28px" icon="https://cdn.glitch.com/d1ecc540-3be9-472b-8c8e-59054ee1cda4%2Fg6615.png?v=1615824394201"/>
        <Button text="Github" link="https://github.com/Awakened-Redstone/" padRight="32px" icon="https://cdn.glitch.com/b4fe08b2-a216-4ca6-a836-38b072b573c1%2Fgithub-white.svg?v=1622673817493" newTab="true"/>
      </span>
      <splashbackground></splashbackground>
      <splashbackgroundcolor></splashbackgroundcolor>
      <splashscreen>
        <splashimage style={{backgroundImage: 'url("https://cdn.glitch.com/d1ecc540-3be9-472b-8c8e-59054ee1cda4%2Fg6615.png?v=1615824394201")'}}></splashimage>
        <name>Mods</name>
      </splashscreen>
      <content className="dark-mode">
        <modsections className="modcontainers">
          {getMods()}
        </modsections>
      </content>
    </>
  );
}
