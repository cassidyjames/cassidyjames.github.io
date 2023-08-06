---
title: I’m back from GUADEC 2023
description: Here’s what I got up to in Rīga, Latvia
updated: 2023-08-06

image: /images/blog/guadec-2023/card.jpg
---

I'm back from Rīga, Latvia where I attended GUADEC 2023—the annual GNOME conference. It was my first time attending since 2019 due to COVID-19 plus having had another child in 2022. It simultaneously felt like it had been ages since seeing everyone, and like we picked back up after no time at all.

<figure class="full-bleed" markdown="1">
![Old building](/images/blog/guadec-2023/hero.jpg)
</figure>

For me, **attending GUADEC in person is exceptionally important**: the face-to-face conversations, exploration of the host city, eating and drinking together, and spontaneous hacking all serve as powerful bonding experiences and help develop mutual understandings of the actual humans behind online usernames and avatars. We come away from GUADEC with fresh ideas, new perspectives, stronger friendships, and renewed energy to make GNOME and the open technologies we all care about better than before. You can get a small fraction of that from remote attendance—and remote participation is important to make the event as accessible and inclusive as possible—but I greatly prefer in-person participation if at all possible.

While traveling from the US was as long and grueling as ever (and meant nearly two weeks away from my family), it was ultimately worth it to be in person. I just hope we can spread GUADEC out a bit more in coming years so it’s not this hard every year. 😅 More on that in a bit…

* Table of Contents
{:toc}

### GNOME Advisory Board

I was given the opportunity to attend the GNOME Advisory Board meeting for the first time, representing Endless. The Advisory Board is a group of organizations involved in and with a vested interest in the success of GNOME that meets twice annually—at GUADEC and FOSDEM. There is no decision making authority, but it serves as a time for people from these organizations to get together with one another and the elected GNOME Foundation Board of Directors to discuss their ongoing and upcoming plans as they relate to GNOME.

There is a shared understanding of both collaboration and confidentiality—we share with one another what we can to coordinate our efforts, ultimately multiplying our individual organizations' impact. Because of the understanding of confidentiality, I won’t go into detail; but here were common threads and conversations:

#### Accessibility

Multiple people mentioned investing efforts into improving accessibility of GNOME technologies. Platform modernization with Wayland and GTK4 brought troves of technical improvements, but the resources for tackling accessibility to ensure it remains as good as our better than in the last have been lacking in recent years. This has been recognized and I'm confident it will be well-addressed.

In addition to resources provided by organizations, there may be funding from grants to help in these areas in the coming years. If you are someone who is aware of grant application processes or knows of specific grant programs, this is a huge way you can contribute to GNOME; reach out to the Foundation to help coordinate securing additional funding in this area. Or contact me, and I can point you in the right direction—my contact details are in the footer!

#### Member Participation

Due to a variety of reasons, the Advisory Board meeting was less-attended this year than in the past. We discussed this a bit—particularly over the lunch hour—and brainstormed ways to ensure everyone can be represented. One area identified was that the move from mailing lists to Discourse and GitLab may have left some folks behind, and this will be addressed. We also identified outdated contact details and planned to speak to specific individuals to help ensure member organizations knew of the meeting and knew their attendance was welcome and encouraged.

We also chatted a bit—both at the meeting and throughout the week—about how we could encourage other organizations to join the Advisory Board to represent diverse interests. This inspired me to sign up for a “What is the GNOME Advisory Board?” lightning talk as a first step towards demystifying the Advisory Board—and encouraging more organizations to join.

#### Travel Sponsorship & Hackfest Locations

A member of one organization reported that they were able to help GNOME by providing physical space at their organization’s offices for hackfests, which is another great way organizations can contribute to GNOME; travel is one aspect of organizing meetups, but having a well-resourced location is important as well. If you work for an organization that could help out in this area as well, let the Foundation know—or contact me via the details in the footer and I can forward it on.

There was also feedback about the travel sponsorship process; this was an area the Foundation knew was a bit painful this year as things moved to GitLab, and some outdated information persisted in other places. But it's being addressed.

#### Reproducibility of Flatpaks

We heard an update from Flathub as well as at least one member organization that there are mutual interests in getting reproducible Flatpak builds integrated with Flathub.

I'm not deeply into the enterprise world, so forgive me if I don't quite get this right, but; my understanding of one example was that if an enterprise distribution wants to encourage their customers to use Flathub because it's where the apps are, they should be able to sign off on a hash of the app build built on their own infrastructure—even if the customer ends up downloading that build from Flathub's infrastructure. If the apps are built reproducibly, the hashes would match, so it wouldn't matter where the bits themselves came from.

