import '../Curriculo/Curriculo.css'
import date from '../Curriculo/curriculo.json'
function Curriculo() {
    return (
        <>

            <section id="resumo">

                <h2>Resumo</h2><br />

                <p className="p">{date.Resumo}</p>
            </section>


            <section id="academico">

                <h2>Acadêmico</h2><br />


                <p className="p"> <b>{date.faculdade} </b></p> <br />
                <p className="p"> {date.dataInicio}-{date.dataFim} </p>
                <p className="p">{date.dataInicio}-{date.dataFim}</p>


            </section>


            <section id="profissional">

                <h2>Profissional</h2> <br />

                <p className='p'>{date.Bacharel}</p>
                <p className='p'>{date.Auxiliar}  {date.dataInicioAuxiliar}-{date.dataFimAuxiliar}</p>
                <p className='p'> {date.maker}  {date.dataInicioMaker}-{date.dataFimMaker}</p>

            </section>

        </>



    )
}
export default Curriculo;




