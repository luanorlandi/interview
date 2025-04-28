/**
# Agents Route Sorting

## Description of the problem

An old-fashioned real-estate company builds their agents visiting agenda with paper cards. Each card has the origin and destiny house ids, indicating the optimized route the agent need to follow in order to maximize the amount of visits and save gas.

For example:

• 12F->AAS
• AAS->BOO
• B00->C77
• C77->L23

Unfortunately, the cards aren't numbered and the agent mixed them, losing the optimized route. Knowing that it doesn't make sense to go twice to the same house, help this agent to find the correct order for these cards to optimize the route.

## Input

Input: A list of tuples with origin and destiny for each card. Example: (B00,C77),(12F,AAS),(AAS,B00)(C77,L23)
Tip: start the problem considering you already have this tuple, if the
language you choose supports it. Otherwise, you can create a custom class to represent the ticket.

## Output

Output: Sorted list of cards, representing the optimized route Example: (12F,AAS),(AAS,B00),(B00,C77),(C77,L23)
*/

// Time complexity: O(n) where n is the length cards
// Space complexity: O(n)
function sortedRoute(cards) {
  const hashMap = {};
  const destinations = {};

  for (let i = 0; i < cards.length; i++) {
    hashMap[cards[i][0]] = cards[i][1];
    destinations[cards[i][1]] = true;
  }

  let insertingCard = cards[0];
  for (let i = 0; i < cards.length; i++) {
    if (!destinations[cards[i][0]]) {
      insertingCard = cards[i];
      break;
    }
  }

  const sortedCards = [];
  while (insertingCard[1]) {
    sortedCards.push(insertingCard);
    const origin = insertingCard[1];
    const destiny = hashMap[origin];
    insertingCard = [origin, destiny];
  }

  return sortedCards;
}

// Time complexity: O(n ^ 2) where n is the length cards
// Space complexity: O(n) where n is the length cards
function sortedRoute2(cards) {
  let sortedCards = [];
  const cardsCopy = [...cards];

  sortedCards.push(cardsCopy[0]);
  cardsCopy.slice(1);

  while (sortedCards.length !== cards.length) {
    for (let i = 0; i < cardsCopy.length; i++) {
      if (cardsCopy[i][0] === sortedCards[sortedCards.length - 1][1]) {
        sortedCards.push(cardsCopy[i]);
        cardsCopy.splice(i, 1);
        break;
      }

      if (cardsCopy[i][1] === sortedCards[0][0]) {
        sortedCards = [cardsCopy[i], ...sortedCards];
        cardsCopy.splice(i, 1);
        break;
      }
    }
  }

  return sortedCards;
}

console.log(
  sortedRoute([
    ["B00", "C77"],
    ["12F", "AAS"],
    ["AAS", "B00"],
    ["C77", "L23"],
  ])
);
