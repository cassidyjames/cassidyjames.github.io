# Stadia

I'm **cassidyjames**<span class="dim">#6270</span> on [Stadia], the free gaming service from Google. You buy your games and play them in up to 1080p anywhere on your phone, tablet, computer, or TV—with the controller you already have, or with the new Stadia controller.

I mostly play **Destiny 2** which is free to play for the base game, so you can hop on Stadia and join me!

<div style="text-align: center;" markdown="1">
[Play Stadia][stadia]
[Try Stadia Pro][stadia]{: .button.stadia }
</div>

[Stadia Pro][stadia] is a paid subscription that gets you up to 4K HDR and surround sound on Stadia, plus new games to claim and add to your library each month at no extra cost.

[stadia]: https://stadia.com/link/referrals?si_rid=4101661881179489453&si_rt=1

<style>
  :root {
    --background-color: var(--stadia-bg);
    --primary-color: var(--stadia-fg);

    --accent-color: var(--stadia);
    --secondary-accent-color: var(--stadia-bg);
    --secondary-accent-contrast: var(--stadia-fg);
  }

  :root,
  nav,
  footer {
    background-image: linear-gradient(to bottom, rgba(150, 150, 150, 0.075), rgba(150, 150, 150, 0.075));
  }

  h1 {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      163deg,
      var(--stadia-orange),
      var(--stadia-purple)
    );
    letter-spacing: 0;
    padding: 0.125em 0;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  h1::before {
    background-image: url('/images/stadia.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: inline-block;
    height: 1em;
    margin-right: 0.125em;
    vertical-align: bottom;
    width: 1em;
  }

  @media (prefers-color-scheme: dark) {
    h1::before {
      background-image: url('/images/stadia-dark.png');
    }
  }

  a.button.stadia {
    background-image: linear-gradient(
      to right,
      var(--stadia-orange),
      var(--stadia-purple)
    );
    color: white;
  }
</style>
