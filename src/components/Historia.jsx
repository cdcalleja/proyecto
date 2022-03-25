import React from 'react'

const Historia = () => {

    const style = {
        // backgroundColor: "rgb(46, 44, 44)",
        color: "rgb(187, 195, 196)",
        fontSize: 40,
        fontFamily: "Franklin Gothic Medium",
    }


    const style2 = {
        marginTop: 30,
        color: "floralwhite",
        textAlign: "justify",
        // backgroundColor: "rgb(46, 44, 44)"
    }

    return (
        <>
        <div>
        <h1 id='historia' style={style}>Historia</h1>
            <p style={style2}>En la noche de la firma de un tratado de paz entre los reinos de Lucis y Niflheim, en la que la
                familia real
                de Tenebrae también asiste. El emperador de Niflheim, Idola Aldercapt, utiliza el tratado como una excusa
                para derribar la barrera mágica de Insomnia(Capital de Lucis) por lo que su ejército es capaz de tomar el
                control de cristal de la ciudad.</p>
            <p style={style2}>La Fuerzas Niflheim arrasan la ciudad de la corona, al parecer matando al rey Regis Caelum. El
                Hijo del rey
                Regis, Noctis Lucis Caelum, es declarado muerto, junto con la adorada oráculo y princesa de Tenebrae,
                Lunafreya Nox Fleuret. Tras el ataque de Niflheim. Lunafreya, quien sobrevive al ataque, vaga por las calles
                de Insomnia y, finalmente hace su camino hacia Altissa.</p>
            <p style={style2}>El informe de que Noctis ha muerto es toda una farsa. Cuando el príncipe se da cuenta que Idola
                Aldercapt y
                el resto de Niflheim lo quieren muerto, Noctis y su vasallos, su consejero real, Ignis; su guardaespaldas,
                Gladiolus; y su amigo de la infancia, Prompto, huyen del país y comienzan un viaje hacia Altissa para
                encontrarse con Lunafreya.</p>
        </div>

        </>
    )
}

export default Historia