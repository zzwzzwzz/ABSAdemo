// Example reviews to show how it works
const sampleReviews = [
    "Lovely friendly staff, amazing location with great city views. Rooms are clean but bathroom is quite small. The breakfast could use more variety though.",
    "Excellent facilities and convenient location. The room was clean but slightly outdated. Staff were exceptionally helpful throughout our stay."
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
        // Example data (replace it later with real analysis results)
        const mockResults = [
            {aspect: 'FACILITIES', sentiment: 'positive'},
            {aspect: 'LOCATION', sentiment: 'positive'},
            {aspect: 'ROOM_AMENITIES', sentiment: 'negative'},
            {aspect: 'CLEANLINESS', sentiment: 'positive'},
            {aspect: 'SERVICE', sentiment: 'positive'}
        ];

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