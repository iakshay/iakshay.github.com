---
title: GSoC - Post Midsemster
layout: post
tags: gsoc2013
custom_css: .noindent{text-indent:0 !important!;}
---

Finally GSoC comes to an end, this update is all about my progress after Midsems. Its been really challenging to find time after midsemesters owing to college course work.

Most of my progress after Mid Sems has been on the **[Fluid Collaboration Application][0]**. The app uses the Fluid [WebRTC Component][1] that I had developed before midsems. 

## Features
As mentioned in the deliverables, the app has following features -:

- WebRTC Video Conferencing (ofcourse!)
- Multi - User Chat
- Realtime Notes
- Responsive Layout

## Implementation

- For the home page, I'm using [localStorage][2] to save user details so the user doesn't need to enter details again and again.
- Implementing the layout was the tricky part. I didn't want to use JavaScript for layouts *(its bad!)*. While I wanted the app to be Responsive (atleast for tablets). And didn't want horizontal or vertical scrollbars. Using 100% height for body, kept the modules to the height of the window.
- I also added features to change layouts depending on the need of the user. So if you wanted to only chat, you can switch to Chat Only Mode. Clever use of CSS3 Transitions here for smooth UX.
- I'm using [socket.io][3] for implementing the chat rooms. 
- Video conferencing was easy, since the Fluid component had been developed earlier
- For notes, I'm using [ShareJS][4]. This is still patchy, I'm planning to use [etherpad][5].

The list is probably endless, hope I can implement few of these after GSoC

## Screenshots
{.noindent}*The Home page layout*
![Home Page](https://dl.dropboxusercontent.com/u/1009393/iakshay.net/fluid-collab-1.png)

{.noindent}*Default Chat Room*
![Default Layout](https://dl.dropboxusercontent.com/u/1009393/iakshay.net/fluid-collab-2.png)

{.noindent}*Video Conferencing and Chat only Layout*
![Video Conferencing and Chat Layout](https://dl.dropboxusercontent.com/u/1009393/iakshay.net/fluid-collab-3.png)


## Github Repo
[Fluid Collaboration][1]{.button .medium}
[Fluid WebRTC Component][0]{.button .medium}

##Future Scope
I still think there is a lot that can be done to make this app beter. Few improvements I plan to work on after GSoC
	
- **Off Canvas Menus on smartphones**, this should give more space to smartphone users. Although WebRTC support on smartphones isn't great right now. So this isn't high on priority.
- **Chat Notifications**, using Notofications API. Something like G
- **File Sharing** via WebRTC. Yes, P2P File sharing is possible in browser
- **Rich text Editing** in Notes, this is going to be tricky. I think using etherpad is probably better option.
- **Better Accesibility**, need to make Chat and Notes better accesible.

The list is probably endless, hope I can implement few of these after GSoC.

Its been really fun working working with WebRTC and Fluid Infusion Framework. WebRTC certainly the next big thing on the web. Glad I got the opportunity to work on WebRTC through GSoC. I'm going to try and continue making contributions to the application.

[0]: https://github.com/iakshay/fluid-collaboration
[1]: https://github.com/iakshay/fluid-WebRTC
[2]: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage
[3]: http://socket.io/
[4]: http://sharejs.org
[5]: http://etherpad.org/
[6]: http://fluid-collaboration.herokuapp.com