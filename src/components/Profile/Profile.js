import {
  ProfileCard,
  ProfileInfo,
  ProfileStatsList,
  ProfileStatsListItem,
} from "./Profile.styled";

export default function Profile(props) {
  return (
    <ProfileCard ProfileCard key={props.tag}>
      <ProfileInfo>
        <img src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </ProfileInfo>

      <ProfileStatsList>
        <ProfileStatsListItem>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </ProfileStatsListItem>
        <ProfileStatsListItem>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </ProfileStatsListItem>
        <ProfileStatsListItem>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </ProfileStatsListItem>
      </ProfileStatsList>
    </ProfileCard>
  );
}
