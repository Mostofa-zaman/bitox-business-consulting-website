
//Blog Page Pagination :
export const btnBase =
  "w-15 h-15 flex items-center justify-center rounded-full border border-[#0000001a] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-colors";
export const pageBtn = `${btnBase} text-primary para-TwoXl font-bold bg-bg-secondaryOne hover:bg-primary hover:text-white cursor-pointer`;
export const arrowBtn = `${btnBase} text-white text-[24px] bg-secondary hover:bg-primary cursor-pointer`;
// Page numbers array
export const pages = [1, 2];
export const allBlogData = [
  {
    id: 1,
    slug: "building-a-profitable-and-sustainable-business-model",
    batchName: "Business",
    image: "/images/home01/blog/blog1.png",
    itmeText: "Harry Jilson",
    dateText: "March 14, 2025",
    description: "Building a profitable and sustainable business model",
  },
  {
    id: 2,
    slug: "how-to-identify-your-target-audience-effectively",
    batchName: "Marketing",
    image: "/images/home01/blog/blog2.png",
    itmeText: "Sara Miller",
    dateText: "April 02, 2025",
    description: "How to identify your target audience effectively",
  },
  {
    id: 3,
    slug: "top-strategies-for-digital-growth-in-2025",
    batchName: "Strategy",
    image: "/images/home01/blog/blog3.png",
    itmeText: "John Carter",
    dateText: "April 18, 2025",
    description: "Top strategies for digital growth in 2025",
  },
  {
    id: 4,
    slug: "understanding-brand-identity-and-voice",
    batchName: "Branding",
    image: "/images/home01/blog/blog4.png",
    itmeText: "Emily Rose",
    dateText: "February 28, 2025",
    description: "Understanding brand identity and voice",
  },
  {
    id: 5,
    slug: "scaling-your-startup-with-limited-resources",
    batchName: "Startup",
    image: "/images/home01/blog/blog5.png",
    itmeText: "Mark Twain",
    dateText: "January 10, 2025",
    description: "Scaling your startup with limited resources",
  },
  {
    id: 6,
    slug: "the-power-of-content-marketing-for-b2b",
    batchName: "Content",
    image: "/images/home01/blog/blog6.png",
    itmeText: "Lisa Brown",
    dateText: "March 30, 2025",
    description: "The power of content marketing for B2B businesses",
  },
];

