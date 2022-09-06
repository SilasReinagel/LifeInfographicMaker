const createStyling = () => ({
    colors: {
      backgroundColor: '#00acd8',
    }
});

const createDetail = () => ({
    title: 'Detail Title',
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ]
});

const createCoreFacts = () => (
    [
      { 
        title: 'Core Fact', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
      },
    ]
);

const createBasicData = () => ({
  title: 'Infographic Title',
  link: { title: 'Live Demo - https://tinyurl.com/anything', url: 'https://tinyurl.com/anything' },
  mainPhoto: 'https://picsum.photos/id/1078/800/450',
  altPhoto: 'https://picsum.photos/id/13/800/450',
});

export const createNew = () => 
({
  styling: createStyling(),
  basicData: createBasicData(),
  coreFacts: createCoreFacts(),
  detail1: createDetail(),
  detail2: createDetail(),
});

export default createNew;