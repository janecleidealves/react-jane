import react from 'react';

import './Curriculo.css';

function Curriculo(props) {
    const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculo;

    if (!resumo || !experienciaProfissional || !experienciaAcademica) {
        return <p>Carregando...</p>
    }


    return (
        <>

            <section>
                <h2>Resumo</h2>
                <p>{resumo}</p>
            </section>

            <section>

                <h2>Acadêmico</h2>
                <ul>

                    {experienceAcademica.map((item, index) => (

                        <li key={index}>
                            <b>({item.anoInil}-{item.anoFim})</b> {item.titulo};
                        </li>
                    ))}

                </ul>
            </section>


            <section>
                <h2>Profissional</h2>
                <ul>
                    {experienceProfissional.map((item, index) => (
                        <li key={index}>
                            <b>({item.anoInicio} - {item.anoFim})</b> {item.titulo};
                        </li>
                    ))}
                </ul>

            </section>

        </>

    )
}
export default Curriculo;




