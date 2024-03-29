import Profile from "./profile/Profile";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import userData from "../components/profile/userData.json";
import friends from "../components/friendList/friends.json";
import transactions from "../components/transactionHistory/transactions.json";

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

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
