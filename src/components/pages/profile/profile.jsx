import AccountData from '../../organisms/account-data/account-data';
import AccountOverview from '../../organisms/account-overview/account-overview';
import PersonalData from '../../organisms/personal-data/personal-data';

function Profile() {
  return (
    <div>
      <p>Profile Page</p>
      <AccountOverview />
      <PersonalData />
      <AccountData />
    </div>
  );
}

export default Profile;
