# Kayzen GS
> A responsive, flexible and dynamic grid system that uses "inline-block" columns.

## Why use inline-block for columns?

The simple answer is; flexibility. By definition, columns *are* just inline blocks - it's the way CSS columns are supposed to work. Using the native CSS columns by applying **inline-block** opens up a whole world of flexibility for your columns - the most useful benefit being the ability to set their horizontal and vertical align, just by setting the *text-align* and *vertical-align* properties respectively. 

> [See Examples](http://#)

## Why don't other grid systems use inline-block?

By default, adding display: inline-block to an element causes a natural whitespace to appear between each element, which can vary in width from font to font and browser to browser. Indeed, this has caused many people many problems, and there are plenty of go-to hacky and impractical work arounds, none of which are really suitble for a production environment. However, the above code allows for the use of completely usable and functional columns which use inline-block and have no white-space. And to top it all off, it works on all browsers, including Internet Explorer 6!

## What about Flex?

Flex doesn't work in IE6!

## Documentation