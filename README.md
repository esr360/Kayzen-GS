[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/esr360/Kayzen-GS/master/LICENSE)
[![GitHub license](https://api.travis-ci.org/esr360/Kayzen-GS.svg)](https://raw.githubusercontent.com/esr360/Kayzen-GS/master/LICENSE)

<img src="https://raw.githubusercontent.com/esr360/Kayzen-GS/gh-pages/logo.png" width="270">

## Overview

> Kayzen GS is a powerful framework for building responsive grid systems. Built using Sass and based off inline-block columns, Kayzen GS is a one of a kind framework suitable for any project.

[View Examples](http://kayzen.gs)

[![Kayzen - Premium HTML Theme Framework](http://skyux.com/banners/kayzen-banner.png)](http://preview.themeforest.net/item/kayzen-multipurpose-html5-template/full_screen_preview/16768920)

Some of the core features of Kayzen GS include:

* Specify any number of columns
* Infinitely nestable rows
* Easily set vertical/horizontal align
* Create semantic rows and columns
* Uses inline-block columns
* Specify global column/row selector names
* Specify gutter width
* Multiple column types
* Reverse column order
* Collapse columns at different breakpoints
* Adaptive column widths
* Push/pull columns
* Works in all browsers

#### Why use inline-block columns?

The simple answer is; flexibility. By definition, columns *are* just inline blocks - it's the way CSS columns are supposed to work. Creating CSS columns by applying `inline-block` opens up a whole world of flexibility for your columns - the [most useful benefit](https://github.com/yahoo/pure/issues/41#issuecomment-21071440) being the ability to set their *horizontal* and *vertical* alignment, just by setting the `text-align` and `vertical-align` properties respectively. 

#### Why don't other grid systems use inline-block?

By default, using **inline-block** for columns causes a [natural whitespace](http://css-tricks.com/fighting-the-space-between-inline-block-elements/) to appear between each column, which can vary in width from font to font and browser to browser. Indeed, this has caused [many people many problems](http://stackoverflow.com/search?q=inline-block+column), and there are plenty of go-to [hacky and impractical](http://davidwalsh.name/remove-whitespace-inline-block) work arounds, none of which are really suitble for a production environment. However, for the first time Kayzen GS allows for the use of completely usable and functional columns which use **inline-block** and have **no white-space**. And to top it all off, they work on all browsers, including **Internet Explorer 6** (not that anyone uses it anymore...).

## Documentation

* [Getting Started](#getting-started)
* [Default Kayzen Grid system](#default-kayzen-grid-system)
  * [Responsiveness](#responsiveness)
  * [Flow Columns](#flow-columns)
  * [Adaptive Columns](#adaptive-columns)
  * [Magic Columns](#magic-columns)
  * [Block Columns](#block-columns)
  * [No Gutter Columns](#no-gutter-columns)
  * [Reverse Column Order](#reverse-column-order)
  * [Push/Pull Columns](#pushpull-columns)
* [Custom Configuration](#custom-configuration)
  * [Options](#options)
  * [Settings](#settings)
  * [Breakpoints](#breakpoints)
  * [Fractions](#fractions)
* [Semantic Grid System](#semantic-grid-system)
  * [Creating a Semantic Row](#creating-a-semantic-row)
  * [Creating a Semantic Column](#creating-a-semantic-column)
* [Column Aligning](#column-aligning)
* [Solving the Whitespace Issue](#solving-the-whitespace-issue)

### Getting Started

There are several ways to use the Kayzen GS framework depending on how much you want to customize it:

#### Plain CSS 

If you aren't using Sass, to use the default compiled and minified grid system, download the core files and load the `kayzen-gs.min.css` file in your project and you're good to go.

#### Using Sass

If you're using Sass, ensure you have a copy of the Kayzen GS `src` directory in your project. You can either manually download or clone the repo, or you can use one of the following methods:

##### Install as Git Submodule

```
git submodule add https://github.com/esr360/Kayzen-GS.git
```

##### Install with Bower

```
bower install Kayzen-GS
```

---

Once you have a copy of Kayzen GS in your project, import the `kayzen-gs.scss` file from the root of the `src` directory into your project's main Sass file.

To use the default Kayzen Grid System, the `kayzen-gs` mixin needs to be called. This mixin can be called automatically by setting the `kayzen-gs` option in the [Configuration](#custom-configuration) to `true`. Alternatively, you can call the mixin like so anywhere in your project after Kayzen GS is imported:

```scss
@include kayzen-gs;
```

It is possible to override any value in the [Configuration](#custom-configuration) by passing it to the mixin:

```scss
@include kayzen-gs((
    'options' : (
        'columns'           : 16,
        'col-namespace'     : 'col',
    ),
    'settings' : (
        'old-ie'            : true,
        'pull-columns'      : false,
        'push-columns'      : false
    ),
));
```

### Default Kayzen Grid System

> The below examples are based off the default values in the `_config.scss` file.

To create a basic **row** for your columns to live in, add the `row` class to your element.

```html                
<div class="row">
    ...
</div>
```

> Change the class name *row* to whatever you want in the [Configuration](#options).

To create a **column** with no specified width, add the `span` class to your element.

```html                
<div class="span">Column</div>
```

> Change the class name *span* to whatever you want in the [Configuration](#options).

By default, Kayzen GS comes with reusable classes which can be used to create your column widths. The most basic example of a row of Kayzen columns using the default settings would look something like this:

```html
<div class="row">                    
    <div class="span-4">span-4</div>
    <div class="span-4">span-4</div>
    <div class="span-4">span-4</div>
</div>
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

Using these normal columns, the total span of the columns in a given row may not exceed the number of columns the framework has (12 by default) - for such usage, see [Flow Columns](#flow-columns).

#### Responsiveness

> Responsiveness can be disabled [(?)](#responsive)

Kayzen GS columns are responsive out the box - the following breakpoint values have been defined to customize your layout - these values are completely flexible and customizable (see [Custom Configuration](#breakpoints)):

* break-0: 0px,
* break-1: 460px,
* break-2: 720px,
* break-3: 940px,
* break-4: 1200px

By default, the columns will vertically stack on top of each other when the screen size is **less** than **940px** (break-3).

Sometimes you may want different columns to stack at different widths. To override the base value at which columns normally stack, you can add a special **helper class** to your row:

```html
<div class="row stack-break-2">                    
    <div class="span-3">Sidebar</div>
    <div class="span-9">Article</div>
</div>
```

[View Demo](http://esr360.github.io/Kayzen-GS/#responsiveness)

Using the `stack-break-2` class, the above columns will now stack on top of each other when the screen size is **less** than **720px** (break-2).

To cause the columns to not stack at all, you can use either the `row-no-break` or `stack-break-0` helper classes on your **row**:

```html
<div class="row row-no-break">                    
    ...
</div>
<div class="row stack-break-0">                    
    ...
</div>
```

To change the width of a single column manually at specific breakpoints, see [Adaptive Columns](#adaptive-columns).

#### Flow Columns

Flow Columns are more flexible than regular columns - each visual row of columns does not need to be wrapped in its own **row** container - all your columns for all your rows can be placed in just one main **row** parent element with the `row-flow` class:

```html
<div class="row-flow">
    <div class="span-6">...</div>
    <div class="span-6">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-3">...</div>
    <div class="span-3">...</div>
    <div class="span-3">...</div>
    <div class="span-3">...</div>
</div>
```

[View Demo](http://esr360.github.io/Kayzen-GS/#flow-columns)

The above code will produce something similiar the following:

```html
<div class="row">
    <div class="span-6">...</div>
    <div class="span-6">...</div>
</div>
<div class="row">
    <div class="span-4">...</div>
    <div class="span-4">...</div>
    <div class="span-4">...</div>
</div>
<div class="row">
    <div class="span-3">...</div>
    <div class="span-3">...</div>
    <div class="span-3">...</div>
    <div class="span-3">...</div>
</div>
```

As with normal columns you can add helper classes to your row of flow columns:

```html
<div class="row-flow stack-break-2">                    
    ...
</div>
```

##### Adaptive Columns

Adaptive Columns allow for more flexibility - they allow you to specify a custom width for each breakpoint value using the [fraction](#fractions) values from the configurtion:
	
```html		
<div class="row-flow">                    
    <div class="span-3 break-3-third break-2-half break-1-full">...</div>
    <div class="span-3 break-3-third break-2-half break-1-full">...</div>
    <div class="span-3 break-3-third break-2-half break-1-full">...</div>
    <div class="span-3 break-3-third break-2-half break-1-full">...</div>
    <div class="span-3 break-3-third break-2-half break-1-full">...</div>
    <div class="span-3 break-3-third break-2-half break-1-full">...</div>
</div> 
```

> Ensure you are using the `row-flow` class on your row when using adaptive columns

If `mobile-first` is enabled (by default it is *disabled*), instead your code would look somthing like:

```html	
<div class="row-flow">                    
    <div class="span break-1-half break-2-third break-3-quarter">...</div>
    <div class="span break-1-half break-2-third break-3-quarter">...</div>
    <div class="span break-1-half break-2-third break-3-quarter">...</div>
    <div class="span break-1-half break-2-third break-3-quarter">...</div>
    <div class="span break-1-half break-2-third break-3-quarter">...</div>
    <div class="span break-1-half break-2-third break-3-quarter">...</div>
</div> 
```

[View Demo](http://esr360.github.io/Kayzen-GS/#adaptive-columns) | [Learn More](#mobile-first)

#### Magic Columns

Magic Columns are so named as they do not need to have their widths specified - each row of Magic Columns will automatically fill up the row applying an equal width to each column. Magic Columns are perfect for cases where you know each column will always be the same width, or where you need any [widow](http://en.wikipedia.org/wiki/Widows_and_orphans) columns to take up any remaining space.

To create a row of Magic Columns, use the `row-magic` class for your **row**:

```html	
<div class="row-magic">
    <div class="span">...</div>
    <div class="span">...</div>
    <div class="span">...</div>
    <div class="span">...</div>
    <div class="span">...</div>
</div>
```

[View Demo](http://esr360.github.io/Kayzen-GS/#magic-columns)

In the above example, each column will be 1/5 in width, as there are 5 columns in the row.

As with normal columns you can add helper classes to your row of magic columns:

```html
<div class="row-magic stack-break-2">                    
    ...
</div>
```

#### Block Columns

Block Columns have no gutter (so the columns sit flush with each other) and are of equal height. To create a row of Block Columns, use the `row-block` class for your **row**:

```html	
<div class="row-block">
    ...
</div>
```

Block columns will naturally assume an equal width to each other if the naked `span` class is used for your column (as opposed to, say, `span-3`).

[View Demo](http://esr360.github.io/Kayzen-GS/#block-columns)

As with normal columns you can add helper classes to your row of block columns:

```html
<div class="row-block stack-break-2">                    
    ...
</div>
```

#### No-Gutter Columns

No-Gutter Columns are just like regular columns except they have no gutter. To create a row of No-Gutter Columns, use the `row-no-gutter` class for your **row**:

```html	
<div class="row-no-gutter">
    ...
</div>
```

[View Demo](http://esr360.github.io/Kayzen-GS/#no-gutter-columns)

As with normal columns you can add helper classes to your row of no-gutter columns:

```html
<div class="row-no-gutter stack-break-2">                    
    ...
</div>
```

#### Reverse Column Order

To reverse the order of all columns in a given row, the `row-reverse` helper class is used:

```html
<div class="row row-reverse">
    ...
</div>
```

> This helper class will work with all column types.

[View Demo](http://esr360.github.io/Kayzen-GS/#reverse-column-order)

When columns become stacked, the left one becomes the top and the right one becomes the bottom. Sometimes you way wish to reverse this behaviour. To conditionally reverse the columns at a given breakpoint, you can use a seperate helper class of `reverse-break-3`, adding the appropriate breakpoint value as desired:

```html
<div class="row reverse-break-3">
    ...
</div>
```

#### Push/Pull Columns

It is possible to push or pull your columns using the following helper classes:

```html
<div class="row">
    <div class="span-6 push-6">...</div>
    <div class="span-6 pull-6">...</div>
</div>
```

In the above example, the columns' order would effectivaly be reversed. Naturally you can use any number between 1 and 12 (or whatever number you have set for `columns`).

[View Demo](http://esr360.github.io/Kayzen-GS/#push-pull-columns)

### Custom Configuration

Kayzen GS is built in **Sass**/SCSS, so to make the most it you will need a way to pre-process your CSS from `.scss` files.

The configuration is found in the following file:

```
src/_config.scss
```

All config for Kayzen GS is contained within a single variable; `$kayzenGS`, as a Sass map. This variable has a `!default` flag meaning it can be overwritten if you want to store the configuration elsewhere in your project. Just re-define the variable wherever you want (before including Kayzen GS) and ensure it has all the required values.

```scss
$kayzenGS: (
    'options' : (
        'columns'           : 12,
        'gutter'            : 3%,
        'col-break'         : 940px,
        'row-namespace'     : 'row',
        'col-namespace'     : 'span',
    ),
    'settings' : (
        'kayzen-gs'         : true,
        'old-ie'            : false,
        'responsive'        : true,
        'mobile-first'      : false,
        'custom-stacking'   : true,
        'adaptive-columns'  : true,
        'flow-columns'      : true,
        'magic-columns'     : true,
        'block-columns'     : true,
        'no-gutter-columns' : true,
        'reverse-columns'   : true,
        'pull-columns'      : true,
        'push-columns'      : true
    ),
    'breakpoints' : (
        'break-0'           : 0px,
        'break-1'           : 460px,
        'break-2'           : 720px,
        'break-3'           : 940px,
        'break-4'           : 1200px
    ),
    'fractions' : (
        'full'              : (1, 1),
        'half'              : (1, 2),
        'third'             : (1, 3),
        'quarter'           : (1, 4),
        'sixth'             : (1, 6)
    )
) !default;
```

#### Options

The 'options' form the basic foundation for your grid system. This is where you set the core options for your grid system.

| Option          | Type                | Default  |
| --------------- | ------------------- | -------- |
| `columns`       | number [integer]    | 12       |
| `gutter`        | number [percentage] | 3%       |
| `col-break`     | number [length]     | 940px    |
| `row-namespace` | string              | 'row'    |
| `col-namespace` | string              | 'span'   |

#### Settings

> **Note:** Whilst most options are enabled by default, it is recommended that you disable any features you don't use to optimise the generated CSS.

This is where you set which features of Kayzen GS you want to use in your project. By default, all functionality outlined in this documentation is enabled, meaning you don't have to change anything to access all the features of Kayzen GS, the only reason you would change any of these settings is to disable any unused features to improve performance.

##### 'kayzen-gs'

*Default : false*

This setting outputs the Kayzen GS grid system. This option is disabled by default to allow you to include the grid system anywhere in your project, and not just where you import the `kayzen-gs.scss` file.

##### 'old-ie'

*Default : false*

> This setting only affects regular columns.

Enabling this setting will allow default columns to work on Internet Explorer 6 & 7.

##### 'responsive'

*Default : true*

If disabled, columns will not stack vertically.

##### 'mobile-first'

*Default : false*

> Disabling this improves performance without losing functionality&#42;

This setting has a fairly large impact on the behaviour of responsiveness. With this option enabled, all columns start out at 100% width, and will compact to the specified width as and when they're told. If this options is disabled, columns will start out at their specificed width (for example **span-4** would start out at 4/12's by default), and will be forced to **100%** width as and when they're told.

&#42;This has a noticable effect when using the [Adaptive Columns](#adaptive-columns). With mobile-first enabled an adaptive column can be created like so:

```html
<div class="span break-1-half break-2-third break-3-quarter">span-3</div>
```

This will create a column that starts out at **100%** width, and will compact to 1/2 at **break-1** or more, 1/3 at **break-2** or more, and 1/4 at **break-3** or more.

With mobile-first disabled, the logic is different; in fact, it is reversed:

```html
<div class="span-3 break-3-third break-2-half break-1-full">span-3</div>
```

Here the column is 3/12's by default, and will be forced to 1/2 at **break-2** or less, and 100% width at **break-1** or less, thus achieving the same behaviour as the above example with mobile-first enabled.

##### 'custom-stacking'

Default : true

This option generates the code required for the [custom breakpoint stacking](#responsiveness) feature.

##### 'adaptive-columns'

Default : true

This option generates the code required for [adaptive columns](#adaptive-columns).

##### 'flow-columns'

Default : true

This option generates the code required for [flow columns](#flow-columns).

##### 'magic-columns'

Default : true

This option generates the code required for [magic columns](#magic-columns).

##### 'block-columns'

Default : true

This option generates the code required for [block columns](#block-columns).

##### 'no-gutter-columns'

Default : true

This option generates the code required for [no-gutter columns](#no-gutter-columns).

##### 'reverse-columns'

Default : true

This option generates the code required to [reverse columns](#reverse-column-order).

##### 'pull-columns'

Default : true

This option generates the code required to [pull columns](#pushpull-columns).

##### 'push-columns'

Default : true

This option generates the code required to [push columns](#pushpull-columns).

#### Breakpoints

Kayzen GS allows you to specify any number of breakpoints. Amend the `breakpoints` map in the config as you desire.

> These values are used to generate the helper classes. Be wary not to include too many values here.

```scss	
'breakpoints' : (
    'break-0' : 0px,
    'break-1' : 460px,
    'break-2' : 720px,
    'break-3' : 940px,
    'break-4' : 1200px
);
```

#### Fractions

This is where you can define the names for any fractions you wish to use in your grid system.

> These values are used to generate the helper classes. Be wary not to include too many values here.

```scss	
'fractions' : (
    'full'    : (1, 1),
    'half'    : (1, 2),
    'third'   : (1, 3),
    'quarter' : (1, 4),
    'sixth'   : (1, 6)
);
```

### Semantic Grid System

You can use Kayzen GS to build your own grid system using semantic class names whilst retaining complete control over the flexibility of your columns.

[View Examples](http://esr360.github.io/Kayzen-GS/#semantic-examples)

#### Creating a Semantic Row

```scss
.main {
    @include row;
}
```

In the above example we are using **main** as our semantic class name.

**Creating a semantic row for Flow Columns:**


```scss
.portfolio-items {
    @include row('flow');
}
```

In the above example, our semantic class name for our row of Flow Columns is **portfolio-items**.

#### Creating a Semantic Column

##### Basic Example

```scss
.sidebar {
    @include column((
        'width' : (3, 12)
    ));
}
```

This will create a column that spans 3 out of 12 columns in width, so **1/4** or **25%**. Alternatively, you can achieve the same thing with this:

```scss
.sidebar {
    @include column((
        'width' : 'quarter'
    ));
}
```

> You can use any fractions defined in the [Configuration](#fractions).

Or even this:

```scss
.sidebar {
    @include column((
        'width' : 25%
    ));
}
```

Note that perhaps surprisingly the above examples do **not** produce a `width` value of **25%**, but rather a calculated value based off the value of the `gutter` value. This is so you can easily create columns without having to think about the effect of gutters like so:

```scss
.sidebar {
    @include column((
        'width' : 20%
    ));
}

.content {
    @include column(
        'width' : 70%
    ));
}

.promo {
    @include column(
        'width' : 10%
    ));
}
```

Which will produce the following CSS, assuming the default value of **2.5%** for your `gutter`:

```css
.sidebar {
    width: 18%;
    margin-left: 2.5%;
}

.content {
    width: 69.25%;
    margin-left: 2.5%;
}

.promo {
    width: 7.75%;
    margin-left: 2.5%;
}
```

Note that the **first-child** in a row of normal columns has its `margin-left` removed (this is *not* the case for [Flow Columns](#flow-columns-2)).

##### Column Types

All the column types from the default grid system are also available to use in your semantic grid system.

###### Flow Columns

> Ensure that your semantic row container is also set to `flow`.

```scss
.portfolio-item {
    @include column((
        'type'  : 'flow',
        'width' : (3, 12)
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#flow-columns-semantic)

###### Magic Columns

```scss
.portfolio-item {
    @include column(
        'type' : 'magic'
    );
} 
```

[View Demo](http://esr360.github.io/Kayzen-GS/#magic-columns-semantic)

###### Block Columns

```scss
.portfolio-item {
    @include column((
        'type'  : 'block',
        'width' : (3, 12)
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#block-columns-semantic)

###### No-Gutter Columns

```scss
.portfolio-item {
    @include column((
        'type'  : 'no-gutter',
        'width' : (3, 12)
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#no-gutter-columns-semantic)

##### Responsiveness

The default width for the stacking of semantic columns is set in the [Configuration](#options). You can override the default value like so:

```scss
.sidebar {
    @include column((
        'width' : 'quarter',
        'stack' : breakpoint('break-2')
    ));
}
```

This will cause the columns to stack when the screen size is less than **break-2** as opposed to the default value of **break-3**.

###### Adaptive Columns

When inside a Flow Columns container and with its `type` set to **flow**, you can set the width of your column at specific breakpoints using the **respond-to** option:

```scss
.portfolio-item {
    @include column((
        'type' : 'flow',
        'width': (3, 12),
        'respond-to' : (
            'break-3': (4, 12),
            'break-2': (6, 12),
            'break-1': (12, 12)
        )
    ));
}
```

[View Demo](http://esr360.github.io/Kayzen-GS/#semantic-adaptive)

With `mobile-first` enabled, a width is not required by default if you are using adaptive responsiveness - the column is 100% width up until **break-1** where it becomes 6/12's, then 4/12's at **break-2** and 3/12's at **break-3**.

```scss
.portfolio-item {
    @include column((
        'mobile-first': true: 
        'type': 'flow',
        'respond-to' : (
            'break-1': (6, 12),
            'break-2': (4, 12),
            'break-3': (3, 12)
        )
    ));
}
```

> You can set any fraction you want, for example you can write *(1, 2)* instead of *(6, 12)*.

You can also use numeric values for the width:

```scss
.portfolio-item {
    @include column((
        'type' : 'flow',
        'width': 25%,
        'respond-to' : (
            'break-3': 100/3,
            'break-2': 50%,
            'break-1': 100%
        )
    ));
}
```

Using the fractions from the [Configuration](#custom-configuration) you can substitue writing the fraction numbers for the fraction name like so:

```scss
.portfolio-item {
    @include column((
        'type' : 'flow',
        'width': 'quarter',
        'respond-to' : (
            'break-3': 'third',
            'break-2': 'half',
            'break-1': 'full'
        )
    ));
}
```

### Column Aligning

Whilst Kayzen GS does not come with any classes or mixins to align your columns, it is extremely easy to add this functionality yourself. To **horizontally align** a row of columns, simply set the `text-align` CSS property of your row to either `left`, `right` or `center` as desired:

```html	
<div class="row" style="text-align: center">
    <div class="span-6">This column is centrally aligned.</div>
</div>
```

To **vertically align** your columns, set the `vertical-align` CSS property of your column. By default, this is set to `top`.

```html	
<div class="row" style="height: 200px">
    <div class="span-3" style="vertical-align: top">
        This column is top aligned.
    </div>
    <div class="span-3" style="vertical-align: middle">
        This column is middle aligned.
    </div>
    <div class="span-3" style="vertical-align: bottom">
        This column is bottom aligned.
    </div>
    <div class="span-3" style="vertical-align: middle; height: 200px">
            This column is middle aligned.
    </div>
</div>
```

[View Demo](http://esr360.github.io/Kayzen-GS/#column-aligning)

### Solving the Whitespace Issue

The issue itself is outlined in great detail in [this blog post](http://blog.purecss.io/post/60789414532/how-we-improved-grids-in-pure-0-3-0) from the Pure CSS blog. Indeed, this issue is what caused Pure to move away from inline-block columns and towards flex. In the [Github issue](https://github.com/yahoo/pure/issues/41), amongst some interesting proposed fixes included [hard-coding the font-family](https://github.com/yahoo/pure/issues/41#issuecomment-21722831) of your row to *Arial* so the [letter-spacing hack](https://github.com/yahoo/pure/issues/41#issuecomment-18747575) would work consistently. However, this, along with all the other hacky fixes were deemed unsuitable for productional use, so thus the decision to leave inline-block was made.

And it isn't only Yahoo's Pure who have experienced this issue; other great frameworks like [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) also [suffer the same problem](https://github.com/csswizardry/csswizardry-grids/issues/62). 

There is actually a simple way to ignore the whitespace in Webkit based browsers, and that is by adding these two CSS properties to your **row** element:

```css
display: table;
width: 100%;
```

With this CSS, you can get inline-block columns to behave exactly as desired in Webkit browsers.

The problem is only really an issue in Webkit based browsers - the [letter-spacing fix](https://github.com/yahoo/pure/issues/41#issuecomment-18747575) actually works just fine in Firefox and Internet Explorer without having to hard code any typeface. With these combined, our **row** mixin looks like this:

```scss
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
    // Required for some third-party sliders
    table-layout: fixed;
    
} // row()
```

This mixin allows you to create column rows using the `inline-block` CSS property for your columns without having to worry about the whitespace that is naturally caused. You can say it looks obscure to your heart's content, but it works, and it works great.

## Help, Support & Contributing

For all issues, bugs, suggestions and feature requests, please use the [issues page](https://github.com/esr360/Kayzen-GS/issues). Any and all contributions are welcomed!

Follow [@esr360](https://twitter.com/ESR360) on Twitter!

## Changelog

#### Version 2.2.0

Released: 2nd August 2016

###### Release Notes

* improving grunt tasks
* adding SassDoc compatibility
* slight improvement to semantic column responsivity
* re-adding bower support
* allow for adaptive no-gutter columns
* general code improvements

#### Version 2.1.0

Released: 30th October 2015

###### Release Notes

* moving default grid system to own mixin
* generation of default grid system now disabled by default

#### Version 2.0.0

Released: 30th October 2015

###### Release Notes

* re-written to be more component based
* configuration now contained within a single Sass map
* row class names changed
* added `no-gutter` columns
* added custom stacking functionality to all column types
* added `reverse-columns` functionality
* added ability to push and pull columns
* support for old Internet Explorer is now disabled by default
* `mobile-first` is now `false` by default as it generates lighter styles
* shoutout to [@visualcookie](https://github.com/visualcookie) for his help and suggestions