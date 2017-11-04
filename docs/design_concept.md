# Concept for the Design of GBG #

## Relevant Documents ##

1. A7E software requirements document.
2. Better Documentation, the _key_ to better
   software.
3. Rational Design Process: How and Why to Fake it
4. Functional Documents for Computer Systems
5. On a Formal Semantics of Tabular Expressions
6. Pandoc user guide

## Creating Documentation for GBG ##

This section desribes how to go about producing the documentation for GBG.
It should take into account the realities that not all members of the team
will think it is a good idea.

## GBG Requirements ##

This section lists ideas for precisley describing GBG''s behavior and look

The first step according to [4] should be to identify the monitored and
controlled variables.

### Monitored Variables ###

1. Commands:
    a. Commands to each of the graphical widgets.
    b. Text entry
2. Git repositories. The git repositories are not under the exclusive control
   of GBG. The user might change them through other tools
3. Translation of input device (keyboard & mouse) signals to commands.
   This can be described in terms of familiar events:
    a. Mouse left key down
    b. Mouse left key up
    d. Mouse left key double click
    e. Mouse left key triple click
    f. Mouse wheel scroll up
    g. Mouse wheel scrool down
    h. Mouse wheel key down
    h. Mouse wheel key up
    i. Mouse wheel key left
    j. Mouse wheel key right
    k. Mouse right key down  
    ...
  
   Some questions here:
  
   a. If we have overlapping widgets, which widget will receive an input
   event? How to decide which widget is in focus?
   b. A mouse is a very "narrow" input device. It only has one stream, it
   can only send commands to one widget. This is not true of touch
   displays for example.

4. External events:
    a. Close button was pressed.
    b. Window was resized.
    c. Window was maximized.
    d. Window was minimized.
    e. Window was sent to the system tray.
    f. Window was moved.
    g. User pressed Alt + F4 on MS Windows or the
       euqivalent key chord on Linux or Mac OS.
    h. File sytem events:
        i. git repository is not found
       ii. git repository is not responding

### Controlled Variables ###

1. Graphical widgets
2. Git repositories

Note(duckflyer): Can''t forget about the latencies.


### How does the workflow of working with GBG look? ###

1. The user starts GBG
2. Open a repository
3. Send GBG a command, this can be any of the following types:
    a. Open another repository
    b. Switch to another repository
    c. Close another repository
    d. Send a command to one of the widgets
4. Close the repository or go to stage 2
5. Go to stage or exit GBG

### What are the Main GUI Widgets? ###



#### Widget Representation ####

According to [4], the controlled variables should be assigned a mathematical
variable. But how do you do that?

First we will have to list the graphical widgets, then draw them and identify
interesting quantities.

### GBG Requirements Document''s Organization ###

How to organize the requirements document to be useful?

TODO(duckflyer): What are the criteria for a requirements document?

 - Tell''s you everything you need to know to design the system and
   nothing else.
 - Same as any other document:
    * Accurate
    * Precise
    * Complete - Value of controlled variables is assigned to every
                 possible value of monitored variables

## GBG Modules ##
    
    TBD.

