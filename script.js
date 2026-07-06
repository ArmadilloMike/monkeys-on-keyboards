const monkeyGifs = [
    "monkeys/monkey1.gif",
    "monkeys/monkey2.gif",
    "monkeys/monkey3.gif",
    "monkeys/monkey4.gif",
    "monkeys/monkey5.gif",
    "monkeys/monkey6.gif",
    "monkeys/monkey7.gif",
    "monkeys/monkey8.gif",
    "monkeys/monkey9.gif",
    "monkeys/monkey10.gif"
]
let isRunning = false
let mode = "spam"
let intervalId = null
let spamSpeed = 170
let wordSpeed = 380

const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const modeBtn = document.getElementById("mode-btn")
const clearBtn = document.getElementById("clear-btn")
const statusEl = document.getElementById("status")

const spamChars = "abcdefghijklmnopqrstuvwxyz  ,.!?".split("")
const wordList = ["the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "not", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck", "thee","thou","thy","thine","ye","hither","thither","whither","yon","yonder","aught","naught","nigh","anon","ere","erstwhile","betwixt","whence","hence","thence","mayhap","perchance","forsooth","verily","prithee","marry","zounds","gadzooks","methinks","quoth","wherefore","wherewithal","howbeit","natheless","nonetheless","forasmuch","insomuch","inasmuch","notwithstanding","peradventure","haply","belike","sooth","troth","faith","unbeknownst","unwonted","wont","doth","dost","hath","hast","wilt","wouldst","shalt","shant","canst","art","wert","wast","knowest","speakest","sayest","goest","doest","hearest","seest","givest","takest","makest","hadst","didst","tarry","hearken","fain","betake","beseech","entreat","bemoan","bewail","wax","wane","fetch","yclept","sunder","rend","smite","vanquish","succor","repine","chide","upbraid","affright","bestir","begat","wist","wend","betide","befall","beguile","bethink","bespeak","bemock","becalm","bedeck","bedazzle","behold","beget","belabor","bereave","beset","besot","bestow","betoken","bewray","blithe","bode","bootless","brook","cavil","chasten","comport","comeuppance","contrive","convey","counsel","deem","descry","disport","dissemble","divers","doff","don","engender","ensue","essay","fancy","fashion","fawning","fell","fetter","flout","forbear","forfend","forswear","gainsay","gambol","glean","gorge","grovel","hie","importune","inveigh","jest","jibe","jocund","jollity","languish","lief","lissome","malapert","mar","meet","mete","mince","misdoubt","muse","obeisance","ope","parlous","pate","peevish","pellmell","perforce","pettish","plight","plod","ponder","prate","prattle","presage","purloin","quaff","quail","rail","rankle","recant","reckon","repair","reprove","roister","ruth","sate","sear","sequester","shrive","shrove","sirrah","slattern","sloth","sluggard","sojourn","spurn","stint","stripling","surcease","surfeit","swain","swoon","tattle","testy","thrall","throe","thrice","thwart","trice","truckle","twain","undone","unfetter","unhand","vex","vouchsafe","wanton","wight","withal","woo","wroth","yea","zealous","abed","aback","abash","abide","addle","adieu","aggrieve","apace","aroint","asunder","athwart","avow","bade","baleful","bandy","bane","barter","bawd","bedlam","befit","befriend","begone","behest","beholden","benighted","bewitch","bilious","bodkin","boon","boorish","brazen","brine","cadge","callow","canker","censure","chary","cherubic","choler","cleave","clemency","cloister","coddle","coif","comely","compeer","condole","confound","conjure","contumely","coquette","coronet","coxcomb","craven","crone","cudgel","cur","curmudgeon","dally","dastard","daub","dearth","decry","defile","deft","demure","despoil","dirge","discourse","disdain","dissolute","distaff","dote","dour","dowdy","dowry","drab","dregs","drollery","dupe","ebb","effrontery","engross","enmity","ensnare","entrails","envenom","epithet","errant","exhort","expound","fallow","fardel","feign","fickle","fie","filial","firmament","flagon","foible","fortnight","frowsy","furlong","galliard","garb","gaud","gauntlet","gibbet","girt","gloaming","goodwife","gorget","grievous","grouse","guerdon","guile","guise","gullible","gyve","hale","halberd","harlot","harridan","harry","haughty","heed","hind","hoary","hobble","hoodwink","husbandry","ignoble","imp","inkhorn","intemperate","jocose","jolt","journeyman","jowl","kine","knave","knell","ladle","lament","larder","laud","lavish","lea","leech","liege","limn","loath","loth","lout","lowly","lug","maidenhead","malison","marrow","mendicant","mien","minion","mirth","misgive","misprision","moiety","morrow","murk","nettle","niggard","nimble","nonce","nostrum","obdurate","oblique","odious","ogle","opine","orison","oust","outmatch","paltry","parley","paunch","pauper","pelf","pertain","pestilence","pilfer","pillage","plaintive","plaudit","poesy","poltroon","poniard","potage","pray","purview","quagmire","quandary","quell","quench","quibble","quittance","ragamuffin","raiment","rancor","ravish","recompense","remiss","reproach","retinue","revel","rime","roguish","rue","sanguine","satiate","scoff","scourge","scurvy","seemly","sepulchre","shrew","shrewd","welkin","zephyr","tempest","morn","e'en","'tis","'twas","o'er","ne'er","e'er","oft","doublet","jerkin","hose","farthingale","ruff","cloak","mantle","scabbard","rapier","buckler","tankard","goblet","victuals","pottage","sup","repast","chamber","hearth","garret","tavern","apothecary","physic","astrologer","soothsayer","bard","minstrel","jape","quip","riddle","folly","tidings","missive","parchment","quill"];
const outputText = document.getElementById("output-text")

updateStatus()

function buildGifBag(images, total) {
    const bag =[]
    while (bag.length < total) {
        bag.push(...images)
    }
    return bag.slice(0, total)
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateStatus() {
    statusEl.textContent = `Mode: ${mode === "spam" ? "Spam": "Words"} - ${isRunning ? "Running" : "Stopped"}`
}

function generateSpam() {
    return spamChars[Math.floor(Math.random() * spamChars.length)]
}
function generateWords() {
    return wordList[Math.floor(Math.random() * wordList.length)] + " ";
}

function appendToFeed(text) {
    outputText.textContent += text
    outputText.scrollTop = outputText.scrollHeight
}

function tick() {
    const chunk = mode === "spam" ? generateSpam() : generateWords()
    appendToFeed(chunk)
}

const grid = document.getElementById("monkey-gifs")
const bag = shuffle(buildGifBag(monkeyGifs, 100));

for (let i = 0; i < 100; i++) {
    const img = document.createElement("img");
    img.src = bag[i];
    grid.appendChild(img);
}
startBtn.addEventListener("click", () => {
    if (isRunning) return
    isRunning = true
    const speed = mode === "spam" ? spamSpeed : wordSpeed
    intervalId = setInterval(tick, speed)
    updateStatus()
})
stopBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    isRunning = false
    updateStatus()
})
modeBtn.addEventListener("click", () => {
    mode = mode === "spam" ? "words" : "spam"
    modeBtn.textContent = "Mode: " + (mode === "spam" ? "Spam" : "Words")
    updateStatus()
})
clearBtn.addEventListener("click", () => {
    outputText.textContent = "\n    "
})