export const allBlogDetailsData = [
  {
    id: 1,
    slug: "building-a-profitable-and-sustainable-business-model",
    batchName: "Business",
    heroImage: "/images/home01/blog/blogdetails1.png",
    author: "Harry Jilson",
    authorRole: "Tech Editor",
    authorImage: "/images/home01/blog/Ellipse 20.png",
    dateText: "March 14, 2025",
    itmeText: "Harry Jilson",
    title: "Building a profitable and sustainable business model",
    intro:
      "Every business dreams of long-term success, but achieving it requires more than just a great idea. It takes strategic planning, consistent execution, and a willingness to adapt to an ever-changing marketplace. In this post, we'll explore the foundational elements that contribute to building a business that not only generates profit but sustains growth over time.",

    sections: [
      {
        heading: "Identify a Clear Value Proposition",
        content:
          "Your value proposition is the cornerstone of your business strategy. It defines what makes your product or service unique, why customers should choose you over competitors, and the specific problem you solve. A strong value proposition is customer-centric, clear, and measurable. Start by deeply understanding your target audience — their pain points, needs, and expectations. Then align your offerings to deliver precisely what they're looking for. Businesses that fail to articulate their value clearly often struggle with customer acquisition and retention.",
      },
      {
        heading: "Develop Multiple Revenue Streams",
        content:
          "Relying on a single revenue stream is a major risk for any business. Diversification protects your business from market fluctuations and opens new growth opportunities. Here are a few strategic revenue areas to consider:",
        bullets: [
          {
            title: "Strategic Digital Assessment",
            text: "We help you audit your current digital presence, pinpointing weaknesses in your website, content, and outreach strategies. Our team reviews everything from user experience to conversion rates and competitive positioning, delivering a clear picture of where you stand and where you can improve.",
          },
          {
            title: "Strategic Digital Planning",
            text: "Based on the assessment, we craft a customized digital roadmap tailored to your business goals. This plan outlines actionable steps across SEO, social media, paid ads, and content marketing to drive sustainable growth.",
          },
          {
            title: "Technology Integration & Execution",
            text: "We implement the right tools and technologies to power your digital transformation — from CRM systems and marketing automation to analytics platforms that give you real-time insights into performance.",
          },
          {
            title: "Monitoring, Optimization & Growth",
            text: "Digital success isn't a one-time event. We continuously track your KPIs, refine strategies based on data, and ensure that every campaign evolves to deliver better results over time. When the numbers speak, we listen and act.",
          },
        ],
      },
    ],

    quote:
      "Are you ready to craft a visual identity that captures your brand's essence, tells a compelling story, & motivates your audience to engage? Let's collaborate to transform your vision into a bold cohesive & unforgettable brand presence that inspires success.",

    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],

    sections2: [
      {
        heading: "Control Costs and Optimize Operations",
        content:
          "Turning ideas into tangible results is both an art and a science. At our agency, we believe that a vision is only as strong as the steps taken to realize it. how we transform creative concepts into impactful outcomes for our clients. Every successful project starts with a deep understanding of your goals, values, & audience. We take the time to listen, ask questions, and explore your ideas in detail. By identifying the core objectives & expectations, we ensure that the final result aligns perfectly with your vision This phase allows us to set a strong foundation for the entire project, avoiding guesswork and ensuring clarity",
      },
      {
        heading: "Focus on Long-Term Customer Relationships",
        content:
          "Customer acquisition is expensive. Retaining existing customers and turning them into loyal advocates is far more cost-effective and impactful. Build systems that prioritize customer experience at every touchpoint — from the first interaction to post-sale support.",
        bullets: [
          { text: "Develop a loyalty program that rewards repeat customers." },
          {
            text: "Use personalized communication to make customers feel valued.",
          },
          {
            text: "Gather feedback consistently and act on it to improve your products or services.",
          },
          {
            text: "Build a community around your brand to foster peer-to-peer advocacy.",
          },
        ],
      },
    ],

    tags: ["Business", "Strategy", "Growth", "Marketing", "Startup"],

    relatedPosts: [
      {
        slug: "how-to-identify-your-target-audience-effectively",
        image: "/images/home01/blog/blog2.png",
        batchName: "Marketing",
        itmeText: "Sara Miller",
        dateText: "April 02, 2025",
        description: "How to identify your target audience effectively",
      },
      {
        slug: "top-strategies-for-digital-growth-in-2025",
        image: "/images/home01/blog/blog3.png",
        batchName: "Strategy",
        itmeText: "John Carter",
        dateText: "April 18, 2025",
        description: "Top strategies for digital growth in 2025",
      },
      {
        slug: "understanding-brand-identity-and-voice",
        image: "/images/home01/blog/blog4.png",
        batchName: "Branding",
        itmeText: "Emily Rose",
        dateText: "February 28, 2025",
        description: "Understanding brand identity and voice",
      },
    ],
  },
    {
    id: 2,
    slug: "how-to-identify-your-target-audience-effectively",
    batchName: "Marketing",
    heroImage: "/images/home01/blog/blog2.png",
    author: "Sara Miller",
    authorRole: "Marketing Strategist",
    authorImage: "/images/home01/blog/Ellipse 20.png",
    dateText: "April 02, 2025",
    itmeText: "Sara Miller",
    title: "How to identify your target audience effectively",
    intro:
      "Understanding your target audience is the foundation of every successful marketing strategy. Without knowing who you're speaking to, even the most creative campaigns fall flat. In this post, we'll walk through proven methods to identify, segment, and connect with your ideal customers.",

    sections: [
      {
        heading: "Define Your Ideal Customer Profile",
        content:
          "Start by building a detailed profile of your ideal customer. Consider demographics like age, location, income, and education — but go deeper into psychographics: values, interests, pain points, and buying behavior. The more specific your profile, the more targeted your messaging can be.",
      },
      {
        heading: "Use Data to Validate Your Assumptions",
        content:
          "Don't guess — use real data. Analyze your existing customers, website analytics, and social media insights to find patterns. Tools like Google Analytics, Meta Audience Insights, and CRM data reveal who is already engaging with your brand.",
        bullets: [
          {
            title: "Behavioral Analysis",
            text: "Look at what pages users visit, how long they stay, and what actions they take. This reveals intent and interest patterns.",
          },
          {
            title: "Survey & Feedback",
            text: "Directly ask your existing customers about their challenges, goals, and why they chose you. First-hand data is invaluable.",
          },
          {
            title: "Competitor Research",
            text: "Study who your competitors are targeting and where they're finding success. This can reveal underserved audience segments.",
          },
        ],
      },
    ],

    quote:
      "Knowing your audience isn't just a marketing tactic — it's the difference between speaking into a void and starting a meaningful conversation that drives real results.",

    middleImages: [
      "/images/home01/blog/blogdetails2.png",
      "/images/home01/blog/blogdetails3.png",
    ],

    sections2: [
      {
        heading: "Segment and Prioritize",
        content:
          "Not all audience segments are equally valuable. Once you've identified your audience groups, prioritize them based on revenue potential, ease of reach, and alignment with your offerings.",
        bullets: [
          { text: "Create 2–3 detailed buyer personas for your top segments." },
          {
            text: "Map each persona's customer journey from awareness to purchase.",
          },
          {
            text: "Tailor messaging and channels for each persona separately.",
          },
          { text: "Test and refine based on campaign performance data." },
        ],
      },
    ],

    tags: ["Marketing", "Audience", "Strategy", "Growth"],

    relatedPosts: [
      {
        slug: "building-a-profitable-and-sustainable-business-model",
        image: "/images/home01/blog/blog1.png",
        batchName: "Business",
        itmeText: "Harry Jilson",
        dateText: "March 14, 2025",
        description: "Building a profitable and sustainable business model",
      },
      {
        slug: "top-strategies-for-digital-growth-in-2025",
        image: "/images/home01/blog/blog3.png",
        batchName: "Strategy",
        itmeText: "John Carter",
        dateText: "April 18, 2025",
        description: "Top strategies for digital growth in 2025",
      },
      {
        slug: "understanding-brand-identity-and-voice",
        image: "/images/home01/blog/blog4.png",
        batchName: "Branding",
        itmeText: "Emily Rose",
        dateText: "February 28, 2025",
        description: "Understanding brand identity and voice",
      },
    ],
  },
];