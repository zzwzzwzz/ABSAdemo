// Example reviews to show how it works
const sampleReviews = [
    // Restaurant reviews
    "The pasta was perfectly cooked and the sauce was delicious. However, the service was a bit slow during peak hours. Their wine selection is impressive and reasonably priced. The ambiance could use some improvement but overall it's a good place for dinner.",
    "Great food quality but small portion sizes for the price. The staff was incredibly attentive and friendly. The restaurant has a nice atmosphere with comfortable seating. Parking was a nightmare though, and they don't offer valet service.",
    // Laptop reviews
    "This laptop has excellent battery life and the display quality is stunning. The keyboard feels a bit cramped though. It runs all my software smoothly with no lag, and the build quality is solid. The price is higher than competitors with similar specs.",
    "The processor speed is phenomenal for multitasking, but the laptop tends to overheat during gaming. The design is sleek and lightweight making it perfect for travel. The speakers are surprisingly good for such a thin device."
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
        // Get input text to determine domain (restaurant vs laptop)
        const inputText = document.getElementById('input-box').value.toLowerCase();
        let mockResults;
        
        // Check if it's more likely a restaurant or laptop review
        if (inputText.includes('food') || inputText.includes('restaurant') || 
            inputText.includes('menu') || inputText.includes('service') || 
            inputText.includes('waiter') || inputText.includes('dining')) {
            // Restaurant domain aspects
            mockResults = [
                {aspect: 'FOOD_QUALITY', sentiment: 'positive'},
                {aspect: 'SERVICE', sentiment: 'negative'},
                {aspect: 'PRICE', sentiment: 'positive'},
                {aspect: 'AMBIENCE', sentiment: 'negative'},
                {aspect: 'MENU_VARIETY', sentiment: 'positive'}
            ];
        } else {
            // Laptop domain aspects
            mockResults = [
                {aspect: 'PERFORMANCE', sentiment: 'positive'},
                {aspect: 'BATTERY', sentiment: 'positive'},
                {aspect: 'DESIGN', sentiment: 'positive'},
                {aspect: 'DISPLAY', sentiment: 'positive'},
                {aspect: 'PRICE', sentiment: 'negative'}
            ];
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
        // Style differently for negative results
        aspectDiv.className = `flex items-center justify-between p-4 rounded-xl 
            ${result.sentiment === 'negative' ? 'bg-gray-100' : 'bg-white'}`;
        
        // Text parts
        aspectDiv.innerHTML = `
            <span class="font-medium text-gray-700">${result.aspect.replace(/_/g, ' ')}</span>
            <span class="text-sm ${result.sentiment === 'positive' ? 'text-green-600' : 'text-red-600'}">
                ${result.sentiment.toUpperCase()}
            </span>
        `;
        
        // Add to results list
        container.appendChild(aspectDiv);
    });
}