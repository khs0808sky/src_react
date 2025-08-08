import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

// ctrl + 함수(컴포넌트)명을 클릭하여 이동한다.
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
                        props.onChangeTitle(Number(e.target.id));
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

function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const body = e.target.body.value;
                    // console.log(title, body);
                    props.onCreate(title, body);
                }}
            >
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <button type="submit">Create</button>
                </p>
            </form>
        </article>
    );
}

function Update(props) {
    const [title, setTitle] = useState(props.title); // title 출력과 입력 바인딩
    const [body, setBody] = useState(props.body);

    return (
        <article>
            <h2>Update</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const body = e.target.body.value;
                    // console.log(title, body);
                    props.onUpdate(title, body);
                }}
            >
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                    ></textarea>
                </p>
                <p>
                    <button type="submit">Update</button>
                </p>
            </form>
        </article>
    );
}

function App() {
    // let mode = 'READ'; // 변수의 상태 변화는 리렌더링이 실행되지 않는다.

    // 변수의 상태 변화를 react에 알려 리렌더링되게 한다. - binding observer
    // 자식에서 부모의 상태를 변화 시킬때 사용.
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' },
    ]);
    const [nextId, setNextId] = useState(4);

    let content = null;
    let contentControl = null;

    const ajax = async () => {
        const res = await axios.get('http://localhost:3000/topics.json', {
            params: {},
            withCredentials: true,
        });

        return res.data;
    };

    ajax.then((result) => {
        setTopics(result.data);
    });

    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, Web" />;
    } else if (mode === 'READ') {
        // content = <Article title="Welcome" body="Hello, Read" />;
        let title,
            body = null;
        for (let topic of topics) {
            //console.log(topic.id, id);
            if (topic.id === id) {
                title = topic.title;
                body = topic.body;
            }
        }
        //const result = topics.filter((topic) => topic.id === id);
        content = <Article title={title} body={body} />;
        contentControl = (
            <>
                <li>
                    <a
                        href={'/update/' + id}
                        onClick={(e) => {
                            e.preventDefault();
                            setMode('UPDATE');
                        }}
                    >
                        Update
                    </a>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => {
                            const newTopics = [];

                            for (let idx in topics) {
                                //console.log(topic.id, id);
                                if (topics[idx].id !== id) {
                                    newTopics.push(topics[idx]);
                                }
                            }
                            setTopics(newTopics);
                            setMode('WELCOME');
                        }}
                    >
                        삭제
                    </button>
                </li>
            </>
        );
    } else if (mode === 'CREATE') {
        content = (
            <Create
                onCreate={(_title, _body) => {
                    const newTopic = { id: nextId, title: _title, body: _body };

                    const newTopics = [...topics];
                    newTopics.push(newTopic);

                    setTopics(newTopics);

                    setMode('READ');
                    setId(nextId); // 내용을 출력할 때 신규 id를 사용하여라
                    setNextId(nextId + 1); // 다음글 id 생성
                }}
            ></Create>
        );
    } else if (mode === 'UPDATE') {
        let title,
            body = null;

        for (let topic of topics) {
            //console.log(topic.id, id);
            if (topic.id === id) {
                title = topic.title;
                body = topic.body;
            }
        }

        content = (
            <Update
                title={title}
                body={body}
                onUpdate={(_title, _body) => {
                    console.log(_title, _body);
                    const updatedTopic = { id: id, title: _title, body: _body };

                    const newTopics = [...topics];

                    for (let idx in topics) {
                        //console.log(topic.id, id);
                        if (newTopics[idx].id === id) {
                            newTopics[idx] = updatedTopic;
                            break;
                        }
                    }

                    setTopics(newTopics);
                    setMode('READ');
                }}
            ></Update>
        );
    }

    return (
        <div className="App">
            <Header
                title="REACT"
                onChangeTitle={() => {
                    //alert('Header Test');
                    //mode = 'WELCOME';
                    //console.log(mode);
                    setMode('WELCOME');
                }}
            />
            <Nav
                topics={topics}
                onChangeTitle={(id) => {
                    //alert(id + '번 글이 클릭되었습니다.');
                    //mode = 'READ';
                    setMode('READ');
                    setId(id);
                }}
            />
            {content}
            <ul>
                <li>
                    <a
                        href="/create"
                        onClick={(e) => {
                            e.preventDefault();
                            setMode('CREATE');
                        }}
                    >
                        Create
                    </a>
                </li>
                {contentControl}
            </ul>
        </div>
    );
}

export default App;
