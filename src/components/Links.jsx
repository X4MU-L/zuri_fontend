import { LINKS as links } from "../constant"
import { Link } from "react-router-dom";

const Links =()=>{

    return (
        <div className="link-items">
            {links.map(link => {
                return ( link.id !== "contact" ? (<a key={link.id} id={link.id} href={link.link} ><span>{link.text}</span></a>):(<Link to={link.link} id={link.id} key={link.id}> {link.text}</Link>))
            })}
        </div>
    )
}

export default Links