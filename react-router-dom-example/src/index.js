import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import Home from './Home';
import { BrowserRouter, Route, Routes, NavLink, useParams, Link, HashRouter } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            home...
        </div>
    );
}

const contents = [
    { id: 1, title: 'HTML', description: 'HTML is...' },
    { id: 2, title: 'JS', description: 'JS is...' },
    { id: 3, title: 'React', description: 'React is...' },
];

function Topics() {
    let lis = [];
    for (let i in contents) {
        lis.push(
            <li key={contents[i].id}>
                <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
            </li>,
        );
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>{lis}</ul>
            <Routes>
                <Route path="/:topic_id" element={<Topic />} />
            </Routes>
        </div>
    );
}

function Topic() {
    const params = useParams(); // Route를 통해 보낸 데이터 처리
    const topic_id = params.topic_id;

    let selected_topic = {
        title: 'Sorry',
        description: 'Not Found',
    };

    for (let i in contents) {
        if (contents[i].id === Number(topic_id)) {
            selected_topic = contents[i];
            break;
        }
    }

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello React Router DOM</h1>
            {/*
            <ul>
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/topics">Topics</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            */}
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics/*" element={<Topics />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/  *" element={'Not Found'} />
            </Routes>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
