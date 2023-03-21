import {
  collection,
  orderBy,
  query,
  limit,
  getDocs,
  startAfter,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase";

const Post = {
  /**
   * this function will be fired when the app runs for the first time,
   * and it will fetch first 5 posts, here i retrieve them in desc order,
   * until show last added post first.
   */
  postsFirstBatch: async function () {
    try {
      const q = query(collection(db, "Posts"), orderBy("title"), limit(6));
      const querySnapshot = await getDocs(q);
      let posts = [];
      let lastKey = "";
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          title: doc.data().title,
          date: new Date(doc.data().date.toDate()).toString(),
          image: doc.data().image,
          imageAuthor: doc.data().imageAuthor,
          imageSource: doc.data().imageSource,
          body: doc.data().body,
        });
        lastKey = doc.data().title;
      });
      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * this function will be fired each time the user click on 'More Posts' button,
   * it receive key of last post in previous batch, then fetch next 5 posts
   * starting after last fetched post.
   */
  postsNextBatch: async (key) => {
    try {
      const q = query(
        collection(db, "Posts"),
        orderBy("title"),
        limit(6),
        startAfter(key)
      );
      const querySnapshot = await getDocs(q);
      let posts = [];
      let lastKey = "";
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          title: doc.data().title,
          date: new Date(doc.data().date.toDate()).toString(),
          image: doc.data().image,
          imageAuthor: doc.data().imageAuthor,
          imageSource: doc.data().imageSource,
          body: doc.data().body,
        });
        lastKey = doc.data().title;
      });

      return { posts, lastKey };
    } catch (e) {
      console.log(e);
    }
  },

  uniquePost: async (id) => {
    try {
      const blogRef = doc(db, "Posts", id);
      const querySnapshot = await getDoc(blogRef);

      if (querySnapshot.exists()) {
        return querySnapshot.data();
      }

      return;
    } catch (e) {
      console.log(e);
    }
  },
};

export default Post;
