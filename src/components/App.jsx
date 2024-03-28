import Profile from "./profile/Profile";
import FriendList from "./friendList/FriendList";
import userData from "../components/profile/userData.json";
import friends from "../components/friendList/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
