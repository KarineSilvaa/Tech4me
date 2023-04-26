import React from "react";

function NaoEncontrado() {
    const logo = "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/03/03/super-mario-bros-filme_capa3-1hbg1how7onqs.jpg";
    return (
        <>
        <Link to="/">
        <img src={logo} alt="logo" style={{weight: "100px",height: "150px"}}/>
        </Link>
        <h1>404</h1>
        </>
    );
}

export default NaoEncontrado;