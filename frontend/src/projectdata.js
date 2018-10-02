import hafProfileImg from './assets/images/haf.jpg';

import hafDesktopSearchApp from './assets/images/haf/Desktop_HomeSearchApp.png';
import hafDesktopSearchList from './assets/images/haf/Desktop_HomeSearchList.png';
import hafDesktopActivity from './assets/images/haf/Desktop_Activity.png';
import hafDesktopSearchAppMap from './assets/images/haf/Desktop_SearchAppMap.png';
import hafDesktopWeather from './assets/images/haf/Desktop_Weather.png';
import hafMobileSearchMap from './assets/images/haf/Mobile_SearchMap.png';
import hafMobileActivity from './assets/images/haf/Mobile_ActivityEntry.png';
import hafMobileSearchList from './assets/images/haf/Mobile_SearchList.png';

import mariDesktopHome from './assets/images/mari/Desktop_Board.png';

import ewccDesktopHome from './assets/images/ewcc/Desktop_Home.png';
import ewccDesktopSpanish from './assets/images/ewcc/Desktop_Inscribirse.png';
import ewccDesktopAbout from './assets/images/ewcc/Desktop_LearnAbout.png';
import ewccDesktopNumbers from './assets/images/ewcc/Desktop_Numbers.png';
import ewccDesktopSchool from './assets/images/ewcc/Desktop_School.png';
import ewccMobileHome from './assets/images/ewcc/Mobile_Home.png';
import ewccMobileNumbers from './assets/images/ewcc/Mobile_Numbers.png';
import ewccMobileNumbers2 from './assets/images/ewcc/Mobile_Numbers2.png';

const projects = {
  'impakt': {
    'url': '/work/impakt/',
    'name': 'Impakt',
    'featuredImage': '',
    'subheadline': '',
    'introtext': '',
    'services': ['Web Development', 'UI / UX Design', 'Technical Consulting', 'Web Hosting'],
    'desktopmocks': [],
    'mobilemocks': [],
    'writeup_p1': '',
    'writeup_p2': '',
    'testimonial': '',
    'attrib': '',
  },
  'haf': {
    'url': '/work/haf/',
    'name': 'Happy Active Family',
    'featuredImage': hafDesktopSearchApp,
    'subheadline': '',
    'introtext': '',
    'services': ['Web Development', 'UI / UX Design', 'Brand Identity', 'Web Hosting'],
    'desktopmocks': [hafDesktopSearchList, hafDesktopActivity, hafDesktopSearchAppMap, hafDesktopWeather],
    'mobilemocks': [hafMobileSearchMap, hafMobileActivity, hafMobileSearchList],
    'writeup_p1': '',
    'writeup_p2': '',
    'testimonial': '',
    'attrib': '',
  },
  'mari': {
    'url': '/work/mari/',
    'name': 'Mari for Michigan',
    'featuredImage': mariDesktopHome,
    'subheadline': 'Designing for confidence in grassroots digital.',
    'introtext': 'Mari Manoogian is a first time political candidate, and Democratic nominee for Michigan\'s State House.',
    'services': ['Web Development', 'UI / UX Design', 'Brand Identity', 'Web Hosting'],
    'desktopmocks': [mariDesktopHome],
    'mobilemocks': [''],
    'writeup_p1': '',
    'writeup_p2': '',
    'testimonial': '',
    'attrib': '',
  },
  'ewcc': {
    'url': '/work/ewcc/',
    'name': 'Enroll WCC',
    'featuredImage': ewccDesktopHome,
    'subheadline': '',
    'introtext': '',
    'services': ['Web Development', 'Web Hosting'],
    'desktopmocks': [ewccDesktopSchool, ewccDesktopAbout, ewccDesktopNumbers, ewccDesktopSpanish],
    'mobilemocks': [ewccMobileHome, ewccMobileNumbers, ewccMobileNumbers2],
    'writeup_p1': '',
    'writeup_p2': '',
    'testimonial': '',
    'attrib': '',
  }
}

export default projects;
