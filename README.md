[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/esr360/Kayzen-GS/master/LICENSE)
[![Travis build](https://api.travis-ci.org/esr360/Kayzen-GS.svg)](https://travis-ci.org/esr360/Kayzen-GS)
[![Bower version](https://badge.fury.io/bo/Kayzen-GS.svg)](https://badge.fury.io/bo/Kayzen-GS)
[![npm version](https://badge.fury.io/js/Kayzen-GS.svg)](https://badge.fury.io/js/Kayzen-GS)

<img src="https://raw.githubusercontent.com/esr360/Kayzen-GS/gh-pages/logo.png" width="270">

> A powerful framework for building responsive grid systems for the web

[Installation](https://github.com/esr360/Kayzen-GS/wiki/Installation) | 
[Documentation](https://github.com/esr360/Kayzen-GS/wiki#documentation) | 
[Demos](http://kayzen.gs)

## Overview

[View SassDoc Documentation](http://esr360.github.io/Kayzen-GS/docs/)

Some of the core features of Kayzen-GS include:

* _New in 2.5_ - [render rows and columns with React](https://github.com/esr360/Kayzen-GS/wiki/Render-with-React)
* [Specify any number of columns](https://github.com/esr360/Kayzen-GS/wiki/Configuration#options)
* Infinitely nestable rows
* [Easily set vertical/horizontal align](https://github.com/esr360/Kayzen-GS/wiki/Column-Aligning)
* [Create semantic rows and columns](https://github.com/esr360/Kayzen-GS/wiki/Semantic-Grid-System)
* [Uses inline-block columns](#why-use-inline-block-columns)
* [Specify global column/row selector names](https://github.com/esr360/Kayzen-GS/wiki/Configuration#options)
* [Specify gutter width](https://github.com/esr360/Kayzen-GS/wiki/Configuration#options)
* [Multiple column types](#documentation)
* [Reverse column order](https://github.com/esr360/Kayzen-GS/wiki/Reverse-Column-Order)
* [Collapse columns at different breakpoints](https://github.com/esr360/Kayzen-GS/wiki/Responsiveness)
* [Adaptive column widths](https://github.com/esr360/Kayzen-GS/wiki/Adaptive-Columns)
* [Push/pull columns](https://github.com/esr360/Kayzen-GS/wiki/Push-Pull-Columns)
* Works in all browsers

#### Why use inline-block columns?

The simple answer is; flexibility. By definition, columns *are* just inline blocks - it's the way CSS columns are supposed to work. Creating CSS columns by applying `inline-block` opens up a whole world of flexibility for your columns - the [most useful benefit](https://github.com/yahoo/pure/issues/41#issuecomment-21071440) being the ability to set their *horizontal* and *vertical* alignment, just by setting the `text-align` and `vertical-align` properties respectively. 

#### Why don't other grid systems use inline-block?

By default, using **inline-block** for columns causes a [natural whitespace](http://css-tricks.com/fighting-the-space-between-inline-block-elements/) to appear between each column, which can vary in width from font to font and browser to browser. This has caused [many people many problems](http://stackoverflow.com/search?q=inline-block+column), and there are plenty of go-to [hacky and impractical](http://davidwalsh.name/remove-whitespace-inline-block) work arounds, none of which are really suitble for a production environment. Kayzen-GS allows for the use of completely usable and functional columns which use **inline-block** and have **no white-space**. Kayzen-GS works in all browsers, including **Internet Explorer 6** (not that anyone uses it anymore...).

## Documentation

* [Default Kayzen Grid system](#default-kayzen-grid-system)
  * [Responsiveness](https://github.com/esr360/Kayzen-GS/wiki/Responsiveness)
  * [Flow Columns](https://github.com/esr360/Kayzen-GS/wiki/Flow-Columns)
  * [Adaptive Columns](https://github.com/esr360/Kayzen-GS/wiki/Adaptive-Columns)
  * [Magic Columns](https://github.com/esr360/Kayzen-GS/wiki/Magic-Columns)
  * [Block Columns](https://github.com/esr360/Kayzen-GS/wiki/Block-Columns)
  * [No Gutter Columns](https://github.com/esr360/Kayzen-GS/wiki/No-Gutter-Columns)
  * [Reverse Column Order](https://github.com/esr360/Kayzen-GS/wiki/Reverse-Column-Order)
  * [Push/Pull Columns](https://github.com/esr360/Kayzen-GS/wiki/Push-Pull-Columns)
* [Configuration](https://github.com/esr360/Kayzen-GS/wiki/Configuration)
  * [Options](https://github.com/esr360/Kayzen-GS/wiki/Configuration#options)
  * [Settings](https://github.com/esr360/Kayzen-GS/wiki/Configuration#settings)
  * [Breakpoints](https://github.com/esr360/Kayzen-GS/wiki/Configuration#breakpoints)
  * [Fractions](https://github.com/esr360/Kayzen-GS/wiki/Configuration#fractions)
* [Semantic Grid System](https://github.com/esr360/Kayzen-GS/wiki/Semantic-Grid-System)
  * [Creating a Semantic Row](https://github.com/esr360/Kayzen-GS/wiki/Semantic-Grid-System#creating-a-semantic-row)
  * [Creating a Semantic Column](https://github.com/esr360/Kayzen-GS/wiki/Semantic-Grid-System#creating-a-semantic-column)
* [Column Aligning](https://github.com/esr360/Kayzen-GS/wiki/Column-Aligning)
* [Solving the Whitespace Issue](#solving-the-whitespace-issue)

### Default Kayzen Grid System

> The below examples are based off the [default configuration values](https://github.com/esr360/Kayzen-GS/wiki/Configuration).

##### React

```jsx
<Row>
    ...
</Row>
```

##### HTML

```html                
<div class="row">
    ...
</div>
```

> Change the class name `row` to whatever you want in the [Configuration](https://github.com/esr360/Kayzen-GS/wiki/Configuration#options).

Create a **Column** with no specified width:

##### React

```jsx
<Column>Column</Column>
```

##### HTML

```html                
<div class="span">Column</div>
```

> Change the class name `span` to whatever you want in the [Configuration](https://github.com/esr360/Kayzen-GS/wiki/Configuration#options).

By default, Kayzen-GS comes with reusable classes which can be used to create your column widths. The most basic example of a row of Kayzen columns using the default settings would look something like this:

HTML

```html
<div class="row">                    
    <div class="span-4">span-4</div>
    <div class="span-4">span-4</div>
    <div class="span-4">span-4</div>
</div>
```

##### React

```jsx
<Row>
    <Column width={4}>span-4</Column>
    <Column width={4}>span-4</Column>
    <Column width={4}>span-4</Column>
</Row>
```

[View Demo](http://esr360.github.io/Kayzen-GS/#basic-example)

Based off the default number of columns (**12**), the above code would produce 3 columns, each 4/12's (or 1/3) of the total width of the row.

```html
<div class="row">                    
    <div class="span-3">Sidebar</div>
    <div class="span-9">Article</div>
</div>
```

Likewise, the above code would produce 2 columns; one with a width of 3/12's (or 1/4) and one with a width of 9/12's (or 3/4).

Using these normal columns, the total span of the columns in a given row may not exceed the number of columns the framework has (12 by default) - for such usage, see [Flow Columns](https://github.com/esr360/Kayzen-GS/wiki/Flow-Columns).

### Solving the Whitespace Issue

The issue itself is outlined in great detail in [this blog post](http://blog.purecss.io/post/60789414532/how-we-improved-grids-in-pure-0-3-0) from the Pure CSS blog. Indeed, this issue is what caused Pure to move away from inline-block columns and towards flexbox. In the [Github issue](https://github.com/yahoo/pure/issues/41), amongst some interesting proposed fixes included [hard-coding the font-family](https://github.com/yahoo/pure/issues/41#issuecomment-21722831) of your row to *Arial* so the [letter-spacing hack](https://github.com/yahoo/pure/issues/41#issuecomment-18747575) would work consistently. However, this, along with all the other hacky fixes were deemed unsuitable for productional use, so thus the decision to leave inline-block was made.

And it isn't only Yahoo's Pure who have experienced this issue; other great frameworks like [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) also [suffer the same problem](https://github.com/csswizardry/csswizardry-grids/issues/62). 

There is actually a simple way to ignore the whitespace in Webkit based browsers, and that is by adding these two CSS properties to your **row** element:

```css
display: table;
width: 100%;
```

With this CSS, you can get inline-block columns to behave exactly as desired in Webkit browsers.

The problem is only really an issue in Webkit based browsers - the [letter-spacing fix](https://github.com/yahoo/pure/issues/41#issuecomment-18747575) actually works just fine in Firefox and Internet Explorer without having to hard code any typeface. With these combined, our **row** mixin looks like this:

```sass
@mixin kgs-row-core {
    // Firefox/IE collapse white-space
    letter-spacing: -1em;
    // Webkit collapse white-space
    display: table;
    width: 100%;

    // Opera collapse white-space
    @at-root {
        .opera-only :-o-prefocus, & {
            word-spacing: -0.43em;
        }
    }

    // IE < 8 collapse white-space
    @if kgs-setting('old-ie') {
        *letter-spacing: normal;
        *word-spacing: -0.43em;
    }
} // row()
```

This mixin allows you to create column rows using the `inline-block` CSS property for your columns without having to worry about the whitespace that is naturally caused.

## Help, Support & Contributing

For all issues, bugs, suggestions and feature requests, please use the [issues page](https://github.com/esr360/Kayzen-GS/issues).

Follow [@esr360](https://twitter.com/ESR360) on Twitter!

## Changelog

#### Version 2.5.0

Released: 14th April 2018

###### Release Notes

* Render Rows and Columns with React
* Updating build tools from Grunt to NPM Scripts
* Deprecating Bower Support
* Renaming NPM package from `Kayzen-GS` to `kayzen-gs`

#### Version 2.4.0

Released: 1st June 2017

###### Release Notes

* dependencies are now node modules instead of git submodules
* slight change in how grid system is imported/included
* scss files linted