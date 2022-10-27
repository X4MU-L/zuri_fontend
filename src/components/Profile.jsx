import useScreenSize from "../hooks/useScreenSize";
import { PROFILE as profile} from "../constant";
import share from "../../src/assets/icons/share.svg"
import more_dot from "../../src/assets/icons/dot.svg"
import { useState } from "react";


const Profile = () =>{
    const [ more, setMore ] = useState(false)
    const { screenWidth } = useScreenSize()
    const mobile = screenWidth < 576

    const handleShare = () =>{
        if (navigator.share) {
            navigator.share({
              title: 'Link Tree Demo Share',
              url: 'to be filled' //this needs to be created open deployment
            }).then(() => {
              console.log('Thanks for sharing!');
            })
            .catch(console.error);
    }
}
    const handleMore = () =>{
        setMore(!more)
    }

    return (
        <div className="container profile">
            <div className="wrapper">
                {profile.map(item => {
                    return ( item.icon ? <div key={item.id} className="img-wrapper">
                        <img src={item.img} alt={item.img_alt} id={item.id}/>
                        <div>
                            <img src={item.icon} alt={item.icon_alt}/>
                        </div>
                    </div> :
                     <h1 id={item.id} key={item.id}>{item.text}</h1> 
                    ); 
                })}
                {!mobile && 
                <div className="share-wrapper">
                    <p className="share-link">Share Link</p>
                    <button className="share" onClick={handleShare}>
                        <img src={share} alt="share icon"  className="share-handle"/>
                    </button>
                </div>}
                {mobile && 
                <div className="more-wrapper" onClick={handleMore}>
                    <button className="more" >
                        <img src={more_dot} alt="more icon"  className="more-dot"/>
                    </button>
                {more &&  <div className="share-wrapper mobile">
                        <p className="share-link">Share Link</p>
                        <button className="share" onClick={handleShare}>
                            <img src={share} alt="share icon"  className="share-handle"/>
                        </button>
                    </div>}
                </div>}
            </div>
        </div>
    )

}

export default Profile;