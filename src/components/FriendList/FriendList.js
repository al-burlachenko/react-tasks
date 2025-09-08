import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((item) => {
        const classNames = [
          css.item,
          item.isOnline ? css.isOnline : css.isOffline,
        ].join(" ");
        return (
          <li key={item.id} className={classNames}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline ? "Online" : "Offline"}
            />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};

export default FriendList;
