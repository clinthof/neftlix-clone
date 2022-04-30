import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './Profiles';
import { Loading } from '../components';

const BrowseContainer = ({ slides }) => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  

  return profile.displayName ? (
    loading ? <Loading src={user.photoURL} /> : null
  ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );
};

export { BrowseContainer };