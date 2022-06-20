---
title: Use GrapheneOS to extend the life of a Pixel
description: The security- and privacy-focused OS can be bent back into a Pixel experience

updated: 2022-06-20
---

I have an old Pixel 3 sitting around as a test device, and several family members have Pixel 3As. Unfortunately, these devices have all received their last Android system update from Google, meaning they'll start to fall behind on both features and eventually security fixes—even if _much_ of the security in Android these days is delivered by Google Play Services which will continue to provide updates for the forseeable future.

Regardless, it would make me feel much more comfortable to continue receiving OS updates. Luckily, [GrapheneOS](https://grapheneos.org/) is a security and privacy focused build of Android that targets Pixels due to their industry-leading hardware security features combined with the ability to unlock their bootloaders. GrapheneOS effectively uses the same hardware features Google developed to keep the stock software secure and private from attackers, and uses them to protect the hardened version of the OS.

### Installing & Using GrapheneOS

Now, initially, I might recommend [installing GrapheneOS](https://grapheneos.org/install/web) and using it how it's designed. The web-based installation is _super_ easy if you have access to a Chromium-based browser, like Google Chrome, Microsoft Edge, Brave, Vivaldi, etc.

There's a catch with using GrapheneOS out of the box, though: doesn't come with _any_ Google apps or services. Instead, you're in command of your own hardware, and can choose where to get your apps. The obvious and oft-recommended option is [F-Droid](https://f-droid.org/), which is a completely open source app store and repoitory. However, much of the software is outdated, and the app itself is a bit clunky. But if you need to revive an old device and just need a couple of apps (or specific apps that are open source), it can be an option.

Another option I see recommended is the [Aurora Store](https://auroraoss.com/), which is an open source front-end to the Google Play Store's back-end. The advantage is that you can install free apps without signing in, so you don't need a Google account—but many apps do require Google services to be running on your phone, anyway, so it can still be hit or miss.

<aside markdown="1">
>You can use the more up-to-date GrapheneOS as a base for your very own Pixel-like experience
</aside>

That said, if you're not quite ready to get away from Google but still want to extend the life of your Pixel phone, you can actually use the more up-to-date and thus secure GrapheneOS as a base for your very own Pixel-like experience. You get the benefit of the hardened OS (and frequent updates) under the hood with the familiarity of Google Apps. And you can reduce some electronic waste by keeping your phone kicking if it's still physically working!

### Pixel-fying GrapheneOS

Luckily, I just helped a family member get GrapheneOS installed and running a Google Pixel-like experience, and I have my Pixel 3 on hand to validate that it works as it should.

#### Core experience

GrapheneOS is built from the latest Android sources, so it includes most of the features you would see in Android itself including the same visual design across the lock screen, home screen, notifications shade, and settings app.

The one place I see GrapheneOS lacking is with the keyboard; unfortunately the swipe-to-type feature of Gboard (as well as many of the other additions, like stickers and voice typing) are proprietary and thus not incuded. However, you can [install Gboard from Google Play](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin) to restore that experience.

Similarly, GrapheneOS comes with a simple but capable camera app—but much of Google's Pixel camera magic is proprietary, and thus can only be restored using the [Google Camera app from Google Play](https://play.google.com/store/apps/details?id=com.google.android.GoogleCamera).

And while the built-in GrapheneOS Gallery app is functional, Google Photos is a huge benefit of owning a Pixel. Luckily, you can [install Google Photos from Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.photos) just like any other app.

#### Communication

GrapheneOS comes with a simple SMS messaging app, but you're probably used to the Google Messages app. If you use RCS Chat (messaging in the default app with read receipts, higher-quality photo/video sharing, end-to-end encryption, group chats, etc.), you'll want to [re-install Google Messages](https://play.google.com/store/apps/details?id=com.google.android.apps.messaging) plus the [Carrier Services helper](https://play.google.com/store/apps/details?id=com.google.android.ims) from Google Play to re-enable it in GrapheneOS.

Unfortunately, GrapheneOS doesn't come with the glue that enables Google Contacts to sync with your phone—you can install the [Google Contacts app from Google Play](https://play.google.com/store/apps/details?id=com.google.android.contacts), but that alone is not enough. You'll need to grab the [Google Contacts Sync app from APK Mirror](https://www.apkmirror.com/apk/google-inc/google-contacts-sync/) or another trusted source, instead.

If you're used to the Pixel experience, I'd also recommend you grab the [Google Phone app from Google Play](https://play.google.com/store/apps/details?id=com.google.android.dialer).

#### Clean up

For any other Google apps you're craving, you can always hit the Google Play Store to install them just like any other app. If you find yourself annoyed by having duplicate apps in your app drawer (like two Phone apps, two Calculators, two Messaging apps, etc.), I'd recommend disabling the built-in app:

1. Long-press the app on the home screen
2. Hit the "🛈 App info" item
3. Hit "Disable"

Keep in mind I haven't _extensively_ tested this with built-in apps like Phone and Clock (my Pixel 3 is a back-up, so I'm not relying on it day-to-day), so be sure to test the reliability. If you find something isn't behaving as you'd expect, try re-enabling the system app just in case.
