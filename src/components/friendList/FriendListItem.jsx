const FriendListItem = ({ avatar, name, isOnline }) => {
  const avatarImg = "Avatar";
  return (
    <div>
      <img src={avatar} alt={avatarImg} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};

export default FriendListItem;
