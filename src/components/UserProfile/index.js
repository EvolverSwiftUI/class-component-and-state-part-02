import "./index.css"

const UserProfile = (props) => {
    const {userDetails} = props;
    const {imageUrl, name, designation} = userDetails;

        return(
            <li className="user-card-container">
                <img className="avatar" src={imageUrl} alt="avatar"/>
                <div className="user-details-container">
                    <h1 className="user-name">{name}</h1>
                    <p className="user-designation">{designation}</p>
                </div>
            </li>
        );
}

export default UserProfile;