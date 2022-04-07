# Browser Technologies 

For this course we had to create a demo on the basis of a user story. The goal was to create a project using *Porgressiev Enhancement* and *Feature Detection*. Using these things we want to make it so that our project and our main feature always works no matter what the user has turned off or on what kind of device or browser the user is accessing the project on. 

Link to demo:
...

# Table of Content

- [User Story](#user-story)
- [Features](#features)
- [My Project](#my-project)
- [Testing the Project](#testing-the-project)
- [WireFlow](#wireflow)

# User Story

For this project, we had the option to chose from a list of 6 User Stories. I was reading all of the user stories and there was one in particular that struck my interest. I have the bad personality trait of thinking I can do the hardest and most difficult things. The fact that the other ones didnt really sound interesting, I chose for the Nerdy T-shirt user story. Which is as follows:

*I want to customize my own t-shirt with a text on it. I want to be able to save and order the shirts and use it the next time I visit the site.*

# Features

For this User Story, there were a few requirements that needed to be included in this project. 
- Personal Info (name, phone, email)
- Color of t-shirt
- Text for on t-shirt
- Size of t-shirt
- Male of Female
- Continue where you left
- Validation, everything needed to be filled in
- Be able to create multiple shirts
- Order page to buy en show the designs

This is a pretty long list and it sounds really challenging. I chose this user story because I like the way it sounded. I like to challenge myself and step out of my comfort zone. However, having never experienced JavaScript and being very very new to all of this, I decided to change its features and created a core feature based on the user story and my skillset. 

# My Project

I chose to only being able to customize the shirt (No gender, since thats unnecessary and t-shirt are pretty Unisex) and once you created it, it will show on a seperate page with your choices. 

The way I created my project was starting with the HTML version of my page (which is very normal) but I wanted it to both look good and work. Using `CanIuse.com` I went through all the features of the elements I wanted to use. 
I did the same thing for the css and made the css function for (almost) every browser and device. 

There are some things that dont work on certain browsers like the `required` function. But this isn't very important for the core feature. Being able to customize your t-shirt means that you are able to have complete freedom in your choices. If you dont want text, you shouldnt be forced to chose it. Things like this is what make the user experience better as well. 

I wish I was able to do more for the PE like JavaScript. But since the core feature (and the fact we didnt have many days) I skipped on doing that, making it more Progressive but less interesting. 
This is still on my To-Do list. But for now, instead of using JavaScript to display the text on the shirt, I used a span and position relative and absolute. 
Using this code I test to see if the browser supports it, and if not we just display the span to none.

```
@supports (position: relative) {
  .shirt-list {
    position: relative
  }
}

@supports not (position: absolute) {
  span {
    display: none;
  }
}

span {
  position: absolute;
  top: 80px;
  margin: 0 auto;
  left: 124px;
  color: white;
  font-size: 14px;
  width: 70px;
  text-align: center;
  font-family: 'pilowlava', sans-serif;
}

```

So my core functionality is finished. I was able to customize my shirts.

<!-- Image of the project -->
![Project dashboard](https://github.com/ppijn/C-Shirt/blob/main/public/img/project.jpg)


# Testing the Project

I tested the Project on 4 different devices/browsers: Chromium Based Browser, FireFox, IOS and a Lumia phone.

On all of the browsers it worked fine and the core functionality worked for every device and browser. For the Ipod some features didnt work but it still looked nice and the core funtionality worked fine.

# WireFlow