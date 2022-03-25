import React from 'react'

const Trasfondo = () => {

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
    <div> 
        <h1 id='trasfondo' style={style}>Trasfondo y ambientación</h1>
        <p style={style2}>La historia, al igual que Final Fantasy XIII y Final Fantasy Type-0, está enfocada en los
            cristales y en un mundo destinado al apocalipsis.</p>
        <p style={style2}> Noctis Lucis Caelum, el último de una línea antigua de reyes y el heredero al trono, proviene
            del reino de Lucis, un país que ostenta el último cristal en el mundo, lo cual es beneficioso para la
            política, situación económica, y el aspecto bélico del país. Debido a la industrialización cada vez más
            evidente en contraste con las naciones vecinas, Lucis se ha aislado del resto del mundo..</p>
        <p style={style2}> En un momento, todos los países poseían un cristal, pero muchos de ellos lo perdieron debido a
            las guerras a causa de ellos. De este modo, Lucis, unió sus recursos de armamento bélico, obteniendo armas
            de fuego junto con espadas y magia, convirtiéndose en el más moderno y avanzado país gracias a su poder
            militar y, en consecuencia, dejaron atrás sus aspectos culturales y sociales, afectando seriamente su nivel
            y calidad de vida de la población. Una guerra fría ha pasado entre Lucis y el resto del mundo sobre el uso
            debido a la posesión del el último cristal, pero recientemente, un tratado de paz fue negociado, poniendo
            fin a la disputa.</p>
        <p style={style2}> Existe un mito en el reino de Tenebrae acerca de la diosa de la muerte, quien acobija a las
            almas de los difuntos, y les abre la puerta hacia el más allá. Cuando se abre la puerta a las almas
            liberadas es posible percibir un rayo de luz que asciende al cielo. Pocas personas son capaces de ver la
            luz, y los que pueden se les otorga el poder del reino de los muertos. Noctis y Lunafreya Nox Fleuret
            -Oráculo y Princesa de Tenebrae- poseen este poder.</p>
        <p style={style2}>En el mundo existe cierto fenómeno llamado "La Plaga de la Estrella", que causa que las noches
            sean mas
            extensas a medida que el tiempo pasa, hasta un punto en que el mundo queda sumido en la oscuridad, siendo el
            Oráculo Lunafreya la responsable de detener dicho fenómeno utilizando sus poderes.</p>
        <p style={style2}>Los Archaeans son criaturas legendarias, declaradas protectoras de mundo y del ecosistema, siendo
            estas la
            manifestación del poder de las estrellas hacia el planeta. Ellos se manifiestan en el mundo gracias a los
            Fragmentos Astrales aunque estos se muestran indiferentes ante las acciones del mundo de los vivos.</p>
    </div>
  )
}

export default Trasfondo