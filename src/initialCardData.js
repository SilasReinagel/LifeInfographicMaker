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

const createSampleBasicData = () => JSON.parse(`{
  "styling": {
    "colors": {
      "backgroundColor": "#00acd8"
    }
  },
  "basicData": {
    "title": "Infographics For Next-Gen Communication",
    "link": {
      "title": "Try It Yourself - https://liteinfographicmaker.app",
      "url": "https://liteinfographicmaker.app"
    },
    "mainPhoto": "/img/use-infographics.jpg",
    "altPhoto": "/img/lite-infographic-maker.jpg"
  },
  "coreFacts": [
    {
      "title": "Visually-Centered",
      "text": "90% of the information processed by the brain is visual"
    },
    {
      "title": "Fast Communication",
      "text": "The human brain processes images 60,000 times faster than text"
    },
    {
      "title": "Adaptive Depth",
      "text": "Unlike just an image, providing text + images enables viewers to go deeper"
    }
  ],
  "detail1": {
    "title": "Why an Infographic?",
    "items": [
      "An infographic puts all the key information in a single view",
      "An infographic forces the communicator to clarify their key thoughts",
      "An infographic can be absorbed faster than a video",
      "An infographic can provide actionable and informative knowledge",
      "An infographic is highly portable and perfect for chat and social tools"
    ]
  },
  "detail2": {
    "title": "The Ideal Infographic",
    "items": [
      "Leads with your key idea in the title",
      "Offers a web link to an interactive demo or more detail",
      "Presents facts that contextualize and strengthen the info",
      "Shares sets of details that are terse, crisp, and easy to read",
      "Is easy to create in just minutes"
    ]
  }
}`);

export const createNew = () => 
({
  styling: createStyling(),
  basicData: createBasicData(),
  coreFacts: createCoreFacts(),
  detail1: createDetail(),
  detail2: createDetail(),
});

export default createSampleBasicData;