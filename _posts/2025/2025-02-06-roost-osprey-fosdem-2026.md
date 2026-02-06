# ROOST at FOSDEM 2026

## Showing up for the Open Source community

A few months ago [I joined ROOST](https://cassidyjames.com/blog/ive-joined-roost-oss-community-open-online-safety/) (Robust Open Online Safety Tools) to build our open source community that would be helping to create, distribute, and maintain common tools and building blocks for online trust and safety. One of the first events I wanted to make sure we attended in order to build that community was of course [FOSDEM](https://fosdem.org/2026/), the massive annual gathering of open source folks in Brussels, Belgium.

Luckily for us, the timing aligned nicely with the v1 release of our first major online safety tool, [Osprey](https://github.com/roostorg/osprey), as well as its adoption by Bluesky and the Matrix.org Foundation. I wrote and submitted a talk for the FOSDEM crowd and the decentralized communications track, which was accepted. Our COO Anne Bertucio and I flew out to Brussels to meet up with folks, make connections, and learn how our open source tools could best serve open protocols and platforms.

### Brunch with the Christchurch Call Foundation

Saturday, ROOST co-hosted a brunch with the [Christchurch Call Foundation](https://www.christchurchcall.org) where we invited folks to discuss the intersection of open source and online safety. The event was relatively small, but we engaged in meaningful conversations and came away with several recurring themes. Non-exhaustively, some areas attendees were interested in: novel classifiers for unique challenges like audio recordings and pixel art; how to ethically source and train classifiers; ways to work better together across platforms and protocols.

Personally I enjoyed meeting folks from Mastodon, GitHub, ATproto, IFTAS, and more in person for the first time, and I look forward to continuing several conversations that were started over coffee and fruit.

### Talk

Our Sunday morning talk [“Stop Reinventing in Isolation”](https://fosdem.org/2026/schedule/event/U7ABHE-roost-osprey/) (which you can [watch on YouTube](https://www.youtube.com/watch?v=EOoUfaInsaE) or at [fosdem.org](http://fosdem.org)) filled the room and was really well-received.

In it we tackled three major topics: a crash course on what is “trust and safety”; why the field needs an open source approach; and then a bit about Osprey, our self-hostable automated rules engine and investigation tool that started as an internal tool built at Discord.

#### Q&A

We had a few minutes for Q&A after the talk, and the folks in the room spurred some great discussions. If there’s something you’d like to ask that isn’t covered by the talk or this Q\&A, feel free to [start a discussion](https://github.com/roostorg/osprey/discussions)\! Also note that this gets a bit nerdy; if you’re not interested in the specifics of deploying Osprey, feel free to skip ahead to the Stand section.

**When using Osprey with the decentralized Matrix protocol, would it be a [policy server](https://matrix.org/blog/2025/04/introducing-policy-servers/) implementation?**

Yes, in the Matrix model that’s the natural place to handle it. Chat servers are designed to check with the policy server *before* sending room events to clients, so it’s precisely where you’d want to be able to run automated rules. The Matrix.org Foundation is actively investigating how exactly Osprey can be used with this setup, and already have it deployed in their staging environment for testing.

**Does it make sense to use Osprey for smaller platforms with fewer events than something like Matrix, Bluesky, or Discord?**

This one’s a bit harder to answer, because Osprey is often the sort of tool you don’t “need” until you suddenly and urgently do. That said, it is designed as an in-depth investigation tool, and if that’s not something needed on your platform yet due to the types and volume of events you handle, it could be overkill. You might be better off starting with a moderation/review dashboard like Coop, which we expect to be able to release as v0 in the coming weeks. As your platform scales, you could then explore bringing Osprey in as a complementary tool to handle more automation and deeper investigation.

**Does Osprey support account-level fraud detection?**

Osprey itself is pretty agnostic to the types of events and metadata it handles; it’s more like a piece of plumbing that helps you connect a firehose of events to one end, write rules and expose those events for investigation in the middle, and then connect outgoing actions on the other end. So while it’s been designed for trust and safety uses, we’ve heard interest from platforms using it in a fraud prevention context as well.

**What are the hosting requirements of Osprey, and what do deployments look like?**

While you can spin Osprey up on a laptop for testing and development, it can be a bit beefy. Osprey is made up of four main components: worker, UI, database, and [Druid](https://github.com/apache/druid/) as the analytics database. The worker and UI have low resource requirements, your database (e.g. Postgres) could have moderate requirements, but then Druid is what will have the highest requirements. The requirements will also scale with your total throughput of events being processed, as well as the TTLs you keep in Druid. As for deployments, Discord, Bluesky, and the Matrix.org Foundation have each integrated Osprey into their Kubernetes setups as the components are fairly standard Docker images. Osprey also comes with an optional coordinator, an action distribution and load-balancing service that can aid with horizontal scaling.

### Stand

This year we were unable to secure a stand (there were already nearly 100 stands in just 5 buildings\!), but our friends at Matrix graciously hosted us for several hours at their stand near the decentralized communications track room so we could follow up with folks after our talk. We blew through our shiny sticker supply as well as our 3D printed ROOST keychains (which I printed myself at home\!) in just one afternoon. We’ll have to bring more to future FOSDEMs\!

When I handed people one of our [hexagon stickers](https://sticker.how/#type-hexagon) the reaction was usually some form of, “ooh, shiny\!” but my favorite was when someone essentially said, “Oh, you all actually know open source\!” That made me proud, at least. :)

### Interesting Talks

Lastly, I always like to shout out interesting talks I attended or caught on video later so others can enjoy them on their own time. I recommend checking out:

- [Community moderation in Matrix](https://fosdem.org/2026/schedule/event/JKWGWG-community_moderation_in_matrix/)  
- [Open Source Security in Spite of AI](https://fosdem.org/2026/schedule/event/B7YKQ7-oss-in-spite-of-ai/)
