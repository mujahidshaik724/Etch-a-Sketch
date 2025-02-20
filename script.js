
document.getElementById('body-background').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('container');
            //for generating the random color
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function createGrid(size) {
                container.innerHTML = ''; // Clear the existing grid

                for (let i = 0; i < size * size; i++) {
                    const gridItem = document.createElement('div');
                    gridItem.className = 'grid-item';
                    gridItem.dataset.hoverCount = 0; // Initialize hover count
                    gridItem.style.flexBasis = `${100 / size}%`;
                    gridItem.style.height = `${100 / size}%`;
                    container.appendChild(gridItem);
                }

                const gridItems = document.querySelectorAll('.grid-item');
                gridItems.forEach(item => {
                    item.addEventListener('mouseover', function() {
                        let hoverCount = parseInt(item.dataset.hoverCount);
                        hoverCount++;
                        item.dataset.hoverCount = hoverCount;

                        // Assign a random color on hover
                        if (hoverCount > 0) {
                            item.style.backgroundColor = getRandomColor();
                        }
                    });
                });
            }

            function changeGrid() {
                const size = prompt('Enter new grid size (e.g., 16 for 16x16):');
                if (size !== null && size > 0) {
                    createGrid(size);
                }
            }

            function clearGrid() {
                const gridItems = document.querySelectorAll('.grid-item');
                gridItems.forEach(item => {
                    item.style.backgroundColor = '#fff'; // Reset to white
                    item.dataset.hoverCount = 0; // Reset hover count
                });
            }

            // Initialize with a 16x16 grid
            createGrid(16);

            document.getElementById('gridSize').addEventListener('click', changeGrid);
            document.getElementById('clear').addEventListener('click', clearGrid);
       
       
           
        });