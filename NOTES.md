
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
    - You have the center point coordinates from the mouse click.
    - Using those coordinates, you can check if any character coordinates are +/- range of the centerpoint.
    - From the centerpoint, check to see if x +/- value contains the x.value of any characters. Do the same for y.value.
  [] Create a function that displays characters after click for player to choose.
  [] Check if the target box coordinates contains chosen character coordinates.
  [] If successfully found, remove character from state list. If not, error message.
  [] Remove 'circle' target box.


  






### Notes:
  # What exactly does `npm run build` do?

### Learned:
  # `npm run build` creates the 'build' directory that will contain index.html and static CSS and JS files. These files contain the minified version of the existing respective source codes. These copies will be optimized for production. Think of it like a final stamp after your development work is completed. If you need to edit a file within the build directory, make changes to the source code then `npm run build`. This will overwrite the existing files within build directory. Not necessary to delete the build directory.
  # In React, using data directly from state will not return the most recent value b/c of the asynchronous nature of React. In this case, if there is a function that returns the value similar to the value from the React state, use function for the most updated data.
  # React `useCallback`: A React hook that caches its function and will prevent rendering unless one of the dependencies has changed even when the parent component has re-rendered. Typically every time the parent component renders, all its child components will recursively be rendered as well. The useCallback hook helps optimize your code by only re-rendering if one of the dependencies does not match the cached data of its function. A good time to use useCallback is when there are performance issues where rendering can cause your page to load slowly or interacting with inputs cause a UI delay. TLDR: Skip re-rendering if the value of the function hasn't changed. Do not forget to add a dependency array otherwise this will return a new function every time defeating the purpose of using useCallback in the first place!