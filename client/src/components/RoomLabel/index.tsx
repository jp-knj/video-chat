interface Props {
    roomId: string
}
const RoomLabel: React.FC<Props> = ({roomId}) => {
    return (
        <label>rooomlabel
            <span>ID : {roomId}</span>
        </label>
    )
}
export default  RoomLabel