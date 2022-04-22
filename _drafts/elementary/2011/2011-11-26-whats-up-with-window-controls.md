---
title: "What's Up With Window Controls?"
author: danrabbit
tags:
  - design
---

It's the stuff of epic flame wars. "My button position is better than yours" surely gets the blood boiling. So let's take a second and talk window controls. What do they do, why do we have them, what order should we put them in, and on what side of the screen.

## What do we have here...

I think we’re all familiar with common window controls. We have Close, Minimize, and Maximize. But historically, there have been some other controls like Shade and the definition of "Maximize" kind of depends on what platform you're working with. Additionally, Apple has recently added a new "Full Screen" button and I think we all remember talks of Windicators. Then again, some others are going in the opposite direction, like GNOME, and only include a single close button. And we can't forget that on Tablet and Phone OS's we haven't really seen any window controls at all. So let's take a bit of a look at what controls do and how we can make them make more sense.

## Close

This is probably the standard window control. No matter what environment, you need a way to close your apps. Typically, this is denoted by an 'x', sometimes red or orange. It's probably the most obvious button too. When you click, your app's window disappears. Poof, gone. But, uh, sometimes It's not really gone. For example, when you click close on a music player's window, you expect it still play music right? But wait, isn't that what Minimize is supposed to do? This is a bit of a dilemma. [Does close mean close or quit?](https://ubuntu.com/blog/quit)

## Background Processes

When Apple first came out with the iPhone, it was not a multi-tasking device. You got to open one app, and then pressing the home button quit the app. The home button in their case, is the close button in our case. Close means quit. Except there's that darn music player again. Pretty soon, it was apparent that third party developers needed a way to have background processes. They needed to be able to watch for notifications, to play music, to use location services, the works. So, Apple added a second button to the iPhone for minimize. What? It didn't happen like that? Oh, I must be confused.

## Saving State

Another thing that comes up in a multi-tasking environment is that when you switch from one app to another app, you resume your work right where you left off. If you switch from your word processor to your web browser, you expect that when you go back to your word processor it's going to show the same document you were working on. And likewise, when you go back to your web browser you expect it to show the page you viewed last, not go back to your home page. So we must need another button to save us from these woes.

## Minimize

Minimize does about the same thing as close from a user's perspective (it closes the window), but it does something completely different from a developer's perspective. It lets the process continue to run in the background and it preserves the state of the application. This is huge! But one big question is this: if close and minimizing looks about the same to a regular user, how are they supposed to know which one to do?

## Developer Knows Best

Some app developers provide work-arounds for this problem. Close sometimes means minimize and just keep running in the background anyways. You know, most of the time it works out. Some developers have even been working on making sure that their apps save your session when they quit. BeatBox and Midori both remember what you were doing when you quit and put you right back there when the app is opened again. This is becoming a trend. So in a lot of cases, close is starting to mean minimize to the end user. Let's keep that in mind and move along.

## Our Friend, Maximize

It seems like there are quite a few views of what Maximize really means. One school of thought is that it means "make the window as large as it takes to display all the content you're viewing." Another is "make the window as large as possible without covering the panel or the dock". Yet another says we should automatically hide and show the dock to make room for the window. And Apple seems to have said "Go big or go home" by introducing a full screen button. So I guess the question is, when you maximize an app, what are you intending to do? Usually it's either that you want to show more content, or you want to focus in on that one app. So that puts two schools of thought to the forefront: our "make the window as large as it takes to display it's content" guys and our Full Screen lovers. But since Full Screen already does make the window large enough to display it's content, that seems like the way to go doesn't it? Since there is a fuzzy line between “Full Screen” and “Hide docks and panels when I Maximize”, we could get away with some intelligent hiding modes and using our normal maximize button. This would also allow for a customizeable behavior. Traditional maximize or a faux full screen, it’s your choice.

## Placement

Let's assume for now, because of our previous talk, we're only going to use two buttons. We've decided that the developer knows best when it comes to what close means, so we're going to trust him and drop the minimize button. We've also decided that having both maximize and full screen is a bit redundant, so we're gonna go all the way with a wanna-be full screen button. But where in heaven's name do we put them? Commence flame war!

## Let The HIG Decide

In our HIG, we say that we'd like the most commonly used toolbar buttons on the left side of the window, and the least commonly used on the right side. This is because of the way we read and where our brain says that our eyes should start on a page (in GTK, when you use a Right-To-Left language, the toolbar layout is flipped). Why not apply the same logic to the window controls? Let's place the most used ones on the left side, and the least used ones on the right side. And since we now only have two window controls to deal with, this should be easy!

Close is something that just about every window uses. We could get by without a maximize control, but we have to have close. And in fact some windows do get by without a maximize control. So we're definitely putting close on the left side of the window. Every window is closed at some point in time. As far as maximize goes? Well, now that we think of it, it's kind of more of a preference isn't it? I mean, you have some apps that you always maximize and a whole bunch that you never maximize. You hardly go around making apps big and small and big and small do you? So I think it's safe to say we can banish this one to the right side of the window without hurting anyone's feelings.

## In Conclusion

We end up with a few things. We get a simplified button layout with only two buttons instead of the typical 3 or 4, and where we never have one button appear to do the same thing as the other. We avoid accidental clicks, and there has been a persistent (though sometimes quiet) desire to have the close button separated from other buttons. Finally, we get an arguably unique layout where we don't group all of our buttons on one side of the window.

## BUT.. BUT.. BUT WAIT!!!

Before you explode in your chair and start a riot, let's just say that it's not over until the fat lady sings. There is still a long road to Luna and a lot of testing needs to be done. We're unsure about things like intellihide by default especially when it comes to Wingpanel and we need to be really confident before we start dropping things like the minimize button. Try to leave kind words in the comments and contribute only to constructive conversations :)
