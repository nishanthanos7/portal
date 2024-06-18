import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set((state: any) => ({ bears: 0 })),
}));

export function BearCounter() {
  const bears = useStore((state: any) => state.bears);

  return (
    <>
      <h1>There are {bears} around here.</h1>
    </>
  );
}

export function Controls() {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  return (
    <>
      <button className="bg-slate-400" onClick={increasePopulation}>increase</button>
    </>
  );
}


const useLoginStore = create((set) => ({
    isLoggedIn : false,
    login : () => set({isLoggedIn : true}),
    logOut : () => set({isLoggedIn : false})
}))