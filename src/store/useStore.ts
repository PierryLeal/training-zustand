import { create } from "zustand";

interface StoreProps {
	count: number;
	setCount: (newValue: number) => void;
}

const useStore = create<StoreProps>((set) => ({
	count: 0,
	setCount: (newValue: number) => set({ count: newValue }),
}));

export default useStore;
