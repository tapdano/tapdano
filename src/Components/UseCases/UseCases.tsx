import './UseCases.css'

function UseCases(props: {
    img: string,
    title: string,
    text: string,
}) {

    return (
        <div className="useCases">
            <img src={props.img} alt={props.title}/>
            <h3 className='text-highlight'>{props.title}</h3>
            <p className='text-1'>{props.text}</p>
        </div>
    );
}

export default UseCases