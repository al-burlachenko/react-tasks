import FriendListItem from "./FriendListItem";
import { List, ListItem } from "./FriendList.styled";

function FriendList({ friends }) {
  return (
    <List>
      {friends.map((item) => {
        return (
          <ListItem key={item.id} status={item.isOnline}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline ? "Online" : "Offline"}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

export default FriendList;
