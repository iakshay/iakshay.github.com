---
layout: post
title: Testing Styles
---
### Enable Math

1. Math rendering is disabled by default, to enable it, check on the *Enable Math* option in *Preferences* > *General* > *All Documents*:.
   
   Math support is a good addition, except that it makes the Preview blink and blink again whenever typing, as it needs to refresh the whole typesetting. That's why I make it disabled by default. I suggest only enable it when you write Math Formulas.

2. Make sure you've connected to the internet.

   The Math rendering is powered by [MathJax](http://www.mathjax.org), the resources such as fonts are all online, thus the internet connection is needed for it to work.

### The Math Syntax

The syntax is the same as [Tex](http://en.wikipedia.org/wiki/TeX), expect one thing:

Because the characters such as \ and _ and * and so on have special meanings in Markdown language, you need to add an extra \ character before them to escape them to make the Math renders correctly.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quis repellendus [vero velit molestiae modi obcaecati](http://iakshay.net "iAkshay") totam maxime consequuntur itaque quas illo cupiditate eaque similique dolorum excepturi _beatae non distinctio voluptas necessitatibus doloribus dolores ut at?_ Repudiandae asperiores vero iure praesentium doloribus **provident maxime eaque inventore** minima.

On OS X Lion or Mountain Lion, just hit `option + command + T` in most text boxes and text areas and you’ll be able to drag and drop from the character viewer.

Headers
Setext-style:

# Header 1 #

## Header 2 ##
### Header 3 ###

###### Header 6

![alt text](http://cl.ly/image/01432r1g032x/content "Title")
Lists
Ordered, without paragraphs:

1.  Foo
2.  Bar
Unordered, with paragraphs:

*   A list item.

    With multiple paragraphs.

*   Bar

Inline Code
`<code>` spans are delimited
by backticks.

You can include literal backticks
like `` `this` ``.

Blockquotes
> Email-style angle brackets
> are used for blockquotes.

> > And, they can be nested.
{% highlight html inline %}<table class="footable" data-filter="#filter">{% endhighlight %}

{% highlight javascript linenos %}
function howBig( num ) {
  if ( num < 10 ) {
    return 'small';
  }

  if ( num < 100 ) {
    return 'medium';
  }

  if ( num >= 100 ) {
    return 'big';
  }
}
{% endhighlight %}