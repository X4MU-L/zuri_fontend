import { FOOTER as footer } from "../constant"

const Footer = () =>{
    return (
        <footer>
            <div className="dic">
            {footer.map((item,i) =>{
                return(
                    <div key={i} className="footer">
                        <div className="zuri-logo">
                            <img src={item.logo} alt={item.logo_alt} />
                        </div>
                        <p>{item.text}</p>
                        <div className="i4g-logo">
                            <img src={item.I4G} alt={item.I4G_alt} />
                        </div>
                    </div>
                )
            })}
            </div>
        </footer>
    )
}

export default Footer