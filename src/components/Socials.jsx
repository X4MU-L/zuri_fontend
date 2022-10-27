import { SOCIALS as socials } from "../constant"
const Socials = () =>{

    return (
        <div className="socials">
            <div className="socials wrapper">
                { socials.map((item,i) => <div key={i}>
                    <a href={item.link}><img src={item.logo} alt={item.alt} /></a>
                </div>)}
            </div>
        </div>
    )
}
export default Socials