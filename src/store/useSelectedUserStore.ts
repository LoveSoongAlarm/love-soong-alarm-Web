import { create } from "zustand";
import type { User } from "../types/User";
import { createJSONStorage, persist } from "zustand/middleware";

interface SelectedUserState {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}

export const useSelectedUserStore = create<SelectedUserState>()(
  persist(
    (set) =>
      ({
        selectedUser: null,
        setSelectedUser: (user: User | null) => set({ selectedUser: user }),
      } as SelectedUserState),
    {
      name: "selected-user",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ selectedUser: state.selectedUser }),
    }
  )
);
