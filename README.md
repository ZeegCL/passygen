# Passygen
A semantic password generator. [Check the demo](https://zealous-yonath-da83c6.netlify.app/)

## About

The project was built using:
- React
- TailwindCSS
- Font Awesome (free version)
- Laravel Mix

I decided to create this app inspired by [xkcd #936](https://xkcd.com/936/)

![xkcd 936](https://imgs.xkcd.com/comics/password_strength.png)

## Passwords vs passphrases

A password (or passcode) is a string of characters used to confirm the identity of a user in the authentication process. On the other hand, a passphrase is a sequence of words used for the same purpose as a password.

In general, passphrases could be easier to remember and a little more secure due to its length, but that could not always be the case. I recommend reading the blog post ["Let’s settle the password vs. passphrase debate once and for all" by Ben Wolford @ ProtonMail](https://protonmail.com/blog/protonmail-com-blog-password-vs-passphrase/)

## Usage

To generate a new password, just check the options you like the most and press the "Generate" button.

The generator selects 2 or more words from 2 lists: adjectives and nouns, and builds a password that makes sense when you read it. The format always will be "(prefix) + adjective(s) + separator(s) + noun + (suffix)"

Example: `%co0L;Hors3%`
