/* =========================================================
 MY SITE - JAVASCRIPT

 HTML = the skeleton (what is on the page)
 CSS = the skin (what it looks like)
 JS = the brain (what it DOES)
 ========================================================= */

console.log("script.js is connected!");



/* ---------- MISSION 9: DARK MODE SWITCH ------------------ */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

 themeBtn.addEventListener("click", function () {

 document.body.classList.toggle("dark");

 if (document.body.classList.contains("dark")) {

 themeBtn.textContent = "Light mode";

 } else {

 themeBtn.textContent = "Dark mode";

 }

 });

}



/* ---------- LOGO VIEWER ---------------------------------- */

const logoButton = document.getElementById("logoButton");
const logoModal = document.getElementById("logoModal");
const logoClose = document.getElementById("logoClose");


if (logoButton && logoModal && logoClose) {

 logoButton.addEventListener("click", function (event) {

 event.preventDefault();

 logoModal.classList.add("active");

 logoModal.setAttribute("aria-hidden", "false");

 document.body.style.overflow = "hidden";

 });

 logoClose.addEventListener("click", function () {

 closeLogo();

 });

 logoModal.addEventListener("click", function (event) {

 if (event.target === logoModal) {

 closeLogo();

 }

 });

 document.addEventListener("keydown", function (event) {

 if (event.key === "Escape") {

 closeLogo();

 }

 });

 function closeLogo() {

 logoModal.classList.remove("active");

 logoModal.setAttribute("aria-hidden", "true");

 document.body.style.overflow = "";

 if (document.activeElement) {

 document.activeElement.blur();

 }

 }

}


/* =========================================================
 PROJECT IMAGE POPUP LIGHTBOX (ADDED FUNCTIONALITY)
 ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
 const projectModal = document.getElementById("projectImageModal");
 const modalTargetImg = document.getElementById("modalTargetImg");
 const modalCloseBtn = document.getElementById("modalCloseBtn");
 const imageCards = document.querySelectorAll(".image-card");
 const aboutImg = document.querySelector(".about-img");

 if (projectModal && modalTargetImg) {

 imageCards.forEach(function (card) {
 card.addEventListener("click", function () {
 const nestedImg = card.querySelector(".project-img");
 
if (nestedImg) {
 modalTargetImg.src = nestedImg.src;
 modalTargetImg.alt = nestedImg.alt;
 projectModal.classList.add("active");
 document.body.style.overflow = "hidden";
 }
 });
 });

 if (aboutImg) {
 aboutImg.style.cursor = "pointer";
 aboutImg.addEventListener("click", function () {
 modalTargetImg.src = aboutImg.src;
 modalTargetImg.alt = aboutImg.alt;
 projectModal.classList.add("active");
 document.body.style.overflow = "hidden";
 });
 }

 function closeProjectModal() {
 projectModal.classList.remove("active");
 document.body.style.overflow = "";
 }

 if (modalCloseBtn) {
 modalCloseBtn.addEventListener("click", closeProjectModal);
 }

 projectModal.addEventListener("click", function (event) {
 if (event.target === projectModal) {
 closeProjectModal();
 }
 });

 document.addEventListener("keydown", function (event) {
 if (event.key === "Escape") {
 closeProjectModal();
 }
 });
 }
});


/* =========================================================
 TALK BACK / SAY YOUR NAME SYSTEM (500 REAL FACTS POOL)
 ========================================================= */

const visitorNameInput = document.getElementById("visitorName");
const helloBtn = document.getElementById("helloBtn");
const clearBtn = document.getElementById("clearBtn");
const helloMessage = document.getElementById("helloMessage");

