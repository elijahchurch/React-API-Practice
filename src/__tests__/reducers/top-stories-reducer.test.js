import topStoriesReducer from "../../reducers/top-stories-reducer";

describe("topStoriesReducer", () => {

    const initialState = {
        isLoaded: false,
        topStories: [],
        error: null
    };

    test("should successfully throw a new error if a non-matching action type is passed into it", () => {
        expect(
            () => {
                topStoriesReducer(initialState, {type: null})
            }
        ).toThrowError("There is no action matching null.");
    });

    
})