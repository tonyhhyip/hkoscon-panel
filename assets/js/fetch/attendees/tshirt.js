import { database } from '../../firebase';
import { loadTshirt, pushAddTshirt } from '../../action';

export default function (store) {
	const ref = database.ref('/tshirt');

	ref.once('value', (snapshot) => {
		const action = loadTshirt(snapshot.val());
		store.dispatch(action);
	});

	ref.once('child_added', (snapshot) => {
		const action = pushAddTshirt(snapshot.key, snapshot.val());
		store.dispatch(action);
	})
}
