import './App.css';

function App() {
    return (
        <div id="root">
            <header id="header"
                    className="sticky top-0 h-16 w-full p-2 card ...">Sticky header
            </header>
            <main id="main">
                <div className="flex-1 p-2" id="articles">
                    <article className="card">1</article>
                    <article className="card">2</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">1</article>
                    <article className="card">2</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                    <article className="card">3</article>
                </div>
                <div className="flex-1 bg-indigo-50 p-2 card" id="categories">Sub Reddit</div>
            </main>
        </div>

    );
}

export default App;
