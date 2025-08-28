// Random author images from gravatar
const authors = [
  {
    id: 1,
    nickname: "Jason Francisco",
    thumbnail:
      "https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a61?d=identicon",
  },
  {
    id: 2,
    nickname: "Tracey Wilson",
    thumbnail:
      "https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a62?d=identicon",
  },
  {
    id: 3,
    nickname: "Elizabeth Stain",
    thumbnail:
      "https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a63?d=identicon",
  },
  {
    id: 4,
    nickname: "Ernie Smith",
    thumbnail:
      "https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a64?d=identicon",
  },
  {
    id: 5,
    nickname: "Eric Smith",
    thumbnail:
      "https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a65?d=identicon",
  },
];

// Sample comments
const sampleComments: Comments[] = [
  {
    id: 1,
    content:
      "This is a great article! The insights about remote work are particularly relevant.",
    author: authors[1],
    createdAt: "August 21, 2025",
    likes: 5,
    replies: [
      {
        id: 2,
        content:
          "I completely agree. Remote work has transformed how we collaborate.",
        author: authors[2],
        createdAt: "August 21, 2025",
        likes: 3,
      },
    ],
  },
  {
    id: 3,
    content:
      "The section about AI and automation was very informative. Would love to see more content like this.",
    author: authors[3],
    createdAt: "August 22, 2025",
    likes: 8,
  },
];

// Using Pexels images for the blog posts
export const posts: Post[] = [
  {
    id: 1,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[0],
    createdAt: "August 20, 2025",
    content: `
      <p>The way we work is constantly evolving, and technology is playing an increasingly important role in shaping the modern workplace. From remote work capabilities to artificial intelligence and automation, technological advancements are transforming how we collaborate, communicate, and complete tasks.</p>

      <h2>Remote Work Revolution</h2>
      <p>One of the most significant changes in recent years has been the shift towards remote work. Cloud computing, video conferencing tools, and project management software have made it possible for teams to collaborate effectively from anywhere in the world. This transformation has led to increased flexibility, reduced commuting time, and improved work-life balance for many employees.</p>

      <h2>Artificial Intelligence and Automation</h2>
      <p>AI and automation are streamlining workflows and handling repetitive tasks, allowing workers to focus on more strategic and creative aspects of their jobs. From chatbots handling customer service inquiries to machine learning algorithms analyzing data patterns, these technologies are becoming integral to many business operations.</p>

      <h2>Digital Communication and Collaboration</h2>
      <p>Modern workplace communication has evolved beyond email to include instant messaging, virtual meetings, and collaborative document editing. These tools have made it easier for teams to stay connected and work together in real-time, regardless of their physical location.</p>

      <h2>Cybersecurity Challenges</h2>
      <p>As technology becomes more prevalent in the workplace, cybersecurity has become a critical concern. Organizations must invest in robust security measures to protect sensitive data and maintain privacy in an increasingly digital environment.</p>

      <h2>The Future of Work</h2>
      <p>Looking ahead, emerging technologies like virtual reality, augmented reality, and the metaverse may further transform how we work and interact with colleagues. These innovations promise to create more immersive and engaging work experiences while continuing to break down geographical barriers.</p>
    `,
    readTime: "5 min read",
    comments: sampleComments,
  },
  {
    id: 2,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[1],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 3,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[2],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 4,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[3],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 5,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[4],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 6,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[1],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 7,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[0],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 8,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[2],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
  {
    id: 9,
    title:
      "The Impact of Technology on the Workplace: How Technology Is Changing",
    category: "Technology",
    thumbnail:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: authors[3],
    createdAt: "August 20, 2025",
    content: "Article content goes here...",
    readTime: "3 min read",
    comments: [],
  },
];

export const featuredPost = posts[0];

export const getPostById = (id: number) => {
  return posts.find((post) => post.id === id);
};

export const getRelatedPosts = (currentPostId: number, category: string) => {
  return posts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
};
