---
title: Developing a GitHub Pages/Jekyll Site on Fedora Silverblue
description: Documenting for my own purposes—but hopefully it's helpful!
image: /images/blog/github-pages-jekyll-fedora-silverblue/toolbox.gif

updated: 2022-05-31
---

For the past decade, I've used Ubuntu or Ubuntu-based distributions like
elementary OS. As such, I've gotten used to or put up with certain workflows,
like how to hack on the many, many Jekyll-based and GitHub-hosted sites I
operate or contribute to.

Well, for various reasons, I've jump on board the Fedora Silverblue train
lately, and it's time to re-learn some things—it's hard to say if it's better
or worse, but it _is_ different. Here's what I've learned and how I get up and
running on Fedora (specifically, Silverblue) today:

### Toolbx is your friend!

First, you're going to want to get used to [Toolbx](https://containertoolbx.org/).
Toolbx is a way to run "containers" on Fedora (and other OSes)—think of it like 
Docker but for your own playground on your desktop. It's especially useful if 
you're rocking a futuristic image-based OS like Fedora Silverblue or Endless OS!

<figure markdown="1">
![Toolbox animation]({{ page.image }}){: width="100%" style="image-rendering: pixelated" }
<figcaption markdown="1">
Toolbx animation by [Jakub Steiner](https://github.com/jimmac), [MIT-licensed](https://github.com/containers/containertoolbx.org/blob/1ff0dfdeb663746ed799cb823cad10e8e15d4966/LICENSE)
</figcaption>
</figure>

With Toolbx, your development environment runs sandboxed and layered atop your
base OS. Anything that happens in your container generally stays separate from
that underlying OS, meaning you're less likely to break your production OS, and
less likely to break your development environment. Tidy.

To get started, ensure Toolbx (`toolbox`) is installed (it is by default on both
Fedora Silverblue and Endless OS), then just run:

```sh
toolbox enter
```

If you don't already have a container set up, it'll help you set one up that
matches your host OS; in my case, Fedora 36.

### One-time Ruby Setup

Once you're in your container (you can tell by the prompt including `@toolbox`
instead of your base OS hostname), install the handful of dependencies you'll
need for the underlying Ruby-based tools:

```sh
sudo dnf install ruby ruby-devel openssl-devel @development-tools gcc-c++
```

Install the Ruby `bundler` tool to manage Ruby packages:

```sh
sudo gem install bundler
```

Next, you'll want to tell `bundler` to use a local path instead of trying to use
a root-owned path:

```sh
bundle config set --local path 'vendor/bundle'
```

Then install the Ruby dependencies (assuming your project has a `Gemfile`):

```sh
bundle install
```

Depending on your preferences, you may want to add `vendor/` to your 
`.gitignore` file to prevent committing it to your repository.

### Running Jekyll

Now all you need to do is tell `bundler` to run Jekyll. Here are the flags I
typically use, to make multi-device development plus future-looking blog posts
easier to work with:

```sh
bundle exec jekyll serve --host 0.0.0.0 --future
```

…then you can navigate to `http://localhost:4000` or your local IP address to view
your site!

---

### Thanks

Thanks to Fedora Magazine's [How to Publish Your Content Using GitHub Pages and
Jekyll](https://fedoramagazine.org/how-to-publish-your-content-using-github-pages-and-jekyll/)
as well as this [Ask Fedora question](https://ask.fedoraproject.org/t/problems-with-ruby-in-fedora-36/21514)
for pointing me in the right direction. Hopefully this post adds to the
collective knowledge and helps someone—even just me!—in the future.
