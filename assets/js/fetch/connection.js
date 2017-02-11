import toastr from 'toastr';
import {database} from '../firebase';

export default function () {
  database.ref('.info/connected').on('value', (snapshot) => {
    if (snapshot.val()) {
      toastr.success('Connect to Firebase Realtime DB');
    } else {
      toastr.error('Not connect from Firebase Realtime DB');
    }
  });
}