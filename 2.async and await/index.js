function fetchData() {
    return new Promise((resolve, reject) => {
        // Replace 'Sok Dara' with your full name
        setTimeout(() => resolve('Data fetched! Student Name: [Phay Sothiya]'), 1000);
    });
}

async function fetchAndProcessData() {
    try {
        // Replace 'Sok Dara' with your full name
        console.log('Student Name: [Phay Sothiya]');
        console.log('Using async/await:');
        
        const data = await fetchData();
        console.log(data);

        const processed = 'Processing data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
