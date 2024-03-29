import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const avatarImg = "Avatar";
  const classText = clsx(isOnline ? css.textOnline : css.textOffline);
  return (
    <div>
      <img src={avatar} alt={avatarImg} width="48" />
      <p>{name}</p>
      <p className={classText}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
