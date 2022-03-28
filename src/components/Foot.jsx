import React from 'react'

const Foot = () => {
    return (
        <div>
            <h4>Podes seguirnos en nuestras redes sociales</h4>
            <ul style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", listStyle: "none", paddingLeft: 800 }}>
                <li> <a href="https://es-la.facebook.com/"><i class="fab fa-facebook" style={{ fontSize: 40 }}></i></a> </li>
                <li> <a href="https://www.instagram.com/"><i class="fab fa-instagram-square" style={{ fontSize: 40 }}></i></a> </li>
                <li> <a href="https://twitter.com/"> <i class="fab fa-twitter" style={{ fontSize: 40 }}></i></a></li>
            </ul>
        </div>
    )
}

export default Foot