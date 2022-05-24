import "./index.css"

const UserProfile = (props) => {
    const {userDetails, deleteUser} = props;
    const {imageUrl, name, designation, uniqueNo} = userDetails;
    const onDelete = () => {
        deleteUser(uniqueNo)
    }
        return(
            <li className="user-card-container">
                <img className="avatar" src={imageUrl} alt="avatar"/>
                <div className="user-details-container">
                    <h1 className="user-name">{name}</h1>
                    <p className="user-designation">{designation}</p>
                </div>
                <button type="button" className="delete-button" onClick={onDelete}>
                    X
                </button>
            </li>
        );
}

export default UserProfile;