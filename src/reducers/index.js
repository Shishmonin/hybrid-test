const initialState = {
  articles: [
    {
      id: '1AAAA',
      title: 'AAAA',
      summary: 'minimalAAA',
      text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
      comments: [
        {
          id: '4cdrbdrbvoido',
          name: 'Den',
          comment: 'Ljbelkfei nfien nfien  nfien nfien nfien nfien nfien nfien'
        },
        {
          id: '5vjdbnvsjm;slv',
          name: 'Ben',
          comment: 'Ljbelkfei nfien nfien  nfien nfien nfien nfien nfien nfien'
        }
      ]
    },
    {
      id: '2BBBBB',
      title: 'BBBBB',
      summary: 'minimalBBB',
      text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
      comments: [
        { id: '1cudrefeohvoido',
          name: 'Sem',
          comment: 'Hnefei nfien nfien  nfien nfien nfien nfien nfien nfien'
        },
        {
          id: '2knshtfhtdknvpdo',
          name: 'Pen',
          comment: 'Hnefei nfien nfien  nfien nfien nfien nfien nfien nfien'
        }
      ]
    },
    {
      id: '3CCCCCC',
      title: 'CCCCCCCCCC',
      summary: 'minimalCCCC',
      text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
      comments: [
        { id: '1cudohsacdacvoido',
          name: 'Sem',
          comment: 'Hnefei nfien nfien  nfien nfien nfien nfien nfien nfien'
        }
      ]
    },
    {
      id: '4DDDDD',
      title: 'DDDDDDDDDD',
      summary: 'minimalDDDD',
      text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
      comments: []
    }
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case 'ADD_ARTICLE':
    // console.log(action)
    const newArt = {
        id: state.articles.length + action.title,
        title: action.title,
        summary: action.summary,
        text: action.text,
        comments:[]
    }
    return {
      ...state,
      articles: [
        ...state.articles,
        newArt
      ]
    }

  case 'ARTICLES_EDIT':
    // console.log(action)
    const editeArt = {
      id: action.id,
      title: action.title,
      summary: action.summary,
      text: action.text,
      comments: action.comments,
    }
    return {
      ...state,
      articles: state.articles.map(obj => {
        if(obj.id === action.id) {
          return editeArt;
        }else{
          return obj;
        }
      })
    };

    case 'ARTICLES_DELETE':

      const delArt = state.articles.filter(user => (user.id !== action.id));
      console.log(delArt);

      return {
        ...state,
        articles: [
          ...delArt
        ]
      };

    case 'COMMENT_DELETE':
    // console.log(action)
      const {id} = action.id

      return {
        ...state,
        articles: state.articles.map(({comments, ...o}) => ({
          ...o,
          comments: comments.filter((c) => c.id !== id)
        }))
      };

    case 'COMMENT_ADD':
      // console.log(action);
      const findArt =state.articles.find(user => (user.id === action.id)).comments.push({
        id: action.id+action.name,
        name: action.name,
        comment: action.comment
      })
      console.log(findArt);
      return {
        ...state,
        articles:[
          ...state.articles
        ]
      }
    default:
      return state;
  }
};

export default reducer;