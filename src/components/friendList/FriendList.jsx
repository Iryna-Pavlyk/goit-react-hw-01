import FriendListItem from "./FriendListItem";

const FriendList = (friends) => {
  console.log(friends);
  //   friends.map((friend, id) => {
  //     return <li key={id}>{friend.name}</li>;
  //   });

  return (
    <ul>
      <li>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </li>
      <li>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </li>
      <li>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </li>
      <li>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </li>
      <li>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </li>
    </ul>
  );
};

export default FriendList;
