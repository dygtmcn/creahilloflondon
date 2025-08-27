import styled from "styled-components";
import { motion } from "framer-motion";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    var(--background-primary) 0%, 
    var(--background-secondary) 100%
  );
  padding-top: 9vh;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.1) 0%, 
    rgba(236, 72, 153, 0.1) 100%
  );
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Playfair Display', serif;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3rem;
  border: 2px solid var(--border-light);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  background: var(--background-primary);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: var(--primary-purple);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  pointer-events: none;
  
  &::after {
    content: '🔍';
    font-size: 16px;
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background: var(--background-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-purple-light);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-secondary);
    opacity: 0.8;
  }

  &::after {
    content: '📖';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    z-index: 1;
  }
`;

const BlogContent = styled.div`
  padding: 2rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-muted);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '${props => props.icon}';
    font-size: 14px;
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  line-height: 1.3;
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-purple);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
  cursor: pointer;

  &::after {
    content: '→';
    font-size: 16px;
    transition: transform var(--transition-fast);
  }

  &:hover {
    color: var(--primary-purple-dark);
    transform: translateX(4px);

    &::after {
      transform: translateX(4px);
    }
  }
`;

const Sidebar = styled.aside`
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const SidebarSection = styled(motion.div)`
  background: var(--background-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`;

const SidebarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '${props => props.icon}';
    font-size: 20px;
    color: var(--primary-purple);
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TagItem = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--gradient-subtle);
  color: var(--primary-purple);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-light);

  &:hover {
    background: var(--primary-purple);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
`;

const RecentPostItem = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-light);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:hover {
    transform: translateX(4px);
  }
`;

const RecentPostTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const RecentPostMeta = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '📅';
    font-size: 12px;
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-muted);

  &::before {
    content: '🔍';
    font-size: 64px;
    display: block;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Mock data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Musical Storytelling",
    excerpt: "Discover how we transform written narratives into immersive musical experiences that resonate with audiences worldwide.",
    date: "2025-02-20",
    readTime: "5 min read",
    author: "Creahill Team",
    tags: ["Music", "Storytelling", "Creative Process"]
  },
  {
    id: 2,
    title: "Behind the Scenes: Recording Our Latest Album",
    excerpt: "Take an intimate look at our creative process as we bring together Turkish and English lyrics in harmony.",
    date: "2025-02-15",
    readTime: "7 min read",
    author: "Sinem Dinçer",
    tags: ["Recording", "Music Production", "Behind the Scenes"]
  },
  {
    id: 3,
    title: "The Power of Multilingual Music",
    excerpt: "Exploring how language diversity in music creates deeper connections and broader cultural understanding.",
    date: "2025-02-10",
    readTime: "6 min read",
    author: "Creahill Team",
    tags: ["Multilingual", "Culture", "Music Theory"]
  }
];

const tags = ["Music", "Storytelling", "Creative Process", "Recording", "Culture", "Behind the Scenes"];

function Blog() {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Our Creative Stories</HeroTitle>
          <HeroSubtitle>
            Dive into the world of Creahill through our blog. Discover the stories behind our music, 
            the creative process, and the people who make it all happen.
          </HeroSubtitle>
          <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder="Search our stories..." />
          </SearchContainer>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <BlogGrid>
          {blogPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <BlogImage />
                  <BlogContent>
                    <BlogMeta>
                      <MetaItem icon="📅">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </MetaItem>
                      <MetaItem icon="⏱️">
                        {post.readTime}
                      </MetaItem>
                      <MetaItem icon="👤">
                        {post.author}
                      </MetaItem>
                    </BlogMeta>
                    <BlogTitle>{post.title}</BlogTitle>
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    <ReadMoreLink>
                      Read More
                    </ReadMoreLink>
                  </BlogContent>
                </BlogCard>
              ))}
            </motion.div>
          ) : (
            <EmptyState
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Coming Soon</h3>
              <p>We're working on amazing content for you. Stay tuned!</p>
            </EmptyState>
          )}
        </BlogGrid>

        <Sidebar>
          <SidebarSection
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <SidebarTitle icon="🏷️">
              Popular Tags
            </SidebarTitle>
            <TagList>
              {tags.map((tag) => (
                <TagItem key={tag}>{tag}</TagItem>
              ))}
            </TagList>
          </SidebarSection>

          <SidebarSection
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <SidebarTitle icon="⏱️">
              Recent Posts
            </SidebarTitle>
            {blogPosts.slice(0, 3).map((post) => (
              <RecentPostItem key={post.id}>
                <RecentPostTitle>{post.title}</RecentPostTitle>
                <RecentPostMeta>
                  {new Date(post.date).toLocaleDateString()}
                </RecentPostMeta>
              </RecentPostItem>
            ))}
          </SidebarSection>
        </Sidebar>
      </MainContent>
    </PageContainer>
  );
}

export default Blog;