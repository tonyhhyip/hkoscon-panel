//@flow
import type {Store} from 'redux';
import fetching from '../fetch';
import {importTimetable} from '../../action';
import fetchLanguage from './language';
import fetchSpeakers  from './speakers';
import fetchTags from './tags';
import fetchVenues from './venues';
import fetchTopics from './topics';
import fetchSchedule from './schedule';

export default function (store: Store<Object, Object>) {
  fetching(store, fetchLanguage, importTimetable.bind(null, 'languages'));
  fetching(store, fetchSpeakers, importTimetable.bind(null, 'speakers'));
  fetching(store, fetchTags, importTimetable.bind(null, 'tags'));
  fetching(store, fetchVenues, importTimetable.bind(null, 'venues'));
  fetching(store, fetchTopics, importTimetable.bind(null, 'topics'));
  fetching(store, fetchSchedule, importTimetable.bind(null, 'schedule'));
}