import React from 'react'

const Flotante = () => {

    const flotante = {

        display: "scroll",
        position: "fixed",
        bottom: 320,
        right: 20,
        height: 40,
        width: 40,
        fontSize: 50
    }


return (
    <div>
        <a className='flotante2' href="#"><i className="fas fa-arrow-circle-up" style={flotante}></i></a>

    </div>
)
}

export default Flotante