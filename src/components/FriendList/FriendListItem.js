import PropTypes from "prop-types";

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
