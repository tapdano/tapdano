import './whoFundInfo.css'

function WhoFundInfo(props: {
    title: string,
    description: string,
}) {

    return (
        <div className="whoFundInfo">
            <h3 className='gradient-title'>{props.title}</h3>
            <p className='text-1'>{props.description}</p>
        </div>
    );
}

export default WhoFundInfo