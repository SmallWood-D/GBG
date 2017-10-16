# User requirements
The list is not organized in any order, the requirements positions are random.

### *GBG* will support the fowlling requermwents and features 



#### requermwents
___
  1. work as an online/offline program.
  2. be able to receive git data both from local and remote repositories.
  3. have configurations files for repositories path, styles and more.
  4. have an interactive interface, action preformed in the UI will affect the repositories in real-time and vice versa.
  5. show the latest state of the repository.  
  6. work on various platforms (Win, Unix, Android, Mac?).
  7. work on various displays - sizes and resolutions.
  8. be easily deploy and run.
  
  

#### features
___
1. Support languages other than English for the UI.
2. Support Undo when editing text.
3. Support Undo on UI operations.
4. display only commits by a certain author, by a certain commiter. Between some range of dates, changing a particular file, by tag etc.
5. display only selected commits This becomes more useful if the user has a very hairy DAG and manually selected two lines of development that s/he care about.
6. Support selecting commits graphically.

   1.Click on a commit UI element to clear the current selection and add the commit.
   
   2.Ctrl click on a commit UI element to add the commit to the current selection.
   
   3.Alt click on a commit UI element to remove the associated commit from the current selection.
   
   4.Click on a branch to select all the commits starting from the first merge base the the tip of the branch.
   
   5.Shift selecting a commit UI element to add all the commits from the current selection to it.

   6.Extend/Contract selection.
