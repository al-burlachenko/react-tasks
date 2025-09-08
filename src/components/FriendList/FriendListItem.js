import { Image } from "./FriendList.styled";

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <div>
      <Image src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
