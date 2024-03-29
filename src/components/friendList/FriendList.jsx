import FriendListItem from "./FriendListItem";

const FriendList = (friends) => {
  
  //   friends.map((friend) => {
  //     return <li key={friend.id}>{friend.name}</li>;
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
