import {useSockets} from "../../contexts/useHost";

const dammyparticipants = [
{
    username: "kenji"
},
{
    username: "kenta"
},
{
    username: "kenzou"
},
]
const List = (props:any) => {
    console.log(`List : ${JSON.stringify(props)}`);
return (
    <>
            <p>{props.username.username}</p>
        </>
    )
}

const Label = () => {
    return (
        <div>
            <p>Participants</p>
        </div>
    )
}
const Lists = () => {
    const {paticipants} = useSockets();
    console.log(`Lists : ${JSON.stringify(paticipants)}`);
    return (
        <>
            {paticipants.map((key,index)=> {
                return (
                    <List username={key}/>
                );
            })}
        </>
    )
}

const ParticipantsList = () => {
    return (<div>
        <Label />
        <Lists />
    </div>)
}
export  default ParticipantsList