export default function Portfolio(props) {  
    return (  
        <>
        <a className='portfolio' href={props.link}>
        <img src={props.img} alt="" />
<div className="portfolio-texts">
        <h3 className='port-name'>{props.name}</h3>
        <p className='port-desc'>{props.desc}</p>
        <div className="technologies">
        <p className="technoloyused">Technologies Used :</p>
        <p className="lang">{props.lang}</p>
        </div>
</div>
        </a>

    </>
)}
