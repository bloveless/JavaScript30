## Takeaways

I changed the node list to an array and use a for loop to just loop over the indexes that needed to be checked rather
than looping through all checkboxes every time.

Didn't know that events could be combined. I.E. the event will have a shiftKey attribute applied to it. I've never used
that before. I had created an independent variable and event handler to track the shift key, but was able to delete a 
bunch of that by using event.shiftKey.