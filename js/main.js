import { friends, notFriends } from "./constants.js";
import { elementGenerator, doAppendChild, setInnerText } from "./functions.js";

function main() {
    const friendsList = [...friends]; // Array
    const notFriendsList = [...notFriends]; // Object

    const root = document.getElementById('root');

    // allFriends
    const allFriends = elementGenerator('p');
    allFriends.innerText = `ALL FRIENDS: ${friendsList.join(', ')}`; // I dont know how to use setInnerText function here?
    doAppendChild(root, allFriends);

    // allNotFriends
    const allNotFriends = elementGenerator('p');
    allNotFriends.innerText = `ALL NOT FRIENDS: ${notFriendsList.map(person => person.name).join(', ')}`;
    doAppendChild(root, allNotFriends);

    // shortNameFriends
    const shortNameFriends = elementGenerator('p');
    const short = friendsList.filter((friend) => friend.length < 5);
    shortNameFriends.innerText = `FRIENDS WITH A SHORT NAMES: ${short.join(', ')}`;
    doAppendChild(root, shortNameFriends);

    // longNameFriends
    const longNameFriends = elementGenerator('p');
    const long = friendsList.filter((friend) => friend.length > 6);
    longNameFriends.innerText = `FRIENDS WITH A LONG NAMES: ${long.join(', ')}`;
    doAppendChild(root, longNameFriends);

    // friendsStartingWithLetterD
    const friendsStartingWithLetterD = elementGenerator('p');
    const friendsLetterD = friendsList.filter((letter) => letter[0] === 'D');
    friendsStartingWithLetterD.innerText = `FRIENDS WHOSE NAME START WITH 'd': ${friendsLetterD.join(', ')}`;
    doAppendChild(root, friendsStartingWithLetterD);

    // friendsThatHasLetterA
    const friendsThatHasLetterA = elementGenerator('p');
    const friendsWithLetterA = friendsList.filter(name => name.includes('a'));
    friendsThatHasLetterA.innerText = `FRIENDS THAT HAS LETTER 'a' INSIDE THEIR NAME: ${friendsWithLetterA.join(', ')}`;
    doAppendChild(root, friendsThatHasLetterA);

    // friendsThirdLetterR
    const friendsWithThirdLetterR = elementGenerator('p');
    const friendsThirdR = friendsList.filter(name => name.charAt(2) === 'r');
    friendsWithThirdLetterR.innerText = `FRIENDS WITH THIRD LETTER 'r' INSIDE THEIR NAME: ${friendsThirdR.join(', ')}`;
    doAppendChild(root, friendsWithThirdLetterR);

    // friendsWhoseNamesEndsWithE
    const friendsEndingWithE = elementGenerator('p');
    const friendsEndE = friendsList.filter(name => name.endsWith('e'));
    friendsEndingWithE.innerText = `FRIEND WHOSE NAMES ENDS WITH 'e': ${friendsEndE}`;
    doAppendChild(root, friendsEndingWithE);

    // notFriendsFromBelgrade
    const notFriendsFromBelgrade = elementGenerator('p');
    const notFriendsBelgrade = notFriendsList.filter(person => person.city === 'Belgrade');
    notFriendsFromBelgrade.innerText = `NOT FRIENDS FROM BELGRADE: ${notFriendsBelgrade.map(person => person.name).join(', ')}`;
    doAppendChild(root, notFriendsFromBelgrade);

    // notFriendsAdults
    const notFriendsAdultsList = elementGenerator('p');
    const notFriendsAdults = notFriendsList.filter(person => person.age >= 18);
    notFriendsAdultsList.innerText = `ADULT NOT FRIENDS: ${notFriendsAdults.map(person => person.name).join(', ')}`;
    doAppendChild(root, notFriendsAdultsList);

    // notFriendsBetween18And45
    const notFriendsBetween18And45 = elementGenerator('p');
    const notFriendsBetween = notFriendsList.filter(person => person.age >= 18 && person.age <= 45);
    notFriendsBetween18And45.innerText = `NOT FRIENDS BETWEEN 18 AND 45: ${notFriendsBetween.map(person => person.name).join(', ')}`;
    doAppendChild(root, notFriendsBetween18And45);

    // friendsThatHasAInTheirNames
    const friendsThatHasAInTheirNames = elementGenerator('p');
    const friendsWithAInside = friendsList.filter(name => name.includes('a'));
    friendsThatHasAInTheirNames.innerText = `FRIENDS THAT HAS 'A' INSIDE THEIR NAMES: ${friendsWithAInside.map(person => person + '-hasAInTheName').join(', ')}`;
    doAppendChild(root, friendsThatHasAInTheirNames);

    // notFriendsThatHasAInTheirNames
    const notFriendsThatHasAInTheirNames = elementGenerator('p');
    const notFriendsThatHasAInside = notFriendsList.filter(person => person.name.includes('a'));
    notFriendsThatHasAInTheirNames.innerText = `NOT FRIENDS THAT HAS 'A' INSIDE THEIR NAMES: ${notFriendsThatHasAInside.map(person => person.name + '-hasAInTheName').join(', ')}`;
    doAppendChild(root, notFriendsThatHasAInTheirNames);
};

main();