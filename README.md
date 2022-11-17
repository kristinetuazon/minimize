# Minimize
> A decluttering list-sorting application.

<br />

![Minimize-jpeg 001](https://user-images.githubusercontent.com/72143947/202566418-0d2684e0-d573-4a3d-8f13-768dbfd623cd.jpeg) <br />

This application aims to help you sort through your items. Tinder-style. <br /> 
<br />
<br />

## Installation

<br />

OS X & Linux:

```sh
npm run start
```
<br />
<br />


## Usage example


![Minimize-jpeg 002](https://user-images.githubusercontent.com/72143947/202566782-8a0da706-a90f-43e5-8618-a60969483539.jpeg)
<br />
<br />
Are you looking to declutter your closet or the unmentionable drawer you have in your kitchen? Are you backpacking and you're not sure what to bring? Are you moving homes and you want to take a general inventory of what you are bringing?
<br />
<br />

![Minimize-jpeg 004](https://user-images.githubusercontent.com/72143947/202566873-c219eac9-ecd0-466c-a715-7c04dcc88f5f.jpeg)
<br />
<br />

Then this application is for you!
<br />
My user stories are: Emily--young and career driven. She currently works at consulting and is dealing with stress often. To counter that, she goes for retail therapy and a friend pointed out that it may be an addiction. So she wanted an app that could help her sort over her things and help her keep track of what is sorted and what is not. Another is Tim--a digital nomad, and a person who travels everywhere all the time. He keeps his stuff light, but sometimes it is hard to know what he needs. He wants an application that will allow him to keep track of what he brought in what trip and also help him double check and sort through the things he's bringing.
<br />
<br />

Inspired by Marie Kondo's "what sparks joy" and the Minimalist lifestyle--Minimize aspires to help you sort through your things (clothes, books---anything) in three categories: yes, no and maybe.
<br />
<br />


![Minimize-jpeg 003](https://user-images.githubusercontent.com/72143947/202566842-38212179-5f12-47c3-8fbf-efc19f09c197.jpeg)
<br />
<br />

## Tech Stack
<br />

![Minimize-jpeg 006](https://user-images.githubusercontent.com/72143947/202566948-c62463a2-39c0-4783-8ba7-e5c43e43cf33.jpeg)

<br />

For this project, I chose to use MongoDB, Express, NextJS and Node. Due to the serious time constraints to meet the minimal viable product of this project, I've relied heavily on Material UI for UI design. It was my first time using MongoDB and NextJS, so I had to figure out to configure and learn these frameworks as I worked on this project. I personally used a non-SQL database because of the nature of my application--because information being sent and kept are soley reliant on the user (user-generated), there are no intrinsic connections with the data being collected and fetched except for the fact that a particular user is using it.

<br />

The front end client is being deployed in Vercel, creators of NextJS and was quite a natural choice when I decided to do the UI in Next. My express server is being deployed in Render.I chose to split the client and server side deployment for a future idea of having the application in a phone application with an accompanying website. Also, Vercel discourages a server upload in their own services since Next JS natively supports a serverless framework.

## Personal Reflections
<br />


![Minimize-jpeg 007](https://user-images.githubusercontent.com/72143947/202567001-9583844c-cae5-481a-8f46-4d52ed8bc4b6.jpeg)

<br />

This is the first solo full-stack application I have made. Some of the things I learned was more about deployment (from npm scripts and mono vs duo repos). I've also learned more about Firebase/Firestore authentication and database and how it is built to run in the client side and not in the server side. Initially I was rerouting my authorization requests from my express server to the client which is a roundabout way of doing things. After reading some documentation and some examples, I realized that it is build for client side configuration and it made making authentication happen smoothly.

<br />

![Minimize-jpeg 008](https://user-images.githubusercontent.com/72143947/202567020-2201def3-3274-4e19-9192-a0f35c6c8344.jpeg)

<br />
Personally, I gravitate more in the frontend more than the backend, so the backend work was a great challenge for me. I am thankful that MongoDB schemas are much more forgiving and easier to update if needed. Also thinking of data and how it is used within the application is another new thing to think about. 
<br />

## Development setup

Still under development.

```sh
[still under development]
```
<br />
<br />
## Release History

* 0.0.1
    * Work in progress

<br />
<br />
## Meta

Kristine Tuazon – [@kristinetuazon](https://instagram.com/kristinetuazon) – kristine.jane.tuazon@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/kristinetuazon](https://github.com/kristinetuazon/)

## Contributing

1. Fork it (<https://github.com/kristinetuazon/minimize/fork>)
2. Create your feature branch (`git checkout -b feature-###-featurename`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature-###-featurename`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->


