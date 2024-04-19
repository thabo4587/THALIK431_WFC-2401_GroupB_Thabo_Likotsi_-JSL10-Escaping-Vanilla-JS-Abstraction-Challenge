document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });


    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting','async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Pass both jsConcepts and reactConcepts as arguments to findIntersection
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });
    

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});

function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => {
        const mostRecentDate = new Date(mostRecent.published);
        const currentDate = new Date(book.published);
        return currentDate > mostRecentDate ? book : mostRecent;
    });
}

function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        console.log(`Navigating: ${direction.step}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
