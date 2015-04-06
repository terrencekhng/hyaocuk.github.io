---
layout: post
title: A Little Bit About Doctype
---

As we can imply from the name **doctype**, it't the type of the document that's going to be treated by the User Agents, it appears above the `<html>` tag.

There was a time I was creating a new HTML file for IE and when I run the page something unexpected happened, the divs I had originally placed correctlly were in a goddamned mess. What caused this is IE was set to 'quirks mode' automatically, after I selected 'IE 8 document mode'(no joking)  everything were back on the way again. So what made IE choose the 'quirks mode' for me even I had forced IE to treat it using 'IE 8', is I forgot to add the **doctype** at the beginning of the document.

"The doctype also serves to make the browser render the page in "standards mode". In standards mode, browsers try to render the page according to the CSS specifications, in effect trusting that the person who created the document knew what they were doing.

On the other hand, if a browser finds an outdated, incomplete, or missing doctype at the start of the page, it will render the page using "quirks mode", which is more backward-compatible with older practices and browsers. Quirks mode assumes that the document was not created with web standards in mind. In practical terms it means that the web page will still render, but the browser will work a bit harder to do so, and you may get some unexpected display results. The differences are mostly about how the CSS is rendered, and only partly about how the actual HTML is treated. As a web designer or developer, you will get the most consistent results by making sure that all browsers use standards mode; thus, you should stick to web standards, and use a proper doctype."[1]

Before HTML5 doctype, we have

###HTML 4.01 strict doctype###

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

The HTML 4.01 strict doctype validates against the HTML 4.01 spec, although it doesn't allow any presentational markup or deprecated elements (like &lt;font&gt;) or framesets to be used. It validates loose HTML style markup, such as minimized attributes and non-quoted attributes (e.g., required, rather than required="required").

### HTML 4.01 transitional doctype ###

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

The HTML 4.01 transitional doctype validates against the HTML 4.01 spec. It allows some presentational markup and deprecated elements (like &lt;font&gt;) but not framesets. It also validates loose HTML style markup.

While XHMTL1.0 is similar just the difference of the name;

### HTML 4.01 and XHTML 1.0 frameset doctypes ###

If you want to use framesets and still have your markup validate, you can use one of these two doctypes:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

These are functionally the same as HTML 4.01 transitional and XHTML 1.0 transitional, respectively, but they allow the use of framesets. But please don't use framesets: they are not considered best practice, and their use is discouraged by most knowledgeable web authors and designers.

### HTML5 doctype ###

```
<!DOCTYPE html>
```

In terms of what syntax style you should use, pick something you are comfortable with. A good recommendation is to start off using strict XHTML syntax, as it is guaranteed to work in any situation. Later on you can adjust your style, when you better understand what you are doing. Just remember these rules:

* If you are using the HTML5 doctype or an HTML 4.01 doctype, you can use whatever style you want
* If you are using an XHTML doctype, you must use XML well-formed syntax
* Whichever style you are using, best practice is to:
  * Close all open elements, for example `<p>paragraph</p>`, not `<p>paragraph`
  * Nest them properly, for example `<p>paragraph with bold <strong>word</strong></p>`, not `<p>paragraph with bold <strong>word</p></strong>`

===
[1] [WebPlatform](https://docs.webplatform.org/wiki/guides/doctypes_and_markup_styles)
