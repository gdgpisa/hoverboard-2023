import { Failure, Pending, Success } from '@abraham/remotedata';
import { initialSpeakersState, SpeakersState } from './state';
import {
  FETCH_SPEAKERS,
  FETCH_SPEAKERS_FAILURE,
  FETCH_SPEAKERS_SUCCESS,
  SpeakerActions,
} from './types';

export const speakersReducer = (
  state = initialSpeakersState,
  action: SpeakerActions
): SpeakersState => {
  switch (action.type) {
    case FETCH_SPEAKERS:
      return new Pending();

    case FETCH_SPEAKERS_FAILURE:
      return new Failure(action.payload);

    case FETCH_SPEAKERS_SUCCESS:
      let sortedSpeakers = action.payload.sort((s1, s2) => s1.order - s2.order);
      return new Success(sortedSpeakers);

    default:
      return state;
  }
};
