import { VoteCategory } from "types/vote";
import { atomWithStorage } from "jotai/utils";
import { LOCALSTORAGE_NAMESPACE } from "constants/local-storage";

export const SELECTED_VOTERS_KEY = `${LOCALSTORAGE_NAMESPACE}/vote/selectedVoters`;

export const voteeNameAtom = atomWithStorage<string>(
  `${LOCALSTORAGE_NAMESPACE}/vote/voteeName`,
  ""
);

export const selectedVotersAtom = atomWithStorage<
  Record<
    string,
    {
      chatVotes?: { voters?: number; positivePercentage?: string };
      votes?: { [category in VoteCategory]?: string };
    }
  >
>(`${LOCALSTORAGE_NAMESPACE}/vote/selectedVoters`, {});
