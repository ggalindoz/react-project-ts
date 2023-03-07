import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import style from './App.module.css';
import './global.css';

/*

author: {avatar_url: "", name: "", role: ""}
publishedAt: Date
content: String

*/

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [{ type: 'paragraph', content: 'Fala galera!!' },
    { type: 'paragraph', content: 'Acabei de subir mais um portifólio. É um projeto que fiz no NLW Return, evento da RocketSeat.' },
    { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-01-27 20:00:00'),


  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [{ type: 'paragraph', content: 'Fala galera!!' },
    { type: 'paragraph', content: 'Acabei de subir mais um portifólio. É um projeto que fiz no NLW Return, evento da RocketSeat.' },
    { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-01-29 20:00:00'),


  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
    </div>

  )
}
