import './FriendListItem.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item-friend">
      <span
        className="status"
        style={{ backgroundColor: isOnline === true ? 'green' : 'red' }}
      ></span>
      <img className="avatar-friend" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
