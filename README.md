# cassidyjames.com

My personal website, and an unintentional Jekyll theme for others to base their sites off of. 😅

## Building

I recommend using `toolbox` for development, especially if you're on Endless OS or Fedora Silverblue. See [this blog post](https://cassidyjames.com/blog/github-pages-jekyll-fedora-silverblue/) for details on how to get set up.

Additionally, this site uses jekyll_picture_tag, which has a couple of other dependencies you may need to install:

- libvpis
- libheif

To install these on Fedora (e.g. in a toolbx on Silverblue):

```shell
sudo dnf install rubygem-image_processing libheif
```

Once you're set up, build and serve locally with:

```shell
bundle exec jekyll serve --host 0.0.0.0
```

The site should now be available at http://0.0.0.0:4000/ on your local machine, and your local machine's IP address on your network—great for testing on mobile OSes.
