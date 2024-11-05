import './leaderCard.css'

function LeaderCard(props: {
    role: string,
    name: string,
    photoSrc: string,
    summary?: string,
    bio: string
}) {

    return (
        <div className="leadersCard">
            <div className="headerLeadersCard">
            <div className="infoLeaders">
                <p className='text-2'>{props.role}</p>
                <p className='title-2'>{props.name}</p>
            </div>
            <img src={props.photoSrc} alt={`Foto do líder ${props.name}`} />
            </div>
            <div className='leadersContent'>
            {props.summary && <p className="text-2">{props.summary}</p>}
            <p className='text-2'>{props.bio}</p>
            </div>
        </div>
    );
}

export default LeaderCard