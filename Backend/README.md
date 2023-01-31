# Change++ 2022 Coding Challenge due 9/24 at 11:59 PM
## Before You Begin

Congrats!! You have been selected to engage in the next step of the Change++ application process. 

The next step in our process is completing the following coding project. We expect this to take at least 5 hours depending on experience level and technical skills. You will have approximately one week to complete the challenge. We recognize that you are all busy, but as a member of a Change++ team it is expected that you will dedicate 4-6 hours every week working on your project; therefore, we believe this is a reasonable timeframe.

IMPORTANT INFORMATION: In addition to this README.md, you have been given a csv with Taylor Swift lyrics inside of this git repository! You may use either this or an API to retrieve information for this challenge. More information on this is given below.

## What we are looking for

At Change++, our project teams are made up of members ranging from those in their first-year at Vanderbilt to those in graduate programs. We know that you all have varying degrees of technical skills and experience, all of which we will take into account when reviewing your code. Working on a Change++ team, you may often use a new technology that you are not familiar with and have not learned in CS courses at Vanderbilt, but we’re looking to see that you demonstrate the initiative and resourcefulness necessary to learn new skills and complete your work in a timely manner. You should be able to complete this challenge with a combination of basic programming skills (AP CS, 1101, 2201 etc.) and online resources.

As far as your code goes, here are a few high-level things we are looking for:
### Functionality
As always, the most important criteria is whether or not your code works according to the requirements. You should not only work to meet the requirements given, but also do your best to deliver a quality product, which may mean more than just completing the specification as stated.
### Good style and Readability
As this is an untimed challenge, we expect a certain level of quality. Be sure to comment and format your code as you might while working on an application for one of our non-profits. Keep in mind we will be reading and trying to understand your code. It is in your best interest to include intentional comments and meaningful commit messages.
### Organization and Extensibility
This goes along with good style. We want to see your ability to develop maintainable code. Although we will not actually build further upon this challenge, you should organize your work in an intuitive manner which would make it easy to build upon in the future. 
### Creativity
Change++ members are people who use creativity and initiative to get things done. There will likely be plenty of applicants who attempt this challenge, so it will benefit you to make your program stand out.


# The Challenge

