import { LINKS as links } from "../constant"

const Links =()=>{

    return (
        <div className="link-items">
            {links.map(link => {
                return <a key={link.id} id={link.id} href={link.link} ><span>{link.text}</span></a>
            })}
        </div>
    )
}

export default Links