import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://m.media-amazon.com/images/I/51YyJCQc1jL._SX679._SX._UX._SY._UY_.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://imgmedia.lbb.in/media/2023/07/64b8d8e65758625afe7bf6cb_1689835750343.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://images.theconversation.com/files/303723/original/file-20191126-180279-gvmxgl.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C6989%2C4892&q=45&auto=format&w=926&fit=clip',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://media.istockphoto.com/id/1131409615/photo/summer-womens-fashion-clothes-set-moms-jeans-suede-sneakers-cotton-t-shirt-leather-bag.jpg?s=612x612&w=0&k=20&c=5iXjaA6wORrmoln6WbdK8DtsQ5IGKsmHSQBkt7tmaPw=',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=',
    }
  ]

  return (
    <div>
        <Directory categories={categories}/>
        <Outlet />
    </div>
    )
}

export default Home;
