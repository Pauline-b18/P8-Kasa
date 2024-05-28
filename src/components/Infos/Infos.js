import "../../assets/style/components/infos.scss"

function Infos(props) {
    return (
        <div className="infoHost">
            <h6 className="infoHostName">{props.text}</h6>
            <img className="infoHostPicture" src={props.image} alt={`location host ${props.text}`} />
        </div>
    )
}

export default Infos;