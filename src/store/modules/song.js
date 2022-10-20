import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase.service";

export default {
  state: {
    songs: null,
  },
  mutations: {
    setSongs(state, { songs }) {
      state.songs = songs;
    },
    // setCurrent(state, { current }) {
    //   state.current = current;
    // },
    // removeContact(state, { contactId }) {
    //   const idx = state.contacts.findIndex(
    //     (contact) => contact._id === contactId
    //   );
    //   state.contacts.splice(idx, 1);
    // },
    // saveContact(state, { contact }) {
    //   const contactId = contact._id;
    //   const idx = state.contacts.findIndex(
    //     (contact) => contact._id === contactId
    //   );
    //   if (idx === -1) {
    //     state.contacts.push(contact);
    //   } else {
    //     state.contacts.splice(idx, 1, contact);
    //   }
    // },
  },
  actions: {
    async loadSongs({ commit }) {
      await onSnapshot(collection(db, "songs"), (querySnapshot) => {
        let fbSongs = [];
        querySnapshot.forEach((doc) => {
          const song = {
            name: doc.data().name,
            src: doc.data().src,
            lyrics: doc.data().lyrics,
            category: doc.data().category,
          };
          fbSongs.push(song);
        });
        commit({ type: "setSongs", songs: fbSongs });
        return fbSongs[0];
      });
    },
    // setCurrent({ commit }, { current }) {
    //   commit({ type: "setCurrent", current });
    // },
    // async removeContact({ commit }, { contactId }) {
    //   await contactService.deleteContact(contactId);
    //   commit({ type: "removeContact", contactId });
    // },
    // async saveContact({ commit }, { contact }) {
    //   try {
    //     await contactService.saveContact(contact);
    //     commit({ type: "saveContact", contact });
    //   } catch (error) {
    //     throw error;
    //   }
    // },
  },
  getters: {
    songs(state) {
      return state.songs;
    },
  },
};
