import "./ItemPortfolio.module.css"
function ItemPortfolio (props){
    return(
        <section>
            <div className="Portfolio">
                <img className="Portfolio-img" src={props.img} alt={props.title} />
                <p>{props.title}</p>
            </div>
        </section>
    )
}

export default ItemPortfolio;