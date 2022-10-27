import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const UseFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let conditionRef = db.collection(collection).orderBy('createdAt');
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        setDocuments([]);
        return;
      }

      conditionRef = conditionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }

    const unsubcribe = conditionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        key: doc.id,
      }));
      setDocuments(documents);
    });

    return unsubcribe;
  }, [collection, condition]);

  return documents;
};

export default UseFirestore;
