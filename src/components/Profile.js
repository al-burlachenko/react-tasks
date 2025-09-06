import css from "../Profile.css";

console.log(css);

export default function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-info">
        <img src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul className="profile-statsList">
        <li className="profile-statsList-item">
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className="profile-statsList-item">
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className="profile-statsList-item">
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
