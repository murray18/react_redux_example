import * as actions from '../index'

describe('actions', () => {
  const subreddit = 'reactjs'

  describe('selectSubreddit', () => {
    it('should create an action with a given subreddit', () => {
      const expectedAction = {
        type: actions.SELECT_SUBREDDIT,
        subreddit
      }
      expect(actions.selectSubreddit(subreddit)).toEqual(expectedAction)
    })
  })
})

describe('actions', () => {
    const subreddit = 'reactjs'
    // Add the mockJSON response
    const mockJSON = {
      data: {
        children: [{ data: { title: "Post 1" } }, { data: { title: "Post 2" } }]
      }
    };
    
    // ... other tests...
    
    describe('receivePosts', () => {
      it('should create the expected action', () => {
        const expectedAction = {
          type: actions.RECEIVE_POSTS,
          subreddit,
          posts: actions.transformResponseBody(mockJSON),
        }
        expect(actions.receivePosts(subreddit, mockJSON)).toMatchObject(expectedAction);
      })
    })
  })

  