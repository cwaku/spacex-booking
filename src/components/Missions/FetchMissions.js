import axios from "axios";
import { missionsError, missionsSuccess } from "../../redux/store/missions";
import Apis from "../Apis";

const fetchMissions = () => async (dispatch) => {
  try {
    const missions = await axios.get(Apis.missions);
    dispatch(missionsSuccess(missions.data));
  } catch (error) {
    dispatch(missionsError(error.message));
  }
}
export default fetchMissions;