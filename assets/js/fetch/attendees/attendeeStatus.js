import moment from 'moment';
import {database} from '../../firebase';
import {importAttendeeCheckin, updateCheckIn, syncCheckIn} from '../../action';

export default function (store) {
  const date = moment().format('YYYYMMDD');
  const ref = database.ref(`checkIn/${date}`);

  ref.once('value', (snapshot) => {
    const action = importAttendeeCheckin(snapshot.val());
    store.dispatch(action);
  });

  ref.on('child_added', (data) => {
    const state = store.getState();
    const actionCreator = state.localCheckIn.indexOf(data.key) !== -1 ? updateCheckIn : syncCheckIn;
    const action = actionCreator(data.key, data.val());
    store.dispatch(action);
  });

  ref.on('child_changed', (data) => {
    const state = store.getState();
    const actionCreator = state.localCheckIn.indexOf(data.key) !== -1 ? updateCheckIn : syncCheckIn;
    const action = actionCreator(data.key, data.val());
    store.dispatch(action);
  });

  ref.on('child_removed', (data) => {
    const state = store.getState();
    const actionCreator = state.localCheckIn.indexOf(data.key) !== -1 ? updateCheckIn : syncCheckIn;
    const action = actionCreator(data.key, data.val());
    store.dispatch(action);
  });
}