---
layout: post
title:  "The dangers of statistical ghosts"
date:   2015-02-04 21:20:00
categories: data
---
**Some time back in 2014 I sat in on a talk by Consumer Psychologist Bart Schutz (@BartS) at a Google Conversions event in Dublin. With lots of strong opinions on A/B testing Bart spoke about statistical ghosts, something I hadn’t really heard much about previously but I was intrigued enough to dig a little bit deeper.**

If you’re responsible for A/B testing activities or conversion rate optimisation then you’re probably familiar with statistical significance or confidence indicators like the below.

![Confidence Indicator](/assets/confidence.png)

In case you’re not familiar with it then let me explain. The above is an extract from Adobe Target’s testing interface. This screengrab is showing that the challenger/B variant of this particular test has resulted in a drop of 22.03% of the selected metric, conversion rate for example. More importantly the “confidence” indicator is essentially saying that there is an 82.63% likelihood that the challenger experience performs significantly different to the control, as a result of the changes within it e.g. different copy, imagery, design etc.

Handy little feature that, but it’s all too easy to get sucked into a tunnel vision scenario where you’re constantly peeking at active tests waiting for a reasonable confidence level to mark the end of your test.

**Enter the statistical ghosts…**

I have yet to hear somebody, in a commercial setting, talk about the dangers of false positives. From personal experience I can tell you that ignoring them would make my life easier and my tests considerably shorter.

The problem with repeated significance testing is that it increases the rate of false positives. That is to say that by relying purely upon significance levels you will mistake many insignificant results for significant ones.

Mats Einarsen from Booking.com illustrates this very well with his [1000 controlled experiments example](http://blog.booking.com/is-your-ab-testing-effort-just-chasing-statistical-ghosts.html) which I have extracted a snippet of below:

>771 experiments out of 1.000 reached 90% significance at some point
>
>531 experiments out of 1.000 reached 95% significance at some point
>
>This means if you run 1.000 experiments and don’t control for repeat testing error in any way, up to 25% of successful, positive experiments might be explained by a false positive rate. You’ll see a temporarily significant effect in around half of your experiments!

I don’t mind telling you, this scared the absolute shit out of me. A lot of the tests I currently run have massive implications for our overall eCommerce design direction. I hadn’t relied on the confidence level for an endpoint but definitely had been guilty of peeking at it along the way.

**The Solution**

Luckily these perils are easily avoided. Again Mats explains it better than me:

Select your sample size or decision point in advance, and make your decision then. Here are the false error rates when making the decision only at the end of the experiment:

- 100 experiments out of 1.000 were significant at 90%.
- 51 experiments out of 1.000 were significant at 95%.
You still get a false positive rate you shouldn’t ignore, but nowhere near as seriously as when you don’t control correctly.

**The Takeaway**

With this new insight taken onboard I have watched many tests develop for curiosity sake and as sample size is in its early days the “law of small numbers” is well and truly in full effect. The % lift and confidence levels can fluctuate dramatically and if you jump the gun on reporting results you’re sure to end up red-faced down the line.

So in summary, to avoid prematurely reporting incorrect test results and potentially sending people running in the wrong direction be sure to get to know your sample size and always set a suitable endpoint in advance. Get comfortable with the fact that the statistical confidence level is a little like your weight – it’s going to fluctuate, so watching it every minute of every day will only cause you heartache.