I know this is an important step in the overall trust model of a neutral infrastructure like Flathub, anyway; you should be able to trust the middleware not because of the people who are involved (and they're good people!), but because it's entirely transparent and auditable.

#### Upstreaming More than Code

Something raised was: how can the Foundation and Advisory Board organizations better support upstreaming more than just code contributions—that is, things like metrics, survey results, user study results, and rationale behind design decisions? For example, some downstream distributions make design decisions that aren't upstreamed into GNOME (think: adding a dock, changing stylesheets, etc.). While downstream differentiation is important to those organizations, _are_ there ways we can better support that or learn from those changes upstream to make GNOME a better product for all the downstreams?

This was more of a "get the gears turning" discussion without any specific immediate actions or outcomes, but it was an interesting conversation nonetheless.

### My Talks

I originally planned to give one talk this year: an updated and more GNOME-specific version of a talk I gave last year at the Ubuntu Summit. Since I was involved with the GNOME Design team over the past year, I also ended up volunteering to co-present the annual _GNOME Design State of the Union_ talk, then I signed up for the aforementioned _What is the GNOME Advisory Board_ lightning talk—and then I was _almost_ roped into co-presenting another talk but ended up just helping write and prepare slides for it. 😅️

I actually _really_ enjoyed being so involved this year, and I regret not getting signed up to help with introducing speakers, A/V, or some other volunteer position. Maybe I'll make up for it next year…

#### How to Make a Delightful App Listing

This was a fun talk, but I committed one of the conference sins I always try to avoid: I rewrote much of it the night before. 😬️ It was honestly not that bad since I'd presented a version of it last year, but it turns out that Flathub had since published [really great AppData guidelines](https://docs.flathub.org/docs/for-app-authors/appdata-guidelines/)—and I only learned of this at a bar the night before my talk. So… I rewrote the last section of my talk incorporating some of that advice.

In the end, I think it made the talk _far_ better. It was a good taster of the guidelines and I hope it encouraged app developers—both of core GNOME apps, GNOME Circle apps, and the broader ecosystem—to revisit their app listings to present them in the best light possible.

I've published the [slides, speaker notes, and a link to the stream](/talks/guadec-2023/how-to-make-a-delightful-app-listing/).

#### GNOME Design: State of the Union

The annual update from the GNOME Design team was fun to participate in. While I wasn't deeply involved in making mockups, icons, or major design decisions, I was involved nearly every week over the past year in providing feedback and insight. We divided the talk into a six sections plus an intro and summary, with us each presenting two of those. I took the Intro and Core Apps; while they were brief, it was great to be able to share the stage with (and show off the work of) talented folks constantly pushing GNOME design forward.

Here are the [slides and a link to the stream](/talks/guadec-2023/gnome-design-state-of-the-union/).

#### What is the GNOME Advisory Board?

This was the lightning talk I decided to put on the schedule after attending my first GNOME Advisory Board meeting. It was pretty rapid-fire, and most of the actual content came straight from the GNOME wiki, but I got a _lot_ of feedback afterwards that it helped demystify the Advisory Board—and even inspired a few people to reach out to organizations to encourage them to join. 🙌️

I've published the [slides and a link to the stream](/talks/guadec-2023/what-is-the-gnome-advisory-board/).

#### New Users for GNOME

This was a talk by Robert McQueen, CEO of the Endless OS Foundation and President of the GNOME Foundation Board of Directors—but Will Thompson and I did help out a bit in preparing notes and some slides. 😁️

Rob pulled it all together into great talk sharing insights, knowledge, and ways forward learned by our work at Endless—particularly around how first-time computer users (including both kids and adults) are an impactful target audience for the work we do on GNOME.

[YouTube Stream](https://www.youtube.com/live/Pd4XSi4zrPs?feature=share&t=698)

### Hallway Chats

A huge part of the GUADEC experience for me is the "hallway" chats often happening literally in hallways, but also over lunch, drinks, or late nights in someone's accommodation. 

#### GUADEC 2024: Denver, CO, USA 🎉️

A persistent focus of mine was on GUADEC itself: how it was organized, how people "did" GUADEC, and what their feedback was. This was because—as was announced in the closing ceremony—**GUADEC is coming to my home town of Denver, Colorado in 2024!** I think I kept the lid on it until the closing ceremony, but I made sure to pay attention people to and listen to their input.

One tiny example of feedback: yoga mats! Someone suggested that with all the travel, walking, lugging backpacks, and late nights, it would be nice to have a quiet corner somewhere with half a dozen or more yoga mats and sanitizing spray. Attendees could take a moment to stretch out or just center themselves during a break. I thought this was a great idea, and I'll be pushing for this in Denver—maybe it will become a recurring part of GUADEC?

We also talked a lot about how to document things clearly on the GUADEC website, reducing the duplicated GUADEC communication channels (I think I counted five different channels on Matrix… and most people only used one), encouraging inclusive eating options like vegetarian, vegan, and gluten-free restaurants, and of course: all the fun things people would want to do in and around Denver (Casa Bonita? Meow Wolf? The mountains?).

Another area we focused on was climate impact: while flying a bunch of Europeans to the US obviously has its impacts, there will also be significantly reduced travel for many of us within North, Central, and South America. Even so, I'd like to encourage lower-carbon transit options as much as possible, e.g. rail and bus if possible within the US, trying to keep everything for the week of GUADEC itself along convenient public transit or walkable, and reducing our impact in smaller but meaningful ways like encouraging reusing lanyards and avoiding other single-use waste. Philip Withnall provided some great tips for me, and I'll be taking his advice for how to approach some of these areas.

#### The Can of Worms: Metrics

Against my better judgment (and the advice of friends), I broached the topic of privacy-preserving metrics once or twice… In all honesty, GUADEC hallways/bars are the perfect sort of place to have these conversations without the pressure of forming an Internet Opinion™️ etched forever into the collective memory. We've regularly been having these sorts of conversations since at least 2018, anyway, and while recent Fedora Discourse threads of doom have made it more of "a thing" than in years past, I felt it was important to speak candidly about it in person.

I came away with a few insights.

First, there are real areas where GNOME maintainers literally don't know if complex code paths are _ever_ touched in the real world, and this is an area a privacy-preserving tally-counter could provide real value to users; for example, GNOME Document Viewer (Evince) apparently handles something like ten more file formats than just PDFs, but nobody we talked to _at a GNOME developer conference_ even knew that. Document Viewer is also one of the handful of apps that hasn't been ported to GTK4 and Libadwaita, in part due to the complexity of maintaining those codepaths. It sure would be beneficial to the maintainers to know if anyone actually uses those other formats in Document Viewer, and if not, it could greatly speed up the modernization of the app—bringing both consistent design and improved performance—by simplifying what it supports. At the same time, if it turns out that one or two other format than PDF is actually widely used in the wild, then that could inform the design of Document Viewer as well, making it better at handling the tasks it's actually used for.

Second, people _still_ don't really know the details of the open source metrics system developed by Endless and proposed to be used by Fedora. For example, the system protects privacy by reducing precision on the client side while still answering broad topics, e.g. by filing off the last several digits of latitude and longitude in estimated geolocations. It can aggregate data points locally and only submit a _summary_ of events—e.g. an aggregate count of _how many times_ a specific feature was used over the past week rather than submitting a timestamped event _every time_ the feature was used. This was well received, but it was also clear that it could be better communicated since people didn't know it.

Third, the idea of further "fuzzing" data via [differential privacy](https://en.wikipedia.org/wiki/Differential_privacy) or [randomized response](https://en.wikipedia.org/wiki/Randomized_response) (techniques from at least as far back as the 1960s to collect aggregate information while protecting individual privacy) was very popular. While the aforementioned reduction in precision is already implemented, this sort of randomized response to ensure individual event deniability is not yet—this is a clear area that could improve the system for all users.

Lastly, people seem to be scared to raise their (or affiliated organizations') heads over the parapet to become a target of The Internet Mob. It's understandable considering the difficulty in communicating nuance plus the knee-jerk backlash from people around the Fedora proposal. However, I think this is actually a downstream issue from the two above: if people don't know how this works _and_ it doesn't handle privacy preservation in some ways as thoroughly as say, Apple (even if it does so in a much more transparent and auditable way), then it sounds easier to just avoid it. Perhaps more energy could be spent around addressing those areas—in the end, GNOME contributors are some of the most privacy-conscious people and are _exactly_ the type of people I want designing and developing anything to do with metrics, but that's a point that seems to be lost on the Internet at large.

#### Guerrilla User Testing

An entertaining and at least mildly insightful task at GUADEC was cornering unsuspecting locals and getting them to try GNOME. Okay, it wasn't _quite_ like that: we did find friendly faces at coffee shops and around town who were willing to take a few moments to run through some impromptu user testing around the Activities button and the new [proposed design](https://www.omglinux.com/gnome-test-activities-button-replacement/). This included locals, staff of venues, and attendees' partners who are not currently GNOME users.

I think there will be more shared on this process in the future, but my take-away was that the informal nature of this served as a sort of vibe check more than anything; we weren't disciplined in how we took notes, what leading questions we asked or avoided, and how we presented it from person to person. Allan Day did write up a great more formal process that I'd like us to follow to get better results from, though.

### Summary & Thanks

I originally set out to detail every talk I attended, each social venue, etc. but there was _so much_ to talk about around the "hallway" track that I wanted to detail that, instead. I would highly recommend taking a look at the [YouTube Playlist of talks](https://www.youtube.com/playlist?list=PLcb5uDX8FIoCXfTI9t2a47WUDoPG7sIMD): they were all professionally recorded and streamed, and a gracious commentor has provided timestamps to each talk. 🙏️

I hope this write-up provided some insight into the goings-on of GUADEC and my experience there.

I'd like to thank my employer, the Endless OS Foundation, for allowing me to spend an entire week of work at GUADEC; it's an incredibly valuable aspect of GNOME, and I love that Endless sees that. I'd also like to thank the GNOME Foundation for partially sponsoring my attendance as a member of the GNOME Foundation; ensuring people can get to these events is crucial for community building and all of the high-bandwidth communication that can really only happen in person.

[![Sponsored by GNOME Foundation](/images/blog/guadec-2023/sponsored-by-foundation.png){: width="160" }](https://wiki.gnome.org/Travel)
