# Kayzen GS
> A responsive, flexible and dynamic grid system that uses "inline-block" columns.

### Why use inline-block for columns?

The simple answer is; flexibility. By definition, columns *are* just inline blocks - it's the way CSS columns are supposed to work. Using the native CSS columns by applying **inline-block** opens up a whole world of flexibility for your columns - the most useful benefit being the ability to set their horizontal and vertical alignment, just by setting the *text-align* and *vertical-align* properties respectively. 

> [See Examples](http://#)

### Why don't other grid systems use inline-block?

By default, using **inline-block** for columns causes a [natural whitespace](http://css-tricks.com/fighting-the-space-between-inline-block-elements/) to appear between each column, which can vary in width from font to font and browser to browser. Indeed, this has caused [many people many problems](http://stackoverflow.com/search?q=inline-block+column), and there are plenty of go-to [hacky and impractical](http://davidwalsh.name/remove-whitespace-inline-block) work arounds, none of which are really suitble for a production environment. However, for the first time Kayzen GS allows for the use of completely usable and functional columns which use **inline-block** and have **no white-space**. And to top it all off, they work on all browsers, including **Internet Explorer 6**!

## Documentation

By default, Kayzen will work our the box. Just load the **kayzen-gs.css** file in your project, and you're good to go. 

### Kayzen Grid System

By default, Kayzen GS comes with reusable classes which can be used to create your website structure (you can easily change these classes and values to whatever you want - see [Custom Configuration](#)). The most basic example of a row of Kayzen columns using the default settings would look something like this:

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

### Custom Configuration

> Each row of columns **must** be wrapped inside a paret container with the **row** class.

```html
<div class="row">
	...
</div>
```