import { QueryDocumentSnapshot } from "firebase/firestore";

const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

export default converter;
