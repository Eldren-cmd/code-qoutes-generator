        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');
        const newQuoteBtn = document.getElementById('newQuoteBtn');
        const copyBtn = document.getElementById('copyBtn');
        const favoriteBtn = document.getElementById('favoriteBtn');
        const colorBtn = document.getElementById('colorBtn');
        const favoritesList = document.getElementById('favoritesList');
        const copyNotification = document.getElementById('copyNotification');

        
        const backgroundColors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        ];

        
        const quotes = [
            { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
            { text: "Practice makes perfect.", author: "Unknown" },
            { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
            { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
            { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
            { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
            { text: "Knowledge is power.", author: "Francis Bacon" },
            { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
            { text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
            { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
            { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
            { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
            { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
            { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
            { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
            { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
            { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
            { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
            { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
            { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
        ];

        let currentQuote = null;
        let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

        
        function getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }

        
        function displayQuote(quote) {
            currentQuote = quote;
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = quote.author;
            
            
            quoteText.style.animation = 'none';
            setTimeout(() => {
                quoteText.style.animation = 'fadeIn 0.5s ease';
            }, 10);

            
            updateFavoriteButton();
        }

        
        function generateNewQuote() {
            const quote = getRandomQuote();
            displayQuote(quote);
        }

        
        function copyQuote() {
            if (!currentQuote) return;

            const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyNotification();
            }).catch(err => {
                
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyNotification();
            });
        }

        
        function showCopyNotification() {
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 2000);
        }

        
        function toggleFavorite() {
            if (!currentQuote) return;

            const index = favorites.findIndex(fav => 
                fav.text === currentQuote.text && fav.author === currentQuote.author
            );

            if (index > -1) {
                
                favorites.splice(index, 1);
            } else {
                
                favorites.push(currentQuote);
            }

            
            localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
            

            updateFavoriteButton();
            renderFavorites();
        }

        
        function updateFavoriteButton() {
            if (!currentQuote) return;

            const isFavorited = favorites.some(fav => 
                fav.text === currentQuote.text && fav.author === currentQuote.author
            );

            if (isFavorited) {
                favoriteBtn.classList.add('favorited');
                favoriteBtn.innerHTML = '<span>⭐</span> Favorited';
            } else {
                favoriteBtn.classList.remove('favorited');
                favoriteBtn.innerHTML = '<span>❤️</span> Favorite';
            }
        }

        
        function removeFavorite(index) {
            favorites.splice(index, 1);
            localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
            renderFavorites();
            updateFavoriteButton();
        }

        
        function renderFavorites() {
            if (favorites.length === 0) {
                favoritesList.innerHTML = '<div class="empty-state">No favorites yet. Start adding some!</div>';
                return;
            }

            favoritesList.innerHTML = favorites.map((quote, index) => `
                <div class="favorite-item">
                    <div class="favorite-content">
                        <div class="favorite-text">"${quote.text}"</div>
                        <div class="favorite-author">— ${quote.author}</div>
                    </div>
                    <button class="remove-btn" onclick="removeFavorite(${index})">✕</button>
                </div>
            `).join('');
        }

        
        function changeBackgroundColor() {
            const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
            document.body.style.background = randomColor;
        }

        

        newQuoteBtn.addEventListener('click', generateNewQuote);
        copyBtn.addEventListener('click', copyQuote);
        favoriteBtn.addEventListener('click', toggleFavorite);
        colorBtn.addEventListener('click', changeBackgroundColor);

        
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault();
                generateNewQuote();
            }
        });

        
        generateNewQuote();

        renderFavorites();
