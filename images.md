---
title: Images
---

This is weird

<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400" />
</div>
<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?1" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?1" />
</div>
<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?2" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?2" />
</div>
<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?3" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?3" />
</div>
<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?4" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?4" />
</div>
<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?5" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?5" />
</div>
<div class="shadowed">
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?6" />
  <img src="https://source.unsplash.com/user/cassidyjames/likes/400x400?6" />
</div>


<style>
  .shadowed {
    border-radius: 2em;
    display: block;
    float: left;
    height: 200px;
    margin: 1em;
    position: relative;
    transition: transform ease 200ms;
    width: 200px;
  }
  
  .shadowed:hover {
    transform: scale(1.05);
  }
  
  .shadowed::after {
    background-image: 
      radial-gradient(circle at 50% 67%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0)),
      radial-gradient(circle at 50% 33%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25));
    border: 1px solid rgba(0,0,0,.15);
    border-radius: inherit;
    box-shadow: 
      0 0 0 1px rgba(255, 255, 255, 0.05) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
      0 -1px 0 0 rgba(255, 255, 255, 0.1) inset,
      0 1px 3px rgba(0, 0, 0, 0.05),
      0 1px 2px rgba(0, 0, 0, 0.1);
    content: '';
    height: calc(100% - 2px);
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: calc(100% - 2px);
    z-index: 1;
  }
  
  .shadowed img {
    border-radius: inherit;
    height: 200px;
    position: relative;
    width: 200px;
    z-index: 1;
  }
  
  .shadowed img:nth-child(2) {
    filter: blur(1em) brightness(1.125);
    opacity: 0;
    position: absolute;
    top: 0.67em;
    transition: opacity ease 200ms;
    z-index: 0;
  }
  
  .shadowed:hover img:nth-child(2) {
    opacity: 1;
  }
</style>
