import React from "react";
import "../styles/modCard.css";

function side(param) {
  switch(param) {
    case 'server':
      return 'Server mod';
    case 'client':
      return 'Client mod';
    case 'both':
      return '';
  }
}

function renderSide(param) {
  if (param && param != "both") {
    return (
      <span className="side">
        <svg data-v-7ac57ea7="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class=""><circle data-v-7ac57ea7="" cx="12" cy="12" r="10"></circle><line data-v-7ac57ea7="" x1="12" y1="16" x2="12" y2="12"></line><line data-v-7ac57ea7="" x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        {side(param)}
      </span>
    )
  }
}


export default function Mod(props) {
  return (
    <>
      <a className="frame" href={props.link} target="_blank" rel="noopener noreferrer">
        <span className="modrinth-logo">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 211.2 150" className="modrinth-logo-svg">
            <g>
              <path d="M159.07,89.29A70.94,70.94,0,1,0,20,63.52H32A58.78,58.78,0,0,1,145.23,49.93l-11.66,3.12a46.54,46.54,0,0,0-29-26.52l-2.15,12.13a34.31,34.31,0,0,1,2.77,63.26l3.19,11.9a46.52,46.52,0,0,0,28.33-49l11.62-3.1A57.94,57.94,0,0,1,147.27,85Z" transform="translate(-19.79)" fill="var(--color-brand)" fill-rule="evenodd"></path>
              <path
                d="M108.92,139.3A70.93,70.93,0,0,1,19.79,76h12a59.48,59.48,0,0,0,1.78,9.91,58.73,58.73,0,0,0,3.63,9.91l10.68-6.41a46.58,46.58,0,0,1,44.72-65L90.43,36.54A34.38,34.38,0,0,0,57.36,79.75C57.67,80.88,58,82,58.43,83l13.66-8.19L68,63.93l12.9-13.25,16.31-3.51L101.9,53l-7.52,7.61-6.55,2.06-4.69,4.82,2.3,6.38s4.64,4.94,4.65,4.94l6.57-1.74,4.67-5.13,10.2-3.24,3,6.84L104.05,88.43,86.41,94l-7.92-8.81L64.7,93.48a34.44,34.44,0,0,0,28.72,11.59L96.61,117A46.6,46.6,0,0,1,54.13,99.83l-10.64,6.38a58.81,58.81,0,0,0,99.6-9.77l11.8,4.29A70.77,70.77,0,0,1,108.92,139.3Z"
                transform="translate(-19.79)"
                fill="var(--color-brand)"></path>
            </g>
          </svg>
        </span>
        <span className="items">
          <span className="row">
            <span className="title">{props.name}</span>
            {renderSide(props.side)}
          </span>
          <span className="description">{props.description}</span>
          <span className="versions">
            <span className="version">{props.version}</span>
            <span className="version">{props.mc_version}</span>
          </span>
        </span>
      </a>
    </>
  );
}
