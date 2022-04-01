import AccountData from '../../organisms/account-data/account-data';
import AccountOverview from '../../organisms/account-overview/account-overview';

function Profile() {
  return (
    <div>
      <p>Profile Page</p>
      <AccountOverview />
      <AccountData />
    </div>
  );
}

export default Profile;
