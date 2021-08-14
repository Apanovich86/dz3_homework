export default function User({item, choseUser}) {
    const onClickUserChose = () => {
        choseUser(item);
    }
    return (
        <div>
            {item.id} - {item.name}
            <button onClick={onClickUserChose}>details
            </button>
        </div>
    );
}