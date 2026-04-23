// LCA Anchor Pass UK — Full Question Bank v1.1
// 700 original practice questions

const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "The Life in the UK Test is a requirement for people applying for which of the following?",
    "opts": [
      "A student visa",
      "Indefinite Leave to Remain or British citizenship",
      "A driving licence",
      "A UK passport only"
    ],
    "answer": 1,
    "explain": "The test is required for ILR (permanent residence) or British citizenship. It is not needed for student visas, driving licences, or passports."
  },
  {
    "id": 2,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "Which of the following is a fundamental British value?",
    "opts": [
      "Speaking English at home",
      "Democracy",
      "Being born in the United Kingdom",
      "Belonging to the Church of England"
    ],
    "answer": 1,
    "explain": "Democracy is one of the 5 fundamental British values. The others are: rule of law, individual liberty, tolerance, and participation in community life."
  },
  {
    "id": 3,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of the following is NOT a fundamental British value?",
    "opts": [
      "The rule of law",
      "Individual liberty",
      "Wearing formal dress at work",
      "Tolerance of different faiths and beliefs"
    ],
    "answer": 2,
    "explain": "Wearing formal dress is not a British value. The 5 values are: democracy, rule of law, individual liberty, tolerance, and participation."
  },
  {
    "id": 4,
    "chapter": 1,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of the following are rights of people living in the UK EXCEPT:",
    "opts": [
      "Freedom of speech",
      "Freedom from unfair discrimination",
      "A right to a free house",
      "A right to a fair trial"
    ],
    "answer": 2,
    "explain": "A free house is not a right. The other three are protected rights for everyone in the UK."
  },
  {
    "id": 5,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What does the phrase 'rule of law' mean?",
    "opts": [
      "Only the government must follow the law",
      "Everyone, whether rich or poor, must follow the same laws",
      "The police make the laws",
      "Laws only apply to citizens"
    ],
    "answer": 1,
    "explain": "Rule of law means everyone is equal under the law — no-one, not even the monarch, is above it."
  },
  {
    "id": 6,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO responsibilities of everyone living in the UK.",
    "opts": [
      "Attending church weekly",
      "Respecting and obeying the law",
      "Speaking only English",
      "Looking after the area where you live and the environment"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "You must obey the law and look after your environment. Church attendance is not required; English-only is not a requirement."
  },
  {
    "id": 7,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO ways you can take part in community life.",
    "opts": [
      "Voting in elections",
      "Refusing to pay tax",
      "Donating blood or being an organ donor",
      "Moving home every year"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Voting and donating blood/organs are both ways to participate. Tax evasion is illegal; moving home has no community value."
  },
  {
    "id": 8,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "At what age can you serve on a jury?",
    "opts": [
      "16 to 65",
      "18 to 75",
      "21 and over",
      "18 to 60"
    ],
    "answer": 1,
    "explain": "Jury service is for people aged 18 to 75."
  },
  {
    "id": 9,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT one of the promises made at a citizenship ceremony?",
    "opts": [
      "Respect the rights and freedoms of the UK",
      "Uphold its democratic values",
      "Speak only English at home",
      "Observe its laws faithfully"
    ],
    "answer": 2,
    "explain": "Speaking only English at home is not part of the citizenship promise."
  },
  {
    "id": 10,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "Discrimination in the UK is illegal on which of the following grounds?",
    "opts": [
      "Only race and religion",
      "Only age and gender",
      "Race, religion, gender, age, sexual orientation, and disability",
      "Only nationality"
    ],
    "answer": 2,
    "explain": "UK law protects against discrimination on all these grounds, not just some of them."
  },
  {
    "id": 11,
    "chapter": 1,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of the following statements is FALSE?",
    "opts": [
      "Everyone in the UK has a right to a fair trial",
      "Freedom of speech is a right in the UK",
      "Only UK citizens have freedom of religion",
      "Discrimination based on disability is illegal"
    ],
    "answer": 2,
    "explain": "Freedom of religion applies to EVERYONE in the UK, not only citizens. The statement claiming only citizens have this right is false."
  },
  {
    "id": 12,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Volunteering in your local community is an example of which British value?",
    "opts": [
      "Rule of law",
      "Participation in community life",
      "Individual liberty",
      "Democracy"
    ],
    "answer": 1,
    "explain": "Volunteering is the clearest example of participation — actively contributing to community life."
  },
  {
    "id": 13,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What does 'tolerance' mean in the context of British values?",
    "opts": [
      "Ignoring other people",
      "Accepting that other people have different beliefs and faiths",
      "Agreeing with everyone",
      "Converting people to your religion"
    ],
    "answer": 1,
    "explain": "Tolerance means accepting that others hold different beliefs — not ignoring them, agreeing with them, or converting them."
  },
  {
    "id": 14,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of the following is NOT a right protected under UK law?",
    "opts": [
      "Freedom of speech",
      "Freedom from unfair discrimination",
      "A right to be paid a minimum annual income by the government",
      "Freedom of belief and religion"
    ],
    "answer": 2,
    "explain": "There is no legal right to a minimum annual income. The other three are genuine UK legal rights."
  },
  {
    "id": 15,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "How old must a person be to vote in a UK general election?",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explain": "Voting age is 18 in UK general elections."
  },
  {
    "id": 16,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO groups of people who can vote in UK general elections.",
    "opts": [
      "Anyone over 16",
      "UK citizens aged 18 and over",
      "Tourists visiting the UK",
      "Commonwealth citizens aged 18 and over who are resident in the UK"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "UK and qualifying Commonwealth citizens aged 18+ can vote. Under-18s and tourists cannot."
  },
  {
    "id": 17,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "Which of the following describes the British attitude to different faiths?",
    "opts": [
      "Only Christianity is permitted",
      "Tolerance of different faiths and beliefs",
      "Religion is banned",
      "You must declare your religion to the government"
    ],
    "answer": 1,
    "explain": "Britain's approach is tolerance — people are free to practise their religion."
  },
  {
    "id": 18,
    "chapter": 1,
    "difficulty": 2,
    "trap": "MOST",
    "q": "Most people in the UK are:",
    "opts": [
      "Required to attend church",
      "Free to practise any religion, or none at all",
      "Forbidden from practising Hinduism",
      "Required to be baptised"
    ],
    "answer": 1,
    "explain": "People in the UK are free to practise any religion — or no religion — as they choose."
  },
  {
    "id": 19,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NONE",
    "q": "Are any of the following legal requirements in the UK?",
    "opts": [
      "Attending church on Sunday",
      "Speaking English at home",
      "Belonging to a political party",
      "None of the above"
    ],
    "answer": 3,
    "explain": "None of these are legal requirements. This is a test of whether you can spot the 'none' option."
  },
  {
    "id": 20,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What is the minimum age to buy alcohol in the UK?",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explain": "18 is the minimum legal age to buy alcohol."
  },
  {
    "id": 21,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "How many countries make up the United Kingdom?",
    "opts": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explain": "4 — England, Scotland, Wales, and Northern Ireland."
  },
  {
    "id": 22,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT part of the United Kingdom?",
    "opts": [
      "England",
      "Wales",
      "Republic of Ireland",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "The Republic of Ireland is an independent country. The UK includes Northern Ireland but not the Republic."
  },
  {
    "id": 23,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which three countries make up Great Britain?",
    "opts": [
      "England, Scotland, Northern Ireland",
      "England, Scotland, Wales",
      "Scotland, Wales, Northern Ireland",
      "England, Wales, Northern Ireland"
    ],
    "answer": 1,
    "explain": "Great Britain = England + Scotland + Wales. The UK = Great Britain + Northern Ireland."
  },
  {
    "id": 24,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "What is the capital of Scotland?",
    "opts": [
      "Glasgow",
      "Edinburgh",
      "Aberdeen",
      "Dundee"
    ],
    "answer": 1,
    "explain": "Edinburgh is Scotland's capital. Glasgow is its largest city but not the capital."
  },
  {
    "id": 25,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "What is the capital of Wales?",
    "opts": [
      "Swansea",
      "Newport",
      "Cardiff",
      "Bangor"
    ],
    "answer": 2,
    "explain": "Cardiff is the capital of Wales."
  },
  {
    "id": 26,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "What is the capital of Northern Ireland?",
    "opts": [
      "Belfast",
      "Londonderry",
      "Armagh",
      "Bangor"
    ],
    "answer": 0,
    "explain": "Belfast is the capital of Northern Ireland."
  },
  {
    "id": 27,
    "chapter": 2,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO places that are Crown Dependencies.",
    "opts": [
      "The Falkland Islands",
      "The Channel Islands",
      "Northern Ireland",
      "The Isle of Man"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Channel Islands and Isle of Man are Crown Dependencies. Falkland Islands are a British Overseas Territory. Northern Ireland is part of the UK itself."
  },
  {
    "id": 28,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "What is the official currency of the United Kingdom?",
    "opts": [
      "Euro",
      "US Dollar",
      "Pound Sterling",
      "Swiss Franc"
    ],
    "answer": 2,
    "explain": "Pound Sterling (£) is the UK's currency. 100 pence = £1."
  },
  {
    "id": 29,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "How many pence make one pound?",
    "opts": [
      "50",
      "100",
      "200",
      "1000"
    ],
    "answer": 1,
    "explain": "£1 = 100 pence."
  },
  {
    "id": 30,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these saints' crosses is NOT on the Union Jack?",
    "opts": [
      "St George",
      "St Andrew",
      "St David",
      "St Patrick"
    ],
    "answer": 2,
    "explain": "St David (Wales) is not on the Union Jack. When the flag was designed, Wales was already joined to England."
  },
  {
    "id": 31,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which three crosses make up the Union Jack?",
    "opts": [
      "St George, St Andrew, St David",
      "St George, St Andrew, St Patrick",
      "St Andrew, St David, St Patrick",
      "St George, St David, St Patrick"
    ],
    "answer": 1,
    "explain": "The Union Jack combines the crosses of St George (England), St Andrew (Scotland), and St Patrick (Ireland)."
  },
  {
    "id": 32,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Approximately what is the current population of the UK?",
    "opts": [
      "27 million",
      "47 million",
      "67 million",
      "97 million"
    ],
    "answer": 2,
    "explain": "The UK population is around 67 million."
  },
  {
    "id": 33,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which language is spoken in parts of Scotland in addition to English?",
    "opts": [
      "Welsh",
      "Scottish Gaelic",
      "Irish",
      "Cornish"
    ],
    "answer": 1,
    "explain": "Scottish Gaelic is spoken in parts of the Scottish Highlands and islands."
  },
  {
    "id": 34,
    "chapter": 2,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of the following statements about the UK is FALSE?",
    "opts": [
      "The UK has four countries",
      "The UK currency is Pound Sterling",
      "The UK capital is Edinburgh",
      "Welsh is spoken in Wales"
    ],
    "answer": 2,
    "explain": "The UK capital is London, not Edinburgh. Edinburgh is Scotland's capital."
  },
  {
    "id": 35,
    "chapter": 2,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of the following is NOT a British Overseas Territory?",
    "opts": [
      "The Falkland Islands",
      "St Helena",
      "The Isle of Man",
      "Gibraltar"
    ],
    "answer": 2,
    "explain": "The Isle of Man is a Crown Dependency, not an Overseas Territory. The other three are all Overseas Territories."
  },
  {
    "id": 36,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Stonehenge was built approximately how long ago?",
    "opts": [
      "2,000 years",
      "4,000 years",
      "6,000 years",
      "10,000 years"
    ],
    "answer": 1,
    "explain": "Stonehenge was built around 4,000 years ago in Wiltshire, England, during the Bronze Age."
  },
  {
    "id": 37,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who led the Roman invasion of Britain in AD 43?",
    "opts": [
      "Julius Caesar",
      "Emperor Claudius",
      "Emperor Hadrian",
      "Mark Antony"
    ],
    "answer": 1,
    "explain": "Emperor Claudius led the successful invasion in AD 43. Julius Caesar had come earlier in 55 BC but did not conquer Britain."
  },
  {
    "id": 38,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In which year did the Romans leave Britain?",
    "opts": [
      "AD 43",
      "AD 410",
      "AD 789",
      "AD 1066"
    ],
    "answer": 1,
    "explain": "The Romans left Britain in AD 410."
  },
  {
    "id": 39,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Why was Hadrian's Wall built?",
    "opts": [
      "To divide England from Wales",
      "To keep out the Picts from Scotland",
      "To defend against French invasion",
      "As a border marker between counties"
    ],
    "answer": 1,
    "explain": "Hadrian's Wall was built in the north to defend Roman Britain from the Picts of what is now Scotland."
  },
  {
    "id": 40,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who defeated the Vikings and united the English kingdoms?",
    "opts": [
      "William the Conqueror",
      "King Alfred the Great",
      "King Harold",
      "Henry VIII"
    ],
    "answer": 1,
    "explain": "Alfred the Great defeated the Vikings and was the first to unite the English kingdoms."
  },
  {
    "id": 41,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The Battle of Hastings took place in which year?",
    "opts": [
      "AD 410",
      "1066",
      "1215",
      "1588"
    ],
    "answer": 1,
    "explain": "1066 — one of the most famous dates in British history. William the Conqueror defeated King Harold."
  },
  {
    "id": 42,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the last person to successfully invade England?",
    "opts": [
      "Emperor Claudius",
      "William the Conqueror",
      "Alfred the Great",
      "Julius Caesar"
    ],
    "answer": 1,
    "explain": "William the Conqueror in 1066 was the last person to successfully invade England."
  },
  {
    "id": 43,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What was the Domesday Book?",
    "opts": [
      "A religious text",
      "A record of every village, land, and owner, ordered by William the Conqueror",
      "A history of Scotland",
      "A collection of royal decrees"
    ],
    "answer": 1,
    "explain": "William the Conqueror ordered the Domesday Book as a survey of who owned what in his new kingdom."
  },
  {
    "id": 44,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "In which year was the Magna Carta signed?",
    "opts": [
      "1066",
      "1215",
      "1348",
      "1485"
    ],
    "answer": 1,
    "explain": "1215 — King John was forced by his barons to sign the Magna Carta."
  },
  {
    "id": 45,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which king was forced to sign the Magna Carta?",
    "opts": [
      "King Henry VIII",
      "King John",
      "King Richard",
      "King William"
    ],
    "answer": 1,
    "explain": "King John signed the Magna Carta in 1215."
  },
  {
    "id": 46,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What was the main significance of Magna Carta?",
    "opts": [
      "It established Parliament",
      "It said the king must follow the law, like everyone else",
      "It created the Church of England",
      "It abolished slavery"
    ],
    "answer": 1,
    "explain": "Magna Carta established the principle that the king is not above the law — the foundation of British democracy."
  },
  {
    "id": 47,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What disaster killed about one-third of England's population in 1348?",
    "opts": [
      "A famine",
      "The Black Death",
      "A war with France",
      "A great fire"
    ],
    "answer": 1,
    "explain": "The Black Death (a plague) killed around a third of the population of England in 1348."
  },
  {
    "id": 48,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Wars of the Roses were fought between which two houses?",
    "opts": [
      "Tudor and Stuart",
      "Lancaster and York",
      "Windsor and Hanover",
      "Plantagenet and Normandy"
    ],
    "answer": 1,
    "explain": "Lancaster (red rose) versus York (white rose). Lancaster's Henry Tudor won, becoming Henry VII."
  },
  {
    "id": 49,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "How many wives did Henry VIII have?",
    "opts": [
      "Three",
      "Four",
      "Six",
      "Eight"
    ],
    "answer": 2,
    "explain": "Henry VIII had 6 wives. The rhyme: divorced, beheaded, died, divorced, beheaded, survived."
  },
  {
    "id": 50,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Why did Henry VIII break away from the Roman Catholic Church?",
    "opts": [
      "He converted to Islam",
      "The Pope refused to grant him a divorce from Catherine of Aragon",
      "He wanted to become Pope himself",
      "He disliked Latin"
    ],
    "answer": 1,
    "explain": "The Pope refused Henry's request for a divorce, so Henry broke from Rome and established the Church of England."
  },
  {
    "id": 51,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which Queen defeated the Spanish Armada in 1588?",
    "opts": [
      "Mary I",
      "Elizabeth I",
      "Victoria",
      "Elizabeth II"
    ],
    "answer": 1,
    "explain": "Elizabeth I. The defeat of the Spanish Armada was one of the great achievements of her reign."
  },
  {
    "id": 52,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO famous plays written by William Shakespeare.",
    "opts": [
      "Oliver Twist",
      "Romeo and Juliet",
      "Pride and Prejudice",
      "Macbeth"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Romeo and Juliet and Macbeth are Shakespeare's. Oliver Twist is Dickens; Pride and Prejudice is Austen."
  },
  {
    "id": 53,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the only English king ever to be executed?",
    "opts": [
      "Henry VIII",
      "Charles I",
      "James II",
      "Edward VI"
    ],
    "answer": 1,
    "explain": "Charles I was executed in 1649 after the English Civil War. No other English king has been executed."
  },
  {
    "id": 54,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who led the Parliamentarians during the English Civil War?",
    "opts": [
      "King Charles I",
      "Oliver Cromwell",
      "William of Orange",
      "John Knox"
    ],
    "answer": 1,
    "explain": "Oliver Cromwell led the Parliamentarians to victory over King Charles I's Royalists."
  },
  {
    "id": 55,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What did the Act of Union 1707 do?",
    "opts": [
      "Ended the monarchy",
      "Joined England, Scotland, and Wales into Great Britain",
      "Created the NHS",
      "Abolished slavery"
    ],
    "answer": 1,
    "explain": "The 1707 Act of Union united England, Wales, and Scotland into the Kingdom of Great Britain, with a single Parliament at Westminster."
  },
  {
    "id": 56,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who is considered the first British Prime Minister?",
    "opts": [
      "Winston Churchill",
      "Robert Walpole",
      "William Pitt",
      "Benjamin Disraeli"
    ],
    "answer": 1,
    "explain": "Robert Walpole, from 1721, is considered the first Prime Minister."
  },
  {
    "id": 57,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In which year was slavery abolished in the British Empire?",
    "opts": [
      "1807",
      "1833",
      "1918",
      "1948"
    ],
    "answer": 1,
    "explain": "1833 — slavery was abolished throughout the Empire. 1807 was when the slave TRADE on British ships became illegal, but slavery itself continued until 1833."
  },
  {
    "id": 58,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who led the campaign in Parliament against the slave trade?",
    "opts": [
      "William Wilberforce",
      "Winston Churchill",
      "Isaac Newton",
      "Oliver Cromwell"
    ],
    "answer": 0,
    "explain": "William Wilberforce was the Member of Parliament who led the long campaign against the slave trade."
  },
  {
    "id": 59,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Florence Nightingale became famous during which war?",
    "opts": [
      "The First World War",
      "The Crimean War",
      "The Second World War",
      "The Falklands War"
    ],
    "answer": 1,
    "explain": "Florence Nightingale pioneered modern nursing during the Crimean War (1853–1856)."
  },
  {
    "id": 60,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In what year did women over 30 first get the right to vote in the UK?",
    "opts": [
      "1900",
      "1918",
      "1928",
      "1945"
    ],
    "answer": 1,
    "explain": "1918 — women over 30 got the vote. In 1928, voting was extended to women on equal terms with men."
  },
  {
    "id": 61,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "On what date do we observe Remembrance Day?",
    "opts": [
      "1 March",
      "11 November",
      "25 December",
      "5 November"
    ],
    "answer": 1,
    "explain": "11 November marks the end of the First World War in 1918. People wear a red poppy to remember those who died."
  },
  {
    "id": 62,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was Prime Minister during most of the Second World War?",
    "opts": [
      "Neville Chamberlain",
      "Winston Churchill",
      "Clement Attlee",
      "Aneurin Bevan"
    ],
    "answer": 1,
    "explain": "Winston Churchill became PM in May 1940 and led Britain through most of the war."
  },
  {
    "id": 63,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "D-Day, the Allied invasion of Normandy, took place on which date?",
    "opts": [
      "11 November 1918",
      "6 June 1944",
      "8 May 1945",
      "3 September 1939"
    ],
    "answer": 1,
    "explain": "6 June 1944 — D-Day, the Allied landings in Normandy, France."
  },
  {
    "id": 64,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Who founded the National Health Service (NHS) in 1948?",
    "opts": [
      "Winston Churchill",
      "Clement Attlee",
      "Aneurin Bevan",
      "Tony Blair"
    ],
    "answer": 2,
    "explain": "Aneurin Bevan, Minister of Health in Attlee's post-war Labour government, created the NHS in 1948."
  },
  {
    "id": 65,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the first woman Prime Minister of the United Kingdom?",
    "opts": [
      "Theresa May",
      "Margaret Thatcher",
      "Liz Truss",
      "Queen Elizabeth II"
    ],
    "answer": 1,
    "explain": "Margaret Thatcher was the first woman PM, serving from 1979 to 1990."
  },
  {
    "id": 66,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "Who is the head of the Church of England?",
    "opts": [
      "The Pope",
      "The Archbishop of Canterbury",
      "The reigning monarch",
      "The Prime Minister"
    ],
    "answer": 2,
    "explain": "The reigning monarch is the Head of the Church of England. The Archbishop of Canterbury is its spiritual leader, not its head."
  },
  {
    "id": 67,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who is the spiritual leader of the Church of England?",
    "opts": [
      "The Pope",
      "The King",
      "The Archbishop of Canterbury",
      "The Prime Minister"
    ],
    "answer": 2,
    "explain": "The Archbishop of Canterbury is the spiritual leader of the Church of England."
  },
  {
    "id": 68,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "When is St George's Day?",
    "opts": [
      "1 March",
      "17 March",
      "23 April",
      "30 November"
    ],
    "answer": 2,
    "explain": "St George's Day is 23 April. St George is the patron saint of England."
  },
  {
    "id": 69,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "When is St David's Day?",
    "opts": [
      "1 March",
      "17 March",
      "23 April",
      "30 November"
    ],
    "answer": 0,
    "explain": "St David's Day is 1 March. St David is the patron saint of Wales."
  },
  {
    "id": 70,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "Who is the patron saint of Scotland?",
    "opts": [
      "St George",
      "St Andrew",
      "St David",
      "St Patrick"
    ],
    "answer": 1,
    "explain": "St Andrew is the patron saint of Scotland. His day is 30 November."
  },
  {
    "id": 71,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO patron saints and their correct country.",
    "opts": [
      "St George — Wales",
      "St Patrick — Northern Ireland",
      "St David — Wales",
      "St Andrew — England"
    ],
    "answer": [
      1,
      2
    ],
    "explain": "St Patrick — Northern Ireland and St David — Wales are correct. St George is England (not Wales); St Andrew is Scotland (not England)."
  },
  {
    "id": 72,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "What is celebrated on Bonfire Night (5 November)?",
    "opts": [
      "The end of WWI",
      "The failed attempt by Guy Fawkes to blow up Parliament in 1605",
      "Christmas Eve",
      "New Year's Eve"
    ],
    "answer": 1,
    "explain": "Bonfire Night commemorates the failure of the Gunpowder Plot — Guy Fawkes's attempt to blow up Parliament in 1605."
  },
  {
    "id": 73,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "What is Hogmanay?",
    "opts": [
      "A Welsh festival in March",
      "The Scottish celebration of New Year's Eve",
      "A remembrance for soldiers",
      "An Irish dance tradition"
    ],
    "answer": 1,
    "explain": "Hogmanay is Scotland's New Year's Eve celebration, on 31 December."
  },
  {
    "id": 74,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "What is the most popular sport in the UK?",
    "opts": [
      "Cricket",
      "Rugby",
      "Football",
      "Tennis"
    ],
    "answer": 2,
    "explain": "Football is the most popular sport in the UK."
  },
  {
    "id": 75,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Where was golf invented?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Ireland"
    ],
    "answer": 1,
    "explain": "Golf was invented in Scotland."
  },
  {
    "id": 76,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Wimbledon tennis tournament is the oldest of its kind in the world. It has been held since:",
    "opts": [
      "1777",
      "1877",
      "1927",
      "1977"
    ],
    "answer": 1,
    "explain": "Wimbledon has been held since 1877 — making it the world's oldest tennis tournament."
  },
  {
    "id": 77,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who wrote 'Pride and Prejudice'?",
    "opts": [
      "Charles Dickens",
      "Jane Austen",
      "Agatha Christie",
      "J.K. Rowling"
    ],
    "answer": 1,
    "explain": "Jane Austen wrote Pride and Prejudice."
  },
  {
    "id": 78,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who is Scotland's national poet, famous for writing 'Auld Lang Syne'?",
    "opts": [
      "Dylan Thomas",
      "Robert Burns",
      "William Wordsworth",
      "W.B. Yeats"
    ],
    "answer": 1,
    "explain": "Robert Burns is Scotland's national poet. 'Auld Lang Syne' is traditionally sung at New Year."
  },
  {
    "id": 79,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who discovered penicillin in 1928?",
    "opts": [
      "Isaac Newton",
      "Charles Darwin",
      "Alexander Fleming",
      "Tim Berners-Lee"
    ],
    "answer": 2,
    "explain": "Alexander Fleming discovered penicillin in 1928 — the world's first antibiotic."
  },
  {
    "id": 80,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who invented the World Wide Web?",
    "opts": [
      "Bill Gates",
      "Steve Jobs",
      "Alan Turing",
      "Tim Berners-Lee"
    ],
    "answer": 3,
    "explain": "Sir Tim Berners-Lee, a British scientist, invented the World Wide Web."
  },
  {
    "id": 81,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Where is the Giant's Causeway located?",
    "opts": [
      "Scotland",
      "Wales",
      "Northern Ireland",
      "Cornwall"
    ],
    "answer": 2,
    "explain": "The Giant's Causeway is a famous natural rock formation on the coast of Northern Ireland."
  },
  {
    "id": 82,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Snowdonia National Park is located in which country?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "Snowdonia is a National Park in Wales."
  },
  {
    "id": 83,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of the following is NOT a famous British scientist?",
    "opts": [
      "Isaac Newton",
      "Charles Darwin",
      "Alexander Fleming",
      "Thomas Edison"
    ],
    "answer": 3,
    "explain": "Thomas Edison was American. The other three were British scientists."
  },
  {
    "id": 84,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "In which year did the UK last host the Summer Olympics?",
    "opts": [
      "1908",
      "1948",
      "2012",
      "2020"
    ],
    "answer": 2,
    "explain": "London hosted the Summer Olympics in 2012. Previous London Olympics: 1908 and 1948."
  },
  {
    "id": 85,
    "chapter": 4,
    "difficulty": 2,
    "trap": "MOST",
    "q": "Most of the UK's population lives in which country?",
    "opts": [
      "Scotland",
      "Wales",
      "England",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "Around 84% of the UK's population lives in England (roughly 56 million of 67 million)."
  },
  {
    "id": 86,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "How many elected Members of Parliament (MPs) are in the House of Commons?",
    "opts": [
      "300",
      "500",
      "650",
      "1000"
    ],
    "answer": 2,
    "explain": "There are 650 MPs, one for each constituency in the UK."
  },
  {
    "id": 87,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "Where does the Prime Minister live?",
    "opts": [
      "Buckingham Palace",
      "10 Downing Street",
      "The Tower of London",
      "Windsor Castle"
    ],
    "answer": 1,
    "explain": "The Prime Minister lives and works at 10 Downing Street. Buckingham Palace is the monarch's London residence."
  },
  {
    "id": 88,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "On which day of the week does Prime Minister's Questions take place when Parliament is sitting?",
    "opts": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "answer": 2,
    "explain": "PMQs happens every Wednesday at noon when Parliament is sitting."
  },
  {
    "id": 89,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "How often must a general election be held in the UK, at a minimum?",
    "opts": [
      "Every 3 years",
      "Every 5 years",
      "Every 7 years",
      "Every 10 years"
    ],
    "answer": 1,
    "explain": "A general election must happen at least every 5 years."
  },
  {
    "id": 90,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "What voting system is used in UK general elections?",
    "opts": [
      "Proportional representation",
      "First Past the Post",
      "Single Transferable Vote",
      "Mandatory ranking"
    ],
    "answer": 1,
    "explain": "First Past the Post — the candidate with the most votes in each constituency wins."
  },
  {
    "id": 91,
    "chapter": 5,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO important Cabinet positions in the UK government.",
    "opts": [
      "Chancellor of the Exchequer",
      "Governor of the Bank of England",
      "Home Secretary",
      "Lord Mayor of London"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Chancellor of the Exchequer (finance) and Home Secretary (police/immigration) are Cabinet posts. The Governor of the Bank of England and Lord Mayor are not Cabinet positions."
  },
  {
    "id": 92,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "What is the name of the Scottish Parliament?",
    "opts": [
      "The Senedd",
      "The Stormont Assembly",
      "Holyrood",
      "The Dáil"
    ],
    "answer": 2,
    "explain": "Holyrood is the Scottish Parliament, in Edinburgh. The Senedd is the Welsh Parliament. Stormont is the Northern Ireland Assembly. The Dáil is the Republic of Ireland's parliament."
  },
  {
    "id": 93,
    "chapter": 5,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of the following powers is NOT devolved to Scotland, Wales, or Northern Ireland?",
    "opts": [
      "Education",
      "Health",
      "Local transport",
      "Defence"
    ],
    "answer": 3,
    "explain": "Defence, foreign policy, immigration, and national tax are reserved to Westminster. Education, health, and local transport are devolved."
  },
  {
    "id": 94,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which court deals with the most serious criminal cases in England and Wales?",
    "opts": [
      "The Magistrates' Court",
      "The Crown Court",
      "The Small Claims Court",
      "The County Court"
    ],
    "answer": 1,
    "explain": "The Crown Court hears serious criminal cases, with a jury of 12 deciding guilt."
  },
  {
    "id": 95,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A jury in a Crown Court consists of how many members?",
    "opts": [
      "6",
      "8",
      "12",
      "15"
    ],
    "answer": 2,
    "explain": "A Crown Court jury has 12 members."
  },
  {
    "id": 96,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "What is the standard rate of VAT in the UK?",
    "opts": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answer": 2,
    "explain": "The standard rate of VAT (Value Added Tax) is 20%."
  },
  {
    "id": 97,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "National Insurance contributions pay for which of the following?",
    "opts": [
      "The Royal Family",
      "The NHS and state pension",
      "Council services only",
      "Private schools"
    ],
    "answer": 1,
    "explain": "National Insurance funds the NHS, state pension, and certain benefits."
  },
  {
    "id": 98,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which side of the road do people drive on in the UK?",
    "opts": [
      "The right",
      "The left",
      "The middle",
      "It varies by region"
    ],
    "answer": 1,
    "explain": "In the UK, you drive on the left side of the road."
  },
  {
    "id": 99,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "At what age can you drive a car in the UK?",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 1,
    "explain": "You can drive a car at 17. Mopeds can be driven from 16."
  },
  {
    "id": 100,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of the following is NOT a type of tax that UK residents might have to pay?",
    "opts": [
      "Income Tax",
      "Council Tax",
      "VAT",
      "Sunshine Tax"
    ],
    "answer": 3,
    "explain": "There is no 'Sunshine Tax' in the UK. Income Tax, Council Tax, and VAT are all real UK taxes."
  },
  {
    "id": 101,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things that are fundamental British values.",
    "opts": [
      "Being born in the UK",
      "The rule of law",
      "Speaking English fluently",
      "Democracy"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Rule of law and democracy are both fundamental values. Being born in UK and English fluency are not."
  },
  {
    "id": 102,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a responsibility of UK residents?",
    "opts": [
      "Obeying the law",
      "Paying taxes",
      "Voting in every election",
      "Respecting others"
    ],
    "answer": 2,
    "explain": "Voting is a right, not a legal responsibility. The other three are all responsibilities."
  },
  {
    "id": 103,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What age must you be to ride a moped in the UK?",
    "opts": [
      "14",
      "15",
      "16",
      "17"
    ],
    "answer": 2,
    "explain": "You can ride a moped at 16. Cars at 17."
  },
  {
    "id": 104,
    "chapter": 1,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of the following statements about UK freedoms is FALSE?",
    "opts": [
      "Everyone has freedom of speech",
      "Everyone has freedom of religion",
      "Only citizens have freedom from unfair discrimination",
      "Everyone has a right to a fair trial"
    ],
    "answer": 2,
    "explain": "Freedom from unfair discrimination applies to EVERYONE in the UK, not just citizens."
  },
  {
    "id": 105,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "How often must general elections be held in the UK, at minimum?",
    "opts": [
      "Every 3 years",
      "Every 4 years",
      "Every 5 years",
      "Every 7 years"
    ],
    "answer": 2,
    "explain": "General elections must happen at least every 5 years."
  },
  {
    "id": 106,
    "chapter": 1,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of the following are ways to participate in community life EXCEPT:",
    "opts": [
      "Volunteering with a charity",
      "Serving on a jury",
      "Breaking the law to protest",
      "Helping at your child's school"
    ],
    "answer": 2,
    "explain": "Breaking the law is never acceptable participation. The other three are all valid."
  },
  {
    "id": 107,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What is the minimum age to buy tobacco in the UK?",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explain": "18 — the same as for alcohol."
  },
  {
    "id": 108,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "A written promise made at a UK citizenship ceremony is called:",
    "opts": [
      "A pledge",
      "A contract",
      "A license",
      "A petition"
    ],
    "answer": 0,
    "explain": "The formal written promise made at the ceremony is called a pledge."
  },
  {
    "id": 109,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which is NOT a legal age limit in the UK?",
    "opts": [
      "16 for buying lottery tickets",
      "17 for driving a car",
      "21 for voting",
      "75 for maximum jury service"
    ],
    "answer": 2,
    "explain": "Voting age is 18, not 21. The other three are correct age limits."
  },
  {
    "id": 110,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO rights that all people living in the UK have.",
    "opts": [
      "Freedom from fair trial",
      "Freedom of religion",
      "Freedom to receive a free car",
      "Freedom from unfair discrimination"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Freedom of religion and freedom from unfair discrimination are real rights. The others are not."
  },
  {
    "id": 111,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is an example of participating in community life?",
    "opts": [
      "Ignoring your neighbours",
      "Joining a political party or volunteering",
      "Paying for private services only",
      "Staying at home"
    ],
    "answer": 1,
    "explain": "Joining parties, volunteering, jury service — all are participation."
  },
  {
    "id": 112,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "Anyone can stand for election as an MP in the UK provided they are:",
    "opts": [
      "British-born only",
      "Over 21 and meet the eligibility criteria",
      "Members of the Church of England",
      "University graduates"
    ],
    "answer": 1,
    "explain": "MPs must be 21+ and meet eligibility criteria. Religion, birthplace, education are not requirements."
  },
  {
    "id": 113,
    "chapter": 1,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of the following are fundamental British values EXCEPT:",
    "opts": [
      "The rule of law",
      "Individual liberty",
      "Strict obedience to one religion",
      "Democracy"
    ],
    "answer": 2,
    "explain": "Strict religious obedience is the opposite of British values — tolerance is key."
  },
  {
    "id": 114,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "The phrase 'individual liberty' means:",
    "opts": [
      "Only the government has freedom",
      "Each person has the freedom to live as they choose within the law",
      "Citizens must obey all orders",
      "Freedom only for British-born people"
    ],
    "answer": 1,
    "explain": "Individual liberty = personal freedom within the law, for everyone."
  },
  {
    "id": 115,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO groups who CANNOT vote in UK general elections.",
    "opts": [
      "UK citizens over 18",
      "Anyone under 18",
      "Commonwealth citizens resident in UK",
      "Tourists visiting the UK"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Under 18s and tourists cannot vote. UK and Commonwealth citizens 18+ can."
  },
  {
    "id": 116,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What can you do to help protect the environment in your community?",
    "opts": [
      "Volunteer for environmental projects",
      "Pay higher taxes automatically",
      "Lock your doors",
      "Only use private transport"
    ],
    "answer": 0,
    "explain": "Volunteering for environmental projects is the clearest way to help."
  },
  {
    "id": 117,
    "chapter": 1,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of the following statements is FALSE?",
    "opts": [
      "The UK is a democracy",
      "UK citizens over 18 can vote",
      "Only Christians can become UK citizens",
      "Discrimination is illegal in the UK"
    ],
    "answer": 2,
    "explain": "People of any religion (or no religion) can become UK citizens."
  },
  {
    "id": 118,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NEVER",
    "q": "Is this TRUE or FALSE? Women in the UK have NEVER been allowed to vote on equal terms with men.",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. Women got equal voting rights with men in 1928."
  },
  {
    "id": 119,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What is the minimum age to give blood in the UK?",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 1,
    "explain": "17 is the minimum age to donate blood in the UK."
  },
  {
    "id": 120,
    "chapter": 1,
    "difficulty": 2,
    "trap": "MAINLY",
    "q": "The British value of 'tolerance' is mainly about:",
    "opts": [
      "Ignoring differences",
      "Accepting people of different faiths and beliefs",
      "Forcing everyone to agree",
      "Only tolerating Christians"
    ],
    "answer": 1,
    "explain": "Tolerance specifically means accepting different faiths and beliefs."
  },
  {
    "id": 121,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these people would be eligible for jury service?",
    "opts": [
      "A 16-year-old",
      "A 25-year-old UK resident",
      "An 80-year-old",
      "A tourist"
    ],
    "answer": 1,
    "explain": "Jury service is 18–75, so a 25-year-old qualifies. 16, 80, and tourists do not."
  },
  {
    "id": 122,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "The UK is officially described as which type of democracy?",
    "opts": [
      "A direct democracy",
      "A parliamentary democracy",
      "A presidential democracy",
      "A theocracy"
    ],
    "answer": 1,
    "explain": "The UK is a parliamentary democracy — citizens elect MPs who make laws."
  },
  {
    "id": 123,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT permitted under UK law?",
    "opts": [
      "Practicing any religion",
      "Discriminating based on race",
      "Voting for any legal party",
      "Standing for election"
    ],
    "answer": 1,
    "explain": "Racial discrimination is illegal. The other three are legal rights."
  },
  {
    "id": 124,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Everyone living in the UK has a responsibility to:",
    "opts": [
      "Support the current government",
      "Look after themselves and their family",
      "Join a political party",
      "Attend religious services"
    ],
    "answer": 1,
    "explain": "Looking after yourself and your family is a basic responsibility. The others are not required."
  },
  {
    "id": 125,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO ways you can help in your local community.",
    "opts": [
      "Volunteer at a school",
      "Commit a crime",
      "Donate blood",
      "Argue with neighbours"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Volunteering and donating blood help the community. Crime and arguments do not."
  },
  {
    "id": 126,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "The duties of a citizen include:",
    "opts": [
      "Keeping all your income",
      "Paying taxes to fund public services",
      "Only helping people of your own religion",
      "Avoiding community involvement"
    ],
    "answer": 1,
    "explain": "Paying taxes is a citizen's duty. The other options are wrong or discriminatory."
  },
  {
    "id": 127,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "At what age can you get married without a parent's permission in England or Wales?",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explain": "18 — you can marry without parental consent. Under 18 needs it (note: laws updated in recent years)."
  },
  {
    "id": 128,
    "chapter": 1,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "Everyone in the UK is expected to respect all of these EXCEPT:",
    "opts": [
      "The rule of law",
      "The rights of others",
      "The wish to impose one religion on all",
      "Individual liberty"
    ],
    "answer": 2,
    "explain": "Imposing one religion is against British values — tolerance and liberty are core."
  },
  {
    "id": 129,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Who ultimately holds power in UK democracy?",
    "opts": [
      "The monarch",
      "The Prime Minister alone",
      "The people, through elected representatives",
      "The Church of England"
    ],
    "answer": 2,
    "explain": "Power in a democracy belongs to the people, exercised through elected representatives."
  },
  {
    "id": 130,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a way to take part in community life?",
    "opts": [
      "Helping at a school as a governor",
      "Donating to charity",
      "Ignoring local issues",
      "Joining a neighbourhood watch"
    ],
    "answer": 2,
    "explain": "Ignoring local issues is the opposite of participation."
  },
  {
    "id": 131,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "In the UK, anyone aged 18 or over has the right to:",
    "opts": [
      "Drive a car",
      "Vote in elections",
      "Serve in the armed forces as a minor",
      "Sign a mortgage without checks"
    ],
    "answer": 1,
    "explain": "18+ = voting age. Driving is 17, armed forces 16 with consent, mortgages need checks at any age."
  },
  {
    "id": 132,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NONE",
    "q": "Are any of the following banned in the UK?",
    "opts": [
      "Freedom of speech",
      "Freedom of religion",
      "Practising yoga",
      "None of the above"
    ],
    "answer": 3,
    "explain": "None of these are banned. Freedom of speech, religion, and practices like yoga are all legal."
  },
  {
    "id": 133,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Which of the following is essential for a healthy democracy?",
    "opts": [
      "One political party only",
      "Freedom to criticise the government",
      "Mandatory voting",
      "Secret elections"
    ],
    "answer": 1,
    "explain": "Criticising the government is essential — it's part of free speech and democracy."
  },
  {
    "id": 134,
    "chapter": 1,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of the following statements is FALSE?",
    "opts": [
      "British values include tolerance",
      "The UK is a constitutional monarchy",
      "British citizens cannot vote",
      "Participation in community life is valued"
    ],
    "answer": 2,
    "explain": "British citizens CAN vote — it's a right at 18. The other statements are true."
  },
  {
    "id": 135,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "What document contains your legal responsibilities as a UK resident?",
    "opts": [
      "The Bible",
      "UK laws and legislation",
      "A passport",
      "A driving licence"
    ],
    "answer": 1,
    "explain": "UK laws and legislation define your legal responsibilities."
  },
  {
    "id": 136,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Which statement about British citizenship is correct?",
    "opts": [
      "Anyone who visits the UK gets citizenship",
      "You must pass the Life in the UK Test and meet other criteria",
      "Only people born in the UK can be citizens",
      "You must be Christian"
    ],
    "answer": 1,
    "explain": "Citizenship requires passing the test, meeting residency and other criteria — and is open to anyone who qualifies."
  },
  {
    "id": 137,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a reason the UK values democracy?",
    "opts": [
      "It allows citizens to choose their government",
      "It protects individual freedoms",
      "It lets one person rule without check",
      "It ensures peaceful transfers of power"
    ],
    "answer": 2,
    "explain": "Democracy PREVENTS one person ruling unchecked. That's the whole point."
  },
  {
    "id": 138,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, laws apply to:",
    "opts": [
      "Everyone, including the monarch",
      "Only British-born people",
      "Only people over 18",
      "Only people who have taken the oath"
    ],
    "answer": 0,
    "explain": "Rule of law means everyone — including the monarch — is subject to the law."
  },
  {
    "id": 139,
    "chapter": 1,
    "difficulty": 1,
    "trap": null,
    "q": "Freedom of the press in the UK means:",
    "opts": [
      "Newspapers can publish anything without any law",
      "Journalists can report freely within the law",
      "Only government-approved news is allowed",
      "Press must be Christian"
    ],
    "answer": 1,
    "explain": "Press freedom operates within UK law (defamation, etc) but is protected."
  },
  {
    "id": 140,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO groups of people most affected by discrimination law protection.",
    "opts": [
      "Disabled people",
      "Politicians",
      "Racial minorities",
      "Civil servants"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Disabled people and racial minorities are specifically protected. Politicians and civil servants are not specially protected categories."
  },
  {
    "id": 141,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which country is NOT in the United Kingdom?",
    "opts": [
      "Wales",
      "Northern Ireland",
      "Republic of Ireland",
      "Scotland"
    ],
    "answer": 2,
    "explain": "Republic of Ireland is independent. UK has 4 countries: England, Scotland, Wales, Northern Ireland."
  },
  {
    "id": 142,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "What is the largest country in the UK by population?",
    "opts": [
      "Scotland",
      "Wales",
      "Northern Ireland",
      "England"
    ],
    "answer": 3,
    "explain": "England has about 56 million of the UK's 67 million population."
  },
  {
    "id": 143,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is a British Overseas Territory?",
    "opts": [
      "Northern Ireland",
      "The Falkland Islands",
      "The Isle of Man",
      "Scotland"
    ],
    "answer": 1,
    "explain": "Falkland Islands are an Overseas Territory. Isle of Man is a Crown Dependency. Others are part of UK."
  },
  {
    "id": 144,
    "chapter": 2,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO official languages that can be used in parts of the UK.",
    "opts": [
      "French",
      "Welsh",
      "Scottish Gaelic",
      "German"
    ],
    "answer": [
      1,
      2
    ],
    "explain": "Welsh (in Wales) and Scottish Gaelic (in parts of Scotland) are official languages in those areas."
  },
  {
    "id": 145,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "What is the highest denomination banknote in the UK?",
    "opts": [
      "£20",
      "£50",
      "£100",
      "£200"
    ],
    "answer": 1,
    "explain": "£50 is the highest common banknote. No £100 or £200 notes exist."
  },
  {
    "id": 146,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these coins does NOT exist in UK currency?",
    "opts": [
      "1p",
      "2p",
      "3p",
      "5p"
    ],
    "answer": 2,
    "explain": "There is no 3p coin. UK coins are 1p, 2p, 5p, 10p, 20p, 50p, £1, £2."
  },
  {
    "id": 147,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "What is the name for the Welsh language name for Wales?",
    "opts": [
      "Cymru",
      "Alba",
      "Éire",
      "Albion"
    ],
    "answer": 0,
    "explain": "Cymru is Welsh for Wales. Alba is Scotland in Gaelic. Éire is Ireland."
  },
  {
    "id": 148,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a Crown Dependency?",
    "opts": [
      "Jersey",
      "Guernsey",
      "The Isle of Man",
      "Gibraltar"
    ],
    "answer": 3,
    "explain": "Gibraltar is a British Overseas Territory, not a Crown Dependency. The other three are."
  },
  {
    "id": 149,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "Which is the smallest country in the UK by area?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 3,
    "explain": "Northern Ireland is the smallest of the 4 UK countries by area."
  },
  {
    "id": 150,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The official name of the UK is:",
    "opts": [
      "England",
      "Great Britain",
      "The United Kingdom of Great Britain and Northern Ireland",
      "The British Empire"
    ],
    "answer": 2,
    "explain": "Full official name: United Kingdom of Great Britain and Northern Ireland."
  },
  {
    "id": 151,
    "chapter": 2,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of these statements about the UK is FALSE?",
    "opts": [
      "The UK has 4 countries",
      "The UK is part of the EU",
      "The UK currency is the pound",
      "The UK has a monarch"
    ],
    "answer": 1,
    "explain": "The UK left the EU in 2020 (Brexit). The other statements are true."
  },
  {
    "id": 152,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "Who can use Scottish Gaelic officially?",
    "opts": [
      "Only tourists",
      "People in parts of Scotland, especially the Highlands and Islands",
      "Only government officials",
      "Nobody"
    ],
    "answer": 1,
    "explain": "Gaelic is used in Scottish Highlands and Islands — it is a recognised language."
  },
  {
    "id": 153,
    "chapter": 2,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of the following are parts of Great Britain EXCEPT:",
    "opts": [
      "England",
      "Wales",
      "Northern Ireland",
      "Scotland"
    ],
    "answer": 2,
    "explain": "Great Britain = England + Scotland + Wales only. Northern Ireland is part of the UK but NOT Great Britain."
  },
  {
    "id": 154,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The Scottish flag features which cross?",
    "opts": [
      "St George's Cross (red on white)",
      "St Andrew's Cross (white X on blue)",
      "St Patrick's Cross (red X on white)",
      "St David's Cross"
    ],
    "answer": 1,
    "explain": "The Saltire — a white X on blue — represents St Andrew, Scotland's patron saint."
  },
  {
    "id": 155,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The Welsh flag features which image?",
    "opts": [
      "A lion",
      "A red dragon",
      "A harp",
      "A thistle"
    ],
    "answer": 1,
    "explain": "The Welsh flag features a red dragon on a green and white background."
  },
  {
    "id": 156,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a Scottish city?",
    "opts": [
      "Aberdeen",
      "Dundee",
      "Swansea",
      "Edinburgh"
    ],
    "answer": 2,
    "explain": "Swansea is in Wales. Aberdeen, Dundee, Edinburgh are all in Scotland."
  },
  {
    "id": 157,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "The longest river in the UK is:",
    "opts": [
      "The Thames",
      "The Severn",
      "The Clyde",
      "The Mersey"
    ],
    "answer": 1,
    "explain": "The Severn (220 miles) is longer than the Thames (215 miles)."
  },
  {
    "id": 158,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Ben Nevis, the highest mountain in the UK, is located in:",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 1,
    "explain": "Ben Nevis is in Scotland, near Fort William in the Highlands."
  },
  {
    "id": 159,
    "chapter": 2,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO seas or oceans that border the UK.",
    "opts": [
      "The Mediterranean",
      "The Atlantic Ocean",
      "The Black Sea",
      "The North Sea"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "The Atlantic Ocean and North Sea border the UK. Mediterranean and Black Sea do not."
  },
  {
    "id": 160,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "The biggest city in Scotland by population is:",
    "opts": [
      "Edinburgh",
      "Aberdeen",
      "Glasgow",
      "Dundee"
    ],
    "answer": 2,
    "explain": "Glasgow is Scotland's biggest city by population, though Edinburgh is the capital."
  },
  {
    "id": 161,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The currency symbol for the pound is:",
    "opts": [
      "$",
      "€",
      "£",
      "¥"
    ],
    "answer": 2,
    "explain": "£ is the symbol for pound sterling."
  },
  {
    "id": 162,
    "chapter": 2,
    "difficulty": 2,
    "trap": "MOST",
    "q": "Most UK banknotes in circulation are issued by:",
    "opts": [
      "The Treasury",
      "The Bank of England",
      "The monarch's estate",
      "Local banks"
    ],
    "answer": 1,
    "explain": "The Bank of England issues most UK notes, though some Scottish and Northern Irish banks also issue their own."
  },
  {
    "id": 163,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT one of the UK's neighbouring countries?",
    "opts": [
      "Republic of Ireland",
      "France (across the Channel)",
      "Germany",
      "Iceland"
    ],
    "answer": 3,
    "explain": "Germany is not a neighbour. The Republic of Ireland shares a land border; France is close across the Channel; Iceland is far away."
  },
  {
    "id": 164,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "The Channel Tunnel connects the UK to:",
    "opts": [
      "Ireland",
      "France",
      "Netherlands",
      "Belgium"
    ],
    "answer": 1,
    "explain": "The Channel Tunnel runs between England and France."
  },
  {
    "id": 165,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "In which part of the UK would you find the Lake District?",
    "opts": [
      "Scotland",
      "Wales",
      "Northern Ireland",
      "England"
    ],
    "answer": 3,
    "explain": "The Lake District is a famous national park in north-west England."
  },
  {
    "id": 166,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "What percentage of the UK population, roughly, lives in England?",
    "opts": [
      "About 40%",
      "About 60%",
      "About 84%",
      "About 95%"
    ],
    "answer": 2,
    "explain": "About 84% — roughly 56 million of the UK's 67 million live in England."
  },
  {
    "id": 167,
    "chapter": 2,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "The Union Jack includes all of these saints' crosses EXCEPT:",
    "opts": [
      "St George (England)",
      "St Andrew (Scotland)",
      "St Patrick (Ireland)",
      "St David (Wales)"
    ],
    "answer": 3,
    "explain": "Wales is not represented on the Union Jack. The flag has the crosses of George, Andrew, and Patrick."
  },
  {
    "id": 168,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "How many counties does Northern Ireland have?",
    "opts": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answer": 1,
    "explain": "Northern Ireland has 6 traditional counties."
  },
  {
    "id": 169,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Saltire' refers to which country's flag?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 1,
    "explain": "The Saltire is the Scottish flag — St Andrew's Cross (white X on blue)."
  },
  {
    "id": 170,
    "chapter": 2,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO places that are NOT part of the United Kingdom.",
    "opts": [
      "The Isle of Man",
      "Wales",
      "The Channel Islands",
      "Northern Ireland"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Isle of Man and Channel Islands are Crown Dependencies, linked to UK but not part of it. Wales and Northern Ireland are part of the UK."
  },
  {
    "id": 171,
    "chapter": 2,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of these statements about UK currency is FALSE?",
    "opts": [
      "£1 equals 100 pence",
      "The UK uses Pound Sterling",
      "The UK switched to the Euro in 2020",
      "Coin values range from 1p to £2"
    ],
    "answer": 2,
    "explain": "The UK has NEVER adopted the Euro. Pound Sterling remains the currency."
  },
  {
    "id": 172,
    "chapter": 2,
    "difficulty": 1,
    "trap": null,
    "q": "Which language is the main language of the UK?",
    "opts": [
      "French",
      "English",
      "Latin",
      "Welsh"
    ],
    "answer": 1,
    "explain": "English is the main language of the UK, spoken by almost everyone."
  },
  {
    "id": 173,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "In Northern Ireland, the predominant unionist community supports:",
    "opts": [
      "Joining the Republic of Ireland",
      "Remaining part of the UK",
      "Becoming independent",
      "Joining the EU alone"
    ],
    "answer": 1,
    "explain": "Unionists in NI want to remain part of the UK. Nationalists/republicans traditionally favour unification with Ireland."
  },
  {
    "id": 174,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The Giant's Causeway is a famous:",
    "opts": [
      "Castle in Wales",
      "Natural rock formation in Northern Ireland",
      "Cathedral in Scotland",
      "Museum in London"
    ],
    "answer": 1,
    "explain": "The Giant's Causeway is a volcanic rock formation on the Northern Ireland coast."
  },
  {
    "id": 175,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT represented on the Union Jack?",
    "opts": [
      "St George's Cross",
      "St Andrew's Cross",
      "St Patrick's Cross",
      "The Welsh dragon"
    ],
    "answer": 3,
    "explain": "The Welsh dragon is on the Welsh flag but not on the Union Jack."
  },
  {
    "id": 176,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Iron Age Britons spoke what type of language?",
    "opts": [
      "Latin",
      "Celtic",
      "Anglo-Saxon",
      "Old Norse"
    ],
    "answer": 1,
    "explain": "Iron Age Britons spoke a Celtic language, ancestor of Welsh and Gaelic."
  },
  {
    "id": 177,
    "chapter": 3,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these was NOT built by the Romans in Britain?",
    "opts": [
      "Roads",
      "Baths",
      "Stonehenge",
      "Hadrian's Wall"
    ],
    "answer": 2,
    "explain": "Stonehenge was built around 4,000 years ago — BEFORE the Romans arrived in AD 43."
  },
  {
    "id": 178,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Julius Caesar first came to Britain in:",
    "opts": [
      "55 BC",
      "AD 43",
      "AD 410",
      "1066"
    ],
    "answer": 0,
    "explain": "Caesar came in 55 BC but did not conquer Britain. The real invasion was under Claudius in AD 43."
  },
  {
    "id": 179,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which structure was built in northern Britain to keep out the Picts?",
    "opts": [
      "The Tower of London",
      "Hadrian's Wall",
      "Windsor Castle",
      "Stonehenge"
    ],
    "answer": 1,
    "explain": "Hadrian's Wall was built across northern England to defend against Picts from Scotland."
  },
  {
    "id": 180,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "How long did the Romans occupy Britain?",
    "opts": [
      "About 100 years",
      "About 200 years",
      "About 400 years",
      "About 800 years"
    ],
    "answer": 2,
    "explain": "Romans were in Britain from AD 43 to AD 410 — nearly 400 years."
  },
  {
    "id": 181,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO groups that invaded Britain after the Romans left.",
    "opts": [
      "The Romans",
      "The Anglo-Saxons",
      "The Mongols",
      "The Vikings"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Anglo-Saxons and Vikings both invaded post-Roman Britain. Mongols never reached Britain."
  },
  {
    "id": 182,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Vikings first invaded Britain in:",
    "opts": [
      "AD 43",
      "AD 410",
      "AD 789",
      "AD 1066"
    ],
    "answer": 2,
    "explain": "AD 789 is when Vikings first invaded — they came from Denmark and Norway."
  },
  {
    "id": 183,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "King Alfred the Great was a king of which Anglo-Saxon kingdom?",
    "opts": [
      "Mercia",
      "Wessex",
      "Northumbria",
      "East Anglia"
    ],
    "answer": 1,
    "explain": "Alfred was king of Wessex. He eventually united England against the Vikings."
  },
  {
    "id": 184,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Who was king of England at the time of the 1066 Battle of Hastings?",
    "opts": [
      "Harold II",
      "Alfred the Great",
      "William the Conqueror",
      "Edward the Confessor"
    ],
    "answer": 0,
    "explain": "Harold II was king and was defeated and killed by William the Conqueror at Hastings."
  },
  {
    "id": 185,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "William the Conqueror came from:",
    "opts": [
      "Germany",
      "Normandy in France",
      "Denmark",
      "Spain"
    ],
    "answer": 1,
    "explain": "William was Duke of Normandy (France) before conquering England in 1066."
  },
  {
    "id": 186,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Domesday Book is:",
    "opts": [
      "A religious text",
      "A survey of England commissioned by William the Conqueror",
      "A history of Scotland",
      "A book of spells"
    ],
    "answer": 1,
    "explain": "The Domesday Book (1086) recorded every village, landowner, and their property."
  },
  {
    "id": 187,
    "chapter": 3,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of these statements about Magna Carta is FALSE?",
    "opts": [
      "It was signed in 1215",
      "King John was forced to sign it",
      "It gave unlimited power to the king",
      "It said the king must follow the law"
    ],
    "answer": 2,
    "explain": "Magna Carta LIMITED the king's power. It's the opposite of giving unlimited power."
  },
  {
    "id": 188,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Battle of Bannockburn in 1314 was won by:",
    "opts": [
      "England, defeating Scotland",
      "Scotland under Robert the Bruce",
      "The Welsh",
      "The Irish"
    ],
    "answer": 1,
    "explain": "Scotland won decisively under Robert the Bruce, securing Scottish independence for a time."
  },
  {
    "id": 189,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What was the Black Death?",
    "opts": [
      "A famous book",
      "A plague that killed about one-third of England's population in 1348",
      "A battle against France",
      "A royal family"
    ],
    "answer": 1,
    "explain": "The Black Death (bubonic plague) killed roughly a third of England's population in 1348."
  },
  {
    "id": 190,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Hundred Years War was fought between:",
    "opts": [
      "England and Scotland",
      "England and France",
      "England and Spain",
      "France and Germany"
    ],
    "answer": 1,
    "explain": "1337–1453: England vs France, though many of the 'hundred years' were actually peace."
  },
  {
    "id": 191,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Geoffrey Chaucer is famous for writing:",
    "opts": [
      "The Bible",
      "The Canterbury Tales",
      "Hamlet",
      "Paradise Lost"
    ],
    "answer": 1,
    "explain": "Chaucer wrote The Canterbury Tales — one of the first major works in English."
  },
  {
    "id": 192,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO sides in the Wars of the Roses.",
    "opts": [
      "The House of Lancaster",
      "The House of Normandy",
      "The House of York",
      "The House of Windsor"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Lancaster (red rose) vs York (white rose) fought from 1455 to 1485."
  },
  {
    "id": 193,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who won the Wars of the Roses?",
    "opts": [
      "The House of York",
      "The House of Lancaster",
      "The House of Stuart",
      "The French"
    ],
    "answer": 1,
    "explain": "Lancaster won. Henry Tudor (Lancaster) defeated Richard III (York) at Bosworth in 1485, becoming Henry VII."
  },
  {
    "id": 194,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The Tudor dynasty began in which year?",
    "opts": [
      "1066",
      "1215",
      "1485",
      "1588"
    ],
    "answer": 2,
    "explain": "1485 — Henry VII became the first Tudor king after winning the Battle of Bosworth."
  },
  {
    "id": 195,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the first Tudor king?",
    "opts": [
      "Henry VII",
      "Henry VIII",
      "Edward VI",
      "Richard III"
    ],
    "answer": 0,
    "explain": "Henry VII (Henry Tudor) started the Tudor dynasty in 1485."
  },
  {
    "id": 196,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What was the name of the Church Henry VIII established?",
    "opts": [
      "The Catholic Church",
      "The Church of England",
      "The Church of Scotland",
      "The Methodist Church"
    ],
    "answer": 1,
    "explain": "Henry VIII established the Church of England after breaking from Rome."
  },
  {
    "id": 197,
    "chapter": 3,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "Henry VIII was married to all of these women EXCEPT:",
    "opts": [
      "Catherine of Aragon",
      "Elizabeth I",
      "Anne Boleyn",
      "Jane Seymour"
    ],
    "answer": 1,
    "explain": "Elizabeth I was his DAUGHTER (by Anne Boleyn), not one of his 6 wives."
  },
  {
    "id": 198,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Reformation refers to:",
    "opts": [
      "The English Civil War",
      "Changes in religion that led to the Church of England being formed",
      "The Industrial Revolution",
      "The French invasion"
    ],
    "answer": 1,
    "explain": "The Reformation was the religious split from Rome in the 16th century that created Protestant churches."
  },
  {
    "id": 199,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who succeeded Henry VIII as monarch?",
    "opts": [
      "Henry IX",
      "Mary I",
      "Edward VI",
      "Elizabeth I"
    ],
    "answer": 2,
    "explain": "Edward VI, Henry's son by Jane Seymour, succeeded him in 1547. He died young and was followed by Mary I, then Elizabeth I."
  },
  {
    "id": 200,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Mary I (Queen Mary) became unpopular because:",
    "opts": [
      "She was too young",
      "She tried to restore Catholicism and persecuted Protestants",
      "She refused to marry",
      "She invaded Scotland"
    ],
    "answer": 1,
    "explain": "Mary I tried to restore Catholicism and executed many Protestants — earning the nickname 'Bloody Mary'."
  },
  {
    "id": 201,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Elizabeth I was the daughter of:",
    "opts": [
      "Henry VII and Elizabeth of York",
      "Henry VIII and Catherine of Aragon",
      "Henry VIII and Anne Boleyn",
      "Henry VIII and Jane Seymour"
    ],
    "answer": 2,
    "explain": "Elizabeth I was the daughter of Henry VIII and Anne Boleyn."
  },
  {
    "id": 202,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Queen Elizabeth I never:",
    "opts": [
      "Ruled England",
      "Married",
      "Spoke Latin",
      "Met Shakespeare"
    ],
    "answer": 1,
    "explain": "Elizabeth I never married. She was called 'The Virgin Queen'."
  },
  {
    "id": 203,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Spanish Armada was:",
    "opts": [
      "A Spanish fleet defeated by England in 1588",
      "A peace treaty",
      "A type of Spanish ship design",
      "An English colony"
    ],
    "answer": 0,
    "explain": "The Spanish Armada was a fleet sent by Philip II to invade England — defeated by Elizabeth I's navy in 1588."
  },
  {
    "id": 204,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO plays written by Shakespeare.",
    "opts": [
      "Hamlet",
      "Oliver Twist",
      "Great Expectations",
      "Macbeth"
    ],
    "answer": [
      0,
      3
    ],
    "explain": "Hamlet and Macbeth are Shakespeare. Oliver Twist and Great Expectations are Charles Dickens."
  },
  {
    "id": 205,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Shakespeare is associated with which theatre in London?",
    "opts": [
      "The Old Vic",
      "The Globe Theatre",
      "The National Theatre",
      "The Royal Opera House"
    ],
    "answer": 1,
    "explain": "Shakespeare's plays were performed at the Globe Theatre on the South Bank."
  },
  {
    "id": 206,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who succeeded Elizabeth I?",
    "opts": [
      "Charles I",
      "James I of England (also James VI of Scotland)",
      "Oliver Cromwell",
      "Henry IX"
    ],
    "answer": 1,
    "explain": "Elizabeth I died childless in 1603. Her cousin James VI of Scotland became James I of England — uniting the crowns."
  },
  {
    "id": 207,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What year was the Gunpowder Plot?",
    "opts": [
      "1485",
      "1588",
      "1605",
      "1666"
    ],
    "answer": 2,
    "explain": "1605 — Guy Fawkes tried to blow up Parliament. His failure is commemorated on Bonfire Night (5 November)."
  },
  {
    "id": 208,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The King James Bible was commissioned by:",
    "opts": [
      "Henry VIII",
      "Elizabeth I",
      "James I",
      "Charles I"
    ],
    "answer": 2,
    "explain": "James I authorised a new English translation of the Bible, published in 1611."
  },
  {
    "id": 209,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The English Civil War was fought between:",
    "opts": [
      "England and Scotland",
      "Royalists and Parliamentarians",
      "Catholics and Protestants",
      "Whigs and Tories"
    ],
    "answer": 1,
    "explain": "Royalists (supporting King Charles I) vs Parliamentarians (led by Cromwell) fought 1642–1651."
  },
  {
    "id": 210,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Oliver Cromwell led the:",
    "opts": [
      "Royalists",
      "Parliamentarians",
      "French Army",
      "Irish rebels"
    ],
    "answer": 1,
    "explain": "Cromwell led the Parliamentarians to victory over King Charles I."
  },
  {
    "id": 211,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What happened to King Charles I in 1649?",
    "opts": [
      "He fled to France",
      "He was executed by Parliament",
      "He became a monk",
      "He moved to Scotland"
    ],
    "answer": 1,
    "explain": "Charles I was the only English monarch ever executed. Parliament put him on trial and beheaded him in 1649."
  },
  {
    "id": 212,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "During the period from 1649 to 1660, England was:",
    "opts": [
      "Ruled by Charles II",
      "A republic under Cromwell",
      "Ruled by France",
      "Part of Spain"
    ],
    "answer": 1,
    "explain": "After Charles I's execution, England was a republic (the Commonwealth) led by Cromwell until 1660."
  },
  {
    "id": 213,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Restoration of the monarchy happened in:",
    "opts": [
      "1649",
      "1660",
      "1688",
      "1707"
    ],
    "answer": 1,
    "explain": "1660 — Charles II returned from exile and was restored as king."
  },
  {
    "id": 214,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Great Fire of London occurred in:",
    "opts": [
      "1485",
      "1649",
      "1666",
      "1707"
    ],
    "answer": 2,
    "explain": "The Great Fire of London burned much of the city in 1666."
  },
  {
    "id": 215,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Glorious Revolution of 1688 resulted in:",
    "opts": [
      "Catholic James II being replaced by Protestant William of Orange and Mary",
      "Cromwell becoming king",
      "The return of the Tudors",
      "Union with France"
    ],
    "answer": 0,
    "explain": "James II (Catholic) was replaced by his Protestant daughter Mary and her husband William of Orange."
  },
  {
    "id": 216,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Bill of Rights 1689 established that:",
    "opts": [
      "The king could rule without Parliament",
      "The king could NOT rule without Parliament",
      "England would become Catholic",
      "Scotland was independent"
    ],
    "answer": 1,
    "explain": "The Bill of Rights confirmed Parliament's supremacy — the king could not rule without it."
  },
  {
    "id": 217,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The Act of Union 1707 united:",
    "opts": [
      "England and France",
      "England, Wales, and Scotland as Great Britain",
      "England and Ireland",
      "Scotland and Ireland"
    ],
    "answer": 1,
    "explain": "1707 — England, Wales, and Scotland became Great Britain with one Parliament."
  },
  {
    "id": 218,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was considered the first Prime Minister of Britain?",
    "opts": [
      "Winston Churchill",
      "Robert Walpole",
      "William Pitt",
      "Benjamin Disraeli"
    ],
    "answer": 1,
    "explain": "Robert Walpole, starting in 1721, is considered the first PM, though the title developed gradually."
  },
  {
    "id": 219,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Georgian era began in:",
    "opts": [
      "1485",
      "1603",
      "1714",
      "1837"
    ],
    "answer": 2,
    "explain": "1714 — George I (from Hanover, Germany) became king after Queen Anne died without heir."
  },
  {
    "id": 220,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO important political parties that formed in the 18th century.",
    "opts": [
      "Labour",
      "Whigs",
      "Liberal Democrats",
      "Tories"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Whigs and Tories were the two main parties of the 18th century. Labour formed much later. Liberal Democrats are 20th century."
  },
  {
    "id": 221,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "By the 19th century, the British Empire covered approximately:",
    "opts": [
      "1/10 of the world",
      "1/4 of the world",
      "Half the world",
      "3/4 of the world"
    ],
    "answer": 1,
    "explain": "The British Empire covered about a quarter of the world at its peak."
  },
  {
    "id": 222,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was a leading campaigner against slavery in the British Parliament?",
    "opts": [
      "Winston Churchill",
      "Benjamin Disraeli",
      "William Wilberforce",
      "Oliver Cromwell"
    ],
    "answer": 2,
    "explain": "Wilberforce campaigned for decades until slavery was abolished in 1833."
  },
  {
    "id": 223,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In what year was the slave trade on British ships made illegal?",
    "opts": [
      "1776",
      "1807",
      "1833",
      "1918"
    ],
    "answer": 1,
    "explain": "1807 — British ships could no longer transport slaves. Slavery itself was abolished throughout the Empire in 1833."
  },
  {
    "id": 224,
    "chapter": 3,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of these statements is FALSE?",
    "opts": [
      "The slave trade was abolished in 1807",
      "Slavery was abolished in the Empire in 1833",
      "William Wilberforce led the campaign",
      "The USA abolished slavery before Britain"
    ],
    "answer": 3,
    "explain": "The USA abolished slavery in 1865 — AFTER Britain (1833). The British led the way."
  },
  {
    "id": 225,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Industrial Revolution started around:",
    "opts": [
      "1550",
      "1650",
      "1760",
      "1850"
    ],
    "answer": 2,
    "explain": "The Industrial Revolution began around 1760 in Britain."
  },
  {
    "id": 226,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who improved the steam engine, making the Industrial Revolution possible?",
    "opts": [
      "Isaac Newton",
      "James Watt",
      "Charles Darwin",
      "Alexander Fleming"
    ],
    "answer": 1,
    "explain": "James Watt greatly improved the steam engine in the late 18th century."
  },
  {
    "id": 227,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "George Stephenson is famous for:",
    "opts": [
      "Discovering penicillin",
      "Inventing a steam locomotive (the Rocket)",
      "Painting landscapes",
      "Writing novels"
    ],
    "answer": 1,
    "explain": "George Stephenson built the Rocket locomotive in 1829 — pioneering railways."
  },
  {
    "id": 228,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Isambard Kingdom Brunel is famous for:",
    "opts": [
      "Painting",
      "Engineering bridges, ships, and railways",
      "Writing plays",
      "Discovering electricity"
    ],
    "answer": 1,
    "explain": "Brunel was a Victorian engineer who built famous bridges, ships, and railways."
  },
  {
    "id": 229,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The Crimean War was fought mainly against:",
    "opts": [
      "France",
      "Germany",
      "Russia",
      "Spain"
    ],
    "answer": 2,
    "explain": "The Crimean War (1853–1856) was fought by Britain, France, and Turkey against Russia."
  },
  {
    "id": 230,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Florence Nightingale is best known for:",
    "opts": [
      "Painting",
      "Improving nursing during the Crimean War",
      "Winning the Battle of Waterloo",
      "Inventing the telephone"
    ],
    "answer": 1,
    "explain": "Florence Nightingale reformed nursing and care of wounded soldiers during the Crimean War."
  },
  {
    "id": 231,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Queen Victoria reigned from:",
    "opts": [
      "1714 to 1760",
      "1837 to 1901",
      "1901 to 1952",
      "1952 to 2022"
    ],
    "answer": 1,
    "explain": "Victoria reigned 1837–1901, for 64 years — the longest before Elizabeth II."
  },
  {
    "id": 232,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who wrote 'The Origin of Species'?",
    "opts": [
      "William Shakespeare",
      "Charles Darwin",
      "Charles Dickens",
      "Isaac Newton"
    ],
    "answer": 1,
    "explain": "Darwin published On the Origin of Species in 1859, presenting the theory of evolution."
  },
  {
    "id": 233,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Charles Dickens is famous as a:",
    "opts": [
      "Scientist",
      "Novelist",
      "Painter",
      "Inventor"
    ],
    "answer": 1,
    "explain": "Dickens wrote many famous novels including Oliver Twist, Great Expectations, and A Christmas Carol."
  },
  {
    "id": 234,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO Victorian scientists or thinkers.",
    "opts": [
      "Charles Darwin",
      "William Shakespeare",
      "Isaac Newton",
      "Michael Faraday"
    ],
    "answer": [
      0,
      3
    ],
    "explain": "Darwin and Faraday were Victorian. Shakespeare was 16th–17th century. Newton was 17th century."
  },
  {
    "id": 235,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The First World War started in:",
    "opts": [
      "1914",
      "1918",
      "1939",
      "1945"
    ],
    "answer": 0,
    "explain": "WWI began in 1914 and ended in 1918."
  },
  {
    "id": 236,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In WWI, Britain fought alongside:",
    "opts": [
      "Germany and Austria-Hungary",
      "France and Russia (later USA)",
      "Only Italy",
      "Only the Commonwealth"
    ],
    "answer": 1,
    "explain": "Britain's Allies in WWI were France, Russia, and later the USA. Enemies were Germany and Austria-Hungary."
  },
  {
    "id": 237,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "When was the Armistice signed that ended WWI?",
    "opts": [
      "11 November 1918",
      "8 May 1945",
      "1 January 1920",
      "6 June 1944"
    ],
    "answer": 0,
    "explain": "11 November 1918 — the 11th hour of the 11th day of the 11th month. Hence Remembrance Day on 11 November."
  },
  {
    "id": 238,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What do people wear on Remembrance Day?",
    "opts": [
      "A white rose",
      "A red poppy",
      "A green ribbon",
      "A daffodil"
    ],
    "answer": 1,
    "explain": "The red poppy symbolises the poppies that grew on WWI battlefields in France."
  },
  {
    "id": 239,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Approximately how many British soldiers died in WWI?",
    "opts": [
      "100,000",
      "500,000",
      "Over 1 million",
      "5 million"
    ],
    "answer": 2,
    "explain": "Over 1 million British and Empire soldiers died in WWI."
  },
  {
    "id": 240,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "When did women over 30 first get the vote in the UK?",
    "opts": [
      "1914",
      "1918",
      "1928",
      "1945"
    ],
    "answer": 1,
    "explain": "1918 — women over 30 got the vote. In 1928, equal voting rights with men."
  },
  {
    "id": 241,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The suffragettes campaigned for:",
    "opts": [
      "Workers' pay",
      "Women's right to vote",
      "Abolition of slavery",
      "Home rule for Ireland"
    ],
    "answer": 1,
    "explain": "The suffragettes fought for women's right to vote in the early 20th century."
  },
  {
    "id": 242,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Emmeline Pankhurst was a leader of the:",
    "opts": [
      "Labour Party",
      "Conservative Party",
      "Suffragette movement",
      "Trade Union movement"
    ],
    "answer": 2,
    "explain": "Pankhurst was the most famous leader of the suffragette movement."
  },
  {
    "id": 243,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "The Second World War lasted from:",
    "opts": [
      "1914 to 1918",
      "1939 to 1945",
      "1950 to 1953",
      "1945 to 1950"
    ],
    "answer": 1,
    "explain": "WWII: 1939 to 1945."
  },
  {
    "id": 244,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who became Prime Minister of the UK in 1940?",
    "opts": [
      "Neville Chamberlain",
      "Winston Churchill",
      "Clement Attlee",
      "Harold Macmillan"
    ],
    "answer": 1,
    "explain": "Churchill replaced Chamberlain as PM in May 1940 and led Britain through most of WWII."
  },
  {
    "id": 245,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What was the Battle of Britain?",
    "opts": [
      "A battle fought on land",
      "An aerial battle where the RAF defeated the German Luftwaffe in 1940",
      "A naval battle in the Pacific",
      "A battle against Napoleon"
    ],
    "answer": 1,
    "explain": "Battle of Britain (1940) — the RAF defeated Germany's Luftwaffe, preventing invasion."
  },
  {
    "id": 246,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "D-Day, the Allied invasion of Normandy, took place on:",
    "opts": [
      "6 June 1944",
      "11 November 1918",
      "8 May 1945",
      "3 September 1939"
    ],
    "answer": 0,
    "explain": "D-Day: 6 June 1944 — the largest seaborne invasion in history."
  },
  {
    "id": 247,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "VE Day (Victory in Europe) was:",
    "opts": [
      "6 June 1944",
      "8 May 1945",
      "15 August 1945",
      "1 September 1939"
    ],
    "answer": 1,
    "explain": "VE Day = 8 May 1945. VJ Day (Victory over Japan) was 15 August 1945."
  },
  {
    "id": 248,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The NHS was created in:",
    "opts": [
      "1918",
      "1945",
      "1948",
      "1970"
    ],
    "answer": 2,
    "explain": "The National Health Service was founded on 5 July 1948."
  },
  {
    "id": 249,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Who founded the NHS?",
    "opts": [
      "Winston Churchill",
      "Clement Attlee",
      "Aneurin Bevan",
      "Margaret Thatcher"
    ],
    "answer": 2,
    "explain": "Aneurin Bevan, Labour Minister of Health, founded the NHS in 1948."
  },
  {
    "id": 250,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was Prime Minister when the NHS was founded?",
    "opts": [
      "Winston Churchill",
      "Clement Attlee",
      "Harold Wilson",
      "Aneurin Bevan"
    ],
    "answer": 1,
    "explain": "Clement Attlee (Labour) was PM. Bevan was his Minister of Health."
  },
  {
    "id": 251,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Empire Windrush brought which group to Britain in 1948?",
    "opts": [
      "Italian workers",
      "Caribbean workers to help rebuild Britain",
      "Indian soldiers",
      "American soldiers"
    ],
    "answer": 1,
    "explain": "The Windrush brought Caribbean workers in 1948 — a key moment in modern British immigration history."
  },
  {
    "id": 252,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Most of the countries in the British Empire became independent:",
    "opts": [
      "Before WWI",
      "During WWI",
      "In the decades after WWII",
      "In the 21st century"
    ],
    "answer": 2,
    "explain": "Most colonies gained independence in the 1940s–1960s, starting with India in 1947."
  },
  {
    "id": 253,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Commonwealth is:",
    "opts": [
      "A military alliance",
      "A voluntary association of 56 countries, mostly former British Empire",
      "Another name for the EU",
      "A religious organisation"
    ],
    "answer": 1,
    "explain": "The Commonwealth is 56 nations, mostly former British colonies — led symbolically by the King."
  },
  {
    "id": 254,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Who was the first woman Prime Minister of the UK?",
    "opts": [
      "Theresa May",
      "Margaret Thatcher",
      "Liz Truss",
      "Queen Elizabeth II"
    ],
    "answer": 1,
    "explain": "Margaret Thatcher (Conservative) served as PM from 1979 to 1990."
  },
  {
    "id": 255,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In 1982, Britain fought the Falklands War against:",
    "opts": [
      "Argentina",
      "Chile",
      "Brazil",
      "Spain"
    ],
    "answer": 0,
    "explain": "Argentina invaded the Falkland Islands. Britain recaptured them."
  },
  {
    "id": 256,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who became Prime Minister in 1997?",
    "opts": [
      "John Major",
      "Tony Blair",
      "Gordon Brown",
      "David Cameron"
    ],
    "answer": 1,
    "explain": "Tony Blair (Labour) was PM from 1997 to 2007."
  },
  {
    "id": 257,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What is devolution?",
    "opts": [
      "The end of democracy",
      "The transfer of some powers from Westminster to Scotland, Wales, and Northern Ireland",
      "The sale of state assets",
      "Changes to tax law"
    ],
    "answer": 1,
    "explain": "Devolution gave each country its own parliament/assembly with some legislative power."
  },
  {
    "id": 258,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO parts of the UK that have their own elected parliament or assembly.",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Cornwall"
    ],
    "answer": [
      1,
      2
    ],
    "explain": "Scotland and Wales have their own parliaments. England does not. Cornwall is an English county."
  },
  {
    "id": 259,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "When did the UK vote to leave the EU (Brexit)?",
    "opts": [
      "2014",
      "2016",
      "2018",
      "2020"
    ],
    "answer": 1,
    "explain": "2016 — the Brexit referendum. UK officially left the EU in 2020."
  },
  {
    "id": 260,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "When did the UK officially leave the EU?",
    "opts": [
      "2016",
      "2018",
      "2020",
      "2022"
    ],
    "answer": 2,
    "explain": "2020 — after a transition period."
  },
  {
    "id": 261,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Queen Elizabeth II reigned from:",
    "opts": [
      "1837 to 1901",
      "1901 to 1952",
      "1952 to 2022",
      "1960 to 2020"
    ],
    "answer": 2,
    "explain": "Elizabeth II reigned for 70 years, the longest reign of any British monarch."
  },
  {
    "id": 262,
    "chapter": 3,
    "difficulty": 1,
    "trap": null,
    "q": "Who became King after Queen Elizabeth II died in 2022?",
    "opts": [
      "Prince William",
      "King Charles III",
      "Prince Harry",
      "Prince Andrew"
    ],
    "answer": 1,
    "explain": "King Charles III is the current monarch, having succeeded his mother in September 2022."
  },
  {
    "id": 263,
    "chapter": 3,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of the following did NOT happen during Henry VIII's reign?",
    "opts": [
      "Break with Rome",
      "Creation of the Church of England",
      "Execution of two wives",
      "Founding of the NHS"
    ],
    "answer": 3,
    "explain": "The NHS was founded in 1948, centuries after Henry VIII (died 1547)."
  },
  {
    "id": 264,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which British scientist is associated with the laws of gravity?",
    "opts": [
      "Isaac Newton",
      "Charles Darwin",
      "Alexander Fleming",
      "Tim Berners-Lee"
    ],
    "answer": 0,
    "explain": "Isaac Newton formulated the laws of motion and universal gravitation."
  },
  {
    "id": 265,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Alexander Fleming discovered:",
    "opts": [
      "The steam engine",
      "Penicillin",
      "The theory of evolution",
      "The World Wide Web"
    ],
    "answer": 1,
    "explain": "Fleming discovered penicillin in 1928 — the first antibiotic."
  },
  {
    "id": 266,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who is credited with inventing the World Wide Web?",
    "opts": [
      "Bill Gates",
      "Steve Jobs",
      "Tim Berners-Lee",
      "Alan Turing"
    ],
    "answer": 2,
    "explain": "Sir Tim Berners-Lee, a British scientist, invented the World Wide Web in 1989."
  },
  {
    "id": 267,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Alan Turing is famous for:",
    "opts": [
      "Inventing the telephone",
      "Code-breaking during WWII and early computer science",
      "Discovering America",
      "Writing Shakespeare's plays"
    ],
    "answer": 1,
    "explain": "Turing broke the Enigma code during WWII and is considered a father of computer science."
  },
  {
    "id": 268,
    "chapter": 3,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of the following are British inventors or scientists EXCEPT:",
    "opts": [
      "Isaac Newton",
      "Thomas Edison",
      "Charles Darwin",
      "Alexander Fleming"
    ],
    "answer": 1,
    "explain": "Thomas Edison was American. The others were all British."
  },
  {
    "id": 269,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Battle of Trafalgar (1805) was won by:",
    "opts": [
      "Napoleon",
      "Admiral Nelson and the British Navy",
      "The Royal Air Force",
      "Scotland"
    ],
    "answer": 1,
    "explain": "Nelson's victory at Trafalgar established British naval dominance for a century."
  },
  {
    "id": 270,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Battle of Waterloo (1815) defeated:",
    "opts": [
      "The Romans",
      "Napoleon Bonaparte",
      "Spain",
      "The Ottoman Empire"
    ],
    "answer": 1,
    "explain": "The Duke of Wellington led Allied forces to defeat Napoleon at Waterloo."
  },
  {
    "id": 271,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Duke of Wellington is famous for:",
    "opts": [
      "Founding the NHS",
      "Defeating Napoleon at Waterloo",
      "Writing novels",
      "Discovering Australia"
    ],
    "answer": 1,
    "explain": "Wellington led Allied forces against Napoleon at Waterloo in 1815."
  },
  {
    "id": 272,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which period is known as the Golden Age of English drama?",
    "opts": [
      "Medieval period",
      "Elizabethan era",
      "Victorian era",
      "Modern era"
    ],
    "answer": 1,
    "explain": "The Elizabethan era (late 16th century) saw Shakespeare, Marlowe, and many others."
  },
  {
    "id": 273,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In 1928, UK women got the vote on which terms?",
    "opts": [
      "Only women over 40",
      "On the same terms as men",
      "Only married women",
      "Only wealthy women"
    ],
    "answer": 1,
    "explain": "1928 — equal voting rights for all adults 21+. Later reduced to 18."
  },
  {
    "id": 274,
    "chapter": 3,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of these statements about the British Empire is FALSE?",
    "opts": [
      "It covered about a quarter of the world at its peak",
      "India gained independence in 1947",
      "Most colonies still exist under British rule",
      "The Commonwealth replaced the Empire"
    ],
    "answer": 2,
    "explain": "FALSE — most former colonies are now independent. Very few British territories remain."
  },
  {
    "id": 275,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which famous British philosopher/economist is associated with 'On Liberty'?",
    "opts": [
      "John Stuart Mill",
      "Charles Darwin",
      "Isaac Newton",
      "Karl Marx"
    ],
    "answer": 0,
    "explain": "John Stuart Mill wrote On Liberty in 1859 — a foundational work on individual freedom."
  },
  {
    "id": 276,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO British Prime Ministers from the 20th century.",
    "opts": [
      "Winston Churchill",
      "Robert Walpole",
      "Margaret Thatcher",
      "Henry VIII"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Churchill (WWII) and Thatcher (1979–1990) were 20th century. Walpole was 18th; Henry VIII wasn't a PM."
  },
  {
    "id": 277,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Great Depression of the 1930s was:",
    "opts": [
      "A religious movement",
      "A severe worldwide economic slump",
      "A political party",
      "A type of plague"
    ],
    "answer": 1,
    "explain": "The Great Depression was a global economic collapse following the 1929 Wall Street Crash."
  },
  {
    "id": 278,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Swinging Sixties' refers to:",
    "opts": [
      "A dance style",
      "The cultural revolution of the 1960s in Britain",
      "A type of jazz",
      "A political movement"
    ],
    "answer": 1,
    "explain": "The Swinging Sixties was a time of cultural transformation in Britain — Beatles, fashion, youth culture."
  },
  {
    "id": 279,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Beatles came from which British city?",
    "opts": [
      "London",
      "Liverpool",
      "Manchester",
      "Birmingham"
    ],
    "answer": 1,
    "explain": "The Beatles formed in Liverpool in 1960."
  },
  {
    "id": 280,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 1969 moon landing involved which British contribution?",
    "opts": [
      "British astronauts walked on the moon",
      "No direct British contribution",
      "Britain built the rocket",
      "Britain claimed the moon"
    ],
    "answer": 1,
    "explain": "The moon landing was a NASA mission. Britain had no direct role in that mission."
  },
  {
    "id": 281,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Troubles' in Northern Ireland refers to:",
    "opts": [
      "Weather problems",
      "The conflict in Northern Ireland from the late 1960s to 1998",
      "Football rivalries",
      "Economic issues"
    ],
    "answer": 1,
    "explain": "The Troubles was the violent sectarian conflict between unionists and republicans in Northern Ireland."
  },
  {
    "id": 282,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Good Friday Agreement of 1998:",
    "opts": [
      "Ended the monarchy",
      "Brought peace to Northern Ireland",
      "Took Britain out of the EU",
      "Created the NHS"
    ],
    "answer": 1,
    "explain": "The Good Friday Agreement largely ended the Troubles and set up power-sharing in Northern Ireland."
  },
  {
    "id": 283,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The London 2012 Olympics is remembered for:",
    "opts": [
      "Being a financial disaster",
      "Being a very successful Games, especially the opening ceremony",
      "Being cancelled",
      "Going over 20 years"
    ],
    "answer": 1,
    "explain": "London 2012 was widely praised, with Danny Boyle's opening ceremony celebrated around the world."
  },
  {
    "id": 284,
    "chapter": 3,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a recent British PM?",
    "opts": [
      "Tony Blair",
      "Gordon Brown",
      "David Cameron",
      "Harold Macmillan"
    ],
    "answer": 3,
    "explain": "Macmillan was PM in the 1950s–60s. The others served in the 2000s–2010s."
  },
  {
    "id": 285,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Queen Elizabeth II celebrated which jubilee in 2022?",
    "opts": [
      "Silver (25 years)",
      "Golden (50 years)",
      "Diamond (60 years)",
      "Platinum (70 years)"
    ],
    "answer": 3,
    "explain": "Platinum Jubilee — 70 years on the throne, in June 2022."
  },
  {
    "id": 286,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Iron Lady' was the nickname of:",
    "opts": [
      "Queen Victoria",
      "Margaret Thatcher",
      "Theresa May",
      "Elizabeth II"
    ],
    "answer": 1,
    "explain": "Margaret Thatcher was called the Iron Lady for her firm leadership style."
  },
  {
    "id": 287,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which Labour PM followed Tony Blair?",
    "opts": [
      "John Major",
      "Gordon Brown",
      "David Cameron",
      "Theresa May"
    ],
    "answer": 1,
    "explain": "Gordon Brown succeeded Blair as Labour leader and PM in 2007."
  },
  {
    "id": 288,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What is the King James Bible?",
    "opts": [
      "A legal document",
      "An English translation of the Bible commissioned by King James I",
      "A modern novel",
      "A handbook for MPs"
    ],
    "answer": 1,
    "explain": "The King James Bible (1611) is the most famous English Bible translation."
  },
  {
    "id": 289,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which British woman became a famous nurse in the Crimean War, known as 'the Lady with the Lamp'?",
    "opts": [
      "Emmeline Pankhurst",
      "Florence Nightingale",
      "Queen Victoria",
      "Mary Seacole"
    ],
    "answer": 1,
    "explain": "Florence Nightingale was called 'the Lady with the Lamp' for tending to wounded soldiers at night."
  },
  {
    "id": 290,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Mary Seacole is remembered as:",
    "opts": [
      "A Queen of England",
      "A Jamaican-born nurse who cared for wounded British soldiers in the Crimean War",
      "A famous artist",
      "A political leader"
    ],
    "answer": 1,
    "explain": "Mary Seacole was a Jamaican-born nurse who cared for British soldiers in the Crimea."
  },
  {
    "id": 291,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In which year was India granted independence from Britain?",
    "opts": [
      "1918",
      "1945",
      "1947",
      "1965"
    ],
    "answer": 2,
    "explain": "India gained independence on 15 August 1947."
  },
  {
    "id": 292,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "After WWII, many colonies gained independence and Britain helped form:",
    "opts": [
      "The United Nations",
      "The Commonwealth (voluntary association of former colonies)",
      "The European Union",
      "NATO only"
    ],
    "answer": 1,
    "explain": "The Commonwealth is a voluntary association of 56 countries, most former British colonies."
  },
  {
    "id": 293,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Welfare State' built after WWII included:",
    "opts": [
      "Only the NHS",
      "NHS, free secondary education, and a national system of benefits",
      "Only war pensions",
      "Private healthcare only"
    ],
    "answer": 1,
    "explain": "The Welfare State included free healthcare (NHS), free secondary education, unemployment benefits, and pensions."
  },
  {
    "id": 294,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 1944 Education Act (Butler Act) introduced:",
    "opts": [
      "Free university",
      "Free secondary education for all children in England and Wales",
      "Religious-only schools",
      "Private school vouchers"
    ],
    "answer": 1,
    "explain": "R.A. Butler's 1944 Act made secondary education free and compulsory."
  },
  {
    "id": 295,
    "chapter": 3,
    "difficulty": 2,
    "trap": "MOST",
    "q": "Most British monarchs since 1066 have been:",
    "opts": [
      "Catholic",
      "Protestant (after the Reformation)",
      "Jewish",
      "Muslim"
    ],
    "answer": 1,
    "explain": "After the Reformation (1530s), most British monarchs have been Protestant."
  },
  {
    "id": 296,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Magna Carta was originally written in:",
    "opts": [
      "English",
      "French",
      "Latin",
      "Welsh"
    ],
    "answer": 2,
    "explain": "Magna Carta was written in Latin, the language of law and learning in 1215."
  },
  {
    "id": 297,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things Alfred the Great is famous for.",
    "opts": [
      "Building Hadrian's Wall",
      "Defeating the Vikings",
      "Uniting the English kingdoms",
      "Founding the NHS"
    ],
    "answer": [
      1,
      2
    ],
    "explain": "Alfred defeated the Vikings and united the English kingdoms. Hadrian was Roman; NHS was 1948."
  },
  {
    "id": 298,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which king built the Tower of London?",
    "opts": [
      "Alfred the Great",
      "William the Conqueror",
      "Henry VIII",
      "James I"
    ],
    "answer": 1,
    "explain": "William the Conqueror started building the Tower of London after 1066."
  },
  {
    "id": 299,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, the term 'Restoration' refers to:",
    "opts": [
      "Restoring old buildings",
      "The return of the monarchy in 1660 with Charles II",
      "Restoring the Empire",
      "The Industrial Revolution"
    ],
    "answer": 1,
    "explain": "The Restoration = 1660, when Charles II returned and the monarchy was restored after Cromwell."
  },
  {
    "id": 300,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which two countries formed a single kingdom in 1707?",
    "opts": [
      "England and France",
      "England and Scotland (plus Wales)",
      "Scotland and Ireland",
      "England and Ireland"
    ],
    "answer": 1,
    "explain": "1707 Act of Union — England, Wales, Scotland became Great Britain."
  },
  {
    "id": 301,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which conflict led to the Magna Carta in 1215?",
    "opts": [
      "A war with France",
      "A dispute between King John and his barons",
      "The Norman Conquest",
      "The Wars of the Roses"
    ],
    "answer": 1,
    "explain": "King John's barons rebelled and forced him to sign the charter limiting royal power."
  },
  {
    "id": 302,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Robert Walpole is often called the first:",
    "opts": [
      "King",
      "Prime Minister",
      "General",
      "Archbishop"
    ],
    "answer": 1,
    "explain": "Walpole from 1721 is regarded as the first PM, though the role developed over time."
  },
  {
    "id": 303,
    "chapter": 3,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which country was NOT part of the British Empire at its peak?",
    "opts": [
      "India",
      "Australia",
      "Japan",
      "Canada"
    ],
    "answer": 2,
    "explain": "Japan was never part of the British Empire. The others were all British territories."
  },
  {
    "id": 304,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Canada became a self-governing dominion in:",
    "opts": [
      "1776",
      "1867",
      "1945",
      "1982"
    ],
    "answer": 1,
    "explain": "Canada became a dominion in 1867 and gradually gained full independence over time."
  },
  {
    "id": 305,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which two world wars did Britain fight in during the 20th century?",
    "opts": [
      "Crimean War and Boer War",
      "First World War and Second World War",
      "American Revolution and Napoleonic Wars",
      "Cold War only"
    ],
    "answer": 1,
    "explain": "WWI (1914–1918) and WWII (1939–1945) were the two great 20th-century wars."
  },
  {
    "id": 306,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Cold War was:",
    "opts": [
      "Fought in Antarctica",
      "A tense rivalry between Western countries and the Soviet Union (1947–1991)",
      "A medieval conflict",
      "A trade war with France"
    ],
    "answer": 1,
    "explain": "The Cold War was the long ideological rivalry between the West and the USSR."
  },
  {
    "id": 307,
    "chapter": 3,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO female leaders in British history.",
    "opts": [
      "Queen Victoria",
      "Queen Elizabeth II",
      "Florence Nightingale",
      "William Wilberforce"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Queen Victoria and Queen Elizabeth II were both British monarchs. Nightingale was a nurse; Wilberforce was male."
  },
  {
    "id": 308,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which event in 1914 triggered WWI?",
    "opts": [
      "The Great Fire of London",
      "The assassination of Archduke Franz Ferdinand",
      "The invasion of Poland",
      "The sinking of the Titanic"
    ],
    "answer": 1,
    "explain": "The assassination of Archduke Franz Ferdinand of Austria-Hungary in June 1914 triggered WWI."
  },
  {
    "id": 309,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which event in 1939 triggered WWII?",
    "opts": [
      "Germany invaded Poland",
      "The assassination of the Archduke",
      "The moon landing",
      "The sinking of the Titanic"
    ],
    "answer": 0,
    "explain": "Germany invaded Poland on 1 September 1939. Britain and France declared war on 3 September."
  },
  {
    "id": 310,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "What was the Blitz?",
    "opts": [
      "A dance craze",
      "Germany's bombing campaign against UK cities in 1940–1941",
      "A famous British film",
      "A political movement"
    ],
    "answer": 1,
    "explain": "The Blitz was the German bombing of British cities, especially London, during 1940–1941."
  },
  {
    "id": 311,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which British code-breaker helped defeat Nazi Germany?",
    "opts": [
      "Isaac Newton",
      "Alan Turing",
      "Charles Dickens",
      "Florence Nightingale"
    ],
    "answer": 1,
    "explain": "Alan Turing's work at Bletchley Park breaking the Enigma code is considered to have shortened WWII by years."
  },
  {
    "id": 312,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which British organisation is responsible for broadcasting news and entertainment?",
    "opts": [
      "The BBC",
      "NATO",
      "The NHS",
      "The EU"
    ],
    "answer": 0,
    "explain": "The BBC (British Broadcasting Corporation) was founded in 1922."
  },
  {
    "id": 313,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which decade is most associated with the rise of British pop music (The Beatles, The Rolling Stones)?",
    "opts": [
      "1940s",
      "1950s",
      "1960s",
      "1980s"
    ],
    "answer": 2,
    "explain": "The 1960s was the era of the Beatles and the British Invasion of global pop music."
  },
  {
    "id": 314,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In what year did the UK join the European Economic Community (EEC)?",
    "opts": [
      "1948",
      "1973",
      "1992",
      "2016"
    ],
    "answer": 1,
    "explain": "The UK joined the EEC (which became the EU) in 1973."
  },
  {
    "id": 315,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In which decade did the UK adopt decimal currency?",
    "opts": [
      "1950s",
      "1970s (1971)",
      "1990s",
      "2000s"
    ],
    "answer": 1,
    "explain": "Decimal Day was 15 February 1971. Before that, £1 = 240 pence (via 20 shillings)."
  },
  {
    "id": 316,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was Queen Victoria's husband?",
    "opts": [
      "Prince Albert",
      "Prince Charles",
      "Prince Philip",
      "King George"
    ],
    "answer": 0,
    "explain": "Prince Albert of Saxe-Coburg. The Royal Albert Hall is named after him."
  },
  {
    "id": 317,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which important document did the barons force King John to sign?",
    "opts": [
      "The Bill of Rights",
      "Magna Carta",
      "The Act of Union",
      "The Domesday Book"
    ],
    "answer": 1,
    "explain": "Magna Carta, 1215 — the foundation of limiting royal power."
  },
  {
    "id": 318,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Emperor Hadrian is remembered for building what in Britain?",
    "opts": [
      "Stonehenge",
      "A wall across northern Britain",
      "London Bridge",
      "The Tower of London"
    ],
    "answer": 1,
    "explain": "Hadrian's Wall (built AD 122) ran across northern England."
  },
  {
    "id": 319,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Before the Romans, ancient Britons worshipped via which type of religious leader?",
    "opts": [
      "Popes",
      "Druids",
      "Imams",
      "Rabbis"
    ],
    "answer": 1,
    "explain": "Celtic Britons followed Druids, their religious and legal leaders."
  },
  {
    "id": 320,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Stonehenge is located in:",
    "opts": [
      "Scotland",
      "Wales",
      "England (Wiltshire)",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "Stonehenge is in Wiltshire, southern England."
  },
  {
    "id": 321,
    "chapter": 3,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which is NOT a UK Prime Minister?",
    "opts": [
      "Winston Churchill",
      "Tony Blair",
      "Abraham Lincoln",
      "Margaret Thatcher"
    ],
    "answer": 2,
    "explain": "Abraham Lincoln was a US President, not a UK PM."
  },
  {
    "id": 322,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The English Bill of Rights was signed in:",
    "opts": [
      "1215",
      "1649",
      "1689",
      "1707"
    ],
    "answer": 2,
    "explain": "1689 Bill of Rights followed the Glorious Revolution — confirming Parliament's supremacy."
  },
  {
    "id": 323,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which UK leader famously said 'We shall fight on the beaches...'?",
    "opts": [
      "Margaret Thatcher",
      "Winston Churchill",
      "Tony Blair",
      "David Cameron"
    ],
    "answer": 1,
    "explain": "Churchill's famous WWII speech during the Battle of Britain (June 1940)."
  },
  {
    "id": 324,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Great Famine' of the 1840s affected which part of the British Isles most severely?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Ireland"
    ],
    "answer": 3,
    "explain": "The Irish Potato Famine (1845–1852) killed about one million and caused mass emigration."
  },
  {
    "id": 325,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In the 18th century, which thinker argued for free trade in 'The Wealth of Nations'?",
    "opts": [
      "Charles Darwin",
      "Adam Smith",
      "Isaac Newton",
      "William Shakespeare"
    ],
    "answer": 1,
    "explain": "Adam Smith (Scottish) published The Wealth of Nations in 1776, foundational to modern economics."
  },
  {
    "id": 326,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "The head of the Church of England is:",
    "opts": [
      "The Pope",
      "The Archbishop of Canterbury",
      "The reigning monarch",
      "The Prime Minister"
    ],
    "answer": 2,
    "explain": "The monarch is Head of the Church of England. Archbishop of Canterbury is spiritual leader under the monarch."
  },
  {
    "id": 327,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these religions is NOT commonly practised in the UK?",
    "opts": [
      "Christianity",
      "Islam",
      "Hinduism",
      "Zoroastrianism (only tiny UK community)"
    ],
    "answer": 3,
    "explain": "Zoroastrianism exists in UK but is very small. The others are major UK religions."
  },
  {
    "id": 328,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which Church is the national Church of Scotland?",
    "opts": [
      "The Church of England",
      "The Church of Scotland (Presbyterian)",
      "The Roman Catholic Church",
      "The Methodist Church"
    ],
    "answer": 1,
    "explain": "The Church of Scotland, a Presbyterian church, is Scotland's national church."
  },
  {
    "id": 329,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "St George is the patron saint of:",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 0,
    "explain": "St George is England's patron saint. His day is 23 April."
  },
  {
    "id": 330,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "St David is the patron saint of:",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "St David is Wales's patron saint. His day is 1 March."
  },
  {
    "id": 331,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "St Patrick is the patron saint of:",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland (and Ireland)"
    ],
    "answer": 3,
    "explain": "St Patrick is associated with Ireland and Northern Ireland. His day is 17 March."
  },
  {
    "id": 332,
    "chapter": 4,
    "difficulty": 1,
    "trap": null,
    "q": "St Andrew's Day is celebrated on:",
    "opts": [
      "1 March",
      "17 March",
      "23 April",
      "30 November"
    ],
    "answer": 3,
    "explain": "St Andrew's Day = 30 November. Scotland's patron saint."
  },
  {
    "id": 333,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO festive dates celebrated in the UK.",
    "opts": [
      "Chinese New Year",
      "Bonfire Night",
      "Fourth of July",
      "Christmas"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Bonfire Night (5 Nov) and Christmas (25 Dec) are UK celebrations. Chinese New Year is celebrated by some communities but not a national date. 4th of July is American."
  },
  {
    "id": 334,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Bonfire Night commemorates:",
    "opts": [
      "Victory in WWI",
      "The failed plot to blow up Parliament in 1605",
      "The founding of London",
      "Henry VIII's marriage"
    ],
    "answer": 1,
    "explain": "5 November celebrates the failure of Guy Fawkes's Gunpowder Plot of 1605."
  },
  {
    "id": 335,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Hogmanay is the Scottish celebration of:",
    "opts": [
      "Easter",
      "New Year's Eve",
      "St Andrew's Day",
      "Christmas"
    ],
    "answer": 1,
    "explain": "Hogmanay = Scottish New Year's Eve (31 December). A major celebration in Scotland."
  },
  {
    "id": 336,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Mother's Day in the UK falls:",
    "opts": [
      "On 1 May every year",
      "Three weeks before Easter (Mothering Sunday)",
      "The second Sunday in May (like the USA)",
      "On 25 December"
    ],
    "answer": 1,
    "explain": "UK Mother's Day is Mothering Sunday — three weeks before Easter. Different from the US date."
  },
  {
    "id": 337,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Father's Day in the UK is:",
    "opts": [
      "The first Sunday of June",
      "The third Sunday of June",
      "25 June",
      "The same as Mother's Day"
    ],
    "answer": 1,
    "explain": "UK Father's Day = third Sunday in June."
  },
  {
    "id": 338,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Easter in the UK is usually celebrated:",
    "opts": [
      "In January",
      "In March or April",
      "In July",
      "In December"
    ],
    "answer": 1,
    "explain": "Easter falls in March or April each year, varying with the lunar calendar."
  },
  {
    "id": 339,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Boxing Day is on:",
    "opts": [
      "24 December",
      "25 December",
      "26 December",
      "31 December"
    ],
    "answer": 2,
    "explain": "Boxing Day = 26 December, the day after Christmas."
  },
  {
    "id": 340,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Halloween in the UK is on:",
    "opts": [
      "31 October",
      "1 November",
      "5 November",
      "11 November"
    ],
    "answer": 0,
    "explain": "Halloween = 31 October."
  },
  {
    "id": 341,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a traditional British sport?",
    "opts": [
      "Cricket",
      "Football",
      "Baseball",
      "Rugby"
    ],
    "answer": 2,
    "explain": "Baseball is American. Cricket, football, and rugby are British."
  },
  {
    "id": 342,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British tournament is the world's oldest tennis championship?",
    "opts": [
      "Wimbledon",
      "The Australian Open",
      "The French Open",
      "The US Open"
    ],
    "answer": 0,
    "explain": "Wimbledon, held in London since 1877, is the world's oldest tennis tournament."
  },
  {
    "id": 343,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Grand National is a famous UK:",
    "opts": [
      "Golf tournament",
      "Football match",
      "Horse race",
      "Cricket match"
    ],
    "answer": 2,
    "explain": "The Grand National is a famous steeplechase horse race at Aintree."
  },
  {
    "id": 344,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Rugby has two main codes. Name them.",
    "opts": [
      "Rugby Union and Rugby League",
      "Rugby North and Rugby South",
      "Rugby Youth and Rugby Adult",
      "Rugby East and Rugby West"
    ],
    "answer": 0,
    "explain": "Rugby Union (15 players a side) and Rugby League (13 a side) are the two codes."
  },
  {
    "id": 345,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British runner became a national hero in the 2012 Olympics?",
    "opts": [
      "Usain Bolt",
      "Mo Farah",
      "Jessica Ennis-Hill",
      "Both Mo Farah AND Jessica Ennis"
    ],
    "answer": 2,
    "explain": "Jessica Ennis-Hill won heptathlon gold. Mo Farah also won. If single pick, Jessica Ennis-Hill is often cited."
  },
  {
    "id": 346,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The British Open is a famous:",
    "opts": [
      "Tennis tournament",
      "Golf tournament",
      "Horse race",
      "Football league"
    ],
    "answer": 1,
    "explain": "The British Open (or simply 'The Open') is one of the four major golf championships."
  },
  {
    "id": 347,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Charles Dickens wrote which of the following?",
    "opts": [
      "Pride and Prejudice",
      "Oliver Twist",
      "Harry Potter",
      "Hamlet"
    ],
    "answer": 1,
    "explain": "Oliver Twist is by Dickens. Pride and Prejudice = Austen. Harry Potter = Rowling. Hamlet = Shakespeare."
  },
  {
    "id": 348,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who wrote 'Harry Potter'?",
    "opts": [
      "Jane Austen",
      "Agatha Christie",
      "J.K. Rowling",
      "Roald Dahl"
    ],
    "answer": 2,
    "explain": "J.K. Rowling wrote the Harry Potter series, first published in 1997."
  },
  {
    "id": 349,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO famous British authors of children's books.",
    "opts": [
      "Roald Dahl",
      "Charles Darwin",
      "J.K. Rowling",
      "William Wilberforce"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Dahl wrote Matilda, Charlie and the Chocolate Factory. Rowling wrote Harry Potter. Darwin was a scientist; Wilberforce a politician."
  },
  {
    "id": 350,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Agatha Christie is famous for writing:",
    "opts": [
      "Romance novels",
      "Crime and detective novels",
      "History books",
      "Children's stories"
    ],
    "answer": 1,
    "explain": "Christie wrote Murder on the Orient Express and hundreds of detective novels."
  },
  {
    "id": 351,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Who composed 'The Planets' suite?",
    "opts": [
      "George Frideric Handel",
      "Benjamin Britten",
      "Gustav Holst",
      "Edward Elgar"
    ],
    "answer": 2,
    "explain": "Gustav Holst composed The Planets (1914–1916)."
  },
  {
    "id": 352,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Handel's 'Messiah' is a famous piece of:",
    "opts": [
      "Jazz music",
      "Classical sacred music (oratorio)",
      "Folk music",
      "Opera"
    ],
    "answer": 1,
    "explain": "Messiah is Handel's famous oratorio (1741) — 'Hallelujah Chorus'."
  },
  {
    "id": 353,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Beatles formed in which city?",
    "opts": [
      "London",
      "Manchester",
      "Liverpool",
      "Birmingham"
    ],
    "answer": 2,
    "explain": "The Beatles formed in Liverpool in 1960."
  },
  {
    "id": 354,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Robert Burns is Scotland's:",
    "opts": [
      "Most famous general",
      "National poet",
      "Longest-serving PM",
      "Founder of the NHS"
    ],
    "answer": 1,
    "explain": "Robert Burns (1759–1796) is Scotland's national poet. Burns Night (25 Jan) celebrates him."
  },
  {
    "id": 355,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Dylan Thomas is best known as a:",
    "opts": [
      "Welsh poet",
      "English painter",
      "Scottish novelist",
      "Irish playwright"
    ],
    "answer": 0,
    "explain": "Dylan Thomas was a 20th-century Welsh poet — 'Do not go gentle into that good night'."
  },
  {
    "id": 356,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Big Ben is:",
    "opts": [
      "A football stadium",
      "A famous clock tower at Parliament",
      "A river in London",
      "A royal residence"
    ],
    "answer": 1,
    "explain": "Big Ben is the bell in the clock tower of the Palace of Westminster (now called Elizabeth Tower)."
  },
  {
    "id": 357,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Buckingham Palace is the London home of:",
    "opts": [
      "The Prime Minister",
      "The reigning monarch",
      "The Archbishop of Canterbury",
      "The Mayor of London"
    ],
    "answer": 1,
    "explain": "Buckingham Palace is the monarch's official London residence."
  },
  {
    "id": 358,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Westminster Abbey is famous for hosting:",
    "opts": [
      "Football matches",
      "Coronations, royal weddings, and royal funerals",
      "UK parliamentary debates",
      "Pop concerts"
    ],
    "answer": 1,
    "explain": "Westminster Abbey has hosted coronations since 1066, plus many royal weddings and funerals."
  },
  {
    "id": 359,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Loch Ness is in:",
    "opts": [
      "Wales",
      "Ireland",
      "Scotland",
      "England"
    ],
    "answer": 2,
    "explain": "Loch Ness is a famous Scottish Highland lake, supposedly home to the Loch Ness Monster."
  },
  {
    "id": 360,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which landmark is NOT in England?",
    "opts": [
      "Stonehenge",
      "The Lake District",
      "Snowdonia",
      "The White Cliffs of Dover"
    ],
    "answer": 2,
    "explain": "Snowdonia is a national park in Wales. The others are all in England."
  },
  {
    "id": 361,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The London Eye is:",
    "opts": [
      "A famous department store",
      "A giant observation wheel on the Thames",
      "A sports stadium",
      "A royal palace"
    ],
    "answer": 1,
    "explain": "The London Eye is a 135-metre observation wheel on the South Bank of the Thames."
  },
  {
    "id": 362,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Trafalgar Square in London is named after:",
    "opts": [
      "The Great Fire of London",
      "Lord Nelson's 1805 naval victory",
      "The Battle of Waterloo",
      "The Industrial Revolution"
    ],
    "answer": 1,
    "explain": "Trafalgar Square commemorates the Battle of Trafalgar (1805) where Nelson's fleet defeated the French and Spanish."
  },
  {
    "id": 363,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Edinburgh Castle is a major landmark of:",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 1,
    "explain": "Edinburgh Castle dominates the skyline of Scotland's capital."
  },
  {
    "id": 364,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "A pub is:",
    "opts": [
      "A type of church",
      "A public house where people meet socially and drink",
      "A government building",
      "A school"
    ],
    "answer": 1,
    "explain": "A pub (public house) is a bar/meeting place, central to British social life."
  },
  {
    "id": 365,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Sunday roast traditionally consists of:",
    "opts": [
      "Pizza and pasta",
      "Roasted meat with potatoes and vegetables",
      "Fish and chips",
      "Curry and rice"
    ],
    "answer": 1,
    "explain": "Sunday roast = roasted meat (beef, lamb, chicken, pork), roast potatoes, vegetables, gravy, Yorkshire pudding."
  },
  {
    "id": 366,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "A typical British weather comment is:",
    "opts": [
      "'It's always sunny here'",
      "'It's raining again'",
      "'The heat is unbearable'",
      "'The snow lasts all year'"
    ],
    "answer": 1,
    "explain": "Britain is known for rain and changeable weather — a common topic of small talk."
  },
  {
    "id": 367,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "What side of the road do people drive on in the UK?",
    "opts": [
      "Right",
      "Left",
      "Either",
      "Middle"
    ],
    "answer": 1,
    "explain": "UK drives on the LEFT."
  },
  {
    "id": 368,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The minimum age to drive a car in the UK is:",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 1,
    "explain": "17 for cars. 16 for mopeds."
  },
  {
    "id": 369,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "A 'bank holiday' is:",
    "opts": [
      "A holiday when banks open longer",
      "A public holiday when banks and many businesses are closed",
      "A week-long national festival",
      "A religious holiday for bankers only"
    ],
    "answer": 1,
    "explain": "Bank holidays are public holidays on which banks and many businesses close."
  },
  {
    "id": 370,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "How many bank holidays are there in England and Wales each year (approximately)?",
    "opts": [
      "2",
      "5",
      "8",
      "15"
    ],
    "answer": 2,
    "explain": "England and Wales have about 8 bank holidays per year."
  },
  {
    "id": 371,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Wimbledon's tennis tradition includes:",
    "opts": [
      "Players wearing coloured clothing",
      "A strict all-white dress code for players",
      "Playing with golf balls",
      "Only indoor matches"
    ],
    "answer": 1,
    "explain": "Wimbledon has a traditional all-white dress code for players."
  },
  {
    "id": 372,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The FA Cup is a major competition in which sport?",
    "opts": [
      "Cricket",
      "Football",
      "Rugby",
      "Tennis"
    ],
    "answer": 1,
    "explain": "The FA Cup is English football's oldest club competition, founded 1871."
  },
  {
    "id": 373,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO typical British customs.",
    "opts": [
      "Queuing politely",
      "Tipping 50% automatically",
      "Standing in lines",
      "Sunday roast lunch"
    ],
    "answer": [
      0,
      3
    ],
    "explain": "Queuing politely and Sunday roast are British customs. 50% tipping is not British. Standing in lines is just queuing."
  },
  {
    "id": 374,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, tipping at restaurants is typically:",
    "opts": [
      "Not expected at all",
      "Around 10% for good service",
      "Always 20%",
      "Illegal"
    ],
    "answer": 1,
    "explain": "In UK restaurants, 10% is a common tip for good service. Some add a service charge."
  },
  {
    "id": 375,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, most shops are open:",
    "opts": [
      "Only on weekdays",
      "7 days a week",
      "Only on Sundays",
      "Only at night"
    ],
    "answer": 1,
    "explain": "Most shops open 7 days, though Sunday trading hours are often shorter."
  },
  {
    "id": 376,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "'Pantomime' is a British theatrical tradition associated with:",
    "opts": [
      "Summer",
      "Christmas",
      "Easter",
      "New Year only"
    ],
    "answer": 1,
    "explain": "Pantomimes are comic plays performed mostly at Christmas."
  },
  {
    "id": 377,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Eisteddfod is a major cultural festival in which country?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "The Eisteddfod is Wales's main festival of language, music, and literature."
  },
  {
    "id": 378,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "A traditional Scottish instrument is:",
    "opts": [
      "The sitar",
      "The bagpipes",
      "The guitar",
      "The trumpet"
    ],
    "answer": 1,
    "explain": "The bagpipes are a traditional Scottish instrument."
  },
  {
    "id": 379,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Highland Games in Scotland traditionally feature:",
    "opts": [
      "Tennis and cricket",
      "Heavy events like the caber toss, plus music and dancing",
      "Boxing matches",
      "Ice hockey"
    ],
    "answer": 1,
    "explain": "Highland Games include caber toss, hammer throw, traditional music, and Highland dancing."
  },
  {
    "id": 380,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "A tartan is associated with:",
    "opts": [
      "Welsh culture",
      "Scottish culture (especially clans)",
      "English cuisine",
      "Northern Irish law"
    ],
    "answer": 1,
    "explain": "Tartans are patterned textiles associated with Scottish clans."
  },
  {
    "id": 381,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Cricket matches in England can last:",
    "opts": [
      "10 minutes",
      "1 hour",
      "Up to 5 days (test matches)",
      "A whole year"
    ],
    "answer": 2,
    "explain": "Test matches can last up to 5 days. Shorter formats (T20, ODIs) are much quicker."
  },
  {
    "id": 382,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Proms is an annual:",
    "opts": [
      "Horse race",
      "Summer concert series of classical music in London",
      "Political conference",
      "Rugby tournament"
    ],
    "answer": 1,
    "explain": "The BBC Proms is an eight-week summer classical music festival at the Royal Albert Hall."
  },
  {
    "id": 383,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a famous British film franchise?",
    "opts": [
      "James Bond",
      "Harry Potter",
      "Star Wars",
      "Mr. Bean"
    ],
    "answer": 2,
    "explain": "Star Wars is American. Bond, Harry Potter, and Mr. Bean are British."
  },
  {
    "id": 384,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The British film industry is sometimes called:",
    "opts": [
      "Bollywood",
      "Hollywood",
      "Pinewood (referring to Pinewood Studios)",
      "Nollywood"
    ],
    "answer": 2,
    "explain": "Pinewood Studios in Buckinghamshire is the most famous British film studio."
  },
  {
    "id": 385,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "London has many major museums. Which is famous for historical artifacts?",
    "opts": [
      "The Tate Modern",
      "The British Museum",
      "The Natural History Museum",
      "Madame Tussauds"
    ],
    "answer": 1,
    "explain": "The British Museum houses major collections including the Rosetta Stone and Elgin Marbles."
  },
  {
    "id": 386,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Tate Modern, in London, is an art gallery focused on:",
    "opts": [
      "Ancient artifacts",
      "Modern and contemporary art",
      "Medieval paintings",
      "Military history"
    ],
    "answer": 1,
    "explain": "Tate Modern specialises in modern and contemporary art."
  },
  {
    "id": 387,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Britain's most famous horse racing event, held annually near London, is:",
    "opts": [
      "The Derby (Epsom Derby)",
      "The Tour de France",
      "The Grand Slam",
      "The Kentucky Derby"
    ],
    "answer": 0,
    "explain": "The Epsom Derby, held in Surrey each June, is a flat race for 3-year-olds, started 1780."
  },
  {
    "id": 388,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Snooker is a popular UK sport. It is played with:",
    "opts": [
      "A ball and bat",
      "Cues and balls on a green table",
      "Skis",
      "Boats"
    ],
    "answer": 1,
    "explain": "Snooker is a cue sport played on a green baize table with 21 balls."
  },
  {
    "id": 389,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Darts is another popular UK pub sport. It involves:",
    "opts": [
      "Throwing wooden discs",
      "Throwing small arrows at a dartboard",
      "Kicking balls",
      "Racing cars"
    ],
    "answer": 1,
    "explain": "Darts — small arrows thrown at a circular board — is popular in pubs."
  },
  {
    "id": 390,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which football team is associated with the colours red and white and the city of Manchester?",
    "opts": [
      "Chelsea FC",
      "Manchester United",
      "Liverpool FC",
      "Arsenal"
    ],
    "answer": 1,
    "explain": "Manchester United play in red and white (and black)."
  },
  {
    "id": 391,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Fish and chips is considered:",
    "opts": [
      "An Italian dish",
      "A classic British takeaway meal",
      "A French dish",
      "A vegetarian special"
    ],
    "answer": 1,
    "explain": "Fish and chips is a British takeaway classic — battered fish and chips."
  },
  {
    "id": 392,
    "chapter": 4,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which statement about British food is FALSE?",
    "opts": [
      "Fish and chips is a traditional British meal",
      "Sunday roast is a family tradition",
      "Britons never drink tea",
      "Haggis is a Scottish national dish"
    ],
    "answer": 2,
    "explain": "Britons drink lots of tea — it's iconic. The other statements are true."
  },
  {
    "id": 393,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Haggis is a traditional dish of:",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 1,
    "explain": "Haggis is Scotland's national dish, traditionally eaten on Burns Night."
  },
  {
    "id": 394,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Welsh rarebit is:",
    "opts": [
      "A type of rabbit",
      "A traditional Welsh dish of melted cheese on toast",
      "A Welsh sport",
      "A Welsh folk song"
    ],
    "answer": 1,
    "explain": "Welsh rarebit (or rabbit) is a hot cheese sauce on toasted bread."
  },
  {
    "id": 395,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which vegetable is a traditional UK garden feature and allotment staple?",
    "opts": [
      "Pumpkin",
      "Runner beans and cabbages",
      "Sweet potato only",
      "Bananas"
    ],
    "answer": 1,
    "explain": "British allotments traditionally grow vegetables like runner beans, cabbages, carrots, potatoes."
  },
  {
    "id": 396,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "An allotment is:",
    "opts": [
      "A government subsidy",
      "A rented piece of land for growing vegetables",
      "A type of house",
      "A charity"
    ],
    "answer": 1,
    "explain": "Allotments are small plots of rented land for growing food — a British tradition."
  },
  {
    "id": 397,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Proms' traditionally concludes with:",
    "opts": [
      "Silent meditation",
      "'Last Night of the Proms' with patriotic songs",
      "Fireworks only",
      "A football match"
    ],
    "answer": 1,
    "explain": "The 'Last Night of the Proms' is a major patriotic celebration at the Royal Albert Hall."
  },
  {
    "id": 398,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British TV institution has produced shows since 1922?",
    "opts": [
      "ITV",
      "BBC",
      "Sky",
      "Channel 4"
    ],
    "answer": 1,
    "explain": "The BBC (British Broadcasting Corporation) started radio in 1922, TV in 1936."
  },
  {
    "id": 399,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "EastEnders and Coronation Street are:",
    "opts": [
      "British historical novels",
      "British long-running TV soap operas",
      "British films",
      "British newspapers"
    ],
    "answer": 1,
    "explain": "They are long-running British soap operas (Coronation Street on ITV since 1960; EastEnders on BBC since 1985)."
  },
  {
    "id": 400,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Notting Hill Carnival in London celebrates:",
    "opts": [
      "Irish culture",
      "Caribbean culture",
      "Scottish culture",
      "Italian culture"
    ],
    "answer": 1,
    "explain": "Notting Hill Carnival (August) celebrates London's Caribbean heritage."
  },
  {
    "id": 401,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "The UK is officially a:",
    "opts": [
      "Republic",
      "Dictatorship",
      "Constitutional monarchy",
      "Theocracy"
    ],
    "answer": 2,
    "explain": "Constitutional monarchy = king/queen as head of state, but real power with elected Parliament."
  },
  {
    "id": 402,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The UK constitution is:",
    "opts": [
      "Written in one document",
      "Unwritten — found in laws, conventions, and court decisions",
      "Written by the Queen",
      "The same as the US Constitution"
    ],
    "answer": 1,
    "explain": "The UK has an uncodified constitution, unusual among democracies."
  },
  {
    "id": 403,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "The House of Commons has how many elected MPs?",
    "opts": [
      "100",
      "450",
      "650",
      "1000"
    ],
    "answer": 2,
    "explain": "650 MPs, one per constituency."
  },
  {
    "id": 404,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Members of the House of Lords are:",
    "opts": [
      "Elected by the public",
      "Appointed or hereditary",
      "Only chosen by the monarch",
      "Only former MPs"
    ],
    "answer": 1,
    "explain": "Lords are appointed (mostly life peers), hereditary peers, and bishops — not elected."
  },
  {
    "id": 405,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "The PM officially lives at:",
    "opts": [
      "Buckingham Palace",
      "10 Downing Street",
      "Westminster Abbey",
      "The Tower of London"
    ],
    "answer": 1,
    "explain": "10 Downing Street is the PM's official London residence and office."
  },
  {
    "id": 406,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Chancellor of the Exchequer is in charge of:",
    "opts": [
      "The armed forces",
      "Foreign policy",
      "Finance and the economy",
      "Education"
    ],
    "answer": 2,
    "explain": "The Chancellor runs the Treasury and is responsible for the economy and taxation."
  },
  {
    "id": 407,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Home Secretary is responsible for:",
    "opts": [
      "Foreign affairs",
      "Policing, immigration, and crime",
      "Health",
      "Education"
    ],
    "answer": 1,
    "explain": "The Home Secretary oversees immigration, policing, and law and order."
  },
  {
    "id": 408,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Foreign Secretary is responsible for:",
    "opts": [
      "Education in England",
      "UK's relationships with foreign countries",
      "Agriculture",
      "Transport"
    ],
    "answer": 1,
    "explain": "The Foreign Secretary leads the UK's foreign policy and diplomacy."
  },
  {
    "id": 409,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Prime Minister's Questions (PMQs) takes place in the House of Commons:",
    "opts": [
      "Every day Parliament sits",
      "Every Wednesday when Parliament is sitting",
      "Once a month",
      "Only during crises"
    ],
    "answer": 1,
    "explain": "PMQs is every Wednesday at noon when Parliament is sitting."
  },
  {
    "id": 410,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Speaker of the House of Commons:",
    "opts": [
      "Writes new laws",
      "Is the neutral chairperson of Commons debates",
      "Is the PM",
      "Is the Archbishop of Canterbury"
    ],
    "answer": 1,
    "explain": "The Speaker chairs debates in Commons and must remain politically neutral."
  },
  {
    "id": 411,
    "chapter": 5,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things the House of Lords does.",
    "opts": [
      "Reviews and revises laws",
      "Elects the Prime Minister",
      "Scrutinises the government",
      "Sets local council tax"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "The Lords review/revise laws and scrutinise government. They don't elect the PM; Council Tax is local."
  },
  {
    "id": 412,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "General elections must happen at least every:",
    "opts": [
      "2 years",
      "4 years",
      "5 years",
      "10 years"
    ],
    "answer": 2,
    "explain": "UK general elections are held at least every 5 years."
  },
  {
    "id": 413,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In UK elections, 'First Past the Post' means:",
    "opts": [
      "Candidates race physically",
      "The candidate with the most votes in a constituency wins",
      "Votes are proportional",
      "Only the PM wins"
    ],
    "answer": 1,
    "explain": "FPTP — the candidate with the most votes in each constituency wins, even without a majority."
  },
  {
    "id": 414,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The main political parties in the UK include:",
    "opts": [
      "Labour, Conservative, Liberal Democrats, SNP",
      "Democrat and Republican",
      "Labour only",
      "Green only"
    ],
    "answer": 0,
    "explain": "Main UK parties: Conservative, Labour, Lib Dems, SNP, Plaid Cymru, Green, etc."
  },
  {
    "id": 415,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The leader of the opposition is:",
    "opts": [
      "The PM's deputy",
      "The leader of the second-largest party in the Commons",
      "A judge",
      "Always Labour"
    ],
    "answer": 1,
    "explain": "Leader of the Opposition = leader of the largest party not in government."
  },
  {
    "id": 416,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Cabinet consists of:",
    "opts": [
      "All MPs",
      "About 20 senior ministers chosen by the PM",
      "Only Lords",
      "Foreign ambassadors"
    ],
    "answer": 1,
    "explain": "The Cabinet has around 20 senior ministers, usually from the governing party."
  },
  {
    "id": 417,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Civil servants:",
    "opts": [
      "Are elected",
      "Are politically neutral employees who deliver government services",
      "Only work for one party",
      "Must be MPs"
    ],
    "answer": 1,
    "explain": "Civil servants are politically neutral career employees."
  },
  {
    "id": 418,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Scottish Parliament is located at:",
    "opts": [
      "Westminster",
      "Holyrood, Edinburgh",
      "Stormont, Belfast",
      "Cardiff Bay"
    ],
    "answer": 1,
    "explain": "The Scottish Parliament meets at Holyrood in Edinburgh."
  },
  {
    "id": 419,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Welsh Parliament is called:",
    "opts": [
      "Holyrood",
      "The Senedd",
      "Stormont",
      "The Assembly"
    ],
    "answer": 1,
    "explain": "The Welsh Parliament is called the Senedd (since 2020)."
  },
  {
    "id": 420,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Northern Ireland Assembly is based at:",
    "opts": [
      "Westminster",
      "Holyrood",
      "Stormont, Belfast",
      "Cardiff"
    ],
    "answer": 2,
    "explain": "Stormont in Belfast is the seat of the Northern Ireland Assembly."
  },
  {
    "id": 421,
    "chapter": 5,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO powers that are devolved to Scotland.",
    "opts": [
      "Defence",
      "Education",
      "Foreign policy",
      "Health"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "Education and Health are devolved. Defence and foreign policy are reserved to Westminster."
  },
  {
    "id": 422,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Defence and foreign policy in the UK are:",
    "opts": [
      "Devolved to each nation",
      "Reserved to the UK Parliament at Westminster",
      "Decided by each city",
      "Privately managed"
    ],
    "answer": 1,
    "explain": "Defence and foreign policy are reserved matters — only Westminster decides."
  },
  {
    "id": 423,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Local councils in the UK are responsible for:",
    "opts": [
      "The army",
      "Rubbish collection, libraries, local schools, planning",
      "The NHS",
      "The economy"
    ],
    "answer": 1,
    "explain": "Local councils handle rubbish, libraries, local education, planning, and local services."
  },
  {
    "id": 424,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Council Tax is paid to:",
    "opts": [
      "The King",
      "Your local council for local services",
      "The UK government",
      "The EU"
    ],
    "answer": 1,
    "explain": "Council Tax funds local services like rubbish collection, libraries, street cleaning."
  },
  {
    "id": 425,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, the Civil Service is:",
    "opts": [
      "Run by elected officials only",
      "A permanent, politically neutral body",
      "The armed forces",
      "Private contractors only"
    ],
    "answer": 1,
    "explain": "Civil Service is non-political, non-partisan, and continues when governments change."
  },
  {
    "id": 426,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Commonwealth has about how many member countries?",
    "opts": [
      "10",
      "30",
      "56",
      "190"
    ],
    "answer": 2,
    "explain": "The Commonwealth has 56 member countries."
  },
  {
    "id": 427,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The head of the Commonwealth is currently:",
    "opts": [
      "The UK Prime Minister",
      "The Queen of Australia",
      "King Charles III",
      "The UN Secretary-General"
    ],
    "answer": 2,
    "explain": "King Charles III is Head of the Commonwealth (symbolic role)."
  },
  {
    "id": 428,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The United Nations (UN) has its UK Security Council seat as a:",
    "opts": [
      "Temporary member",
      "Permanent member with veto power",
      "Observer",
      "Applicant"
    ],
    "answer": 1,
    "explain": "UK is one of the 5 permanent members of the UN Security Council."
  },
  {
    "id": 429,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "NATO is:",
    "opts": [
      "A trade organisation",
      "A military defensive alliance",
      "A religious body",
      "A human rights court"
    ],
    "answer": 1,
    "explain": "NATO — North Atlantic Treaty Organisation — is a defensive military alliance."
  },
  {
    "id": 430,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The European Court of Human Rights is located in:",
    "opts": [
      "London",
      "Brussels",
      "Strasbourg, France",
      "Geneva"
    ],
    "answer": 2,
    "explain": "The ECHR is in Strasbourg. The UK is still a member despite Brexit."
  },
  {
    "id": 431,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Minor criminal cases in England and Wales are usually heard in:",
    "opts": [
      "The Crown Court",
      "The Magistrates' Court",
      "The Supreme Court",
      "Small Claims Court"
    ],
    "answer": 1,
    "explain": "Magistrates' Courts handle most criminal cases — the minor ones."
  },
  {
    "id": 432,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Most magistrates in the UK are:",
    "opts": [
      "Paid professionals",
      "Unpaid volunteers",
      "MPs",
      "Foreign judges"
    ],
    "answer": 1,
    "explain": "Most magistrates (Justices of the Peace) are unpaid volunteers from the local community."
  },
  {
    "id": 433,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Serious criminal cases are tried in:",
    "opts": [
      "The Magistrates' Court",
      "The Crown Court with a jury",
      "The County Court",
      "The Small Claims Court"
    ],
    "answer": 1,
    "explain": "Crown Court handles serious cases with a jury of 12."
  },
  {
    "id": 434,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A jury in the Crown Court has how many members?",
    "opts": [
      "6",
      "8",
      "12",
      "15"
    ],
    "answer": 2,
    "explain": "Crown Court juries have 12 members."
  },
  {
    "id": 435,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Cases involving children aged 10 to 17 are usually heard in:",
    "opts": [
      "Crown Court",
      "Youth Court",
      "County Court",
      "Small Claims"
    ],
    "answer": 1,
    "explain": "Youth Courts handle cases involving 10–17 year olds (with special rules)."
  },
  {
    "id": 436,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Small disputes under £10,000 in England and Wales can be heard in:",
    "opts": [
      "The Crown Court",
      "The Small Claims Court (part of County Court)",
      "The High Court",
      "The European Court"
    ],
    "answer": 1,
    "explain": "Small Claims (part of County Court) handles civil disputes up to £10,000, usually without lawyers."
  },
  {
    "id": 437,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A solicitor is:",
    "opts": [
      "A type of judge",
      "A lawyer who usually works with clients on most legal matters",
      "A criminal witness",
      "A jury member"
    ],
    "answer": 1,
    "explain": "Solicitors are lawyers — first port of call for most legal matters."
  },
  {
    "id": 438,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A barrister is:",
    "opts": [
      "A judge",
      "A lawyer who specialises in representing clients in higher courts",
      "A police officer",
      "A jury member"
    ],
    "answer": 1,
    "explain": "Barristers typically represent clients in higher courts — often briefed by solicitors."
  },
  {
    "id": 439,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Citizens Advice Bureaux offer:",
    "opts": [
      "Free legal advice and help with benefits, housing, and other issues",
      "Police services",
      "Medical care only",
      "Banking services"
    ],
    "answer": 0,
    "explain": "CAB provides free independent advice on legal, financial, and other issues."
  },
  {
    "id": 440,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Legal Aid in the UK is:",
    "opts": [
      "Free legal representation for everyone",
      "Financial help from the government for those who cannot afford a lawyer",
      "Free advice only for MPs",
      "Only available in Scotland"
    ],
    "answer": 1,
    "explain": "Legal Aid helps those with low income get legal representation."
  },
  {
    "id": 441,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Income Tax is paid on:",
    "opts": [
      "Food purchases",
      "Your earnings from work and some investments",
      "Council services",
      "Imports only"
    ],
    "answer": 1,
    "explain": "Income Tax is paid on what you earn from work or certain investments."
  },
  {
    "id": 442,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "PAYE stands for:",
    "opts": [
      "Pay as You Earn (automatic income tax deduction)",
      "Pay After Your Employer",
      "Public Account Year End",
      "Private and Associated Yearly Earnings"
    ],
    "answer": 0,
    "explain": "PAYE means tax is deducted automatically from your wages by your employer."
  },
  {
    "id": 443,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "National Insurance (NI) contributions fund:",
    "opts": [
      "Private insurance",
      "NHS, state pension, and some benefits",
      "Armed forces",
      "Royal family"
    ],
    "answer": 1,
    "explain": "NI funds NHS, state pension, unemployment benefit, and maternity pay."
  },
  {
    "id": 444,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "To work in the UK, you need a:",
    "opts": [
      "Council Tax number",
      "National Insurance number",
      "Passport only",
      "Driving licence"
    ],
    "answer": 1,
    "explain": "You need a NI number to work legally in the UK."
  },
  {
    "id": 445,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "The standard rate of VAT in the UK is:",
    "opts": [
      "5%",
      "10%",
      "20%",
      "25%"
    ],
    "answer": 2,
    "explain": "Standard VAT = 20%. Reduced rates apply to some items (like energy at 5%)."
  },
  {
    "id": 446,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Excise duty is charged on:",
    "opts": [
      "Fruits and vegetables",
      "Alcohol, tobacco, and fuel",
      "Children's clothes",
      "All imports"
    ],
    "answer": 1,
    "explain": "Excise duty applies to alcohol, tobacco, and fuel — 'sin taxes'."
  },
  {
    "id": 447,
    "chapter": 5,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which is NOT a UK tax?",
    "opts": [
      "Income Tax",
      "Corporation Tax",
      "Pasta Tax",
      "Capital Gains Tax"
    ],
    "answer": 2,
    "explain": "There's no Pasta Tax in the UK. The others are real."
  },
  {
    "id": 448,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Council Tax is based on:",
    "opts": [
      "Your income",
      "The value and type of your home",
      "Your age",
      "Your religion"
    ],
    "answer": 1,
    "explain": "Council Tax is based on the value band of your property."
  },
  {
    "id": 449,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, motor vehicles over 3 years old must pass an annual safety check called:",
    "opts": [
      "MOT",
      "DVLA",
      "HMRC",
      "VAT"
    ],
    "answer": 0,
    "explain": "MOT (Ministry of Transport) test — annual safety check for cars 3+ years old."
  },
  {
    "id": 450,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "To drive legally in the UK, you must have:",
    "opts": [
      "A driving licence, insurance, road tax, and valid MOT",
      "Only a driving licence",
      "Just insurance",
      "No documents needed"
    ],
    "answer": 0,
    "explain": "All four are required: licence, insurance, road tax, and valid MOT (if car 3+ yrs)."
  },
  {
    "id": 451,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Motor insurance in the UK is:",
    "opts": [
      "Optional",
      "A legal requirement to drive on public roads",
      "Only for new drivers",
      "Free for over-65s"
    ],
    "answer": 1,
    "explain": "Driving without insurance is a criminal offence in the UK."
  },
  {
    "id": 452,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The speed limit on most UK motorways is:",
    "opts": [
      "30 mph",
      "50 mph",
      "70 mph",
      "100 mph"
    ],
    "answer": 2,
    "explain": "UK motorway speed limit: 70 mph."
  },
  {
    "id": 453,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In most UK towns, the default speed limit is:",
    "opts": [
      "15 mph",
      "30 mph",
      "50 mph",
      "70 mph"
    ],
    "answer": 1,
    "explain": "30 mph is standard in towns unless signed otherwise."
  },
  {
    "id": 454,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "The minimum age to buy a lottery ticket in the UK is:",
    "opts": [
      "16",
      "18",
      "21",
      "25"
    ],
    "answer": 1,
    "explain": "18 is the minimum age to play the lottery in UK (changed from 16 in 2021)."
  },
  {
    "id": 455,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "Minimum age to serve as juror in the UK:",
    "opts": [
      "16",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explain": "Juror must be at least 18 (and up to 75)."
  },
  {
    "id": 456,
    "chapter": 5,
    "difficulty": 1,
    "trap": null,
    "q": "The maximum age for jury service in the UK is:",
    "opts": [
      "65",
      "70",
      "75",
      "No maximum"
    ],
    "answer": 2,
    "explain": "Upper age limit = 75 (raised from 70 in 2016)."
  },
  {
    "id": 457,
    "chapter": 5,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things you can do legally at age 18 in the UK.",
    "opts": [
      "Drive a car",
      "Buy alcohol",
      "Ride a moped",
      "Serve on a jury"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "18 = alcohol and jury. Moped is 16; car is 17. 18 is actually also when you can vote."
  },
  {
    "id": 458,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A school governor is:",
    "opts": [
      "The school's head teacher",
      "A volunteer who helps run the school",
      "A government inspector",
      "A paid civil servant"
    ],
    "answer": 1,
    "explain": "School governors are community volunteers who help manage schools."
  },
  {
    "id": 459,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, you can donate:",
    "opts": [
      "Only money",
      "Blood, bone marrow, or organs",
      "Only organs after you die",
      "Nothing — donations are banned"
    ],
    "answer": 1,
    "explain": "You can donate blood, bone marrow, and organs — all encouraged."
  },
  {
    "id": 460,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In UK elections, citizens vote for:",
    "opts": [
      "The Prime Minister directly",
      "An MP in their constituency",
      "The monarch",
      "A judge"
    ],
    "answer": 1,
    "explain": "UK citizens vote for their local MP. The PM is the leader of the majority party."
  },
  {
    "id": 461,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A 'by-election' is:",
    "opts": [
      "A general election",
      "An election held for a single vacant seat in Parliament",
      "Only held in Scotland",
      "A referendum"
    ],
    "answer": 1,
    "explain": "By-elections fill single parliamentary seats that become vacant between general elections."
  },
  {
    "id": 462,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The monarchy's role in law-making is:",
    "opts": [
      "To propose all laws",
      "To give formal approval (Royal Assent) to Acts of Parliament",
      "To veto any law",
      "To write the Constitution"
    ],
    "answer": 1,
    "explain": "Royal Assent is the monarch's formal approval — always given in modern practice."
  },
  {
    "id": 463,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Referenda (referendums) in the UK are:",
    "opts": [
      "Held every year",
      "Rare, held for major constitutional questions (like Brexit)",
      "Only held locally",
      "Decided by Parliament alone"
    ],
    "answer": 1,
    "explain": "Referendums are rare — used for major questions like Scottish independence (2014), Brexit (2016)."
  },
  {
    "id": 464,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Scottish independence referendum was held in:",
    "opts": [
      "2012",
      "2014",
      "2016",
      "2020"
    ],
    "answer": 1,
    "explain": "2014 — Scotland voted NO to independence (55% to 45%)."
  },
  {
    "id": 465,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The monarch gives a speech at the State Opening of Parliament called:",
    "opts": [
      "The State of the Union",
      "The King's Speech (or Queen's Speech)",
      "The Annual Address",
      "The Royal Proclamation"
    ],
    "answer": 1,
    "explain": "King's Speech sets out the government's programme for the new session."
  },
  {
    "id": 466,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Supreme Court of the UK is the:",
    "opts": [
      "Lowest court",
      "Highest court in the UK for civil and criminal appeals",
      "Same as the Crown Court",
      "Only in Scotland"
    ],
    "answer": 1,
    "explain": "Supreme Court (est. 2009) is the highest court — replaced the House of Lords' judicial function."
  },
  {
    "id": 467,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "To register to vote in the UK, you must:",
    "opts": [
      "Be invited by the government",
      "Register yourself with your local council or online",
      "Wait until you are 30",
      "Attend a ceremony"
    ],
    "answer": 1,
    "explain": "You register at gov.uk or with your local council. Must register to be able to vote."
  },
  {
    "id": 468,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is a requirement to be an MP?",
    "opts": [
      "Must be at least 18",
      "Must be at least 21",
      "Must be 30 or older",
      "Must be 40 or older"
    ],
    "answer": 1,
    "explain": "MPs must be at least 21. Voters must be 18."
  },
  {
    "id": 469,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "UK citizens and residents can contact their MP by:",
    "opts": [
      "Visiting them at Parliament only",
      "Attending an MP's surgery, writing, emailing, or phoning",
      "Only writing letters",
      "Only during general elections"
    ],
    "answer": 1,
    "explain": "MPs hold regular 'surgeries' where constituents can meet them. Emailing and phoning also work."
  },
  {
    "id": 470,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Human Rights Act 1998:",
    "opts": [
      "Removed UK human rights",
      "Incorporated the European Convention on Human Rights into UK law",
      "Ended the monarchy",
      "Created the NHS"
    ],
    "answer": 1,
    "explain": "The 1998 Act brought the ECHR into UK law — citizens can use UK courts for rights cases."
  },
  {
    "id": 471,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Mayor of London is:",
    "opts": [
      "Appointed by the King",
      "Elected by Londoners every 4 years",
      "The PM",
      "Only ceremonial"
    ],
    "answer": 1,
    "explain": "The Mayor of London is directly elected every 4 years."
  },
  {
    "id": 472,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Local elections in England occur:",
    "opts": [
      "Every year in many areas",
      "Only every 10 years",
      "Never",
      "Only at general elections"
    ],
    "answer": 0,
    "explain": "Local elections happen annually in many areas, with rolling council seats."
  },
  {
    "id": 473,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Parish councils are the smallest unit of local government in:",
    "opts": [
      "Rural England and small towns",
      "London only",
      "Scotland only",
      "Northern Ireland only"
    ],
    "answer": 0,
    "explain": "Parish councils operate in rural/small-town England. Equivalents exist in Wales (community councils)."
  },
  {
    "id": 474,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is a UK political party associated with Welsh nationalism?",
    "opts": [
      "SNP",
      "Plaid Cymru",
      "DUP",
      "Sinn Féin"
    ],
    "answer": 1,
    "explain": "Plaid Cymru is Wales's nationalist party. SNP is Scottish."
  },
  {
    "id": 475,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The SNP stands for:",
    "opts": [
      "Scottish National Party",
      "Southern National Party",
      "Social Nationalist Party",
      "Sussex Nationalist Party"
    ],
    "answer": 0,
    "explain": "SNP = Scottish National Party, which supports Scottish independence."
  },
  {
    "id": 476,
    "chapter": 5,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which statement about UK politics is FALSE?",
    "opts": [
      "There are two houses of Parliament",
      "MPs are elected",
      "The monarch writes the laws",
      "The PM is the head of government"
    ],
    "answer": 2,
    "explain": "The monarch does NOT write laws — Parliament does."
  },
  {
    "id": 477,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is a devolved matter in Northern Ireland?",
    "opts": [
      "Defence",
      "Health and education",
      "Foreign affairs",
      "National tax"
    ],
    "answer": 1,
    "explain": "Health and education are devolved. Defence, foreign affairs, and national tax are reserved."
  },
  {
    "id": 478,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Northern Ireland Assembly was re-established by which agreement?",
    "opts": [
      "The Act of Union",
      "The Good Friday Agreement (1998)",
      "The Treaty of Rome",
      "Magna Carta"
    ],
    "answer": 1,
    "explain": "The Good Friday Agreement of 1998 established power-sharing in Northern Ireland."
  },
  {
    "id": 479,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In UK law, which court hears appeals from the High Court and Crown Court?",
    "opts": [
      "County Court",
      "Magistrates' Court",
      "Court of Appeal",
      "Small Claims Court"
    ],
    "answer": 2,
    "explain": "Court of Appeal hears appeals from higher courts."
  },
  {
    "id": 480,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "If you are charged with a crime and cannot afford a lawyer, you may be eligible for:",
    "opts": [
      "Free legal aid",
      "A free holiday",
      "Automatic release",
      "A passport"
    ],
    "answer": 0,
    "explain": "Legal aid helps those with low income pay for legal representation."
  },
  {
    "id": 481,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The independent body that investigates serious complaints against police is:",
    "opts": [
      "The NHS",
      "The Independent Office for Police Conduct (IOPC)",
      "Parliament",
      "The Royal Family"
    ],
    "answer": 1,
    "explain": "The IOPC handles serious complaints against police in England and Wales."
  },
  {
    "id": 482,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Discrimination in employment based on race, sex, religion, age, or disability is:",
    "opts": [
      "Allowed",
      "Illegal under UK law",
      "Only illegal if the person is a citizen",
      "Allowed in private companies"
    ],
    "answer": 1,
    "explain": "The Equality Act 2010 makes such discrimination illegal across the board."
  },
  {
    "id": 483,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Equality Act of 2010 covers:",
    "opts": [
      "Tax law",
      "Protected characteristics including race, sex, age, disability",
      "Only immigration",
      "Only Scotland"
    ],
    "answer": 1,
    "explain": "The Equality Act protects against discrimination based on 9 protected characteristics."
  },
  {
    "id": 484,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Domestic violence in the UK is:",
    "opts": [
      "Legal in the home",
      "A serious crime with legal protections for victims",
      "Only a civil issue",
      "Handled only by families"
    ],
    "answer": 1,
    "explain": "Domestic violence is a serious crime. Police and courts take it seriously."
  },
  {
    "id": 485,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The minimum wage in the UK is set by:",
    "opts": [
      "Each employer individually",
      "The UK government (reviewed yearly)",
      "The EU",
      "The Church"
    ],
    "answer": 1,
    "explain": "UK government sets the National Minimum Wage and National Living Wage, reviewed annually."
  },
  {
    "id": 486,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The National Living Wage applies to workers aged:",
    "opts": [
      "16 and over",
      "18 and over",
      "21 and over (current threshold)",
      "25 and over"
    ],
    "answer": 2,
    "explain": "As of 2024, National Living Wage applies to workers 21 and over (reduced from 23)."
  },
  {
    "id": 487,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The UK tax year runs from:",
    "opts": [
      "1 January to 31 December",
      "6 April to 5 April the next year",
      "1 July to 30 June",
      "Anytime you choose"
    ],
    "answer": 1,
    "explain": "UK tax year runs 6 April to 5 April — an unusual historical quirk."
  },
  {
    "id": 488,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Self-employed people in the UK must:",
    "opts": [
      "Not pay tax",
      "Register with HMRC and file a Self Assessment tax return",
      "Only pay Council Tax",
      "Get permission from the King"
    ],
    "answer": 1,
    "explain": "Self-employed must register with HMRC and file annual Self Assessment returns."
  },
  {
    "id": 489,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "HMRC stands for:",
    "opts": [
      "His Majesty's Royal Civil Service",
      "His Majesty's Revenue and Customs (the tax authority)",
      "High Military Royal Council",
      "Housing and Medical Royal Commission"
    ],
    "answer": 1,
    "explain": "HMRC = His Majesty's Revenue and Customs — the UK tax authority."
  },
  {
    "id": 490,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "If you commit a crime that is tried in the Crown Court, your guilt is decided by:",
    "opts": [
      "The judge alone",
      "A jury of 12 members of the public",
      "The police",
      "The prime minister"
    ],
    "answer": 1,
    "explain": "A jury of 12 decides guilt. The judge decides the sentence."
  },
  {
    "id": 491,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, if police stop you, you should:",
    "opts": [
      "Run away",
      "Cooperate politely, answer questions truthfully, and ask for legal advice if arrested",
      "Refuse to speak",
      "Bribe them"
    ],
    "answer": 1,
    "explain": "Cooperate politely and seek legal advice if arrested. Running or bribery is illegal."
  },
  {
    "id": 492,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "You have a right to free NHS healthcare if you are:",
    "opts": [
      "Only a UK citizen",
      "Ordinarily resident in the UK",
      "Only a pensioner",
      "Only employed"
    ],
    "answer": 1,
    "explain": "NHS is available to those 'ordinarily resident' — meaning lawfully settled, not tourists."
  },
  {
    "id": 493,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "To see a specialist on the NHS, you usually need a referral from:",
    "opts": [
      "A lawyer",
      "A GP (General Practitioner)",
      "A pharmacist",
      "A neighbour"
    ],
    "answer": 1,
    "explain": "GP referral is usually needed for NHS specialist care."
  },
  {
    "id": 494,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The UK has how many sessions of parliament per year?",
    "opts": [
      "None",
      "One (typically)",
      "Six",
      "Twelve"
    ],
    "answer": 1,
    "explain": "Usually one session per year, opened by the monarch's speech."
  },
  {
    "id": 495,
    "chapter": 5,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a role of the PM?",
    "opts": [
      "Appointing ministers to the Cabinet",
      "Representing the UK abroad",
      "Making all court decisions",
      "Leading the government"
    ],
    "answer": 2,
    "explain": "The PM does not make court decisions — judges do. Separation of powers."
  },
  {
    "id": 496,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The tradition of 'Question Time' in Parliament allows:",
    "opts": [
      "Only the Queen to ask questions",
      "MPs to question government ministers",
      "Tourists to speak",
      "Schools to attend"
    ],
    "answer": 1,
    "explain": "Question Time lets MPs scrutinise ministers — PMQs is the most famous."
  },
  {
    "id": 497,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which party has traditionally been associated with the colour blue?",
    "opts": [
      "Labour",
      "Conservative",
      "Green",
      "Liberal Democrats"
    ],
    "answer": 1,
    "explain": "Conservatives = blue. Labour = red. Lib Dems = yellow/orange. Green = green."
  },
  {
    "id": 498,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Most UK MPs belong to one of the main parties. Some MPs are:",
    "opts": [
      "Illegal",
      "Independent, not belonging to any party",
      "Automatic ministers",
      "Only Labour"
    ],
    "answer": 1,
    "explain": "Some MPs sit as Independents — not tied to any party."
  },
  {
    "id": 499,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "In a UK election, if no party has a majority of 650 seats, this is called:",
    "opts": [
      "A super-majority",
      "A hung parliament",
      "A failed election",
      "A dictatorship"
    ],
    "answer": 1,
    "explain": "Hung parliament = no single party has a majority. A coalition or minority government may form."
  },
  {
    "id": 500,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A coalition government is:",
    "opts": [
      "One party in charge alone",
      "Two or more parties joining to form a government together",
      "The opposition ruling",
      "A royal appointment"
    ],
    "answer": 1,
    "explain": "Coalition = multiple parties share power. The UK had a Conservative-Lib Dem coalition 2010–2015."
  },
  {
    "id": 501,
    "chapter": 1,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of the following is NOT protected by UK discrimination law?",
    "opts": [
      "Race",
      "Religion",
      "Political opinions",
      "Sexual orientation"
    ],
    "answer": 2,
    "explain": "Political opinions are not a protected characteristic under the Equality Act 2010. The other 3 are."
  },
  {
    "id": 502,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things you must do if you want to become a British citizen.",
    "opts": [
      "Pass the Life in the UK Test",
      "Never leave the UK",
      "Demonstrate good character",
      "Marry a UK citizen"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Must pass the test AND demonstrate good character. Leaving UK is allowed; marriage is one route but not required."
  },
  {
    "id": 503,
    "chapter": 3,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these were British Prime Ministers during WWII EXCEPT:",
    "opts": [
      "Neville Chamberlain",
      "Winston Churchill",
      "Clement Attlee",
      "Harold Wilson"
    ],
    "answer": 3,
    "explain": "Harold Wilson was PM in the 1960s-70s. Chamberlain, Churchill, and Attlee were all PM during or immediately after WWII."
  },
  {
    "id": 504,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a traditional British Christmas tradition?",
    "opts": [
      "Christmas tree",
      "Carol singing",
      "Fireworks at midnight",
      "Christmas crackers"
    ],
    "answer": 2,
    "explain": "Fireworks at midnight = New Year's Eve, not Christmas. Trees, carols, and crackers are all Christmas."
  },
  {
    "id": 505,
    "chapter": 5,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO things that happen at the State Opening of Parliament.",
    "opts": [
      "The monarch reads the King's Speech",
      "MPs vote on a new PM",
      "The government's plans are announced",
      "New MPs are sworn in"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "The monarch reads the speech setting out government plans. PMs aren't elected by MPs; swearing-in is separate."
  },
  {
    "id": 506,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "Which is the ONLY British monarch to have been officially executed?",
    "opts": [
      "Henry VIII",
      "Charles I",
      "James II",
      "Richard III"
    ],
    "answer": 1,
    "explain": "Charles I, 1649. Richard III was killed in battle; James II was deposed; Henry VIII died naturally."
  },
  {
    "id": 507,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MOST",
    "q": "Most criminal cases in England and Wales are heard in which court?",
    "opts": [
      "The Supreme Court",
      "The Crown Court",
      "The Magistrates' Court",
      "The High Court"
    ],
    "answer": 2,
    "explain": "Around 95% of criminal cases start and finish in the Magistrates' Court — the minor ones."
  },
  {
    "id": 508,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO bodies that are NOT part of the UK, but are closely linked.",
    "opts": [
      "The Isle of Man",
      "Gibraltar (Overseas Territory)",
      "Wales",
      "The Channel Islands"
    ],
    "answer": [
      0,
      3
    ],
    "explain": "Isle of Man and Channel Islands are Crown Dependencies — linked to but not part of UK. Wales IS part of UK; Gibraltar is an Overseas Territory."
  },
  {
    "id": 509,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NEVER",
    "q": "True or False? A UK citizen can NEVER hold dual nationality.",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. UK allows dual (and multiple) nationality."
  },
  {
    "id": 510,
    "chapter": 3,
    "difficulty": 3,
    "trap": "WHICH TWO",
    "q": "Which TWO of these were inventions or discoveries by British scientists?",
    "opts": [
      "The telephone (Bell, Scottish-born)",
      "Electricity (Franklin, American)",
      "Penicillin (Fleming)",
      "The light bulb (Edison, American)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Bell (Scottish-born, though work in US/Canada) and Fleming (penicillin) are British. Franklin and Edison were American."
  },
  {
    "id": 511,
    "chapter": 1,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which statement about UK voting is FALSE?",
    "opts": [
      "You must be 18 to vote",
      "You must be registered to vote",
      "Voting is compulsory",
      "Commonwealth citizens resident in UK can vote"
    ],
    "answer": 2,
    "explain": "Voting is NOT compulsory in the UK (unlike Australia). The other statements are true."
  },
  {
    "id": 512,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which British Empire territory was NOT a major source of cotton, sugar, or tea?",
    "opts": [
      "India (tea and cotton)",
      "The Caribbean (sugar)",
      "Antarctica",
      "Egypt (cotton)"
    ],
    "answer": 2,
    "explain": "Antarctica had no colonial economic production. India, Caribbean, and Egypt were key to Empire trade."
  },
  {
    "id": 513,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MAINLY",
    "q": "In the UK, the Speaker of the House of Commons is mainly responsible for:",
    "opts": [
      "Leading the government",
      "Keeping order during debates and applying the rules of Parliament",
      "Writing new laws",
      "Deciding court cases"
    ],
    "answer": 1,
    "explain": "The Speaker keeps order, calls MPs to speak, and enforces Parliament's rules. Must be politically neutral."
  },
  {
    "id": 514,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO British TV shows that have run for decades.",
    "opts": [
      "Coronation Street",
      "Friends (American)",
      "EastEnders",
      "The Simpsons (American)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Coronation Street (since 1960) and EastEnders (since 1985) are long-running British soaps. The others are American."
  },
  {
    "id": 515,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SOMETIMES",
    "q": "True or False? General elections are sometimes held before the 5-year maximum term expires.",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. Early elections can happen — e.g., 2017, 2019, 2024 all came before the 5-year maximum."
  },
  {
    "id": 516,
    "chapter": 2,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT a UK national anthem or patriotic song?",
    "opts": [
      "God Save the King",
      "Rule, Britannia!",
      "La Marseillaise",
      "Jerusalem"
    ],
    "answer": 2,
    "explain": "La Marseillaise is the French national anthem. The other 3 are British patriotic songs."
  },
  {
    "id": 517,
    "chapter": 5,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of the following are roles of MPs EXCEPT:",
    "opts": [
      "Representing their constituents",
      "Debating and voting on new laws",
      "Appointing the monarch",
      "Scrutinising the government"
    ],
    "answer": 2,
    "explain": "MPs do NOT appoint the monarch — monarchy is hereditary. The other 3 are all MP roles."
  },
  {
    "id": 518,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ALWAYS",
    "q": "True or False? The British PM is ALWAYS the leader of the largest party in the House of Commons.",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. The PM is the leader of the party (or coalition) with the most seats in the Commons."
  },
  {
    "id": 519,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NONE",
    "q": "NONE of these is a fundamental British value. Which statement is TRUE?",
    "opts": [
      "Speaking English is a value",
      "Wearing specific clothes is a value",
      "Paying more tax than others is a value",
      "All these statements are false (none of these is a value)"
    ],
    "answer": 3,
    "explain": "None of the items listed is a British value. The 5 values are: democracy, rule of law, liberty, tolerance, participation."
  },
  {
    "id": 520,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these wars did Britain NOT fight?",
    "opts": [
      "The Napoleonic Wars",
      "The Crimean War",
      "The Vietnam War",
      "The First World War"
    ],
    "answer": 2,
    "explain": "The Vietnam War (1955–1975) was American. Britain did not participate militarily."
  },
  {
    "id": 521,
    "chapter": 4,
    "difficulty": 2,
    "trap": "MOST",
    "q": "In the UK, most schools teach which first foreign language?",
    "opts": [
      "Spanish",
      "French",
      "German",
      "Mandarin"
    ],
    "answer": 1,
    "explain": "French has traditionally been the main foreign language taught in UK schools."
  },
  {
    "id": 522,
    "chapter": 5,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO ways the UK limits executive power.",
    "opts": [
      "An independent judiciary",
      "Regular free elections",
      "The monarch rules alone",
      "A one-party state"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Independent judiciary and regular elections both check executive power. The other two describe the opposite."
  },
  {
    "id": 523,
    "chapter": 2,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are British Isles landmarks EXCEPT:",
    "opts": [
      "Giant's Causeway (N.Ireland)",
      "Eiffel Tower",
      "Snowdon (Wales)",
      "Ben Nevis (Scotland)"
    ],
    "answer": 1,
    "explain": "The Eiffel Tower is in Paris, France. The others are all in the British Isles."
  },
  {
    "id": 524,
    "chapter": 3,
    "difficulty": 3,
    "trap": "USUALLY",
    "q": "True or False? New laws in the UK usually need approval from both Houses of Parliament and Royal Assent.",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. A bill passes through Commons and Lords, then receives Royal Assent to become law."
  },
  {
    "id": 525,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these CANNOT stand as an MP?",
    "opts": [
      "A person aged 25",
      "A person aged 19",
      "A serving judge",
      "A shopkeeper"
    ],
    "answer": 2,
    "explain": "Judges cannot be MPs (separation of powers). 21+ adults from most walks of life can stand."
  },
  {
    "id": 526,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO cities in England that are NOT London.",
    "opts": [
      "Manchester",
      "Edinburgh",
      "Birmingham",
      "Cardiff"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Manchester and Birmingham are English cities. Edinburgh is Scottish, Cardiff is Welsh."
  },
  {
    "id": 527,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these famous speeches was NOT delivered by Winston Churchill?",
    "opts": [
      "'We shall fight on the beaches'",
      "'Never was so much owed by so many to so few'",
      "'I have a dream'",
      "'We shall never surrender'"
    ],
    "answer": 2,
    "explain": "'I have a dream' was Martin Luther King Jr.'s 1963 speech in Washington. The others were Churchill."
  },
  {
    "id": 528,
    "chapter": 1,
    "difficulty": 3,
    "trap": "SOMETIMES",
    "q": "True or False? It is sometimes legal to discriminate against a person in UK employment.",
    "opts": [
      "TRUE — in very limited circumstances, like genuine occupational requirements",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. Very limited exceptions exist — e.g., a religious organisation requiring its ministers to share that faith."
  },
  {
    "id": 529,
    "chapter": 5,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are devolved matters EXCEPT:",
    "opts": [
      "Health services",
      "Defence",
      "Education",
      "Policing in Scotland"
    ],
    "answer": 1,
    "explain": "Defence is RESERVED to Westminster. Health, education, and policing (in Scotland) are devolved."
  },
  {
    "id": 530,
    "chapter": 2,
    "difficulty": 3,
    "trap": "FALSE",
    "q": "Which statement about the UK is FALSE?",
    "opts": [
      "The UK has a written constitution in a single document",
      "The UK is a constitutional monarchy",
      "The UK has a Prime Minister",
      "The UK currency is the pound sterling"
    ],
    "answer": 0,
    "explain": "FALSE. The UK has an UNWRITTEN (uncodified) constitution, unlike most countries."
  },
  {
    "id": 531,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Iron Age in Britain was followed by:",
    "opts": [
      "The Bronze Age",
      "The Roman invasion",
      "The Tudor era",
      "The Industrial Revolution"
    ],
    "answer": 1,
    "explain": "Iron Age → Roman invasion (AD 43) → Anglo-Saxon period."
  },
  {
    "id": 532,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO national symbols of Scotland.",
    "opts": [
      "The thistle",
      "The shamrock",
      "The saltire (St Andrew's Cross)",
      "The daffodil"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Thistle and Saltire represent Scotland. Shamrock = Ireland, daffodil = Wales."
  },
  {
    "id": 533,
    "chapter": 5,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "In the UK, only the following can serve on a Crown Court jury:",
    "opts": [
      "People aged 18–75 on the electoral register, with some restrictions",
      "Only British-born citizens",
      "Only lawyers",
      "Only over-40s"
    ],
    "answer": 0,
    "explain": "Jurors must be 18–75, registered to vote, and meet eligibility criteria. Not limited by profession or birthplace."
  },
  {
    "id": 534,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a responsibility in the UK?",
    "opts": [
      "Paying taxes on time",
      "Obeying the law",
      "Voting in every election (it's a right, not a duty)",
      "Respecting others' rights"
    ],
    "answer": 2,
    "explain": "Voting is a RIGHT, not a legal responsibility. Taxes, law-obeying, and respect are responsibilities."
  },
  {
    "id": 535,
    "chapter": 3,
    "difficulty": 3,
    "trap": "MAINLY",
    "q": "Why were the Romans mainly able to conquer and hold Britain for nearly 400 years?",
    "opts": [
      "Superior roads, organisation, and military discipline",
      "Use of gunpowder",
      "They had aeroplanes",
      "The British welcomed them"
    ],
    "answer": 0,
    "explain": "Roman engineering (roads, forts), logistics, and military discipline enabled their long occupation."
  },
  {
    "id": 536,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a famous British writer?",
    "opts": [
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
      "Charles Dickens"
    ],
    "answer": 2,
    "explain": "Mark Twain (Samuel Clemens) was American. The others were British."
  },
  {
    "id": 537,
    "chapter": 5,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO eligibility requirements to vote in a UK general election.",
    "opts": [
      "Be aged 18 or over",
      "Be a British or qualifying Commonwealth citizen",
      "Be a homeowner",
      "Have a UK passport"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Must be 18+ AND a qualifying citizen. Homeownership and passports are not required to vote."
  },
  {
    "id": 538,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which sea separates Great Britain from Ireland?",
    "opts": [
      "The Mediterranean",
      "The Irish Sea",
      "The Baltic Sea",
      "The North Sea"
    ],
    "answer": 1,
    "explain": "The Irish Sea sits between Great Britain and the island of Ireland."
  },
  {
    "id": 539,
    "chapter": 3,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these fought against Germany in WWII EXCEPT:",
    "opts": [
      "The UK",
      "The USA (from 1941)",
      "Italy (until 1943)",
      "The USSR"
    ],
    "answer": 2,
    "explain": "Italy was Germany's ally until 1943. UK, USA, and USSR were all against Germany."
  },
  {
    "id": 540,
    "chapter": 1,
    "difficulty": 3,
    "trap": "NOT",
    "q": "In the UK, which of these is NOT a legal right?",
    "opts": [
      "Freedom of speech (with limits)",
      "Freedom of religion",
      "The right to carry weapons",
      "The right to a fair trial"
    ],
    "answer": 2,
    "explain": "No general right to carry weapons in UK. The others are rights (with legal limits)."
  },
  {
    "id": 541,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO British national sports that had codified modern rules written here.",
    "opts": [
      "Football",
      "Baseball",
      "Cricket",
      "American football"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Football (1863) and cricket rules were codified in England. Baseball/American football are US sports."
  },
  {
    "id": 542,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NEVER",
    "q": "True or False? The monarch NEVER refuses to give Royal Assent to laws passed by Parliament.",
    "opts": [
      "TRUE (in modern times, no monarch has refused assent since 1708)",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE in modern practice. The last refusal was in 1708. Royal Assent is a formality today."
  },
  {
    "id": 543,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Tudor period ended with the death of which monarch?",
    "opts": [
      "Henry VIII",
      "Elizabeth I (1603)",
      "Mary I",
      "James I"
    ],
    "answer": 1,
    "explain": "Elizabeth I died 1603 without children. Her cousin James VI of Scotland (James I of England) began the Stuart dynasty."
  },
  {
    "id": 544,
    "chapter": 5,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "In the UK, members of the House of Lords are appointed ONLY:",
    "opts": [
      "By the Prime Minister with monarch's approval",
      "By the monarch alone",
      "By voters in general elections",
      "By the PM alone, without consultation"
    ],
    "answer": 0,
    "explain": "Life peers are appointed by the monarch on PM's recommendation. Lords are not directly elected."
  },
  {
    "id": 545,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT an NHS service?",
    "opts": [
      "GP consultations",
      "Hospital care",
      "Private dentistry",
      "Emergency A&E care"
    ],
    "answer": 2,
    "explain": "NHS dentistry exists but private dentistry is separate and fee-paying. The other 3 are NHS."
  },
  {
    "id": 546,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO reasons people came to Britain in the 1948 Windrush period.",
    "opts": [
      "To help rebuild Britain after WWII",
      "To escape war",
      "To fill labour shortages",
      "To establish new colonies"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Windrush arrivals came to help rebuild Britain and fill labour shortages. Not refugees; not colonising."
  },
  {
    "id": 547,
    "chapter": 1,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of these are British values EXCEPT:",
    "opts": [
      "Democracy",
      "Rule of law",
      "Rejection of different faiths",
      "Individual liberty"
    ],
    "answer": 2,
    "explain": "Britain values TOLERANCE of different faiths — the opposite of rejection."
  },
  {
    "id": 548,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT a way to participate in democracy?",
    "opts": [
      "Voting in elections",
      "Joining a political party",
      "Ignoring political issues entirely",
      "Writing to your MP"
    ],
    "answer": 2,
    "explain": "Ignoring issues is the opposite of participation."
  },
  {
    "id": 549,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO countries that share a land border with the UK.",
    "opts": [
      "France (via Channel Tunnel, not land)",
      "Republic of Ireland (shares land border with Northern Ireland)",
      "None — UK is an island, has only one land border",
      "Both B and C"
    ],
    "answer": [
      1,
      2
    ],
    "explain": "UK's ONLY land border is with Republic of Ireland (via Northern Ireland). Great Britain itself has no land borders."
  },
  {
    "id": 550,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these Queens was NOT a monarch of England?",
    "opts": [
      "Elizabeth I",
      "Victoria",
      "Elizabeth II",
      "Queen Isabella of Spain"
    ],
    "answer": 3,
    "explain": "Queen Isabella was Spanish (1451–1504, sponsored Columbus). The other 3 were English/British monarchs."
  },
  {
    "id": 551,
    "chapter": 1,
    "difficulty": 3,
    "trap": "WHICH TWO",
    "q": "Which TWO of these can result in you being disqualified from jury service?",
    "opts": [
      "Being under 18",
      "Being blind or deaf (depends on case)",
      "Being over 30",
      "Having certain criminal convictions"
    ],
    "answer": [
      0,
      3
    ],
    "explain": "Under 18 and serious criminal convictions disqualify. Age 30 doesn't; disability doesn't automatically."
  },
  {
    "id": 552,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ALWAYS",
    "q": "True or False? The monarch's oldest child has ALWAYS automatically become the next monarch.",
    "opts": [
      "TRUE (under current law, regardless of gender, since 2013)",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE since 2013 when the law was changed to remove male preference."
  },
  {
    "id": 553,
    "chapter": 4,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a British rock band?",
    "opts": [
      "The Beatles",
      "The Rolling Stones",
      "Nirvana",
      "Led Zeppelin"
    ],
    "answer": 2,
    "explain": "Nirvana was American. The other three are British."
  },
  {
    "id": 554,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MOST",
    "q": "Most UK laws are debated and passed in which body?",
    "opts": [
      "The Supreme Court",
      "The Cabinet",
      "The UK Parliament at Westminster",
      "The EU"
    ],
    "answer": 2,
    "explain": "Westminster passes UK laws. The Supreme Court interprets them; Cabinet proposes; UK left EU in 2020."
  },
  {
    "id": 555,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT in Scotland?",
    "opts": [
      "Edinburgh",
      "Glasgow",
      "Manchester",
      "Aberdeen"
    ],
    "answer": 2,
    "explain": "Manchester is in England. The others are Scottish cities."
  },
  {
    "id": 556,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO famous battles in British history that involved the British Navy.",
    "opts": [
      "Battle of Trafalgar (1805)",
      "Battle of Hastings (1066)",
      "Battle of the Atlantic (WWII)",
      "Battle of Waterloo (1815)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Trafalgar and Battle of the Atlantic were naval. Hastings was land (1066); Waterloo was land (1815)."
  },
  {
    "id": 557,
    "chapter": 1,
    "difficulty": 2,
    "trap": "ONLY",
    "q": "In the UK, you can ONLY vote in a general election if you are:",
    "opts": [
      "Registered on the electoral register and meet eligibility criteria",
      "A property owner",
      "Over 21",
      "Born in the UK"
    ],
    "answer": 0,
    "explain": "Voting requires registration and eligibility (18+, UK/qualifying Commonwealth citizen). No need to own property."
  },
  {
    "id": 558,
    "chapter": 4,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of these are traditional UK Christmas foods EXCEPT:",
    "opts": [
      "Roast turkey",
      "Christmas pudding",
      "Pumpkin pie",
      "Mince pies"
    ],
    "answer": 2,
    "explain": "Pumpkin pie is American (Thanksgiving). The others are British Christmas traditions."
  },
  {
    "id": 559,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which is NOT a requirement to stand as an MP in the UK?",
    "opts": [
      "Be at least 21",
      "Be a British, Irish, or qualifying Commonwealth citizen",
      "Have a university degree",
      "Not hold certain banned positions (e.g. judge)"
    ],
    "answer": 2,
    "explain": "No degree required. Age, citizenship, and position requirements apply."
  },
  {
    "id": 560,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SOMETIMES",
    "q": "True or False? The UK monarch sometimes gives political opinions in public.",
    "opts": [
      "TRUE",
      "FALSE (monarchs traditionally remain politically neutral)",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. By convention, the monarch stays politically neutral."
  },
  {
    "id": 561,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things Scotland is particularly associated with.",
    "opts": [
      "Bagpipes",
      "Welsh language",
      "Tartan kilts",
      "The daffodil"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Bagpipes and tartan kilts are Scottish. Welsh language and daffodil are Welsh symbols."
  },
  {
    "id": 562,
    "chapter": 1,
    "difficulty": 2,
    "trap": "FALSE",
    "q": "Which of these statements about British citizenship is FALSE?",
    "opts": [
      "You must pass the Life in the UK Test",
      "You must meet residency requirements",
      "You must be Christian",
      "You must show good character"
    ],
    "answer": 2,
    "explain": "Religion is not a requirement. You can be of any religion or none."
  },
  {
    "id": 563,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these invasions did NOT happen in Britain's history?",
    "opts": [
      "Roman invasion (AD 43)",
      "Viking invasion (AD 789)",
      "Norman invasion (1066)",
      "Russian invasion (1800)"
    ],
    "answer": 3,
    "explain": "Russia never invaded Britain. The other three all happened."
  },
  {
    "id": 564,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MAINLY",
    "q": "UK general elections are mainly held:",
    "opts": [
      "On Thursdays",
      "On Sundays",
      "Every Christmas",
      "On the monarch's birthday"
    ],
    "answer": 0,
    "explain": "UK general elections are traditionally held on Thursdays."
  },
  {
    "id": 565,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO countries that are part of the United Kingdom.",
    "opts": [
      "England",
      "Republic of Ireland (independent)",
      "Scotland",
      "France"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "England and Scotland are part of UK. Republic of Ireland is independent; France is a separate country."
  },
  {
    "id": 566,
    "chapter": 4,
    "difficulty": 2,
    "trap": "USUALLY",
    "q": "In the UK, pubs are usually:",
    "opts": [
      "Only for drinking",
      "Social gathering places that often serve food too",
      "Strictly for members only",
      "Open only at weekends"
    ],
    "answer": 1,
    "explain": "UK pubs are social spaces that typically serve food (pub lunches, Sunday roasts) as well as drinks."
  },
  {
    "id": 567,
    "chapter": 3,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are royal residences or official buildings EXCEPT:",
    "opts": [
      "Buckingham Palace",
      "Windsor Castle",
      "Balmoral Castle",
      "The Eiffel Tower"
    ],
    "answer": 3,
    "explain": "Eiffel Tower is in Paris. The others are royal residences."
  },
  {
    "id": 568,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these would NOT usually be dealt with by a local council?",
    "opts": [
      "Rubbish collection",
      "Local planning applications",
      "UK foreign policy",
      "Maintaining local parks"
    ],
    "answer": 2,
    "explain": "Foreign policy is reserved to Westminster. Councils handle local matters."
  },
  {
    "id": 569,
    "chapter": 1,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO important documents in the development of British rights and freedoms.",
    "opts": [
      "Magna Carta (1215)",
      "The US Constitution (1787)",
      "The Bill of Rights (1689)",
      "The Treaty of Rome (1957)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Magna Carta and the English Bill of Rights are key UK rights documents. US Constitution is American; Treaty of Rome founded the EEC."
  },
  {
    "id": 570,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "Which British monarch ONLY reigned for a short time before abdicating in 1936?",
    "opts": [
      "George V",
      "Edward VIII",
      "George VI",
      "Elizabeth II"
    ],
    "answer": 1,
    "explain": "Edward VIII abdicated in December 1936 to marry Wallis Simpson. His brother George VI became king."
  },
  {
    "id": 571,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SOMETIMES",
    "q": "In UK schools, religious education is:",
    "opts": [
      "Always compulsory for all pupils",
      "Sometimes available, with parents able to opt their children out",
      "Never taught",
      "Only taught in Catholic schools"
    ],
    "answer": 1,
    "explain": "RE is part of the national curriculum but parents can withdraw their children."
  },
  {
    "id": 572,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT one of the main jobs of a local council?",
    "opts": [
      "Maintaining roads",
      "Collecting bins",
      "Running the NHS",
      "Managing local libraries"
    ],
    "answer": 2,
    "explain": "NHS is national, not local council. Councils handle roads, bins, libraries, local schools."
  },
  {
    "id": 573,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT a UK country?",
    "opts": [
      "England",
      "Wales",
      "Ireland (the Republic)",
      "Northern Ireland"
    ],
    "answer": 2,
    "explain": "The Republic of Ireland is independent. Northern Ireland is part of the UK."
  },
  {
    "id": 574,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO inventions associated with the Industrial Revolution in Britain.",
    "opts": [
      "The steam engine improvements",
      "The computer",
      "The power loom",
      "The internet"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Steam engine (James Watt) and power loom (18th century) were Industrial Revolution. Computer and internet are 20th century."
  },
  {
    "id": 575,
    "chapter": 1,
    "difficulty": 2,
    "trap": "NEVER",
    "q": "True or False? A UK citizen NEVER has a right to challenge a government decision in court.",
    "opts": [
      "TRUE",
      "FALSE (judicial review allows this)",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. Judicial review lets citizens challenge government decisions in court."
  },
  {
    "id": 576,
    "chapter": 4,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT a symbol of Wales?",
    "opts": [
      "The red dragon",
      "The daffodil",
      "The leek",
      "The thistle"
    ],
    "answer": 3,
    "explain": "The thistle is Scotland's symbol. Red dragon, daffodil, and leek are Welsh."
  },
  {
    "id": 577,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MOST",
    "q": "Most UK residents pay which of these taxes?",
    "opts": [
      "Only Income Tax",
      "Income Tax and National Insurance (if working), plus VAT on purchases",
      "Only Council Tax",
      "No taxes at all"
    ],
    "answer": 1,
    "explain": "Workers pay Income Tax + NI. Everyone pays VAT on most purchases. Council Tax is also usually paid."
  },
  {
    "id": 578,
    "chapter": 3,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "Britain has fought all these countries in major wars EXCEPT:",
    "opts": [
      "France (multiple times)",
      "Spain (Armada, Peninsula)",
      "Germany (two World Wars)",
      "Canada"
    ],
    "answer": 3,
    "explain": "Canada was a British colony/dominion. Britain fought France, Spain, and Germany in major wars."
  },
  {
    "id": 579,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO cities famously associated with steel or ship-building in British history.",
    "opts": [
      "Sheffield (steel)",
      "Brighton (seaside)",
      "Glasgow (shipbuilding)",
      "Bath (spa)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Sheffield was the 'Steel City'. Glasgow was a major shipbuilding centre. Brighton and Bath are known for other things."
  },
  {
    "id": 580,
    "chapter": 1,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT usually considered a mark of good citizenship?",
    "opts": [
      "Paying taxes",
      "Obeying the law",
      "Helping your neighbours",
      "Avoiding your community"
    ],
    "answer": 3,
    "explain": "Good citizenship involves engaging with your community, not avoiding it."
  },
  {
    "id": 581,
    "chapter": 4,
    "difficulty": 2,
    "trap": "SELECT TWO",
    "q": "Select TWO things Scotland is famous for producing.",
    "opts": [
      "Whisky",
      "Olive oil",
      "Salmon",
      "Rice"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Scotch whisky and Scottish salmon are famous. Olive oil (Mediterranean) and rice (Asia) are not."
  },
  {
    "id": 582,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of the following is NOT a UK tax?",
    "opts": [
      "Income Tax",
      "Capital Gains Tax",
      "Weather Tax",
      "Inheritance Tax"
    ],
    "answer": 2,
    "explain": "There's no Weather Tax. The other three are real UK taxes."
  },
  {
    "id": 583,
    "chapter": 3,
    "difficulty": 3,
    "trap": "MAINLY",
    "q": "The Empire Windrush mainly brought workers from:",
    "opts": [
      "Africa",
      "The Caribbean",
      "India",
      "Eastern Europe"
    ],
    "answer": 1,
    "explain": "The 1948 Windrush brought mainly Caribbean workers (Jamaica, Trinidad, etc.) to post-war Britain."
  },
  {
    "id": 584,
    "chapter": 2,
    "difficulty": 2,
    "trap": "NOT",
    "q": "Which of these is NOT correct about the UK?",
    "opts": [
      "Its capital is London",
      "It has 4 countries",
      "Its currency is the euro",
      "It is an island nation"
    ],
    "answer": 2,
    "explain": "UK currency is the pound sterling, NOT the euro. The UK never joined the euro."
  },
  {
    "id": 585,
    "chapter": 5,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO features of the UK legal system.",
    "opts": [
      "Judges are independent of government",
      "Juries decide guilt in serious criminal cases",
      "The monarch is the chief judge",
      "Laws are made by judges alone"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Independent judiciary and juries in serious cases are key features. The monarch is not chief judge; judges interpret (not make) laws."
  },
  {
    "id": 586,
    "chapter": 4,
    "difficulty": 3,
    "trap": "FALSE",
    "q": "Which statement about UK sport is FALSE?",
    "opts": [
      "Football is the most popular",
      "Cricket originated in England",
      "Golf was invented in Scotland",
      "Tennis was invented in America"
    ],
    "answer": 3,
    "explain": "Tennis was invented in England (modern lawn tennis in 1870s). Wimbledon is the oldest tournament."
  },
  {
    "id": 587,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "The ONLY monarch to have been officially executed by Parliament was:",
    "opts": [
      "Richard III",
      "Charles I",
      "James II",
      "Henry VIII"
    ],
    "answer": 1,
    "explain": "Charles I, 1649. Richard III died in battle. James II was deposed but not executed. Henry VIII died naturally."
  },
  {
    "id": 588,
    "chapter": 1,
    "difficulty": 2,
    "trap": "EXCEPT",
    "q": "All of these are ways to get involved in your community EXCEPT:",
    "opts": [
      "Volunteering",
      "School governing",
      "Avoiding public meetings",
      "Donating to charity"
    ],
    "answer": 2,
    "explain": "Avoiding public meetings is the opposite of community involvement."
  },
  {
    "id": 589,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT a criminal offence in the UK?",
    "opts": [
      "Driving under the influence of alcohol",
      "Speaking a minority language",
      "Possessing illegal drugs",
      "Shoplifting"
    ],
    "answer": 1,
    "explain": "Speaking a minority language is legal and often celebrated. The other three are criminal offences."
  },
  {
    "id": 590,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO results of the 1688 Glorious Revolution.",
    "opts": [
      "James II was replaced by William and Mary",
      "The king's power was limited by Parliament",
      "The monarchy was abolished",
      "Catholicism became the state religion"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "James II replaced, king's power limited (Bill of Rights). Monarchy wasn't abolished; Protestantism was reinforced."
  },
  {
    "id": 591,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SOMETIMES",
    "q": "True or False? Sometimes Welsh is used alongside English in official signs and documents in Wales.",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. Wales is officially bilingual in many contexts — Welsh and English appear together on signs."
  },
  {
    "id": 592,
    "chapter": 4,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are famous UK museums EXCEPT:",
    "opts": [
      "The British Museum",
      "The Louvre",
      "The Tate Modern",
      "The Natural History Museum"
    ],
    "answer": 1,
    "explain": "The Louvre is in Paris, France. The others are all in London."
  },
  {
    "id": 593,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which is NOT a role of the civil service?",
    "opts": [
      "Delivering government services",
      "Advising ministers",
      "Winning elections for the ruling party",
      "Remaining politically neutral"
    ],
    "answer": 2,
    "explain": "Civil servants are politically neutral — they don't campaign for any party. They serve whichever government is in power."
  },
  {
    "id": 594,
    "chapter": 3,
    "difficulty": 3,
    "trap": "USUALLY",
    "q": "A UK general election is usually held:",
    "opts": [
      "Every Saturday",
      "Every 5 years (at maximum), on a Thursday",
      "Once every 50 years",
      "Only during wars"
    ],
    "answer": 1,
    "explain": "UK general elections are held at least every 5 years, traditionally on a Thursday."
  },
  {
    "id": 595,
    "chapter": 1,
    "difficulty": 3,
    "trap": "NEVER",
    "q": "True or False? You can NEVER be removed from the electoral register once you are on it.",
    "opts": [
      "TRUE",
      "FALSE (moving, dying, loss of eligibility can remove you)",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. You can be removed if you move, die, or lose eligibility."
  },
  {
    "id": 596,
    "chapter": 4,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO British music events held annually.",
    "opts": [
      "The BBC Proms",
      "The Super Bowl",
      "Glastonbury Festival",
      "Eurovision Song Contest (not UK-specific)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "BBC Proms and Glastonbury are annual UK events. Super Bowl is American; Eurovision is Europe-wide."
  },
  {
    "id": 597,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which is NOT usually handled by local councils?",
    "opts": [
      "Libraries",
      "Council housing",
      "UK immigration policy",
      "Rubbish collection"
    ],
    "answer": 2,
    "explain": "Immigration is reserved to UK central government. The other three are local council matters."
  },
  {
    "id": 598,
    "chapter": 3,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these happened during Queen Elizabeth II's reign (1952–2022) EXCEPT:",
    "opts": [
      "Decimal currency introduced (1971)",
      "Falklands War (1982)",
      "WWII ended (1945)",
      "UK joined the EEC (1973)"
    ],
    "answer": 2,
    "explain": "WWII ended in 1945 — BEFORE Elizabeth II's reign began in 1952."
  },
  {
    "id": 599,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO things that are true about the UK's population.",
    "opts": [
      "Most people live in England",
      "The total population is around 67 million",
      "Most people live in Scotland",
      "The population is falling rapidly"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Most (about 84%) live in England; UK population is around 67 million. Scotland has about 5.5 million; population is stable/slightly growing."
  },
  {
    "id": 600,
    "chapter": 5,
    "difficulty": 3,
    "trap": "ALWAYS",
    "q": "True or False? The UK government ALWAYS has a majority in the House of Commons.",
    "opts": [
      "TRUE",
      "FALSE (hung parliaments and coalitions happen)",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. Sometimes no party has a majority (hung parliament) — e.g., 2010, 2017. Coalitions or minority governments form."
  },
  {
    "id": 601,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The BBC was founded in:",
    "opts": [
      "1910",
      "1922",
      "1945",
      "1960"
    ],
    "answer": 1,
    "explain": "The BBC started as a radio broadcaster in 1922."
  },
  {
    "id": 602,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British writer created the detective Sherlock Holmes?",
    "opts": [
      "Charles Dickens",
      "Arthur Conan Doyle",
      "Agatha Christie",
      "Jane Austen"
    ],
    "answer": 1,
    "explain": "Sir Arthur Conan Doyle created Sherlock Holmes."
  },
  {
    "id": 603,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Cabinet is chaired by:",
    "opts": [
      "The Speaker",
      "The Prime Minister",
      "The monarch",
      "The Leader of the Opposition"
    ],
    "answer": 1,
    "explain": "The PM chairs Cabinet meetings."
  },
  {
    "id": 604,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In what year did Britain officially leave the EU?",
    "opts": [
      "2016",
      "2018",
      "2020",
      "2022"
    ],
    "answer": 2,
    "explain": "31 January 2020 — UK officially left the EU after the transition period ended."
  },
  {
    "id": 605,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The Channel Islands are located:",
    "opts": [
      "In the Atlantic Ocean",
      "In the English Channel, near France",
      "Off the coast of Scotland",
      "In the North Sea"
    ],
    "answer": 1,
    "explain": "The Channel Islands (Jersey, Guernsey) are in the English Channel, closer to France than to Britain."
  },
  {
    "id": 606,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "The minimum age to be a magistrate in England and Wales is:",
    "opts": [
      "18",
      "21",
      "30",
      "40"
    ],
    "answer": 0,
    "explain": "Minimum age is 18, though most magistrates are older (mature volunteers)."
  },
  {
    "id": 607,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which festival on 26 December is a UK public holiday?",
    "opts": [
      "Boxing Day",
      "Christmas Eve",
      "St Stephen's Day only",
      "Hogmanay"
    ],
    "answer": 0,
    "explain": "Boxing Day (26 December) is a UK bank holiday. Also called St Stephen's Day in some traditions."
  },
  {
    "id": 608,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who wrote the novel 'Oliver Twist'?",
    "opts": [
      "Jane Austen",
      "Charles Dickens",
      "William Shakespeare",
      "Thomas Hardy"
    ],
    "answer": 1,
    "explain": "Charles Dickens wrote Oliver Twist (1838)."
  },
  {
    "id": 609,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A coalition government is formed when:",
    "opts": [
      "One party wins a majority",
      "Two or more parties agree to govern together",
      "The monarch chooses ministers",
      "There is a national emergency"
    ],
    "answer": 1,
    "explain": "Coalitions form when no single party has a majority and two or more agree to share power."
  },
  {
    "id": 610,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The main ingredient in a traditional Scottish haggis is:",
    "opts": [
      "Beef",
      "Sheep offal (heart, liver, lungs) with oatmeal",
      "Chicken",
      "Fish"
    ],
    "answer": 1,
    "explain": "Haggis contains sheep offal mixed with oatmeal, onion, and spices, traditionally cooked in a sheep's stomach."
  },
  {
    "id": 611,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "When did Britain adopt decimal currency?",
    "opts": [
      "1964",
      "1971",
      "1981",
      "1995"
    ],
    "answer": 1,
    "explain": "Decimal Day was 15 February 1971. Before: £1 = 20 shillings = 240 pence."
  },
  {
    "id": 612,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which is the second-largest country in the UK by area?",
    "opts": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland"
    ],
    "answer": 1,
    "explain": "Scotland is second-largest by area after England."
  },
  {
    "id": 613,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The role of the Lord Chancellor includes:",
    "opts": [
      "Running the armed forces",
      "Oversight of the justice system",
      "Taxation",
      "Foreign affairs"
    ],
    "answer": 1,
    "explain": "The Lord Chancellor (also Justice Secretary) oversees the UK's courts and justice system."
  },
  {
    "id": 614,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the British PM at the end of WWI in 1918?",
    "opts": [
      "David Lloyd George",
      "Winston Churchill",
      "Neville Chamberlain",
      "Herbert Asquith"
    ],
    "answer": 0,
    "explain": "David Lloyd George (Liberal) was PM from 1916, leading Britain through the latter half of WWI."
  },
  {
    "id": 615,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Scotland's oldest university (and one of the oldest in the English-speaking world) is:",
    "opts": [
      "University of Edinburgh",
      "University of Glasgow",
      "University of St Andrews",
      "University of Aberdeen"
    ],
    "answer": 2,
    "explain": "St Andrews University, founded 1413, is Scotland's oldest."
  },
  {
    "id": 616,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "If you want to vote in a UK election, you must:",
    "opts": [
      "Be invited by the government",
      "Register yourself with your local council or online at gov.uk",
      "Pay a registration fee",
      "Wait to be approached"
    ],
    "answer": 1,
    "explain": "You register yourself — there's no automatic enrolment."
  },
  {
    "id": 617,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The person who presides over Prime Minister's Questions is:",
    "opts": [
      "The PM",
      "The Speaker of the House of Commons",
      "The monarch",
      "The Leader of the Opposition"
    ],
    "answer": 1,
    "explain": "The Speaker manages PMQs, calling MPs to speak and keeping order."
  },
  {
    "id": 618,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the Prime Minister during the Falklands War in 1982?",
    "opts": [
      "Harold Wilson",
      "Margaret Thatcher",
      "John Major",
      "Edward Heath"
    ],
    "answer": 1,
    "explain": "Margaret Thatcher (Conservative) was PM during the Falklands War."
  },
  {
    "id": 619,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "In British schools, which of these is studied as a core subject?",
    "opts": [
      "English, Maths, and Science (core subjects)",
      "Only religious education",
      "Only art",
      "Only foreign languages"
    ],
    "answer": 0,
    "explain": "English, maths, and science are the core subjects in the UK national curriculum."
  },
  {
    "id": 620,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "How many millions of people roughly live in Scotland?",
    "opts": [
      "1 million",
      "5.5 million",
      "15 million",
      "25 million"
    ],
    "answer": 1,
    "explain": "Scotland's population is about 5.5 million."
  },
  {
    "id": 621,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these was NOT a reason for the Industrial Revolution starting in Britain?",
    "opts": [
      "Availability of coal",
      "Access to markets through the Empire",
      "Tropical climate",
      "Scientific advances"
    ],
    "answer": 2,
    "explain": "Britain's climate is temperate, not tropical — this wasn't a factor. Coal, Empire markets, and science were."
  },
  {
    "id": 622,
    "chapter": 5,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO things that are exceptions to normal UK tax rules (zero or reduced VAT).",
    "opts": [
      "Children's clothing (zero VAT)",
      "Most alcohol (normal VAT)",
      "Most food (zero VAT)",
      "Tobacco (normal VAT)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Children's clothes and most food have zero VAT. Alcohol and tobacco are taxed at normal rates plus excise duty."
  },
  {
    "id": 623,
    "chapter": 4,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are traditional British puddings EXCEPT:",
    "opts": [
      "Spotted dick",
      "Treacle tart",
      "Tiramisu",
      "Bread and butter pudding"
    ],
    "answer": 2,
    "explain": "Tiramisu is Italian. The others are traditional British desserts."
  },
  {
    "id": 624,
    "chapter": 1,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT a guarantee under UK law?",
    "opts": [
      "Freedom of peaceful assembly",
      "The right to join a trade union",
      "The right to a government job",
      "Freedom from torture"
    ],
    "answer": 2,
    "explain": "No right to a government job. The other 3 are protected rights."
  },
  {
    "id": 625,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "ONLY one of these Prime Ministers served during BOTH World Wars. Which?",
    "opts": [
      "Winston Churchill",
      "Lloyd George",
      "Neville Chamberlain",
      "Ramsay MacDonald"
    ],
    "answer": 0,
    "explain": "Churchill held government roles in WWI (First Lord of the Admiralty) and was PM in WWII."
  },
  {
    "id": 626,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is NOT a Welsh political party?",
    "opts": [
      "Plaid Cymru",
      "Labour Party (active in Wales too)",
      "Sinn Féin (Irish/NI party)",
      "Welsh Conservatives"
    ],
    "answer": 2,
    "explain": "Sinn Féin operates in Northern Ireland and the Republic. The other three are active in Wales."
  },
  {
    "id": 627,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which famous British physicist worked on the theory of relativity?",
    "opts": [
      "Isaac Newton",
      "Stephen Hawking",
      "Albert Einstein (German-born)",
      "Michael Faraday"
    ],
    "answer": 1,
    "explain": "Stephen Hawking (1942–2018) was British and worked on cosmology and black holes. Einstein was German."
  },
  {
    "id": 628,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The Isle of Wight is:",
    "opts": [
      "A Scottish island",
      "An English island off the south coast",
      "A Welsh island",
      "An Irish island"
    ],
    "answer": 1,
    "explain": "Isle of Wight is off England's south coast, in the English Channel."
  },
  {
    "id": 629,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SOMETIMES",
    "q": "True or False? The UK government sometimes uses emergency laws in crises (e.g., during Covid-19).",
    "opts": [
      "TRUE",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. Emergency legislation passed by Parliament can be used in crises."
  },
  {
    "id": 630,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MOST",
    "q": "In the UK, most members of the House of Lords are:",
    "opts": [
      "Hereditary (inherited titles)",
      "Life peers appointed for their lifetime",
      "Elected MPs",
      "Bishops only"
    ],
    "answer": 1,
    "explain": "Most are life peers (over 600). Hereditaries are 92. Bishops are 26."
  },
  {
    "id": 631,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "The minimum age to donate blood in the UK is:",
    "opts": [
      "15",
      "17",
      "21",
      "25"
    ],
    "answer": 1,
    "explain": "17 — you can donate blood from age 17."
  },
  {
    "id": 632,
    "chapter": 4,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT usually associated with the UK?",
    "opts": [
      "Afternoon tea",
      "Football",
      "Maple syrup (Canadian)",
      "Fish and chips"
    ],
    "answer": 2,
    "explain": "Maple syrup is Canadian. The others are British."
  },
  {
    "id": 633,
    "chapter": 3,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO major achievements of the Labour government 1945–1951 under Attlee.",
    "opts": [
      "Creating the NHS",
      "Winning WWII",
      "Nationalising major industries",
      "Introducing decimal currency"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "1945–51 Labour: created NHS (1948), nationalised industries. WWII won under Churchill's coalition. Decimal currency was 1971."
  },
  {
    "id": 634,
    "chapter": 5,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are devolved to Scotland EXCEPT:",
    "opts": [
      "Education",
      "Health",
      "Immigration",
      "Policing"
    ],
    "answer": 2,
    "explain": "Immigration is RESERVED to Westminster. The other three are devolved to Scotland."
  },
  {
    "id": 635,
    "chapter": 2,
    "difficulty": 3,
    "trap": "FALSE",
    "q": "Which statement about the UK's geography is FALSE?",
    "opts": [
      "The UK is an island nation",
      "Ben Nevis is the highest mountain",
      "London is on the Thames",
      "The Severn is shorter than the Thames"
    ],
    "answer": 3,
    "explain": "FALSE. The Severn (220 miles) is LONGER than the Thames (215 miles)."
  },
  {
    "id": 636,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these Elizabethan-era events did NOT happen?",
    "opts": [
      "Shakespeare wrote plays",
      "Defeat of the Spanish Armada (1588)",
      "First successful English Channel flight",
      "Exploration voyages by Francis Drake"
    ],
    "answer": 2,
    "explain": "Channel flight was 1909 (Blériot). Elizabethan was late 1500s to 1603."
  },
  {
    "id": 637,
    "chapter": 4,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO places that have hosted the modern Summer Olympic Games in the UK.",
    "opts": [
      "London (multiple times)",
      "Edinburgh",
      "Manchester",
      "Birmingham"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "London 1908, 1948, 2012. Edinburgh hosted Commonwealth Games (not Olympics) in 1970 and 1986 — so this is a trick: only London has hosted modern SUMMER Olympics."
  },
  {
    "id": 638,
    "chapter": 1,
    "difficulty": 3,
    "trap": "ONLY",
    "q": "In the UK, only certain people CAN stand for election as an MP. Which description fits?",
    "opts": [
      "Anyone who wants to",
      "UK, Irish, or qualifying Commonwealth citizens aged 21+, meeting eligibility criteria",
      "Only men",
      "Only lawyers"
    ],
    "answer": 1,
    "explain": "MPs must be 21+, be a qualifying citizen, and meet eligibility criteria (not be a judge, civil servant in certain grades, etc.)."
  },
  {
    "id": 639,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MAINLY",
    "q": "Income Tax in the UK is mainly used to fund:",
    "opts": [
      "The monarchy alone",
      "Public services including health, education, welfare, defence",
      "Private investments",
      "Foreign aid only"
    ],
    "answer": 1,
    "explain": "Income Tax funds public services broadly — NHS, schools, welfare, police, defence, etc."
  },
  {
    "id": 640,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NEVER",
    "q": "True or False? Britain has NEVER hosted the Olympic Games.",
    "opts": [
      "TRUE",
      "FALSE (London has hosted three times)",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 1,
    "explain": "FALSE. London hosted the Olympics in 1908, 1948, and 2012."
  },
  {
    "id": 641,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO English counties with famous coastlines.",
    "opts": [
      "Cornwall",
      "Yorkshire (includes coastline)",
      "Midlands (landlocked)",
      "West Midlands (landlocked)"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Cornwall and Yorkshire have famous coastlines. The Midlands/West Midlands are landlocked."
  },
  {
    "id": 642,
    "chapter": 4,
    "difficulty": 3,
    "trap": "EXCEPT",
    "q": "All of these are British children's classics EXCEPT:",
    "opts": [
      "Winnie-the-Pooh (A.A. Milne)",
      "Peter Pan (J.M. Barrie)",
      "The Wizard of Oz (L. Frank Baum, American)",
      "Alice in Wonderland (Lewis Carroll)"
    ],
    "answer": 2,
    "explain": "The Wizard of Oz is American. The others are British classics."
  },
  {
    "id": 643,
    "chapter": 3,
    "difficulty": 3,
    "trap": "ALWAYS",
    "q": "True or False? Parliament has ALWAYS had the final say over the monarch since 1689.",
    "opts": [
      "TRUE (since the Bill of Rights 1689)",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. Since 1689, parliamentary sovereignty means Parliament has final say over law-making."
  },
  {
    "id": 644,
    "chapter": 5,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT something a UK citizen must do?",
    "opts": [
      "Obey the law",
      "Pay taxes",
      "Support the current government",
      "Respect others' rights"
    ],
    "answer": 2,
    "explain": "You are NOT required to support the current government — you can oppose it freely."
  },
  {
    "id": 645,
    "chapter": 1,
    "difficulty": 3,
    "trap": "SOMETIMES",
    "q": "True or False? Juries sometimes consist of members of the public who are not experts in law.",
    "opts": [
      "TRUE (they always are members of the public)",
      "FALSE",
      "Only for UK citizens",
      "Only for people over 30"
    ],
    "answer": 0,
    "explain": "TRUE. Juries are ordinary members of the public, not legal experts — that's the point."
  },
  {
    "id": 646,
    "chapter": 4,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO features of the British monarchy today.",
    "opts": [
      "The monarch is politically neutral",
      "The monarch gives Royal Assent to laws",
      "The monarch writes all new laws",
      "The monarch is elected"
    ],
    "answer": [
      0,
      1
    ],
    "explain": "Monarch is neutral and gives Royal Assent. They don't write laws (Parliament does) and aren't elected (hereditary)."
  },
  {
    "id": 647,
    "chapter": 3,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which British historical period did NOT begin with a foreign ruler taking the throne?",
    "opts": [
      "Norman (William from Normandy, 1066)",
      "Tudor (Henry Tudor had Welsh origins)",
      "Stuart (James VI came from Scotland)",
      "Georgian (George I from Hanover, Germany)"
    ],
    "answer": 1,
    "explain": "Henry Tudor was already within English politics (via his mother) — he won the English throne in civil war, not as a foreign ruler. The others were foreign."
  },
  {
    "id": 648,
    "chapter": 5,
    "difficulty": 3,
    "trap": "MOST",
    "q": "Most laws in the UK are:",
    "opts": [
      "Made by judges",
      "Passed by Parliament as Acts",
      "Made by the monarch",
      "Decided by referendum"
    ],
    "answer": 1,
    "explain": "Parliament passes most laws as Acts. Judges interpret them (common law also exists but is less common for new legislation)."
  },
  {
    "id": 649,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO things the UK is NOT a member of (as of 2026).",
    "opts": [
      "The United Nations",
      "The European Union (left in 2020)",
      "NATO",
      "The European Council (for single market) — left with Brexit"
    ],
    "answer": [
      1,
      3
    ],
    "explain": "UK left EU in 2020 and is not in the European single market. UK remains in UN and NATO."
  },
  {
    "id": 650,
    "chapter": 1,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT one of the 5 fundamental British values?",
    "opts": [
      "Democracy",
      "Rule of law",
      "Economic success",
      "Individual liberty"
    ],
    "answer": 2,
    "explain": "Economic success is not a value. The 5 are: democracy, rule of law, liberty, tolerance, participation."
  },
  {
    "id": 651,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British poet wrote 'Daffodils' ('I wandered lonely as a cloud')?",
    "opts": [
      "William Wordsworth",
      "Robert Burns",
      "Dylan Thomas",
      "John Keats"
    ],
    "answer": 0,
    "explain": "Wordsworth (Lake District poet) wrote 'Daffodils' in 1804."
  },
  {
    "id": 652,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "In what year did Britain adopt the metric system officially (though imperial remains in use)?",
    "opts": [
      "1965",
      "1980",
      "1995",
      "2000"
    ],
    "answer": 0,
    "explain": "Metrication officially began in 1965 though imperial units (miles, pints) still widely used."
  },
  {
    "id": 653,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The head of the British army is ultimately:",
    "opts": [
      "The PM",
      "The Defence Secretary",
      "The monarch (as Commander-in-Chief, ceremonially)",
      "A general"
    ],
    "answer": 2,
    "explain": "Monarch is ceremonial Commander-in-Chief. Practical authority rests with the PM and Defence Secretary."
  },
  {
    "id": 654,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which is the smallest country (by population) in the UK?",
    "opts": [
      "Northern Ireland",
      "Wales",
      "Scotland",
      "England"
    ],
    "answer": 0,
    "explain": "Northern Ireland has about 1.9 million people — smallest. Wales ~3.1m, Scotland ~5.5m, England ~56m."
  },
  {
    "id": 655,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "To become a British citizen by naturalisation, you typically need to have lived in the UK for:",
    "opts": [
      "1 year",
      "3 years",
      "5 years (or 3 if married to a UK citizen)",
      "10 years"
    ],
    "answer": 2,
    "explain": "Standard: 5 years residency, 1 year ILR. Spouses of citizens: 3 years."
  },
  {
    "id": 656,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which famous Scottish economist wrote 'The Wealth of Nations' (1776)?",
    "opts": [
      "David Hume",
      "Adam Smith",
      "John Knox",
      "Robert Owen"
    ],
    "answer": 1,
    "explain": "Adam Smith, often called the father of modern economics."
  },
  {
    "id": 657,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British scientist is famous for the theory of evolution by natural selection?",
    "opts": [
      "Isaac Newton",
      "Charles Darwin",
      "Stephen Hawking",
      "Michael Faraday"
    ],
    "answer": 1,
    "explain": "Charles Darwin published On the Origin of Species in 1859."
  },
  {
    "id": 658,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The abbreviation 'MP' stands for:",
    "opts": [
      "Minister of Parliament",
      "Member of Parliament",
      "Ministry of Policy",
      "Main Presenter"
    ],
    "answer": 1,
    "explain": "MP = Member of Parliament — an elected representative in the House of Commons."
  },
  {
    "id": 659,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which former colony became independent from Britain in 1776?",
    "opts": [
      "Australia",
      "India",
      "The USA (American colonies)",
      "Canada"
    ],
    "answer": 2,
    "explain": "The 13 American colonies declared independence in 1776 (American Revolution)."
  },
  {
    "id": 660,
    "chapter": 2,
    "difficulty": 3,
    "trap": "NOT",
    "q": "Which of these is NOT a UK territory?",
    "opts": [
      "Gibraltar (Overseas Territory)",
      "Hong Kong (returned to China in 1997)",
      "Falkland Islands",
      "Bermuda"
    ],
    "answer": 1,
    "explain": "Hong Kong returned to Chinese sovereignty in 1997. The others remain British territories."
  },
  {
    "id": 661,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The Royal Albert Hall is famous for hosting:",
    "opts": [
      "Football matches",
      "Classical concerts including the Proms",
      "Political debates",
      "Horse racing"
    ],
    "answer": 1,
    "explain": "The Royal Albert Hall hosts the BBC Proms and other classical events."
  },
  {
    "id": 662,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, the age of criminal responsibility in England, Wales, and Northern Ireland is:",
    "opts": [
      "7",
      "10",
      "14",
      "18"
    ],
    "answer": 1,
    "explain": "10 in England, Wales, NI. Scotland: 12."
  },
  {
    "id": 663,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Blitz' was during:",
    "opts": [
      "WWI",
      "WWII",
      "The Falklands War",
      "The Cold War"
    ],
    "answer": 1,
    "explain": "The Blitz was the German bombing of UK cities, 1940–1941, during WWII."
  },
  {
    "id": 664,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "A UK driving test includes:",
    "opts": [
      "Only a practical test",
      "Only a written test",
      "A theory test AND a practical test",
      "Neither — you just apply"
    ],
    "answer": 2,
    "explain": "You must pass both a theory test and a practical driving test."
  },
  {
    "id": 665,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The Scottish Highlands are in:",
    "opts": [
      "Southern Scotland",
      "Northern Scotland",
      "Central Scotland only",
      "Only the islands"
    ],
    "answer": 1,
    "explain": "The Highlands are in northern Scotland, featuring Ben Nevis and remote mountains."
  },
  {
    "id": 666,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British author created the James Bond series?",
    "opts": [
      "Ian Fleming",
      "Agatha Christie",
      "Arthur Conan Doyle",
      "J.R.R. Tolkien"
    ],
    "answer": 0,
    "explain": "Ian Fleming created James Bond — first novel, 'Casino Royale', published 1953."
  },
  {
    "id": 667,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the architect of much of modern London after the Great Fire of 1666?",
    "opts": [
      "Isambard Kingdom Brunel",
      "Christopher Wren",
      "Inigo Jones",
      "John Nash"
    ],
    "answer": 1,
    "explain": "Sir Christopher Wren designed 52 churches after the Fire, including St Paul's Cathedral."
  },
  {
    "id": 668,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "UK nurses, doctors, and teachers are usually:",
    "opts": [
      "Self-employed only",
      "Paid through public services (NHS, state schools)",
      "Paid by the monarch",
      "Paid by charities"
    ],
    "answer": 1,
    "explain": "Most healthcare (NHS) and education workers are paid through public funds."
  },
  {
    "id": 669,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, you are entitled to free NHS emergency care:",
    "opts": [
      "Only if you are a citizen",
      "If you are ordinarily resident in the UK",
      "Never",
      "Only in Scotland"
    ],
    "answer": 1,
    "explain": "NHS emergency care is available to those ordinarily resident (including many visa-holders). Some visitors pay."
  },
  {
    "id": 670,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The UK education system is organised by:",
    "opts": [
      "The monarch",
      "Each country (England, Scotland, Wales, NI — devolved)",
      "The EU",
      "The Church"
    ],
    "answer": 1,
    "explain": "Education is devolved. Each UK country organises its own system."
  },
  {
    "id": 671,
    "chapter": 2,
    "difficulty": 3,
    "trap": "SELECT TWO",
    "q": "Select TWO unique features of Scotland within the UK.",
    "opts": [
      "Its own Parliament at Holyrood",
      "Its own monarchy",
      "Its own legal system",
      "Its own currency (despite being in the UK)"
    ],
    "answer": [
      0,
      2
    ],
    "explain": "Scotland has its own Parliament and its own legal system (distinct from English law). Scotland shares the monarchy and currency."
  },
  {
    "id": 672,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was the British Prime Minister during the Suez Crisis in 1956?",
    "opts": [
      "Winston Churchill",
      "Anthony Eden",
      "Harold Macmillan",
      "Clement Attlee"
    ],
    "answer": 1,
    "explain": "Anthony Eden (Conservative) was PM during the Suez Crisis."
  },
  {
    "id": 673,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "If you want to work in the UK, you must have:",
    "opts": [
      "A National Insurance number",
      "A driving licence",
      "Citizenship only",
      "Nothing — anyone can work"
    ],
    "answer": 0,
    "explain": "A NI number is required for lawful employment in the UK."
  },
  {
    "id": 674,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The most famous British sitcom about a hotel, starring John Cleese, is:",
    "opts": [
      "Monty Python",
      "Blackadder",
      "Fawlty Towers",
      "Only Fools and Horses"
    ],
    "answer": 2,
    "explain": "Fawlty Towers (BBC, 1975 and 1979) starred John Cleese as Basil Fawlty."
  },
  {
    "id": 675,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "Which government department is responsible for immigration and border control?",
    "opts": [
      "The Home Office",
      "The Foreign Office",
      "The Treasury",
      "The Department of Health"
    ],
    "answer": 0,
    "explain": "The Home Office handles immigration, borders, policing, and national security."
  },
  {
    "id": 676,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Great Exhibition of 1851 was held in:",
    "opts": [
      "The Royal Albert Hall",
      "The Crystal Palace in Hyde Park",
      "The British Museum",
      "The Houses of Parliament"
    ],
    "answer": 1,
    "explain": "The Great Exhibition was held in the Crystal Palace, a huge glass building in Hyde Park, London."
  },
  {
    "id": 677,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The Monarch's birthday is celebrated officially (with Trooping the Colour) in:",
    "opts": [
      "January",
      "June",
      "September",
      "December"
    ],
    "answer": 1,
    "explain": "The Sovereign's official birthday is celebrated in June with Trooping the Colour, regardless of actual birth date."
  },
  {
    "id": 678,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The main airport serving London is:",
    "opts": [
      "Manchester Airport",
      "Heathrow",
      "Edinburgh Airport",
      "Cardiff Airport"
    ],
    "answer": 1,
    "explain": "Heathrow is the UK's busiest airport and main hub for London."
  },
  {
    "id": 679,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, which is a typical Christmas Day traditional food?",
    "opts": [
      "Roast turkey with trimmings",
      "Fish curry",
      "Pizza",
      "Steak tartare"
    ],
    "answer": 0,
    "explain": "Roast turkey (or sometimes goose/beef) with roast potatoes, vegetables, stuffing, and gravy."
  },
  {
    "id": 680,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "How old must a child usually be to start school in England?",
    "opts": [
      "3",
      "4 or 5 (starting Reception class)",
      "7",
      "10"
    ],
    "answer": 1,
    "explain": "Children start school in Reception class at age 4 or 5, with full-time education compulsory from 5."
  },
  {
    "id": 681,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The Royal Family's official surname since 1917 is:",
    "opts": [
      "Stuart",
      "Hanover",
      "Windsor",
      "Mountbatten"
    ],
    "answer": 2,
    "explain": "The family changed name to Windsor in 1917, during WWI, to distance from German origins."
  },
  {
    "id": 682,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The UK's second chamber of Parliament is called:",
    "opts": [
      "The Senate",
      "The House of Lords",
      "The House of Commons",
      "The High Court"
    ],
    "answer": 1,
    "explain": "The House of Lords is the UK's second chamber. The Commons is the first (elected) chamber."
  },
  {
    "id": 683,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which organisation is responsible for UK weather forecasts?",
    "opts": [
      "The BBC alone",
      "The Met Office",
      "The Royal Society",
      "The NHS"
    ],
    "answer": 1,
    "explain": "The Met Office is the UK's national meteorological service."
  },
  {
    "id": 684,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The 'Last Night of the Proms' is held at:",
    "opts": [
      "Wembley Stadium",
      "The Royal Albert Hall",
      "Buckingham Palace",
      "Westminster Abbey"
    ],
    "answer": 1,
    "explain": "The traditional 'Last Night of the Proms' is at the Royal Albert Hall in London."
  },
  {
    "id": 685,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The UK national currency symbol '£' comes from the Latin word for:",
    "opts": [
      "'Pound' (libra, a Roman unit of weight)",
      "'Money'",
      "'King'",
      "'Gold'"
    ],
    "answer": 0,
    "explain": "£ comes from 'libra', the Latin for pound (originally a pound weight of silver)."
  },
  {
    "id": 686,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "UK general elections are announced by:",
    "opts": [
      "The monarch on advice of the PM (or when Parliament's term expires)",
      "The Speaker",
      "The Archbishop of Canterbury",
      "The Leader of the Opposition"
    ],
    "answer": 0,
    "explain": "The monarch formally calls elections on PM's advice (or when term expires under law)."
  },
  {
    "id": 687,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "In the UK, how can you report a crime?",
    "opts": [
      "Call 999 for emergencies, 101 for non-urgent matters",
      "Only visit a police station",
      "Write a letter",
      "Tell your neighbour"
    ],
    "answer": 0,
    "explain": "999 = emergency. 101 = non-urgent police matters. Both work across the UK."
  },
  {
    "id": 688,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "The British 'Stiff Upper Lip' refers to:",
    "opts": [
      "A specific dance move",
      "A cultural trait of showing restraint and composure under stress",
      "A medical condition",
      "A type of cake"
    ],
    "answer": 1,
    "explain": "'Stiff upper lip' = emotional restraint and composure in difficult times — a cliché of British character."
  },
  {
    "id": 689,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which famous British comedian wrote and starred in 'Mr. Bean'?",
    "opts": [
      "Rowan Atkinson",
      "John Cleese",
      "Peter Kay",
      "Ricky Gervais"
    ],
    "answer": 0,
    "explain": "Rowan Atkinson created and played Mr. Bean (1990 onwards)."
  },
  {
    "id": 690,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "Which of these is an island off the coast of Scotland?",
    "opts": [
      "Skye",
      "Anglesey (Wales)",
      "Isle of Wight (England)",
      "Jersey (Channel Islands)"
    ],
    "answer": 0,
    "explain": "Skye is one of the Inner Hebrides, off Scotland's west coast."
  },
  {
    "id": 691,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The UK government's tax year ends on:",
    "opts": [
      "31 December",
      "5 April",
      "6 April",
      "30 September"
    ],
    "answer": 1,
    "explain": "UK tax year: 6 April to 5 April. So the tax year ENDS on 5 April."
  },
  {
    "id": 692,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "Which British poet wrote sonnets and plays in the late 16th century?",
    "opts": [
      "William Shakespeare",
      "Lord Byron",
      "Alfred Lord Tennyson",
      "John Milton"
    ],
    "answer": 0,
    "explain": "Shakespeare wrote 154 sonnets and 37+ plays, mostly during Elizabeth I's reign."
  },
  {
    "id": 693,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "If you need urgent medical help in the UK that is not life-threatening, you can:",
    "opts": [
      "Only go to A&E",
      "Call NHS 111 or visit a walk-in centre",
      "Wait until morning",
      "Only call your GP"
    ],
    "answer": 1,
    "explain": "NHS 111 and walk-in centres are for urgent but non-emergency medical help. A&E is for serious emergencies."
  },
  {
    "id": 694,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "The famous British scientist Isaac Newton is buried at:",
    "opts": [
      "Westminster Abbey",
      "St Paul's Cathedral",
      "Canterbury Cathedral",
      "Edinburgh Castle"
    ],
    "answer": 0,
    "explain": "Newton (died 1727) is buried in Westminster Abbey, where many great Britons are honoured."
  },
  {
    "id": 695,
    "chapter": 2,
    "difficulty": 2,
    "trap": null,
    "q": "The most populous city in the UK is:",
    "opts": [
      "Manchester",
      "Birmingham",
      "London",
      "Glasgow"
    ],
    "answer": 2,
    "explain": "London has about 9 million people — by far the UK's biggest city."
  },
  {
    "id": 696,
    "chapter": 4,
    "difficulty": 2,
    "trap": null,
    "q": "What is 'Strictly Come Dancing'?",
    "opts": [
      "A political programme",
      "A popular BBC ballroom dance competition",
      "A cooking show",
      "A sports event"
    ],
    "answer": 1,
    "explain": "Strictly (BBC, since 2004) is a hugely popular ballroom dance reality show."
  },
  {
    "id": 697,
    "chapter": 5,
    "difficulty": 2,
    "trap": null,
    "q": "The UK has how many national flags officially used across its territory?",
    "opts": [
      "Just one — the Union Jack",
      "Five — Union Jack + 4 national flags",
      "Twenty",
      "None"
    ],
    "answer": 1,
    "explain": "Union Jack represents the UK. Each country (England, Scotland, Wales, NI) has its own flag too."
  },
  {
    "id": 698,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Who was Prime Minister during the Brexit vote in June 2016?",
    "opts": [
      "Tony Blair",
      "Gordon Brown",
      "David Cameron",
      "Theresa May"
    ],
    "answer": 2,
    "explain": "David Cameron called the referendum and resigned after the Leave vote won."
  },
  {
    "id": 699,
    "chapter": 1,
    "difficulty": 2,
    "trap": null,
    "q": "If a UK resident wants to start a business, they typically must:",
    "opts": [
      "Register with HMRC for tax",
      "Only ask permission from the Queen",
      "Do nothing",
      "Only register with the council"
    ],
    "answer": 0,
    "explain": "Businesses must register with HMRC for tax (as self-employed or as a company)."
  },
  {
    "id": 700,
    "chapter": 3,
    "difficulty": 2,
    "trap": null,
    "q": "Which year marks the start of the Elizabethan era?",
    "opts": [
      "1485",
      "1558 (Elizabeth I's accession)",
      "1603",
      "1952"
    ],
    "answer": 1,
    "explain": "Elizabeth I became Queen in 1558. Her reign until 1603 is the Elizabethan era."
  }
];
if (typeof module !== "undefined") module.exports = QUESTIONS;