function getFactPool() {
  let storedQueue = sessionStorage.getItem("obaFactQueue");
  if (storedQueue) {
    return JSON.parse(storedQueue);
  }

  // FACT POOL LOCATION: Your 500 facts are stored right here!
  let facts = [
    "honey can last for thousands of years without spoiling.",
    "bananas are curved because they grow towards the sun against gravity.",
    "octopuses have three hearts and blue blood.",
    "sharks existed on earth before trees.",
    "a single cloud can weigh more than a million pounds.",
    "there are more stars in the universe than grains of sand on all earth's beaches.",
    "wombat poop is cube-shaped so it doesn't roll away.",
    "sea otters hold hands while sleeping so they don't drift apart.",
    "some turtles can breathe through their bottoms.",
    "lightning strikes the earth about 100 times every second.",
    "a day on venus is longer than a year on venus.",
    "hot water can freeze faster than cold water under certain conditions.",
    "butterflies taste their food with their feet.",
    "sloths can hold their breath longer than dolphins can.",
    "the Eiffel tower can grow taller during the summer due to heat expansion.",
    "shrimps' hearts are located in their heads.",
    "cats spend about 70% of their lives sleeping.",
    "cow sleeping positions change, but they can dream just like humans.",
    "blue whales have hearts the size of a small car.",
    "koalas have fingerprints that are almost identical to human fingerprints.",
    "dinosaurs lived on earth for about 165 million years.",
    "the human body contains enough iron to make a 3-inch nail.",
    "water covers about 71 percent of the earth's surface.",
    "sound travels about four times faster in water than in air.",
    "the moon has moonquakes just like earth has earthquakes.",
    "mars appears red because of iron oxide or rust on its surface.",
    "your eyes stay the same size from birth, but your nose and ears never stop growing.",
    "bananas are naturally slightly radioactive because they contain potassium.",
    "the fingerprints of a koala are so close to humans they have sometimes confused crime scene investigators.",
    "a group of flamingos is called a flamboyance.",
    "sea horses mate for life and travel holding tails.",
    "cleopatra lived closer in time to the launch of the iphone than to the building of the great pyramid.",
    "mammoths were still walking the earth when the pyramids were being built.",
    "the shortest war in history lasted only 38 to 45 minutes.",
    "there is a planet made of burning ice.",
    "the inventor of the frisbee was turned into a frisbee after he died.",
    "avocados are a fruit, not a vegetable.",
    "penguins have an organ above their eyes that converts saltwater into freshwater.",
    "a snail can sleep for three years straight.",
    "polar bear fur is actually transparent, not white.",
    "tigers have striped skin, not just striped fur.",
    "starfish do not have brains.",
    "jellyfish are made of more than 95 percent water.",
    "the tongue is the strongest muscle in the human body relative to its size.",
    "neptune takes 165 earth years to make one full orbit around the sun.",
    "saturn's rings are mostly made of chunks of water ice.",
    "light from the sun takes about 8 minutes and 20 seconds to reach earth.",
    "a bolt of lightning is five times hotter than the surface of the sun.",
    "the international space station travels at seventeen thousand five hundred miles per hour.",
    "mount everest is the highest mountain above sea level, but mauna kea is taller from base to peak.",
    "the pacific ocean is the largest and deepest of earth's oceanic divisions.",
    "the sahara desert is the largest hot desert in the world.",
    "the amazon rainforest produces about 20 percent of the world's oxygen.",
    "a newborn kangaroo is the size of a lima bean.",
    "elephants are the only land animals that cannot jump.",
    "giraffes have the same number of neck vertebrae as humans do: seven.",
    "hippos can run faster than humans.",
    "a rhinoceros horn is made of keratin, the same protein as human hair and fingernails.",
    "cheetahs can accelerate from zero to sixty miles per hour in just three seconds.",
    "zebras have black skin underneath their white and black striped coats.",
    "polar bears have black skin underneath their fur to absorb heat.",
    "reindeer eyes turn blue in the winter to help them see in the dark arctic.",
    "beavers have clear eyelids that act like goggles when they swim underwater.",
    "platypuses glow under ultraviolet light.",
    "kangaroos cannot walk backward.",
    "all clownfish are born male, and the dominant one turns female.",
    "electric eels can produce jolts of up to 600 volts.",
    "great white sharks can go weeks without eating after a large meal.",
    "orca whales are actually a species of dolphin.",
    "swordfish do not have teeth.",
    "flying fish can glide through the air for over 600 feet at a time.",
    "cows have best friends and get stressed when they are separated.",
    "pigs are considered one of the smartest domestic animals.",
    "goats have rectangular pupils that give them a wide field of vision.",
    "horses cannot vomit.",
    "chickens can recognize over 100 different human faces.",
    "crows can hold grudges against specific people who annoy them.",
    "pigeons can recognize all 26 letters of the English alphabet.",
    "honeybees communicate through a dance called the waggle dance.",
    "ants can carry objects up to fifty times their own body weight.",
    "dragonflies can fly in any direction including backward and upside down.",
    "fleas can jump up to 200 times their own body length.",
    "butterflies taste their food with receptors on their feet.",
    "mosquitoes are attracted to sweat, heat, and the carbon dioxide we exhale.",
    "tarantulas can survive for over two years without eating food.",
    "scorpions glow bright neon green under ultraviolet light.",
    "earthworms have five heart-like structures instead of one single heart.",
    "leeches have thirty-two brains distributed across their body segments.",
    "barnacles have the longest penis relative to body size in the animal kingdom.",
    "sea cucumbers can expel their internal organs to confuse predators and then grow them back.",
    "coral reefs are made of millions of tiny animals called polyps.",
    "sponges are animals that lack brains, nerves, and organs.",
    "venus is the hottest planet in our solar system, even hotter than mercury.",
    "uranus rotates completely on its side, rolling like a barrel around the sun.",
    "jupiter has over ninety recognized moons.",
    "mars has the tallest volcano in the solar system, named olympus mons.",
    "mercury has extreme temperature swings from blistering heat to freezing cold.",
    "pluto is smaller than the united states.",
    "the sun accounts for 99.8 percent of all mass in the solar system.",
    "a teaspoon of a neutron star would weigh about six billion tons.",
    "black holes have gravity so strong that even light cannot escape them.",
    "the milky way galaxy contains hundreds of billions of stars.",
    "andromeda galaxy is on a collision course with the milky way, billions of years away.",
    "light years measure distance, not time.",
    "time moves slightly slower for objects traveling at very high speeds.",
    "astronauts grow up to two inches taller while living in zero gravity space.",
    "the footprints left on the moon by apollo astronauts will last for millions of years.",
    "there is no atmosphere on the moon, so the sky always looks pitch black.",
    "comets are essentially giant dirty snowballs made of ice, dust, and rock.",
    "meteorites are space rocks that survive passing through earth's atmosphere.",
    "the aurora borealis is caused by solar wind interacting with earth's magnetic field.",
    "earth is the only planet known to harbor life.",
    "the deepest part of the ocean is the mariana trench.",
    "sound cannot travel through the vacuum of space because there is no air.",
    "the grand canyon can be seen from space with specialized equipment.",
    "the great barrier wall of china is not easily visible from low earth orbit with the naked eye.",
    "lightning can reach temperatures five times hotter than the sun's surface.",
    "the human brain generates enough electricity to power a small lightbulb.",
    "blood makes up about 7 percent of a human's total body weight.",
    "the human heart beats around 100,000 times every single day.",
    "your bones are stronger than concrete pound for pound.",
    "the smallest bone in the human body is located inside your ear.",
    "fingernails grow four times faster than toenails do.",
    "humans shed about 600,000 particles of skin every single hour.",
    "the human nose can remember over 50,000 different scents.",
    "taste buds have a lifespan of about 10 to 14 days before regenerating.",
    "saliva production in humans amounts to enough to fill two bathtubs a year.",
    "stomach acid is strong enough to dissolve razor blades.",
    "the human body has over 600 muscles.",
    "muscle tissue weighs more than fat tissue by volume.",
    "teeth are the only part of the human body that cannot heal themselves.",
    "blinking helps clean and lubricate your eyes multiple times a minute.",
    "babies are born without kneecaps; they develop later around age three.",
    "fingerprints are unique to every individual, even identical twins have different ones.",
    "left-handed people make up about 10 percent of the total world population.",
    "hair color changes as you age due to melanin production slowing down.",
    "the average person walks the equivalent of five times around the earth in a lifetime.",
    "yawning helps cool down your brain when it gets too warm.",
    "laughter lowers stress hormones and boosts your immune system.",
    "singing releases endorphins that make you feel happier and more relaxed.",
    "reading fiction can increase empathy and imagination.",
    "playing video games can improve hand-eye coordination and problem-solving skills.",
    "chess has more possible game moves than atoms in the observable universe.",
    "rubik's cubes can be solved in twenty moves or fewer from any scrambled position.",
    "basketball was originally played with a soccer ball and peach baskets.",
    "the first modern Olympic games took place in Athens in 1896.",
    "soccer is the most popular sport played across the entire world.",
    "golf is the only sport ever played on the surface of the moon.",
    "table tennis balls can travel up to 100 miles per hour during a smash shot.",
    "baseball players wear caps to keep the sun out of their eyes.",
    "cricket matches can sometimes last for up to five full days.",
    "the Tour de France bicycle race covers over 2,000 miles.",
    "skateboarding became an official Olympic sport in recent years.",
    "snowboarding was invented by mixing surfing and sledding ideas.",
    "surfing was originally practiced by ancient Polynesian royalty.",
    "the word robot comes from a Czech word meaning forced labor or worker.",
    "the first computer mouse was made out of wood.",
    "the first website ever created is still live on the internet today.",
    "wi-fi stands for wireless fidelity in common tech language.",
    "bluetooth technology was named after a viking king who united Scandinavia.",
    "the QWERTY keyboard layout was designed to keep typewriter keys from jamming.",
    "emails existed before the world wide web was invented.",
    "the first text message ever sent said merry christmas.",
    "smartphones have millions of times more processing power than the computers used for the moon landing.",
    "the internet weighs about as much as a single strawberry in terms of electricity electrons.",
    "amazon was originally founded as an online bookstore.",
    "google was originally named backrub before changing its title.",
    "apple computer started out inside a residential garage.",
    "lego bricks are manufactured with extreme precision so they never slip apart easily.",
    "the name lego comes from leg godt, meaning play well in Danish.",
    "barbie dolls have a full official fictional name including middle names.",
    "mr potato head was the first toy ever advertised on television.",
    "monopoly was originally created to teach players about economic fairness.",
    "scrabble tiles were given point values based on how frequently letters appear on news pages.",
    "tetris is one of the best-selling video games of all time.",
    "minecraft is the single best-selling video game in history.",
    "pokemon stands for pocket monsters.",
    "mario originally appeared as a carpenter before becoming a plumber.",
    "sonic the hedgehog was created to be faster than mario.",
    "pac-man was inspired by a pizza with a single slice missing.",
    "the color orange is named after the fruit rather than the other way around.",
    "the color blue was historically the hardest pigment for ancient artists to make.",
    "pink is technically a tint of red rather than its own primary hue.",
    "black is the absence of visible light.",
    "white is the combination of all colors of the rainbow spectrum combined.",
    "rainbows are actually complete circles, but we only see arcs from the ground.",
    "mirages are optical illusions caused by light bending through warm air layers.",
    "glass is made by melting ordinary sand at extremely high temperatures.",
    "steel is an alloy made primarily of iron and carbon.",
    "aluminum was once considered more valuable than gold and silver.",
    "titanium is strong like steel but weighs almost half as much.",
    "carbon fiber is used in aerospace and high-performance racing cars.",
    "diamonds are made of pure compressed carbon atoms.",
    "graphite in pencils is made of the exact same carbon atoms as diamonds.",
    "coal is formed from ancient plant material buried deep underground for millions of years.",
    "oil and natural gas come from decomposed marine microorganisms.",
    "renewable energy sources include solar, wind, hydro, and geothermal power.",
    "wind turbines convert kinetic energy from air movement into clean electricity.",
    "solar panels use photovoltaic cells to turn sunlight directly into power.",
    "geothermal energy harnesses heat from deep inside the earth's crust.",
    "hydroelectric power uses flowing water from dams to spin generators.",
    "nuclear energy splits atoms to generate massive amounts of clean power.",
    "electricity travels at nearly the speed of light through copper wires.",
    "magnets have two poles labeled north and south.",
    "opposites attract while like poles repel each other in magnetism.",
    "gravity is the invisible force that pulls objects toward one another.",
    "mass is the amount of matter in an object, while weight includes gravity.",
    "inertia keeps moving objects moving unless an outside force stops them.",
    "friction is a force that resists motion between two surfaces touching.",
    "aerodynamics studies how air moves around solid objects like planes or cars.",
    "supersonic speeds are faster than the speed of sound.",
    "mach 1 represents the exact speed of sound in air.",
    "sound barriers are broken when an object exceeds the speed of sound, causing a sonic boom.",
    "radar uses radio waves to detect objects and measure their distance.",
    "sonar uses sound waves to map underwater environments and find objects.",
    "lasers amplify light through stimulated emission of radiation.",
    "holograms create three-dimensional images using light interference patterns.",
    "fiber optics transmit data using pulses of light inside glass strands.",
    "satellites orbit earth to provide communication, weather tracking, and GPS maps.",
    "gps stands for global positioning system.",
    "the international space station orbits earth about sixteen times a day.",
    "voyager 1 is the farthest human-made object in deep space.",
    "the hubble space telescope has captured deep space images for decades.",
    "the james webb space telescope can see infrared light from the earliest galaxies.",
    "astronomy is the scientific study of celestial objects and the universe.",
    "astrology is a belief system and not a recognized science.",
    "cosmology looks at the origin and evolution of the entire universe.",
    "quantum physics studies nature at the scale of atoms and subatomic particles.",
    "relativity theory was developed by albert einstein.",
    "gravity bends light passing near massive objects in space.",
    "wormholes are theoretical shortcuts through spacetime, though none have been found.",
    "parallel universes are popular in science fiction stories.",
    "antimatter has the opposite electrical charge of normal matter.",
    "dark matter makes up most of the universe's mass but cannot be seen directly.",
    "dark energy is driving the accelerated expansion of the universe.",
    "the big bang theory explains how the universe expanded from a hot dense point.",
    "supernovas are massive explosions that occur when giant stars die.",
    "neutron stars are the dense leftovers of collapsed giant star cores.",
    "pulsars are spinning neutron stars that emit beams of electromagnetic radiation.",
    "quasars are extremely luminous powered by supermassive black holes in distant galaxies.",
    "nebulae are giant clouds of dust and gas where new stars are born.",
    "protostars are early stages of star formation before nuclear fusion begins.",
    "white dwarfs are the faded remnants of average-sized stars like our sun.",
    "red giants are massive bloated stars nearing the end of their lifespans.",
    "brown dwarfs are failed stars that lack enough mass for full fusion.",
    "exoplanets are planets that orbit stars outside our solar system.",
    "the habitable zone is the region around a star where liquid water can exist.",
    "seti searches for extraterrestrial intelligence using radio telescopes.",
    "panspermia is the idea that life seeds could travel through space on meteorites.",
    "extremophiles are organisms that can survive in harsh environments like boiling vents.",
    "tardigrades can survive the vacuum of space and extreme radiation.",
    "photosynthesis allows plants to turn sunlight into food and oxygen.",
    "chlorophyll gives plants their green color and absorbs light energy.",
    "roots anchor plants and absorb water and nutrients from soil.",
    "xylem transports water upward through plant tissues.",
    "phloem transports food and sugars throughout the plant.",
    "deciduous trees lose their leaves every autumn.",
    "evergreen trees keep their green needles or leaves year-round.",
    "redwood trees are among the tallest living organisms on earth.",
    "bristlecone pines can live for thousands of years.",
    "fungi are more closely related to animals than they are to plants.",
    "mycorrhizal networks connect plant roots underground to share nutrients.",
    "mushrooms are only the fruiting bodies of larger underground fungal networks.",
    "yeast is a single-celled fungus used in baking and brewing.",
    "bacteria are microscopic single-celled organisms found everywhere on earth.",
    "viruses require a host cell to replicate and spread.",
    "antibiotics treat bacterial infections but do not work against viruses.",
    "vaccines train the immune system to recognize and fight harmful diseases.",
    "white blood cells defend the body against invading germs and infections.",
    "red blood cells carry oxygen from your lungs to the rest of your body.",
    "platelets help blood clot to stop bleeding when you get a cut.",
    "DNA contains the genetic instructions used in the development and function of all living things.",
    "genes are segments of DNA that determine traits like eye color.",
    "chromosomes are structures inside cells that package DNA neatly.",
    "mitochondria are known as the powerhouse of the cell because they generate energy.",
    "cell walls provide structural support in plant cells but are absent in animal cells.",
    "osmosis is the movement of water across cell membranes.",
    "evolution is the change in characteristics of living species over generations.",
    "natural selection drives adaptation based on survival advantages.",
    "fossils provide a historical record of ancient life on earth.",
    "paleontology is the scientific study of prehistoric life and fossils.",
    "archaeology studies human history through artifacts and structures.",
    "anthropology explores human societies, cultures, and physical development.",
    "history records written events of the past.",
    "geography studies earth's landscapes, environments, and populations.",
    "cartography is the science and art of making maps.",
    "demography tracks human population statistics and changes over time.",
    "economics studies how societies allocate scarce resources.",
    "psychology explores human behavior and mental processes.",
    "sociology examines human social behavior and group structures.",
    "philosophy investigates fundamental questions about existence and knowledge.",
    "ethics evaluates concepts of right and wrong behavior.",
    "logic studies the principles of valid reasoning and argument.",
    "linguistics is the scientific study of human language and structure.",
    "grammar sets rules for structuring sentences properly.",
    "etymology explores the historical origins of words.",
    "poetry uses rhythmic and aesthetic qualities of language to express ideas.",
    "literature encompasses written works of artistic and cultural value.",
    "mythology consists of traditional stories explaining natural or cultural origins.",
    "folklore includes legends, music, and customs passed down through generations.",
    "architecture is the art and science of designing and building structures.",
    "sculpture creates three-dimensional art from materials like stone or metal.",
    "painting applies pigment to surfaces to create visual art compositions.",
    "photography captures permanent images using light-sensitive sensors or film.",
    "cinematography creates visual storytelling through motion pictures.",
    "music combines pitch, rhythm, and dynamics to create sound art.",
    "harmonies occur when multiple musical notes are played simultaneously.",
    "rhythm creates the timed beat and pattern in music.",
    "tempo determines the speed of a musical composition.",
    "orchestras bring together dozens of musicians playing various instrument families.",
    "guitars use strings plucked or strummed to create melodic sounds.",
    "pianos use hammers striking strings inside a wooden cabinet.",
    "drums provide percussion and rhythmic backing for music.",
    "theater combines acting, dialogue, and staging in front of live audiences.",
    "dance expresses stories and emotions through rhythmic body movements.",
    "ballet is a highly technical and structured form of dance art.",
    "hip hop culture includes breakdancing, rapping, DJing, and graffiti art.",
    "magic tricks create illusions through sleight of hand and clever physics.",
    "circuses feature acrobatics, juggling, and theatrical performances.",
    "board games involve tabletop rules, strategy, and player interaction.",
    "card games use decks with suits and numbers for various rules.",
    "video games offer interactive digital entertainment across consoles and PCs.",
    "esports feature competitive multiplayer video gaming tournaments worldwide.",
    "virtual reality immerses users in computer-generated 3D environments.",
    "augmented reality overlays digital graphics onto the real world.",
    "artificial intelligence enables computers to solve complex problems and learn.",
    "machine learning allows systems to improve automatically from data experience.",
    "algorithms are step-by-step instructions used by computers to solve problems.",
    "coding uses programming languages to build software and applications.",
    "binary code represents data using sequences of ones and zeros.",
    "transistors act as microscopic switches inside computer microchips.",
    "semiconductors control electrical current in electronic devices.",
    "nanotechnology works with materials on an atomic and molecular scale.",
    "quantum computing uses quantum mechanics to process information at high speeds.",
    "renewable resources can be naturally replenished over short time periods.",
    "recycling converts waste materials into reusable objects and substances.",
    "conservation protects natural environments and endangered wildlife species.",
    "biodiversity refers to the variety of life in a particular habitat or ecosystem.",
    "ecosystems consist of communities of living organisms interacting with their environment.",
    "food webs show the complex feeding relationships between species in an ecosystem.",
    "predators hunt other animals for food.",
    "prey animals are hunted and eaten by predators.",
    "herbivores eat plants exclusively.",
    "carnivores eat meat exclusively.",
    "omnivores eat both plants and meat.",
    "decomposers break down dead organic matter to recycle nutrients into soil.",
    "symbiosis describes close ecological relationships between different species.",
    "mutualism benefits both species involved in an interaction.",
    "parasitism benefits one organism while harming the host.",
    "commensalism benefits one organism without affecting the other.",
    "migration involves seasonal movement of animals from one region to another.",
    "hibernation allows animals to survive cold winters in a deep sleep state.",
    "camouflage helps animals blend into their surroundings to hide from predators.",
    "mimicry allows harmless animals to look like dangerous species for protection.",
    "bioluminescence allows living organisms to produce and emit natural light.",
    "echolocation uses reflected sound waves to navigate and locate objects in the dark.",
    "photosynthesis fuels almost all life on earth by converting solar energy into food.",
    "ozone layer in earth's stratosphere absorbs harmful ultraviolet radiation from the sun.",
    "greenhouse effect traps heat in earth's atmosphere to keep the planet warm.",
    "tectonic plates make up earth's outer shell and move slowly over time.",
    "earthquakes happen when stressed tectonic plates slip and release energy.",
    "volcanoes erupt when molten rock escapes from beneath earth's crust.",
    "tsunamis are massive ocean waves usually caused by underwater earthquakes.",
    "hurricanes form over warm ocean waters with strong rotating winds.",
    "tornadoes are violently rotating columns of air touching the ground.",
    "meteorology is the scientific study of weather and atmospheric conditions.",
    "climatology examines long-term weather patterns and climate changes.",
    "hydrology studies the movement, distribution, and quality of water on earth.",
    "geology explores earth's solid structure, rocks, and historical processes.",
    "oceanography investigates marine environments, currents, and sea life.",
    "paleoanthropology studies the evolutionary history of human ancestors.",
    "astrophysics applies physics principles to understand stars and galaxies.",
    "biochemistry examines chemical processes within living organisms.",
    "genetics studies heredity and variation in living organisms.",
    "immunology investigates the immune system across all living organisms.",
    "pharmacology explores drug action and medical treatments.",
    "neuroscience studies the structure and function of the nervous system and brain.",
    "honeybees have four wings.",
    "a cat has 32 muscles in each ear.",
    "an octopus has nine brains because it has a central brain and one in each arm.",
    "sea otters have the densest fur of any animal on earth.",
    "cows can sleep standing up, but they only dream when lying down.",
    "the world's oldest known living tree is over 4,800 years old.",
    "dolphins sleep with one eye open.",
    "lightning can strike the same place twice.",
    "a duck's quack doesn't echo, and nobody knows why.",
    "there are more fake flamingos in the world than real ones.",
    "a snail can crawl over a razor blade without getting hurt because of its slime.",
    "bats are the only mammals that can truly fly.",
    "blue-eyed people have a higher alcohol tolerance on average.",
    "the fingerprints of chimpanzees are nearly identical to human fingerprints.",
    "some species of frogs can freeze solid during winter and thaw out alive in spring.",
    "a shark is the only known fish that can blink with both eyes.",
    "the heart of a shrimp is located in its head.",
    "horses can sleep while standing up.",
    "a housefly buzzes in the key of F.",
    "the state of florida is bigger than england.",
    "you can hear a blue whale's heartbeat from two miles away.",
    "peanuts are not actually nuts; they are legumes.",
    "strawberries are the only fruits with seeds on the outside.",
    "the moon has no atmosphere, which means there is no wind or weather.",
    "saturn could float in water because it is mostly made of gas.",
    "the first-ever alarm clock could only ring at 4:00 AM.",
    "people used to use dead mice as a cure for toothaches in ancient Egypt.",
    "the ancient romans used crushed mouse brains as toothpaste.",
    "bubble gum contains rubber.",
    "tennis balls used to be white before they were changed to yellow for television.",
    "the word 'nerd' was first coined by Dr. Seuss in his book 'If I Ran the Zoo'.",
    "a group of cats is called a clowder.",
    "a group of owls is called a parliament.",
    "a group of crows is called a murder.",
    "a group of rhinos is called a crash.",
    "a group of porcupines is called a prickle.",
    "a group of jellyfish is called a smack.",
    "a group of ferrets is called a business.",
    "a group of whales is called a pod.",
    "a group of baboons is called a troop.",
    "a group of kangaroos is called a mob.",
    "a group of lions is called a pride.",
    "a group of wolves is called a pack.",
    "a group of fish is called a school.",
    "a group of geese is called a gaggle.",
    "armshells are bulletproof in some cases due to their hard armor.",
    "sea sponges filter massive amounts of water every single day.",
    "jellyfish have been around for over 500 million years.",
    "the oldest piece of chewing gum is over 9,000 years old.",
    "shoes were originally made without any difference between left and right.",
    "the dot over a lowercase 'i' or 'j' is called a tittle.",
    "some cats are actually allergic to humans.",
    "the smell of freshly cut grass is actually a plant distress call.",
    "a lightning bolt is hotter than the surface of the sun.",
    "an individual blood cell takes about 20 seconds to make a complete circuit of the human body.",
    "the human stomach has to produce a new layer of mucus every two weeks so it doesn't digest itself.",
    "bone is four times stronger than concrete.",
    "human teeth are the only part of the body that cannot repair themselves.",
    "the human brain uses 20 percent of the body's total energy.",
    "your nose can detect over 1 trillion different smells.",
    "the largest desert in the world is actually Antarctica because it is so dry.",
    "the coldest temperature ever recorded on Earth was minus 128.6 degrees Fahrenheit.",
    "the longest river in the world is the Nile River.",
    "mount Everest grows a tiny bit taller every year due to tectonic plates.",
    "the Dead Sea is so salty that you can easily float on top of it without swimming.",
    "there is enough gold inside the earth's core to coat the entire surface of the planet.",
    "diamonds are formed deep within the earth under extreme heat and pressure.",
    "the shortest recorded flight in history lasted only a few seconds.",
    "the first computer bug was an actual real-life moth trapped inside a relay.",
    "the QWERTY keyboard was designed to slow typing down so mechanical typewriters wouldn't jam.",
    "the first web page went live in August 1991.",
    "the very first domain name ever registered was symbolics.com.",
    "more than half of all websites on the internet are written in English.",
    "the first video uploaded to YouTube was titled 'Me at the zoo'.",
    "google processes over 8.5 billion searches every single day.",
    "the symbol for the hashtag '#' is technically called an octothorpe.",
    "the '@' symbol is commonly called an 'at sign' or 'commercial at'.",
    "the letter 'E' is the most commonly used letter in the English language.",
    "the sentence 'the quick brown fox jumps over the lazy dog' uses every letter of the alphabet.",
    "there are words that read the same forwards and backwards, known as palindromes.",
    "the longest word in the English dictionary has nearly 190,000 letters and takes hours to pronounce.",
    "the word 'bookkeeper' has three consecutive double letters.",
    "the word 'queue' is the only word pronounced the same way even if the last four letters are removed.",
    "slang words change faster than official dictionary words.",
    "sign language has different dialects and regional variations just like spoken languages.",
    "braille is a tactile writing system used by people who are visually impaired.",
    "the Morse code signal for the letter 'E' is a single dot, making it the shortest code.",
    "the ancient Egyptians wrote using complex picture symbols called hieroglyphics.",
    "paper was invented in ancient China around 100 AD.",
    "the printing press was invented by Johannes Gutenberg in the 15th century.",
    "the first postage stamp was introduced in Great Britain in 1840.",
    "the Eiffel Tower was originally intended to be a temporary structure.",
    "the Statue of Liberty was a gift from France to the United States.",
    "the Great Wall of China is thousands of miles long.",
    "the Colosseum in Rome could hold over 50,000 spectators.",
    "ancient pyramids were built as massive tombs for pharaohs.",
    "the Taj Mahal changes color slightly depending on the time of day and moonlight.",
    " Stonehenge was built thousands of years ago with massive stones transported from miles away.",
    " Machu Picchu is an ancient Inca citadel perched high in the Andes mountains.",
    "the Leaning Tower of Pisa started tilting while it was still under construction.",
    "the Empire State Building was once the tallest building in the world.",
    "the Golden Gate Bridge is painted in a distinct color officially known as international orange.",
    "the Sydney Opera House has a roof shaped like giant white sails.",
    "the Panama Canal connects the Atlantic and Pacific oceans for shipping vessels.",
    "the Channel Tunnel connects the United Kingdom and France underwater.",
    "supersonic passenger jets like Concorde could cross the Atlantic in under four hours.",
    "the first hot air balloon flight carried a sheep, a duck, and a rooster.",
    "the Wright brothers achieved the first controlled powered airplane flight in 1903.",
    " Amelia Earhart was a famous aviation pioneer who set numerous records.",
    "the first satellite in space was named Sputnik 1.",
    "the Apollo 11 mission successfully landed humans on the moon in 1969.",
    " Neil Armstrong was the first person to walk on the lunar surface.",
    "the International Space Station orbits Earth at an altitude of about 250 miles.",
    "spacewalks require astronauts to wear specialized pressurized suits.",
    "comets leave behind bright trails of dust and gas as they approach the sun.",
    "meteors light up the night sky when they burn up in the atmosphere.",
    "meteorites that hit the ground can create impact craters.",
    "asteroid belts lie between the orbits of Mars and Jupiter.",
    "dwarf planets like Pluto are smaller than regular planets.",
    "our solar system is located in the Milky Way galaxy.",
    "galaxies come in spiral, elliptical, and irregular shapes.",
    "black holes can form from the remnants of massive collapsed stars.",
    "supermassive black holes reside at the center of most large galaxies.",
    "quasars are powered by gas swirling into supermassive black holes.",
    "pulsars emit beams of radiation that sweep past Earth like cosmic lighthouses.",
    "magnetars are neutron stars with extremely powerful magnetic fields.",
    "supernovae explosions scatter heavy elements across the universe.",
    "nebulae are clouds of cosmic dust where stars are born.",
    "protoplanetary disks surround newborn stars and form planets.",
    "exoplanet atmospheres can sometimes be analyzed for chemical signatures.",
    "the search for extraterrestrial intelligence utilizes large radio dish arrays.",
    "radio waves travel across the universe at the speed of light.",
    "light takes over four years to reach Earth from our closest neighboring star system, Alpha Centauri.",
    "the universe is estimated to be about 13.8 billion years old.",
    "cosmic microwave background radiation is leftover heat from the Big Bang.",
    "dark matter accounts for roughly 27 percent of the universe's mass-energy.",
    "dark energy is responsible for pushing galaxies apart at an accelerating rate.",
    "spacecraft like Voyager have traveled past the edge of our solar system into interstellar space.",
    "deep space probes carry golden records containing sounds and images of Earth.",
    "the Hubble Space Telescope has captured breathtaking views of deep space for decades.",
    "the James Webb Space Telescope uses gold-coated mirrors to capture infrared light.",
    "ground-based observatories use adaptive optics to correct for atmospheric distortion.",
    "radio telescopes can detect invisible signals from deep space objects.",
    "spectroscopy helps scientists determine the composition of distant stars.",
    "astronomers use parallax measurements to calculate distances to nearby stars.",
    "the Doppler effect causes light from moving stars to shift in wavelength.",
    "redshift indicates that distant galaxies are moving away from us.",
    "blueshift occurs when an object is moving closer to an observer.",
    "celestial navigation relies on the positions of stars to determine location.",
    "compass needles align with the Earth's magnetic north pole.",
    "magnetic poles can shift position over long periods of geological time.",
    "auroras occur when solar particles collide with gases in the upper atmosphere.",
    "solar flares release massive bursts of energy from the sun's surface.",
    "sunspots are cooler darker regions on the sun caused by magnetic activity.",
    "the solar wind consists of charged particles streaming outward from the sun.",
    "coronal mass ejections can disrupt satellite communications on Earth.",
    "Earth's magnetic field shields our planet from harmful solar radiation.",
    "ozone depletion can increase the amount of UV radiation reaching the ground.",
    "greenhouse gases trap thermal radiation in the atmosphere.",
    "global climate patterns are influenced by ocean currents and wind systems.",
    "El Nino events alter weather patterns across the Pacific region.",
    "monsoons bring seasonal heavy rainfall to tropical regions.",
    "jet streams are fast-flowing air currents high in the atmosphere.",
    "barometric pressure readings help meteorologists forecast incoming weather changes.",
    "humidity measures the amount of water vapor present in the air.",
    "dew point is the temperature at which air becomes fully saturated with moisture.",
    "fog is essentially a cloud that forms at ground level.",
    "frost forms when water vapor freezes directly onto cold surfaces.",
    "hailstones grow larger as they are tossed up and down inside thunderstorm clouds.",
    "tornadoes are classified using the Enhanced Fujita scale based on wind damage.",
    "hurricanes are categorized from Category 1 to 5 based on sustained wind speeds.",
    "tsunamis can travel across entire ocean basins at jetliner speeds.",
    "earthquake magnitudes are measured using the logarithmic moment magnitude scale.",
    "seismographs record ground vibrations caused by seismic waves.",
    "fault lines are fractures in the Earth's crust where earthquakes frequently occur.",
    "volcanic arcs often form along tectonic subduction zones.",
    "hotspot volcanoes like those in Hawaii form away from plate boundaries.",
    "magma becomes lava once it erupts onto the Earth's surface.",
    "basaltic lava flows are typically runny and low in viscosity.",
    "explosive volcanic eruptions can spew ash high into the stratosphere.",
    "calderas are massive volcanic craters formed by collapsing magma chambers.",
    "geysers erupt boiling water and steam due to underground geothermal heating.",
    "hot springs are heated by geothermal activity deep beneath the crust.",
    "limestone caves form when acidic groundwater dissolves soluble rock over time.",
    "stalactites hang down from cave ceilings as minerals precipitate from dripping water.",
    "stalagmites grow upward from cave floors where mineral-rich water drips.",
    "fossils are preserved remains or traces of ancient organisms.",
    "amber can trap and perfectly preserve ancient insects for millions of years.",
    "tar pits can accumulate thick layers of asphalt that trap unwary animals.",
    "sedimentary rocks form from accumulated layers of sand, silt, and shells.",
    "metamorphic rocks are transformed by intense heat and pressure underground.",
    "igneous rocks solidify from molten magma or lava.",
    "the rock cycle describes how rocks transform between different types over time.",
    "mineral hardness is measured on the Mohs scale from talc to diamond.",
    "quartz is one of the most common and durable minerals found in the Earth's crust.",
    "feldspar makes up a large percentage of the Earth's rocky outer shell.",
    "mica splits easily into thin, flexible, shiny sheets.",
    "pyrite is often called fool's gold because of its metallic brassy appearance.",
    "obsidian is a natural volcanic glass formed from rapidly cooling lava.",
    "pumice is a lightweight volcanic rock full of gas bubbles that can float on water.",
    "coal is a combustible sedimentary rock used historically for fuel and power.",
    "petroleum is a liquid fossil fuel found trapped in underground reservoirs.",
    "natural gas consists primarily of methane gas trapped in geological formations.",
    "hydraulic fracturing extracts trapped gas and oil from deep shale rock formations.",
    "nuclear fission reactors use enriched uranium to generate heat and electricity.",
    "nuclear fusion powers the sun by combining hydrogen atoms into helium.",
    "solar thermal power plants use mirrors to concentrate sunlight to drive steam turbines.",
    "wind farms utilize arrays of large turbines to capture wind energy.",
    "hydroelectric dams harness the potential energy of elevated river water.",
    "tidal generators capture energy from ocean currents driven by lunar gravity.",
    "geothermal power plants tap into underground steam reservoirs to generate electricity.",
    "biomass energy utilizes organic materials like plant waste for fuel.",
    "electric vehicles store electrical energy in rechargeable battery packs.",
    "lithium-ion batteries power everything from smartphones to electric cars.",
    "supercapacitors can store and release electrical energy very quickly.",
    "semiconductor chips are the core building blocks of modern electronics.",
    "transistors revolutionized electronics by replacing bulky vacuum tubes.",
    "integrated circuits pack millions of transistors onto a single silicon chip.",
    "microprocessors act as the central processing unit of computers.",
    "random access memory provides fast temporary storage for active programs.",
    "solid-state drives use flash memory to store data without moving parts.",
    "hard disk drives use spinning magnetic platters to read and write data.",
    "optical discs like DVDs store data using microscopic pits and lasers.",
    "fiber optic cables transmit digital data as pulses of light over long distances.",
    "routers direct network traffic between different computers and servers.",
    "packet switching breaks data down into smaller chunks for transmission across networks.",
    "the Domain Name System translates website names into numeric IP addresses.",
    "encryption secures digital communication by scrambling data into secret codes.",
    "firewalls monitor and filter network traffic to protect systems from cyber threats.",
    "malware is malicious software designed to damage or disrupt computer systems.",
    "phishing attacks attempt to trick users into revealing sensitive personal information.",
    "two-factor authentication adds an extra layer of security beyond passwords.",
    "open-source software allows anyone to view, modify, and share its source code.",
    "artificial neural networks are modeled after the structure of the human brain.",
    "deep learning algorithms can process complex patterns in images and audio.",
    "natural language processing enables computers to understand and generate human text.",
    "computer vision allows machines to interpret and analyze visual information.",
    "robotics combines mechanical engineering, electronics, and software programming.",
    "automation streamlines repetitive tasks in manufacturing and logistics.",
    "3D printing builds objects layer by layer using digital computer models.",
    "nanotechnology engineers materials and devices at the molecular scale.",
    "carbon nanotubes possess incredible strength-to-weight ratios.",
    "graphene is a single layer of carbon atoms arranged in a hexagonal lattice.",
    "superconductors conduct electricity with zero resistance at very low temperatures.",
    "quantum entanglement links particles so the state of one instantly affects another.",
    "quantum cryptography uses the principles of physics to create unbreakable encryption keys.",
    "biometrics uses unique physical characteristics like fingerprints for identification.",
    "facial recognition software analyzes facial features to identify individuals.",
    "augmented reality blends digital graphics with the physical environment.",
    "virtual reality headsets completely replace the user's field of view with digital worlds.",
    "haptic feedback provides tactile sensations to users in digital environments.",
    "autonomous vehicles use sensors and AI to navigate roads without human drivers.",
    "drones are unmanned aerial vehicles used for photography, delivery, and inspection.",
    "satellites provide global positioning data used for navigation apps.",
    "sonar systems use sound propagation to navigate underwater or detect objects.",
    "radar systems use radio echoes to track aircraft and weather patterns.",
    "lasers produce narrow beams of coherent light used in cutting and measurements.",
    "holography records light interference patterns to produce 3D images.",
    "telescopes gather and focus light from distant astronomical objects.",
    "microscopes magnify tiny objects that are invisible to the naked eye.",
    "spectrometers split light into its component wavelengths to analyze chemical composition.",
    "particle accelerators smash subatomic particles together at near-light speeds.",
    "cyclotrons accelerate charged particles outward in a spiral path using magnetic fields.",
    "tokamak reactors use magnetic fields to contain high-temperature fusion plasma.",
    "MRI scanners use strong magnetic fields and radio waves to image internal body structures.",
    "X-ray machines pass electromagnetic radiation through the body to view bones.",
    "CT scans combine multiple X-ray measurements to produce cross-sectional images.",
    "ultrasound imaging uses high-frequency sound waves to visualize internal organs.",
    "pacemakers deliver electrical impulses to regulate irregular heartbeats.",
    "prosthetic limbs use advanced robotics and sensors to restore mobility.",
    "gene editing technologies like CRISPR allow precise modifications to DNA sequences.",
    "stem cells have the remarkable ability to develop into many different cell types.",
    "antibodies are proteins produced by the immune system to neutralize pathogens.",
    "antigens are substances that trigger an immune response in the body.",
    "pathogens include bacteria, viruses, fungi, and parasites that cause disease.",
    "antibiotic resistance occurs when bacteria evolve defenses against common medicines.",
    "epidemiology studies the incidence, distribution, and control of diseases.",
    "pharmacology investigates how drugs interact with biological systems.",
    "toxicology studies the adverse effects of chemical substances on living organisms.",
    "neurology focuses on disorders of the nervous system and brain.",
    "cardiology specializes in disorders of the heart and blood vessels.",
    "pediatrics provides medical care for infants, children, and adolescents.",
    "dermatology deals with disorders of the skin, hair, and nails.",
    "orthopedics treats conditions involving the musculoskeletal system.",
    "ophthalmology focuses on the anatomy, physiology, and diseases of the eye.",
    "dentistry addresses oral health, teeth, and gums.",
    "psychiatry diagnoses and treats mental health disorders.",
    "psychology studies mental processes and human behavior.",
    "sociology examines the development and structure of human society.",
    "anthropology explores human cultures, evolution, and social practices.",
    "archeology uncovers human history through the excavation of artifacts.",
    "history records and interprets past human events and civilizations.",
    "geography maps the Earth's surface, features, and human populations.",
    "economics analyzes how societies manage scarce resources and financial systems.",
    "political science studies systems of governance and political behavior.",
    "law establishes formal rules and regulations enforced by social institutions.",
    "philosophy investigates fundamental questions about existence, knowledge, and ethics.",
    "ethics evaluates concepts of moral right and wrong.",
    "logic studies the formal rules of valid reasoning and argumentation.",
    "linguistics analyzes the structure, evolution, and psychology of language.",
    "grammar dictates structural rules for organizing sentences properly.",
    "etymology traces the historical origins and evolution of words.",
    "lexicography involves compiling and editing dictionaries.",
    "literature encompasses written works of artistic, cultural, and historical value.",
    "poetry utilizes aesthetic and rhythmic qualities of language to evoke emotion.",
    "prose represents ordinary written language structured in sentences and paragraphs.",
    "drama tells stories through performance, dialogue, and theatrical staging.",
    "cinema combines visual art, storytelling, and sound design in motion pictures.",
    "photography captures moments in time using light-sensitive media or digital sensors.",
    "painting applies pigment to surfaces to create expressive visual compositions.",
    "sculpture shapes three-dimensional art from materials like stone, wood, or metal.",
    "architecture designs and constructs buildings blending utility and aesthetic beauty.",
    "music combines melody, harmony, rhythm, and timbre into auditory art.",
    "orchestras bring together diverse instrument families to perform complex musical scores.",
    "opera combines theatrical drama and singing with full orchestral accompaniment.",
    "ballet expresses narrative and emotion through highly stylized dance movements.",
    "folk dances reflect traditional cultural heritage and community celebrations.",
    "theater arts encompass acting, stage design, lighting, and live performance.",
    "magic performances utilize illusion and sleight of hand to mystify audiences.",
    "circus arts feature acrobatic feats, juggling, and death-defying stunts.",
    "board games engage players through tabletop rules, strategy, and interaction.",
    "card games utilize specialized decks for entertainment and competitive play.",
    "video games offer immersive interactive digital entertainment across platforms.",
    "esports elevate competitive multiplayer video gaming to professional spectator events.",
    "sports foster physical fitness, teamwork, and competitive achievement worldwide.",
    "the Olympic Games bring together athletes from nations across the globe.",
    "soccer is widely considered the most popular sport on the planet.",
    "basketball was invented by Dr. James Naismith using peach baskets.",
    "baseball is a classic bat-and-ball sport rich in historical statistics.",
    "American football combines strategy, physical strength, and teamwork.",
    "cricket features multi-day matches and complex scoring rules.",
    "tennis challenges players with agility, precision, and endurance.",
    "golf requires immense patience, precision, and course management.",
    "track and field events test fundamental athletic abilities like running and jumping.",
    "swimming competitions showcase speed and efficiency in aquatic environments.",
    "gymnastics combines incredible flexibility, balance, and acrobatic strength.",
    "martial arts emphasize discipline, self-defense, and physical mastery.",
    "boxing and mixed martial arts test combat sports skills in regulated rings.",
    "cycling events range from endurance road races to technical mountain biking.",
    "motorsports combine mechanical engineering skill with high-speed driving talent.",
    "surfing challenges athletes to ride ocean waves using specialized boards.",
    "skateboarding features street and ramp tricks performed on a wheeled board.",
    "snowboarding blends winter mountain sports with surfing influences.",
    "skiing involves gliding across snow-covered terrain using specialized boots and skis.",
    "mountaineering pushes human limits through high-altitude peak climbs.",
    "rock climbing tests grip strength, balance, and route-finding skills.",
    "camping connects people with nature through outdoor shelter and wilderness survival.",
    "fishing combines patience, skill, and an understanding of aquatic ecosystems.",
    "gardening cultivates plants, flowers, and vegetables for aesthetic or practical use.",
    "cooking transforms raw ingredients into delicious meals using culinary techniques.",
    "baking applies precise chemical reactions involving heat to create breads and pastries.",
    "woodworking crafts functional objects and furniture from timber.",
    "sewing utilizes needle and thread to join fabrics for clothing and crafts.",
    "knitting creates textiles by interlocking loops of yarn using specialized needles.",
    "pottery shapes clay into vessels and sculptures before firing them in kilns.",
    "origami transforms flat sheets of paper into intricate sculptures without cutting.",
    "calligraphy produces decorative handwriting and artistic lettering.",
    "painting miniatures details tiny figurines used in tabletop gaming and hobbies.",
    "collecting hobbies range from stamps and coins to vintage comic books.",
    "astrophotography captures stunning long-exposure images of night sky objects.",
    "birdwatching observes and catalogs wild bird species in their natural habitats.",
    "geocaching uses GPS coordinates to hunt for hidden containers outdoors.",
    "puzzle solving challenges the mind with logic problems and spatial reasoning.",
    "riddles present clever wordplay puzzles designed to trick the listener.",
    "board game design involves balancing rules, components, and player fun.",
    "storytelling is an ancient human tradition used to pass down history and culture.",
    "mythology preserves ancient explanations for natural phenomena and human origins.",
    "folklore passes down traditional tales, superstitions, and local legends.",
    "linguistic diversity ensures thousands of unique languages are spoken worldwide.",
    "cultural heritage is preserved through museums, archives, and oral traditions.",
    "architecture styles reflect the technological and artistic values of different eras.",
    "urban planning designs efficient and sustainable cities for growing populations.",
    "renewable city initiatives integrate green spaces and clean energy into urban centers.",
    "recycling programs help reduce landfill waste by processing materials into new goods.",
    "ocean conservation efforts protect marine life and coral reef ecosystems from pollution.",
    "wildlife reserves safeguard endangered animal species and their natural habitats.",
    "reforestation projects plant new trees to combat deforestation and climate change.",
    "sustainable agriculture practices protect soil health and water resources.",
    "clean water initiatives provide safe drinking access to remote communities.",
    "space exploration continues to push the boundaries of human knowledge and capability."
  ];

  // Shuffle array using Fisher-Yates algorithm so they are completely randomized
  for (let i = facts.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [facts[i], facts[j]] = [facts[j], facts[i]];
  }

  sessionStorage.setItem("obaFactQueue", JSON.stringify(facts));
  return facts;
}

