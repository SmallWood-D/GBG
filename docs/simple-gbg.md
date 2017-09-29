# Simple-GBG

We still do not have a plan of how to create GBG but we know
that we better agree on the requirements, or what is GBG
exactly. I'm not clear on what exactly I'd like GBG to be so
I figured I will draw a simple version, and expain it.

A [picture](graphics/simple.svg) of _simple-GBG_.

You can use Inkscape to edit this file and view it with a
web browser.

## Why Simple-GBG?

3. It was easy for me to draw in half an hour.
2. It helps explore some of the decision that  
   we will have to make.
1. It can be a first goal that is easier, and more minimal.

## Discussion of the Picture

If you open the graphics there are 4 elements:

1. Name of the repository at the top.
2. Branch structure is visible.
3. Commits appear with the first line of the commit message
  shown if it is short enough to fit.
4. Branch names "*master" and "branch" appear next to their
  initial commit.

This is very simple but still gets the main point of what I
had in mind (almost).

### Notes About the Picture

1. It is not interactive, it can be a static png file as far
  as the user is concerned.
2. No colors.
3. Commits are connected in straight lines.
4. Even though this has antialiasing, it's not essential at
  first.
5. Long commit messages are cut off with an elipsis.

### Some Questions When Looking at the Picture

1. How to draw the graph? It can be a straight line with a
  90 degree fork for the branch but only at first.
2. How to make sure commit messages do not intersect with
  one another?
3. What information should we provide other than the
  commiter/author and what to do if they are not the same
  person?
4. Is this helpful in a serious project with tens of
  thousands of commits and hundreds of branches? Can we
  make it helpful? Do we want to?


## Conclusion

The two main questions that came up are basically scale
and interactivity:

- Scale: Can such a display tool be useful for real-world
  projects? Can we make it useful?
- Interactivity. There are two kinds.
  + Interaction with the graphical representation of the 
    repository. In this form of interaction, the user can
    change the properties of the graphical elements and
    query the repository but not change the repository.
  + Interaction with the repository. This is currently not
    in the scope of the project but it's a natural
    extension.
