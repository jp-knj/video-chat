const participants = [
{
    identity: "kenji"
},
{
    identity: "kenta"
},
{
    identity: "kenzou"
},
]
interface Props {
    identity: string;
    lastItem: boolean;
    participant:object
}
const List:React.FC<Props> = ( {identity, lastItem, participant}) => {
    return (
        <>
            <p>{identity}</p>
            {!lastItem && <span></span>}
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
    return (
        <div>
            {participants.map((participant, index) => {
                return (
                    <List
                identity={participant.identity}
                lastItem={participants.length === index +1}
                participant={participant}
                />
                );
            })}
        </div>
    )
}
const ParticipantsList = () => {
    return (<div>
        <Label />
        <Lists />
    </div>)
}
export  default ParticipantsList