function typeWriterEffect(element, text, speed = 35) {
  element.innerHTML = '';
  let i = 0;
  
  let cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  
  function type() {
    if (i < text.length) {
      element.textContent = text.substring(0, i + 1);
      element.appendChild(cursor);
      i++;
      setTimeout(type, speed);
    } else {
      element.appendChild(cursor);
    }
  }
  type();
}

if (helloBtn && clearBtn && visitorNameInput && helloMessage) {
  
  helloBtn.addEventListener("click", function() {
    let rawName = visitorNameInput.value.trim();
    
    rawName = rawName.replace(/^(hi|hello|hey)[,\s]*/i, '');
    rawName = rawName.replace(/^(i\s*am|i'm|im)[,\s]*/i, '');
    rawName = rawName.trim();
    
    let fullMessage = "";

    // Check if the input box is empty
    if (rawName === "") {
      fullMessage = "Please enter your name";
    } else {
      let factQueue = getFactPool();
      let currentFactIndex = parseInt(sessionStorage.getItem("obaFactIndex") || "0");
      
      if (currentFactIndex >= factQueue.length) {
        currentFactIndex = 0; 
      }
      
      let randomFact = factQueue[currentFactIndex];
      sessionStorage.setItem("obaFactIndex", currentFactIndex + 1);
      
      const cleanName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      fullMessage = "Hi " + cleanName + "! Did you know that " + randomFact;
    }
    
    typeWriterEffect(helloMessage, fullMessage);
  });

  clearBtn.addEventListener("click", function() {
    visitorNameInput.value = "";
    helloMessage.innerHTML = "";
  });
}