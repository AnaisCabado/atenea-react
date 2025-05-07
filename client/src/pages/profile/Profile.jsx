// import './Profile.css';

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
}

export default Profile;