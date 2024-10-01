//import fetch from 'node-fetch';
/*
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

const filterPostsByTitleStart = (posts: Post[], searchTerm: string): Post[] => {
  return posts.filter(post => post.title.startsWith(searchTerm));
};

fetchPosts()
  .then(posts => {
    const filteredPosts = filterPostsByTitleStart(posts, 'qui');
    console.log(filteredPosts);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/


interface Character {
    name: string;
    house: string;
    playsQuidditch: boolean;
    position: string;
    quidditchYears: number[];
  }
  
  
  fetch("https://coderbyte.com/api/challenges/json/quidditch-list")
    .then(result => result.json())
    .then(jsonformat => console.log(jsonformat));
  