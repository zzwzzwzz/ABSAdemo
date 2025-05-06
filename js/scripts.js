// Example reviews to show how it works
const sampleReviews = [
    // Restaurant reviews - varying lengths
    "The food at this restaurant was absolutely phenomenal. I ordered their signature pasta dish which was cooked to perfection with a delicate balance of flavors. However, the service was disappointingly slow - we waited almost 30 minutes just to place our order, and the waitstaff seemed disorganized. The ambience was charming with soft lighting and elegant decor that created a romantic atmosphere. While the prices were on the higher side ($32 for pasta), the quality of ingredients justified the cost. Overall, despite the service issues, I'd return for the exceptional cuisine.",
    
    "My experience at this restaurant was mixed at best. The service was impeccable - our waiter was attentive, knowledgeable about the menu, and accommodated all our special requests. The food, however, was underwhelming. My steak was overcooked despite ordering it medium-rare, and the side dishes lacked seasoning. The restaurant's ambience was lovely with beautiful artwork and comfortable seating. As for value, I found it quite overpriced considering the quality of food we received. A funny anecdote - the couple next to us got engaged during dinner and the staff handled it beautifully with complimentary champagne!",
    
    "Terrible service, amazing food. The pasta carbonara was the best I've ever had, but we waited 45 minutes for our appetizers. Great ambiance though!",
    
    "Beautiful restaurant with reasonable prices. I had a lovely evening but the food was just average - nothing special to write home about. Service was friendly but they forgot part of our order.",
    
    // Movie reviews - varying lengths
    "This film delivers a masterclass in acting with the lead actress giving a career-defining performance that's certain to earn Oscar consideration. Her portrayal of grief was nuanced and deeply moving. The cinematography was breathtaking - each frame could be a painting with stunning use of natural light and landscape shots. However, the plot suffered from pacing issues, particularly in the middle act where several scenes felt unnecessary and slowed the momentum. The soundtrack beautifully complemented the emotional tone of the film, with original compositions that enhanced key moments without being intrusive. The visual effects were seamlessly integrated, particularly in the dream sequences which blended reality and fantasy in a visually striking way.",
    
    "The director's unique vision shines through every aspect of this film. The cinematography features bold color choices and innovative camera angles that create a distinct visual language. Unfortunately, the acting was inconsistent - while the lead actor delivered a compelling performance, many supporting roles felt wooden and one-dimensional. The storyline was refreshingly original with unexpected twists that kept me engaged throughout, though the ending felt somewhat rushed. The sound design was exceptional, using silence as effectively as its dramatic score to build tension. Production design deserves special mention for creating a believable near-future world without relying on excessive CGI or visual effects, instead using practical sets and clever production design to establish the setting.",
    
    "Great acting but terrible plot. The cinematography was beautiful though and the music score was haunting. Overall disappointed with the story direction.",
    
    "Stunning visuals and production design. The actors did what they could with a mediocre script. Sound mixing issues made dialogue hard to understand in several key scenes."
];

// Fill the text box with an example review
function fillExampleReview() {
    const randomReview = sampleReviews[Math.floor(Math.random() * sampleReviews.length)];
    document.getElementById('input-box').value = randomReview;
}

