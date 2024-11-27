import './leaderCard.css'

function LeaderCard(props: {
    role: string,
    name: string,
    photoSrc: string,
    bio: string,
    link1?: string,
    titleLink1?: string,
    link2?: string
}) {

    return (
        <div className="leadersCard text-2">
            <div className="headerLeadersCard">
            <div className="infoLeaders">
                <p>{props.role}</p>
                <p className='title-2'>{props.name}</p>
            </div>
            <img src={props.photoSrc} alt={`Foto do líder ${props.name}`} />
            </div>
            <div className='leadersContent'>
                <p className='leaderBio'>{props.bio}</p>
                {props.link1 && <a href={props.link1} target="_blank" className='branco'>{props.titleLink1}</a>}
                {props.link2 && <a href={props.link2} target="_blank" className='branco'>{props.link2}</a>}
                
            </div>
        </div>
    );
}

export default LeaderCard