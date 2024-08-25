import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "The Dawn of Technology",
            content: "In the past few decades, technology has advanced at an unprecedented rate. From the introduction of personal computers to the rise of artificial intelligence, our world is changing rapidly. What does the future hold for technology?",
            imageUrl: "https://via.placeholder.com/800x400?text=The+Dawn+of+Technology"
          },
          {
            id: 2,
            title: "Exploring the World Through Travel",
            content: "Traveling opens up new perspectives and allows us to experience different cultures. Whether you're exploring the bustling streets of Tokyo or relaxing on the beaches of Bali, there's always something new to discover.",
            imageUrl: "https://via.placeholder.com/800x400?text=Exploring+the+World+Through+Travel"
          },
          {
            id: 3,
            title: "The Art of Minimalism",
            content: "Minimalism isn’t just about decluttering your home; it's a lifestyle choice. By focusing on what truly matters, minimalism can help you live a more meaningful and fulfilling life.",
            imageUrl: "https://via.placeholder.com/800x400?text=The+Art+of+Minimalism"
          },
          {
            id: 4,
            title: "The Future of Work",
            content: "As remote work becomes more prevalent, the traditional office environment is evolving. How will this shift affect productivity, work-life balance, and the future of careers?",
            imageUrl: "https://via.placeholder.com/800x400?text=The+Future+of+Work"
          },
          {
            id: 5,
            title: "Healthy Living in a Busy World",
            content: "Maintaining a healthy lifestyle can be challenging in today’s fast-paced world. However, with the right mindset and habits, it's possible to stay fit and balanced while managing a busy schedule.",
            imageUrl: "https://via.placeholder.com/800x400?text=Healthy+Living+in+a+Busy+World"
          },
          {
            id: 6,
            title: "The Impact of Social Media on Society",
            content: "Social media has revolutionized the way we communicate, but it has also brought challenges. From misinformation to cyberbullying, it's important to navigate the digital landscape with caution.",
            imageUrl: "https://via.placeholder.com/800x400?text=The+Impact+of+Social+Media+on+Society"
          },
          {
            id: 7,
            title: "Sustainable Living: Small Changes, Big Impact",
            content: "Sustainability is more than just a trend—it's a necessity. By making small changes in our daily lives, we can contribute to a healthier planet for future generations.",
            imageUrl: "https://via.placeholder.com/800x400?text=Sustainable+Living"
          },
          {
            id: 8,
            title: "Mastering the Art of Cooking at Home",
            content: "Cooking at home can be both enjoyable and rewarding. With a few tips and tricks, you can elevate your culinary skills and impress your friends and family with delicious homemade meals.",
            imageUrl: "https://via.placeholder.com/800x400?text=Mastering+the+Art+of+Cooking+at+Home"
          },
          {
            id: 9,
            title: "The Science of Happiness",
            content: "What makes us happy? Scientists have been exploring this question for decades, and their findings reveal some surprising truths about what really contributes to our well-being.",
            imageUrl: "https://via.placeholder.com/800x400?text=The+Science+of+Happiness"
          },
          {
            id: 10,
            title: "Breaking the Boundaries of Space Exploration",
            content: "Space exploration has always fascinated humanity. With new missions to Mars and beyond, we are on the brink of discovering more about our universe than ever before.",
            imageUrl: "https://via.placeholder.com/800x400?text=Breaking+the+Boundaries+of+Space+Exploration"
          }
    ]
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
         {posts.map(post=>(
            <div key={post.id} className='post'>
                <img src={post.imageUrl} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
                </div>
         ))}
    </div>
  )
}

export default Menu
