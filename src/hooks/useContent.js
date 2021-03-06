/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

const useContent = target => {
  const [content, setContent] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then(snapshot => {
        const allContent = snapshot.docs.map(contentObj => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch(err => console.log(err.message));
  }, []);

  return { [target]: content };
};

export default useContent;