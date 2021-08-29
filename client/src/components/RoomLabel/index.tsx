interface Props {
    roomId: string
}
const RoomLabel: React.FC<Props> = ({roomId}) => {
    return (
        <div>roomlabel
            <p>
                ID : {roomId}
            </p>
        </div>
    )
}
export default  RoomLabel