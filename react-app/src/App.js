import logo from './logo.svg';
import './App.css';

function Header(props) {
    console.log('props', props, props.title);
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        props.onChangeTitle();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

function Nav(props) {
    console.log(props);

    const lis = [];

    for (let t of props.topics) {
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'/read/' + t.id}
                    onClick={(e) => {
                        e.preventDefault();
                        props.onChangeTitle(e.target.id);
                    }}
                >
                    {t.title}
                </a>
            </li>,
        );
    }

    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    const topics = [
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' },
    ];
    return (
        <div className="App">
            <Header
                title="REACT"
                onChangeTitle={() => {
                    alert('Header Test');
                }}
            />
            <Nav
                topics={topics}
                onChangeTitle={(id) => {
                    alert(id + '번 글이 클릭되었습니다.');
                }}
            />
            <Article title="Welcome" body="Hello, Web" />
        </div>
    );
}

export default App;
