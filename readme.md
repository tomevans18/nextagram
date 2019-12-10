THIS IS A FORK OF NEXTAGRAM WITH THE NEXT VERSION UPDATED TO THE LATEST AND A DYNAMIC ROUTE ADDED.

To make next.js function as expected tge following section of code needed to be disabled https://github.com/tomevans18/nextagram/blob/6889769f13c2fa93af9fc101525d7b9263e7941f/node_modules/next/dist/next-server/lib/router/router.js#L204

For obvious reasons this isn't the correct approach but it shows that this code could potentially be removed, as routing seemed to still function as expected but without the limitations with dynamic routing.

# NextGram

Sample [next](https://github.com/zeit/next.js) app that takes advantage of the
routing capabilities. In particular, notice that the photo route can be attached to _two distinct_ components: in one case rendered as a modal, and in another case rendered independently.

![NextGram](https://i.imgur.com/KF0KExk.gif)

# Installation

    $ npm install

# Running the app

    $ npm run dev
