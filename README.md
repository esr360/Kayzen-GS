![Kayzen GS](https://raw.githubusercontent.com/esr360/Kayzen-GS/gh-pages/logo-small.png "Kayzen GS Logo")

> A responsive, flexible and dynamic grid system based off inline-block columns.

### Why use inline-block columns?

The simple answer is; flexibility. By definition, columns *are* just inline blocks - it's the way CSS columns are supposed to work. Creating CSS columns by applying `inline-block` opens up a whole world of flexibility for your columns - the most useful benefit being the ability to set their [*horizontal* and *vertical* alignment](https://github.com/yahoo/pure/issues/41#issuecomment-21071440), just by setting the `text-align` and `vertical-align` properties respectively. 

> [See Examples](#)

### Why don't other grid systems use inline-block?

By default, using **inline-block** for columns causes a [natural whitespace](http://css-tricks.com/fighting-the-space-between-inline-block-elements/) to appear between each column, which can vary in width from font to font and browser to browser. Indeed, this has caused [many people many problems](http://stackoverflow.com/search?q=inline-block+column), and there are plenty of go-to [hacky and impractical](http://davidwalsh.name/remove-whitespace-inline-block) work arounds, none of which are really suitble for a production environment. However, for the first time Kayzen GS allows for the use of completely usable and functional columns which use **inline-block** and have **no white-space**. And to top it all off, they work on all browsers, including **Internet Explorer 6**!

## Documentation

* [Getting Started](#)
* [Default Kayzen Grid system](#)
  * [Responsiveness](#)
  * [Flow Columns](#)
    * [Flexible Columns](#)
  * [Magic Columns](#)
  * [Block Columns](#)
* [Custom Configuration](#)
  * [Options](#)
  * [Grid System](#)
  * [Breakpoints](#)
  * [Fractions](#)
* [Semantic Grid System](#)
  * [Creating a Semantic Row](#)
  * [Creating a Semantic Column](#)
    * [Basic Example](#)
    * [Column Types](#)
    * [Responsiveness](#)
* [Column Aligning](#)
* [Solving the Whitespace Issue](#)

### Getting Started

By default, Kayzen will work out the box using the default values in the [Configuration](#). Just load the **kayzen-gs.css** file in your project, and you're good to go. If you want to configure your own settings, see the see [Custom Configuration](#) section. If you want to create your own grid system using semantic class names, see the [Semantic Grid System](#) section.

### Default Kayzen Grid System

To create a basic **row** for your columns to live in, add the `row` class to your element.

```html                
<div class="row">
	...
</div>
```

> Change the class name *row* to whatever you want in the [Configuration](#).

To create a **column** with no specified width, add the `span` class to your element.

```html                
<div class="span">Column</div>
```

> Change the class name *span* to whatever you want in the [Configuration](#).

By default, Kayzen GS comes with reusable classes which can be used to create your column widths. The most basic example of a row of Kayzen columns using the default settings would look something like this:

```html
<div class="row">                    
    <div class="span-4">span-4</div>
    <div class="span-4">span-4</div>
    <div class="span-4">span-4</div>
</div>
```

Based off the default number of columns (**12**), the above code would produce 3 columns, each 4/12's (or 1/3) of the total width of the row.

```html
<div class="row">                    
    <div class="span-3">Sidebar</div>
    <div class="span-9">Article</div>
</div>
```

Likewise, the above code would produce 2 columns; one with a width of 3/12's (or 1/4) and one with a width of 9/12's (or 3/4).

 Using these normal columns, the total span of the columns in a given row may not exceed the number of columns the framework has (12 by default) - for such usage, see [Flow Columns](#).

#### Responsiveness

> Responsiveness can be disabled [(?)](#)

Kayzen GS columns are responsive out the box - the following breakpoint classes have been defined to customize your layout - these values are completely flexible and customizable (see [Custom Configuration](#)):

* break-0: 0px,
* break-1: 460px,
* break-2: 720px,
* break-3: 940px,
* break-4: 1200px

By default, the columns will vertically stack on top of each other when the screen size is **less** than **940px** (break-3).

Sometimes you may want different columns to stack at different widths. To override the base value at which columns normally stack, you can add a special **helper class** to your row.

```html
<div class="row break-2">                    
    <div class="span-3">Sidebar</div>
    <div class="span-9">Article</div>
</div>
```

The above columns will now stack on top of each other when the screen size is **less** than **720px** (break-2).

To cause the columns to not stack at all, you can use the `break-0` helper class on your **row**:

```html
<div class="row break-0">                    
    ...
</div>
```

To change the width of a single column manually at specific breakpoints, see [Flexible Columns](#).

#### Flow Columns

Flow Columns are more flexible than regular columns - each visual row of columns does not need to be wrapped in its own **row** container - all your columns for all your rows can be placed in just one main **row** parent element with the `flow-row` class:

```html
<div class="row flow-row">
    <div class="span-6">Flow Column</div>
    <div class="span-6">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
</div>
```

The above code will produce something similiar the following:

```html
<div class="row">
    <div class="span-6">Flow Column</div>
    <div class="span-6">Flow Column</div>
</div>
<div class="row">
    <div class="span-4">Flow Column</div>
    <div class="span-4">Flow Column</div>
    <div class="span-4">Flow Column</div>
</div>
<div class="row">
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
    <div class="span-3">Flow Column</div>
</div>
```

##### Flexible Columns

Flow Columns allow for more flexibility - the main benefit being the ability to change the width of the columns to whatever you want at whatever breakpoint you want - say you want your columns to be 1/2 at **break-1**, 1/3 at **break-2**, and 1/4 at **break-3**, you could add the following helper classes to your columns like so:
	
```html		
<div class="row flow-row">                    
    <div class="span break-1-half break-2-third break-3-quarter">span-3</div>
    <div class="span break-1-half break-2-third break-3-quarter">span-3</div>
    <div class="span break-1-half break-2-third break-3-quarter">span-3</div>
    <div class="span break-1-half break-2-third break-3-quarter">span-3</div>
    <div class="span break-1-half break-2-third break-3-quarter">span-3</div>
    <div class="span break-1-half break-2-third break-3-quarter">span-3</div>
</div> 
```

#### Magic Columns

Magic Columns are so named as they do not need to have their widths specified - each row of Magic Columns will automatically fill up the row applying an equal width to each column. Magic Columns are perfect for cases where you know each column will always be the same width, or where you need any [widow](http://en.wikipedia.org/wiki/Widows_and_orphans) columns to take up any remaining space.

To create a row of Magic Columns, add the `magic-row` class to your **row**:

```html	
<div class="row magic-row">
    <div class="span">magic column</div>
    <div class="span">magic column</div>
    <div class="span">magic column</div>
    <div class="span">magic column</div>
    <div class="span">magic column</div>
</div>
```

In the above example, each column will be 1/5 in width, as there are 5 columns in the row.

#### Block Columns

Block Columns have no gutter (so the columns sit flush with each other) and are of equal height. To create a row of Block Columns, add the `block-row` class to your **row**:

```html	
<div class="row block-row">
    <div class="span-4">
        Block Column
    </div>
    <div class="span-4">
        Block Column
    </div>
    <div class="span-4">
        Block Column
    </div>
</div>
```

### Custom Configuration

Kayzen GS is built in **Sass**/SCSS, so to make the most it you will need a wau to pre-process your CSS from `.scss` files.

#### Options

**Warning:** Whilst all options are enabled by default, it is strongly recommended that you disable any features you don't use, as the default options can result in unnecessary bloated styles.

##### Support Internet Explorer 6 & 7?

> This setting only affects the regular columns.

* Variable : $old-ie
* Type     : boolean
* Default  : true

##### Enable Responsiveness?

> If disabled, columns will not vertically stack.

* Variable : $responsive
* Type     : boolean
* Default  : true

##### Enable mobile-first mode?

> Disabling this will improve performance without losing functionality&#42;

* Variable : $mobile-first
* Type     : boolean
* Default  : true

This setting has a fairly large impact on the behaviour of responsiveness. With this option enabled, all columns start out at 100% width, and will compact to the specified width as and when it's told. If this options is disabled, columns will start out at their specificed width (for example **span-4** would start out at 4/12's by default), and will be forced to **100%** width as and when it's told.

&#42;This has a noticable effect when using the [Flexible Columns](#). As seen further above, with mobile-first enabled we can create a flexible column like so:

```html
<div class="span break-1-half break-2-third break-3-quarter">span-3</div>
```

This will create a column that starts out at **100%** width, and will compact to 1/2 at **break-1** or more, 1/3 at **break-2** or more, and 1/4 at **break-3** or more.

With mobile-first disabled, the logic is different, in fact, it is reversed:

```html
<div class="span-3 break-2-half break-1-full">span-3</div>
```

Here you are creating a column that is 3/12's by default, and will be forced to 1/2 at **break-2** or less, and 100% width at **break-1** or less, thus achieving the same behaviour as the above example with mobile-first enabled.

##### Enable custom column stacking?

> This generates the code to override the [default column stacking](#).

* Variable : $column-stacking
* Type     : boolean
* Default  : true

##### Enable custom width overrides?

> This generates the code to allow for [Flexible Columns](#).

* Variable : $width-override
* Type     : boolean
* Default  : true

##### Generate Flow Columns?

* Variable : $flow-columns
* Type     : boolean
* Default  : true

##### Generate Magic Columns?

* Variable : $magic-columns
* Type     : boolean
* Default  : true

##### Generate Block Columns?

* Variable : $block-columns
* Type     : boolean
* Default  : true

##### Set row namespace

* Variable : $row-namespace
* Type     : string
* Default  : "row"

```html	
<div class="row">
	...
</div>
```

##### Set column namespace

* Variable : $col-namespace
* Type     : string
* Default  : "span"

```html	
<div class="span-4">
	...
</div>
```

#### Grid System

##### How many columns should your grid system have?

* Variable : $columns
* Type     : integer
* Default  : 12

##### How big should the gutter inbetween your columns be?

* Variable : $gutter
* Type     : percentage
* Default  : 2.5%

#### Breakpoints

You can set as many different breakpoints as you like to use in the grid system - just amend the below Sass map as desired. These values are used for both the default grid system and the semantic grid system. 

> The helper classes used for the default grid system are generated from these values.

```css	
$breakpoints: (
	break-0                     : 0px,
	break-1                     : 460px,
	break-2                     : 720px,
	break-3                     : 940px,
	break-4                     : 1200px
);
```

##### Set the maximum width for default vertically stacked columns

> This is the default width at which your columns should stack.

* Variable : $col-collapse
* Type     : length unit
* Default  : breakpoint(break-3) // 940px

#### Fractions

You can define any number of fractions you desire, and call them what you want. The values here are used for both the default grid system as well as the semantic one. 

> The helper classes used for the default grid system are generated from these values.

```css	
$fractions: (
	full                        : (1, 1),
	half                        : (1, 2),
	third                       : (1, 3),
	quarter                     : (1, 4),
	sixth                       : (1, 6)
);
```

### Semantic Grid System

You can use Kayzen GS to build your own grid system using semantic class names whilst retaining complete control over the flexibility of your columns.

#### Creating a Semantic Row

```css
.main {
	@include row;
}
```

In the above example we are using **main** as our semantic class name.

**Creating a semantic row of Flow Columns:**


```css
.portfolio-grid {
	@include row(flow);
}
```

In the above example, our semantic class name for our row of Flow Columns is **portfolio-grid**.

#### Creating a Semantic Column

##### Basic Example

```css
.sidebar {
	@include column(
		$width: (3, 12)
	);
}
```

This will create a column that spans 3 out of 12 columns in width, so **1/4** or **25%**. Alternatively, you can achieve the same thing with this:

```css
.sidebar {
	@include column(
		$width: quarter
	);
}
```

> You can use any fraction defined in the [$fractions map](#).

Or even this:

```css
.sidebar {
	@include column(
		$width: 25%
	);
}
```

Note that perhaps surprisingly the above examples do **not** produce a `width` value of **25%**, but rather a calculated value based off the value of the [$gutter variable](#). This is so you can easily create columns without having to think about the effect of gutters like so:

```css
.sidebar {
	@include column(
		$width: 20%
	);
}

.content {
	@include column(
		$width: 70%
	);
}

.promo {
	@include column(
		$width: 10%
	);
}
```

Which will produce the following CSS, assuming the default value of **2.5%** for `$gutter`:

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

Note that the **first-child** in a row of normal columns has its `margin-left` removed (this is *not* the case for [Flow Columns](#)).

##### Column Types

All the column types from the default grid system are also available to use in your semantic framework.

###### Flow Columns

> Ensure that your semantic row container is also set to `flow`.

```css
.portfolio-item {
	@include column(
		$type: flow,
		$width: (3, 12)
	);
}
```

###### Magic Columns

> You must set the `$namespace` variable to match your semantic class name.

```css
.portfolio-item {
	@include column(
		$type: magic, 
		$namespace: portfolio-item
	);
} 
```

###### Block Columns

```css
.portfolio-item {
	@include column(
		$type: block,
		$width: (3, 12)
	);
}
```

##### Responsiveness

The default width for the stacking of semantic columns is set in the [Configuration](#). You can override the default value like so:

```css
.sidebar {
	@include column(
		$width: quarter,
		$stack: breakpoint(break-2)
	);
}
```

This will cause the columns to stack when the screen size is less than **break-2** as opposed to the default value of **break-3**.

###### Flexible Columns

When inside a Flow Columns container and with its `$type` set to **flow**, you can set the width of your column at specific breakpoints using the **respond-to** map. Mobile-first is set to true by default for semantic columns, so the code looks like this:

```css
.portfolio-item {
	@include column(
		$type: flow,
		$respond-to: (
			((6, 12), break-1),
			((4, 12), break-2),
			((3, 12), break-3)
		)
	);
}
```

A width is not required by default - the column is 100% width up until **break-1** where it becomes 6/12's, then 4/12's at **break-2** and 3/12's at **break-3**.

> You can set any fraction you want, for example you can write *1, 2* instead of *6, 12*.

You can also use numeric values for percentages:

```css
.portfolio-item {
	@include column(
		$type: flow,
		$respond-to: (
			(50%, break-1),
			(100/3, break-2),
			(25%, break-3)
		)
	);
}
```

Using the [$fractions map](#) you can substitue writing the fraction numbers for the fraction names like so:

```css
.portfolio-item {
	@include column(
		$type: flow,
		$respond-to: (
			(half, break-1),
			(third, break-2),
			(quarter, break-3)
		)
	);
}
```

With `$mobile-first` set to **false**, to achieve the same result as the above example the code would be:

```css
.portfolio-item {
	@include column(
		$mobile-first: false,
		$type: flow,
		$width: quarter,
		$respond-to: (
			(third, break-3),
			(half, break-2),
			(full, break-1)
		)
	);
}
```

> Note the requirement of a default value for `$width`.

### Column Aligning

Whilst Kayzen GS does not come with any classes or mixins to align your columns, it is extremely easy to add this functionality yourself. To **horizontally align** a row of columns, simply set the `text-align` CSS property of your row to either `left`, `right` or `center` as desired:

```html	
<div class="row" style="text-align: center">
	<div class="span-6">This column is centrally aligned.</div>
</div>
```

To **vertically align** your columns relative to the tallest column in the row, set the `vertical-align` CSS property of your column. By default, this is set to `top`.

```html	
<div class="row">
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

### Solving the Whitespace Issue

The issue itself is outlined is great detail in [this blog post](http://blog.purecss.io/post/60789414532/how-we-improved-grids-in-pure-0-3-0) from the Pure CSS blog. Indeed, this issue is what caused Pure to move away from inline-block columns and towards flex. In the [Github issue](https://github.com/yahoo/pure/issues/41) which has received over 150 posts in over 2 years, amongst some 

## Help, Support & Contributing

For all issues, bugs suggestions and feature requests, please use the [issues page](https://github.com/esr360/Kayzen-GS/issues). Any and all contributions are welcomed!

Follow [@esr360](https://twitter.com/ESR360) on Twitter!