import './App.css';

function App() {
    return (
        <div>
            <header className="sticky top-0 h-16 w-full bg-indigo-50 border-b-2 border-indigo-300 ...">Sticky header
            </header>
            <main>
                <div className="grid "
                     style={{minHeight: '120vh'}} id="post">
                    <div className="flex-1 bg-indigo-50 border-r-2 border-indigo-300 p-6">Left Screen</div>
                    <div className="flex-1 bg-indigo-50 p-6">Right Screen</div>
                </div>
            </main>
        </div>

    );
}

export default App;
