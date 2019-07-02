# MTG Counter

MTG Counter is an open source react-native app that is a helpful tool for keeping track of life totals in card games like Magic: The Gathering. This design of the app is based on Talisman Games LifeTotal app, and is meant as a learning tool that can be extended quite easily.

## LifeTotal Tracking

The primary purpose of the app is to keep track of life totals through a simple clickable interface with +/- increment and decrement buttons. The app currently allows for two players to keep track of their life totals and customize the color of their counter view based on the 5 mana colors (white, blue, black, red, and green).

Future extentions will include:

1. Reset the game state
2. More than 2 players
3. Start of game die roll

Further extensions that can be implemented either in this app or a companion app include:

1. Account creation
2. Match history
3. Deck history I - simple photo saving
4. Deck history II - manual entry using scryfall api
5. Deck history III - OCR to convert a photo into a deck using scryfall

## Running the app

To run the MTG Counter app clone this repository and install expo via
<code>npm i expo-cli</code>\n
then start the app by calling:\n
<code>cd mtg-counter</code>\n
<code>yarn start</code>\n
or\n
<code>expo start</code>\n
