import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  const altUserAv = "User avatar";
  return (
    <div>
      <div>
        <img src={image} alt={altUserAv} />
        <p className={css.textName}>{name}</p>
        <p>@{tag}</p> <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span> <span>{followers}</span>
        </li>

        <li>
          <span>Views</span> <span>{views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
