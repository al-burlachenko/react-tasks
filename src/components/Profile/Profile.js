import PropTypes from "prop-types";

import css from "./Profile.module.css";

export default function Profile(props) {
  return (
    <div className={css.profile} key={props.tag}>
      <div className={css.profileInfo}>
        <img src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul className={css.profileStatsList}>
        <li className={css.profileStatsListItem}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.profileStatsListItem}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.profileStatsListItem}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
