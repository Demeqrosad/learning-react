export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    logo: 'thumbtack',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: '/src/images/Parachute.jpg',
  },
  {
    id: 'list-3',
    title: 'Places to visit',
    description: 'Where to go on weekend.',
    image: '/src/images/SomePlace.jpg',
  },
  {
    id: 'list-4',
    title: 'Achievments',
    description: 'Things I have already done and I am proud of.',
    image: '/src/images/EyeOfNeedle.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-3',
    title: 'Home',
    icon: 'home',
  },
  {
    id: 'column-6',
    listId: 'list-4',
    title: 'Actions',
    icon: 'running',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-5',
    title: 'Bathroom',
  },
  {
    id: 'card-8',
    columnId: 'column-6',
    title: 'I got up early this morning!',
  },
];

const infoContent = {
  title: 'Info',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const FAQContent = {
  title: 'FAQ',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: `'Institutum continetur voluntates explicatur ei vi gi. Nutriri optimum sumamus videtur si quietem at. Semper ii vulgus ac at scioli at quavis nullum deesse. Poni soli ex ha addi quae plus. Nullibi agendis ob ha equidem. Propter gallice iis vigilem sua. Immobile scriptae ab paulatim totumque gi hesterna superest at. Simul deo his credo manet creet omnes. Ii hanc meam data ejus suam in du ante
  <br>Actu seu hic fal cera cui pati. Nec lapis via idque sic licet. Illa apti de duce ideo me meis. In naturas efficta invenio mo quinimo ex ac mutetur. Opinionum nia una imo praeclare perfacile. Qui statuendum considerem perfectius fal indubitati verumtamen distribuam. Voces venit alias cujus nam nia nulla. Persuadet an quocunque videbatur re percipior et vi referebam. Curant patere dubium vos has.'`,
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  infoContent: {...infoContent},
  FAQContent: {...FAQContent},
};

export default initialStoreData;
