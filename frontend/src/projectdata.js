
import hafDribble from './assets/images/haf/Dribble.png'
import hafDesktopSearchApp from './assets/images/haf/Desktop_HomeSearchApp.png';
import hafDesktopSearchList from './assets/images/haf/Desktop_HomeSearchList.png';
import hafDesktopActivity from './assets/images/haf/Desktop_Activity.png';
import hafDesktopSearchAppMap from './assets/images/haf/Desktop_SearchAppMap.png';
import hafDesktopWeather from './assets/images/haf/Desktop_Weather.png';
import hafMobileSearchMap from './assets/images/haf/Mobile_SearchMap.png';
import hafMobileActivity from './assets/images/haf/Mobile_ActivityEntry.png';
import hafMobileSearchList from './assets/images/haf/Mobile_SearchList.png';

import mariDesktopHome from './assets/images/mari/mari_desktop--feature.png';
import mariDesktopAbout from './assets/images/mari/mari_desktop1.png';
import mariDesktopLetter from './assets/images/mari/mari_desktop2.png';
import mariDesktopArticle from './assets/images/mari/mari_desktop3.png';
import mariDesktopArticleLinks from './assets/images/mari/mari_desktop4.png';
import mariMobile1 from './assets/images/mari/mari_mobile1.png';
import mariMobile2 from './assets/images/mari/mari_mobile2.png';
import mariMobile3 from './assets/images/mari/mari_mobile3.png';


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
    'subheadline': 'Activity planning for families on the move',
    'introtext': 'Happy Active Family allows parents to maintain their active lifestyle through curating family-friendly activities, restaurants, and gear. Parents can discover activities around them or in destination cities along multiple categories ranging from the perfect day trip water park, to a great morning stroller run, or the hidden family-friendly brunch spot around the corner. Pear Design was hired to design, build, and maintain the project. The product first launched as a web app, with a native mobile app currently in development.',
    'services': ['Web Development', 'UI / UX Design', 'Brand Identity', 'Web Hosting'],
    'desktopmocks': [hafDesktopSearchList, hafDesktopActivity, hafDesktopSearchAppMap, hafDesktopWeather],
    'mobilemocks': [hafMobileActivity, hafMobileSearchList, hafMobileSearchMap],
    'writeup_p1': 'We worked with HAF\'s founders from the beginning to help create a product vision and brand, focusing on identifying and empathizing with the needs of needs of active lifestyle families, the pain points they encounter, and the design patterns which would build trust and brand confidence. Through iterative prototyping, we first built a workable design prototype to solicit market, user, and potential investor feedback.',
    'writeup_p2': 'Launching first as a web app, the product is built over Django REST, providing a single powerful data layer on which the currently developing mobile app can be built. The product features a robust elastic search function, which provides multi-variable searches which returns conditionally on the user\'s current location, destination, or preferences.',
    'testimonial': '',
    'attrib': '',
  },
  'mari': {
    'url': '/work/mari/',
    'name': 'Mari for Michigan',
    'featuredImage': mariDesktopHome,
    'subheadline': 'Designing for confidence in grassroots digital.',
    'introtext': 'Mari Manoogian is a State Representative serving Michigan\'s 40th District in the Michigan State House. Pear Design was hired to design the campaign\'s brand identity along with it\'s website. The website served as the central hub for press releases, candidate and campaign information, and a funnel for digital fundraising.',
    'services': ['Web Development', 'UI / UX Design', 'Brand Identity', 'Web Hosting'],
    'desktopmocks': [mariDesktopAbout, mariDesktopLetter, mariDesktopArticle, mariDesktopArticleLinks],
    'mobilemocks': [mariMobile1, mariMobile2, mariMobile3],
    'writeup_p1': 'The central challenge of the project was to create a cohesive visual identity not just for the campaign - but for the candidate herself.  As a first-time candidate, the design needed to build credibility and trust, while still invoking smart, fresh, and youthful qualities of the candidate. The identity would need to serve as an introduction to the community, and provide for lasting usage across a planned career in public service.',
    'writeup_p2': 'As a former member of the US State Department\'s digital outreach team,the candidate placed high value on creating an identity that was not only web/mobile-friendly, but web-native, as email, advertising, and would be a crucial requirement for campaign strategy. Much more than just logo design, brand assets, color choices, and typography would need to be comfortably applied to web design, print materials, banners, lawn signs, and apparel.',
    'testimonial': '',
    'attrib': '',
  },
  'ewcc': {
    'url': '/work/ewcc/',
    'name': 'Enroll WCC',
    'featuredImage': ewccDesktopHome,
    'subheadline': 'Building tools for those who serve',
    'introtext': 'Enroll WCC Charters is a growing collection of tuition-free, non-profit public charter schools serving diverse families of Richmond, San Pablo and West Contra Costa County, California. Working with a partner designer, Pear Design was hired to build, develop and maintain the public facing site as well as the custom CMS.',
    'services': ['Web Development', 'Web Hosting'],
    'desktopmocks': [ewccDesktopSchool, ewccDesktopAbout, ewccDesktopNumbers, ewccDesktopSpanish],
    'mobilemocks': [ewccMobileHome, ewccMobileNumbers, ewccMobileNumbers2],
    'writeup_p1': 'EnrollWCC.org is an informational and reporting website built for the West Contra Costa Charters school network to provide transparency and accessible enrollment information to parents of current and prospective students. The website allows parents to easily and visually compare schools within the regional network, providing information on individual Curriculum, School Culture & Safety, Programs, and enrollment data.',
    'writeup_p2': 'A custom-built Django CMS allows site editors to manage each school\'s information and reporting data, including enrollment, upcoming events, and applications information.  Enrollment data is generated and displayed for each of the schools, showing demographic information as well as reporting student achievement numbers from the California Department of Education for each school. Built to serve diverse communities, the site provides readily available translations for all site content.',
    'testimonial': '',
    'attrib': '',
  }
}

export default projects;
