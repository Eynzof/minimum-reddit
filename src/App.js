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
                <aside className="flex-1 bg-indigo-50 p-2 card" id="categories">
                    <p2>Sub Reddit</p2>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </aside>
            </main>
        </div>

    );
}

export default App;
