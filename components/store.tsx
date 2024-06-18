// components/store.js
import { create } from "zustand";
import zustand from "zustand";

const useStore = create((set) => ({
  isLogin: false, //the user is not logged in initially.
  loginTimestamp: null,
  login: () => set({ isLogin: true }), //function to login the user.
  logOut: () => set({ isLogin: false, loginTimestamp: null }), //function to logout the user.
  userName: "",
  setUserName: (name: string) => set({ userName: name }),
}));

export default useStore;