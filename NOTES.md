
### Rules:
  # User clicks on an area in the photo which enables a 'targeting box' around click.
  # Target box contains a list of possible characters.
  # User selects one of the characters which enables a check with backend server to see if target box contains the character.
  # Provide feedback to user => If correct, place a marker on character else an error message.
  # Remove targeting box after message in both cases.
  # Provide a timer from photo first load to successfully finding last character.
  # After round is completed, get input of player and time to be recorded. Anonymous users can be added.





### ✅ ToDos:
  [✅] Mouse click should render the 'circle' image as the target box.
  [✅] Create function that will get the coordinates within the target box.
  [✅] Create a function that displays characters after click for player to choose.
  [✅] Check if the target box coordinates contains chosen character coordinates.
  [✅] Remove 'circle' target box after every click.
  [] If successfully found, remove character from state list. If not, error message.
  [] Create a component for success/error messages (modal).


  






### Notes:
  # What exactly does `npm run build` do?

### Learned:
  # `npm run build` creates the 'build' directory that will contain index.html and static CSS and JS files. These files contain the minified version of the existing respective source codes. These copies will be optimized for production. Think of it like a final stamp after your development work is completed. If you need to edit a file within the build directory, make changes to the source code then `npm run build`. This will overwrite the existing files within build directory. Not necessary to delete the build directory.
  # In React, using data directly from state will not return the most recent value b/c of the asynchronous nature of React. In this case, if there is a function that returns the value similar to the value from the React state, use function for the most updated data.
  # React `useCallback`: A React hook that caches its function and will prevent rendering unless one of the dependencies has changed even when the parent component has re-rendered. Typically every time the parent component renders, all its child components will recursively be rendered as well. The useCallback hook helps optimize your code by only re-rendering if one of the dependencies does not match the cached data of its function. A good time to use useCallback is when there are performance issues where rendering can cause your page to load slowly or interacting with inputs cause a UI delay. TLDR: Skip re-rendering if the value of the function hasn't changed. Do not forget to add a dependency array otherwise this will return a new function every time defeating the purpose of using useCallback in the first place!
  # Invoking `validateCoordinates` function within the handleClick function for `CharacterSelector` component was not working since validateCoordinates required the `event` to be derived from the main game image. This is due to getting the coordinate data that is relative to the image. Placing the validateCoordinates function anywhere else in the code base would have been using coordinates not relative to the image which is an issue. So, in order to resolve, we simply invoke useRef `currentCoordinates` to store an object value from validateCoordinates. Now, we can use currentCoordinates to destructure the top, bottom, left, and right instead of using `generateTargetBox(event)` (again, this failed b/c generateTargetBox(event) needed to be called within the onClick of HeroImage to get the relative coordinates from the image itself).
  # When using setState to store data, use the array method to store current and previous data. If the original useState is set as an object as a default value, then objects will be stored into the array. However, if you want to store objects instead of an array, then make sure you have a unique identifier as an object key in order to do so.`setCharactersFound((prev) => ({...prev, [foundCharacter.id]: foundCharacter}))`
  # If you have a utility function where it may be accepting data from useState and you have a function that is updated that same useState, note that any other components that may be using the data from the utility function will not see any updates happening. This is b/c utility function do not have a way to automatically when data from useState has been changed. This is a feature of React components through hooks and props. Utility functions are neither.