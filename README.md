# Password-Generator

For this activity we were tasked with making a random password generator. With the CSS and HTML already created we had to focus on the javascript logic.

Here is a short clip showing the password generator working.
![screen-gif](./assets/password.gif)

Some of the big things I had to do with the code was figure how to guarantee that each one would have a guaranteed character from the respective choice. So here is a look at how i did that.

```
if (lowCase && upCase && numChars && specChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));

    possibilities = lower.concat(upper, nums, spec);

    for (var j = 0; j < passLength - 4; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
```

Overall I enjoyed this project it was nice to think through the logic of formulating the password.