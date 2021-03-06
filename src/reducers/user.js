import {
  CREATE_PROFILE_START,
  CREATE_PROFILE_ERROR,
  CREATE_PROFILE_SUCCESS,
  SAVE_PROFILE,
  READ_PROFILE_START,
  READ_PROFILE_ERROR,
  READ_PROFILE_SUCCESS,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  AUTHENTICATE_START,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  CREATE_RISK_FORM_START,
  CREATE_RISK_FORM_ERROR,
  CREATE_RISK_FORM_SUCCESS,
  TAKE_CURRENT_PICTURE_START,
  TAKE_CURRENT_PICTURE_ERROR,
  TAKE_CURRENT_PICTURE_SUCCESS,
  SAVE_CURRENT_PICTURE_START,
  SAVE_CURRENT_PICTURE_ERROR,
  SAVE_CURRENT_PICTURE_SUCCESS,
  REMOVE_PROFILE,
  REQUEST_NEW_PASSWORD_START,
  REQUEST_NEW_PASSWORD_ERROR,
  REQUEST_NEW_PASSWORD_SUCCESS
} from '../actions/user'

const initialState = {
  profile: {},
  currentPicture: {
    width: 0,
    height: 0,
    src: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE_SUCCESS:
    case SAVE_PROFILE:
    case AUTHENTICATE_SUCCESS:
    case READ_PROFILE_SUCCESS:
      return { ...state, profile: action.data }

    case UPDATE_PROFILE_SUCCESS:
      return { ...state, profile: Object.assign(state.profile, action.data) }

    case REMOVE_PROFILE:
      return { ...state, profile: {} }

    case TAKE_CURRENT_PICTURE_SUCCESS:
      return { ...state, currentPicture: action.data }

    case SAVE_CURRENT_PICTURE_SUCCESS:
      return { ...state, currentPicture: {} }

    case REQUEST_NEW_PASSWORD_SUCCESS:
      return { ...state }

    case CREATE_PROFILE_START:
    case CREATE_PROFILE_ERROR:
    case READ_PROFILE_START:
    case READ_PROFILE_ERROR:
    case UPDATE_PROFILE_START:
    case UPDATE_PROFILE_ERROR:
    case AUTHENTICATE_START:
    case AUTHENTICATE_ERROR:
    case CREATE_RISK_FORM_START:
    case CREATE_RISK_FORM_ERROR:
    case CREATE_RISK_FORM_SUCCESS:
    case TAKE_CURRENT_PICTURE_START:
    case TAKE_CURRENT_PICTURE_ERROR:
    case SAVE_CURRENT_PICTURE_START:
    case SAVE_CURRENT_PICTURE_ERROR:
    case REQUEST_NEW_PASSWORD_START:
    case REQUEST_NEW_PASSWORD_ERROR:
    default:
      return state
  }
}
