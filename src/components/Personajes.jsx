import React from 'react'
// import { Table } from 'react-bootstrap'
import noctis from "../assets/noctis.jfif";
import gentiana from "../assets/gentiana.jfif";
import gladiolus from "../assets/gladiolus.jfif";
import cort from "../assets/cort.jfif";
import ignis from "../assets/ignis.jfif";
import lunafreya from "../assets/lunafreya.jfif";
import prompto from "../assets/prompto.jfif";

const Personajes = () => {

    const style = {
        // backgroundColor: "rgb(46, 44, 44)",
        color: "rgb(187, 195, 196)",
        fontSize: 40,
        fontFamily: "Franklin Gothic Medium",
    }

    return (
        <div className="container-fluid" id="personajes">
            <h1 style={style}>Personajes</h1>
            <br /><br />
            <table class="table-sm table-bordered table-dark table-hover">
                <thead>
                    <th>Personaje</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>Noctis Lucis Caelum</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Noctis_Lucis_Caelum" target="_blank" rel='noreferrer'>
                                    <img src={noctis} alt="Noctis" data-toggle="tooltip"
                                        title="Apodado Noct por sus amigos, es el protagonista principal de la historia. Noctis es el último de la antiquísima línea de reyes de Lucis." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td>Prompto Argentum</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Prompto_Argentum" target="_blank" rel='noreferrer'>
                                    <img src={prompto} alt="Prompto" data-toggle="tooltip"
                                        title="Un amigo cercano a Noctis, quien lo conoce desde el colegio. Prompto es un fugitivo y de una clase social inferior." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td>Gladiolus Amicitia</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Gladiolus_Amicitia" target="_blank" rel='noreferrer'>
                                    <img src={gladiolus} alt="Gladiolus" data-toggle="tooltip"
                                        title="Gladio es heredero de una familia noble que ha protegido a la realeza de Lucis durante varias generaciones. Él es el responsable de que Noctis pueda defenderse por si mismo." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td>Ignis Stupeo Scientia</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Ignis_Scientia" target="_blank" rel='noreferrer'>
                                    <img src={ignis} alt="Ignis" data-toggle="tooltip"
                                        title="Es amigo de Noctis desde su niñez. Ignis es un prodigioso militar táctico, pero también es responsable de la comida y salud del grupo." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td>Lunafreya Nox Fleuret</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Lunafreya_Nox_Fleuret" target="_blank" rel='noreferrer'>
                                    <img src={lunafreya} alt="Lunafreya" data-toggle="tooltip"
                                        title="Luna es la princesa del reino de Tenebrae. Esta comprometida con Noctis, quien conoce desde su niñez y comparten los mismos poderes del reino de los muertos." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td>Cor Leonis</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Cor_Leonis" target="_blank" rel='noreferrer'>
                                    <img src={cort} alt="Cor" data-toggle="tooltip"
                                        title="Un hombre de renombre en Lucis y cercano al rey Regis Lucis Caelum CXIII. Cor es uno de sus tres guerreros más poderosos." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td>Gentiana</td>
                        <td>
                            <figure>
                                <a href="https://finalfantasy.fandom.com/es/wiki/Gentiana" target="_blank" rel='noreferrer'>
                                    <img src={gentiana} alt="Gentiana" data-toggle="tooltip"
                                        title="Guardaespaldas personal y compañera de Lunafreya." />
                                </a>
                            </figure>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Personajes