// Analyze Review function
function analyzeText() {
    const resultsElement = document.getElementById('results');
    
    // Hide old results while loading
    resultsElement.classList.add('hidden');
    
    // Example loading time (replace it later with real analysis results)
    setTimeout(() => {
        // Get input text to determine domain (restaurant vs movie)
        const inputText = document.getElementById('input-box').value.toLowerCase();
        let mockResults;
        
        // Check if it's more likely a restaurant or movie review
        if (inputText.includes('food') || inputText.includes('restaurant') || 
            inputText.includes('menu') || inputText.includes('waiter') || 
            inputText.includes('dining') || inputText.includes('chef') || 
            inputText.includes('dish') || inputText.includes('cuisine') ||
            inputText.includes('appetizer') || inputText.includes('carbonara')) {
            
            // Restaurant domain aspects - generate results that match the input
            if (inputText.includes('terrible service') || inputText.includes('slow') || 
                inputText.includes('waited')) {
                mockResults = [
                    {aspect: 'food', sentiment: 'positive'},
                    {aspect: 'service', sentiment: 'negative'},
                    {aspect: 'ambience', sentiment: 'positive'},
                    {aspect: 'price', sentiment: inputText.includes('overpriced') ? 'negative' : 'neutral'},
                    {aspect: 'anecdotes/miscellaneous', sentiment: 'neutral'}
                ];
            } else if (inputText.includes('impeccable') || inputText.includes('attentive') ||
                      inputText.includes('friendly')) {
                mockResults = [
                    {aspect: 'food', sentiment: inputText.includes('underwhelming') || 
                                              inputText.includes('average') ? 'negative' : 'positive'},
                    {aspect: 'service', sentiment: 'positive'},
                    {aspect: 'ambience', sentiment: 'positive'},
                    {aspect: 'price', sentiment: inputText.includes('overpriced') ? 'negative' : 'positive'},
                    {aspect: 'anecdotes/miscellaneous', sentiment: inputText.includes('anecdote') ? 'positive' : 'neutral'}
                ];
            } else {
                mockResults = [
                    {aspect: 'food', sentiment: inputText.includes('average') ? 'neutral' : 'positive'},
                    {aspect: 'service', sentiment: inputText.includes('forgot') ? 'negative' : 'neutral'},
                    {aspect: 'price', sentiment: inputText.includes('reasonable') ? 'positive' : 'neutral'},
                    {aspect: 'ambience', sentiment: inputText.includes('beautiful') ? 'positive' : 'neutral'},
                    {aspect: 'anecdotes/miscellaneous', sentiment: 'neutral'}
                ];
            }
        } else {
            // Movie domain aspects - generate results that match the input
            if (inputText.includes('masterclass') || inputText.includes('career-defining')) {
                mockResults = [
                    {aspect: 'Acting and Characters', sentiment: 'positive'},
                    {aspect: 'Direction and Cinematography', sentiment: 'positive'},
                    {aspect: 'Plot and Storyline', sentiment: 'negative'},
                    {aspect: 'Sound and Music', sentiment: 'positive'},
                    {aspect: 'Visual Effects and Production Quality', sentiment: 'positive'}
                ];
            } else if (inputText.includes('terrible plot') || inputText.includes('mediocre script')) {
                mockResults = [
                    {aspect: 'Acting and Characters', sentiment: 'positive'},
                    {aspect: 'Direction and Cinematography', sentiment: 'positive'},
                    {aspect: 'Plot and Storyline', sentiment: 'negative'},
                    {aspect: 'Sound and Music', sentiment: inputText.includes('sound mixing issues') ? 'negative' : 'positive'},
                    {aspect: 'Visual Effects and Production Quality', sentiment: 'positive'}
                ];
            } else {
                mockResults = [
                    {aspect: 'Acting and Characters', sentiment: inputText.includes('inconsistent') ? 'negative' : 'positive'},
                    {aspect: 'Direction and Cinematography', sentiment: 'positive'},
                    {aspect: 'Plot and Storyline', sentiment: inputText.includes('original') ? 'positive' : 'negative'},
                    {aspect: 'Sound and Music', sentiment: 'positive'},
                    {aspect: 'Visual Effects and Production Quality', sentiment: 'positive'}
                ];
            }
        }

        // Show the results on screen
        displayResults(mockResults);
        resultsElement.classList.remove('hidden', 'opacity-0');
        resultsElement.classList.add('fade-in');
    }, 500);
}

// Show the results list
function displayResults(results) {
    const container = document.getElementById('aspects-container');
    container.innerHTML = ''; // Clear previous results
    
    // Create each result line
    results.forEach((result, index) => {
        const aspectDiv = document.createElement('div');
        // Style differently based on sentiment
        let bgColor = 'bg-white';
        if (result.sentiment === 'negative') {
            bgColor = 'bg-red-50';
        } else if (result.sentiment === 'neutral') {
            bgColor = 'bg-gray-50';
        } else if (result.sentiment === 'positive') {
            bgColor = 'bg-green-50';
        }
        
        aspectDiv.className = `flex items-center justify-between p-4 rounded-xl ${bgColor}`;
        
        // Text parts with appropriate color for each sentiment
        let sentimentColor = 'text-gray-500'; // neutral
        if (result.sentiment === 'positive') {
            sentimentColor = 'text-green-600';
        } else if (result.sentiment === 'negative') {
            sentimentColor = 'text-red-600';
        }
        
        aspectDiv.innerHTML = `
            <span class="font-medium text-gray-700">${result.aspect}</span>
            <span class="text-sm ${sentimentColor}">
                ${result.sentiment.toUpperCase()}
            </span>
        `;
        
        // Add to results list
        container.appendChild(aspectDiv);
    });
}