![kindasnazzywithit](https://user-images.githubusercontent.com/90669224/187301486-79415542-912b-4472-b79e-30a2509546b9.gif)

Your task is to build a game which tests the user on their ability to know Taylor Swift lyrics.

**Given a lyric from a Taylor Swift song, prompt the user to guess which song the lyric originates from. After the user has played multiple rounds, let them know their accuracy.**

To do this we are going to be requiring you to build two different services, a frontend and a backend, which together complete the project.




## The Frontend
The frontend serves as the way that a user would interact with your program and play the game. You have a lot of flexibility in terms of how you choose to build it ranging from a simple executable (ran from the terminal) to a website, app, or any (reasonable) technology you can think of.



## The Backend
The backend consists of a RESTful API that can be accessed to retrieve song information and lyrics. Once again, there is a good amount of flexibility.


## Game Loop

The game loop for your application should look something like this:

<ol>
  <li>Before the game begins, manually start the backend server. This will probably look something like running a command ("python3 backend.py", "node server.js", "go run server.go", etc.)
  </li>
  <li>When user starts program (likely with a similar command in the terminal), call the backend to get Taylor Swift songs - the backend either uses a csv or an API to get these songs.</li>
  <li>Randomly choose a lyric to present to the user.</li>
  <li>Prompt the user to guess the title of the song the lyric originates from.</li>
  <li>Let the user know if they were correct.</li>
  <li>Repeat steps 3-5 at least a few times.</li>
  <li>Show the user their game statistics.</li>
</ol>

Note: There is a good amount of room for creativity within the challenge. The game loop is just a suggestion. 

# Scoring

Front-end
<ul>
<li>
Necessary - Gameplay works
</li>
<li>
5 Points Possible - Good style and readability
</li>
<li>
3 Points Possible - Organization and Extensibility
</li>
<li>
5 Points Possible (bonus)- Build the Frontend in React or React Native (we'd also love to see Angular or Vue!)
</li>
<li>
3 Points Possible (bonus) - Build a beautiful/intuitive interface
</li>
<li>
2 Point Possible (bonus) - Allow the user to choose the album the lyrics will come from
</li>
<li>
2 Point Possible (bonus) - Allow the user to choose the artist the lyrics will come from
</li>
<li>
? Points Possible (bonus) - If your project goes above and beyond in some other way, we'd love to see it
</li>
</ul>

Backend
<ul>
<li>
Necessary - Gameplay works
</li>
<li>
4 Points Possible - Good style and readability
</li>
<li>
2 Points Possible - Organization and Extensibility
</li>
<li>
5 Points Possible (bonus) - Use Musixmatch or a similar API to retrieve lyric information
</li>
<li>3 Points Possible - Build the RESTful API in Node.js. </li>
<li>
? Points Possible (bonus) - If your project goes above and beyond in some other way, we'd love to see it
</li>
</ul>

README 
<ul>
<li>1 Point Possible - Well written README with full name, email, and a clear explanation on how to run program including packages to install eg npm install</li>
</ul>

## Deliverables

Aside from adding, committing, and pushing your files to the repo, include a `README.txt`. **INCLUDE YOUR FULL NAME AND VANDERBILT EMAIL IN THE README.** A README is helpful because:
<ul> 
  <li>We may need additional information about reading or running your program</li>
  <li>We want to you to include a brief (under 100 words) reflection about the code you wrote</li>
  <li>We are interested in any feedback you provide about the project and a reflection on the code you wrote</li>
  <li>If you did not finish the exercise but would like to provide some information about what you may have gotten done with more time or experience, and which steps you struggled with.</li>
  <li>Feel free to share anything else you want to tell us! This does include funny little jokes. I can neither confirm nor deny that funny little jokes can count toward bonus points (they unfortunately do not).</li>
</ul>


## Tips, Tricks, and Helpful Resources

**If you have any general questions or want advice on how to get started/learn something, please email Kyle Burgess: kyle.m.burgess@vanderbilt.edu.**


<ul>
  <li>DO NOT TRY TO USE C++ FOR THIS PROJECT! We will be impressed if you manage to pull it off but it would also be really hard. Python or JavaScript are probably the easiest language to use to meet the base requirements and is not that hard to learn for someone who knows C++. Java is also doable, but might be slightly harder.</li>
  <li>We are trying to simulate "real world development" in this project so Google is definitely your friend. Be resourceful!! (Specifically, if you don't know where to start, you can google how to make an API in Python/JavaScript/etc)</li>
  <li>RESTful API
    <ul>
      <li>If you have never made an API before, it might seem fairly tricky. It is supposed to be a bit challenging, but definitely achievable and should not require a massive amount of code. There is a working solution of the backend written in less than 50 lines of code including WebScraping (note that it is totally ok if your solution is longer and a shorter solution is not necessarily a better solution, aim for clarity in your code).</li>
      <li>If you want to write an API, my first suggestion would be to google "how to write an API in {language of choice}". Follow a tutorial and copy paste some code and work with it until you generally understand what it is doing, then try to modify it to work for this project</li>
      <li>For a general explanation of what RESTful APIs are and how they work, check out this link: https://searchapparchitecture.techtarget.com/definition/RESTful-API</li>
    </ul>
  </li>
  <li>Git
    <ul>
      <li>If you have never used git before it might seem a little daunting but it is actually, for this project at least, fairly straightforward. If you have any specific issues with it, try google and if you still can't figure it out, email berke.k.lunstad@vanderbilt.edu for help</li>
      <li>If you want a basic tutorial on Git, check out this link: https://hackernoon.com/understanding-git-fcffd87c15a3</li>
      <li>To get you on the right track, the only commands you should need to use for this are `git clone {repo}`, `git add .`, `git commit -m "message"`, and `git push`</li>
    </ul>
  </li>
  <li>Here's some tips if you want to try your hand at using an API to get information on lyrics/songs/albums/artists:
    <ul>
      <li>Here's a list of some great lyric APIs: https://www.programmableweb.com/news/7-top-apis-lyrics/brief/2019/10/27 </li>
      <li>MusixMatch is a great API - and it comes with a Node package! If you happen to be using Node, check out the package here: https://www.npmjs.com/package/musixmatch</li>
    </ul>
  </li>
  <li>Good luck!</li>
</ul>

## Stuck?
All good, this is expected! You've got plenty of options. First, check our workshop schedule - if your issue is with one of the topics, feel free to pop by and learn with us. Second, check our office hours. We would be happy to help you out with any errors you are encountering. Third, email me (kyle.m.burgess@vanderbilt.edu) - if you can't attend office hours but still need help, send me an email and we can help you out.

### We believe in you! This challenge has been Taylor'd so you can Swift-ly learn the topics and make a full-stack project. Change++ has a blank space, baby... and we'd love to write your name.
